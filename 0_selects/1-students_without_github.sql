SELECT id, name, email, cohort_id, github
FROM students
WHERE github IS NULL
ORDER BY cohort_id;