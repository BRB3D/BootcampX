const { Pool } = require('pg');

const { password } = require('./pas');

const pool = new Pool({
  user: 'labber',
  password: password,
  port: 5432,
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect().then(() => {
  console.log('we have connected to our databse :)');
}).catch(e => {
  console.log('--------error-----------');
  console.log(e.message);
})

console.log("connection establishing...");

/* pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
LIMIT 5;
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack)); */
const query = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`
const values = [`%${process.argv[2]}%`, process.argv[3]]

pool.query(query, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));
