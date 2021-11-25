const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '1',
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
const text = `SELECT teachers.name as teacher, cohorts.name as cohort 
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY teachers.name, cohorts.name
HAVING cohorts.name = $1
ORDER BY teacher;`;
const values = [process.argv[2]]
pool.query(text, values).then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => {
  console.error('Error', err);
})