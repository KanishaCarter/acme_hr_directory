const { Client } = require('pg');

const client = new Client({
connectionString: 'postgres://postgres:Cks101990!@localhost/acme_hr_directory',
});  
 

const init = async () => {
  try {
    await client.connect();

    // Drop tables in order (employee first, since it depends on department)
    let sql = `DROP TABLE IF EXISTS employee;`;
    await client.query(sql);

    sql = `DROP TABLE IF EXISTS department;`;
    await client.query(sql);

    // Create department table
    sql = `
      CREATE TABLE department (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;
    await client.query(sql);

    // Create employee table
    sql = `
      CREATE TABLE employee (
        id INT PRIMARY KEY,
        name TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        department_id INT NOT NULL,
        FOREIGN KEY (department_id) REFERENCES department(id)
      );
    `;
    await client.query(sql);

    // Insert departments
    await client.query(`INSERT INTO department(name) VALUES ('Business Office'), ('Sales'), ('Inventory'), ('Purchasing');`);

    // Insert employees with custom IDs and assign them to departments
    await client.query(`INSERT INTO employee(id, name, department_id) VALUES 
      (235420, 'Kanisha Carter', (SELECT id FROM department WHERE name='Business Office')),
      (236159, 'Cam Gipson', (SELECT id FROM department WHERE name='Sales')),
      (235968, 'Jessica Duell', (SELECT id FROM department WHERE name='Inventory')),
      (236127, 'Jessica Williams', (SELECT id FROM department WHERE name='Purchasing')),
      (236128, 'Doobin Lee', (SELECT id FROM department WHERE name='Sales'));
    `);

    console.log('Tables created and data seeded successfully!');
  } catch (err) {
    console.error('Error setting up tables', err);
  } finally {
    await client.end();
  }
};

init();
