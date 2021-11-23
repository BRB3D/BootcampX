-- This was my answer although i didnt join two tables i made it work, but the key feature is that FEB12 is what i shoul have used instead of '2018-02-12'
/* SELECT SUM(assignment_submissions.duration) AS total_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.start_date IN ('2018-02-12'); */

SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'FEB12';