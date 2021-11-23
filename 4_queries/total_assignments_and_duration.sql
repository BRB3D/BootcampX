SELECT day, count(name) as number_of_assignments, sum(duration) as durations
FROM assignments
GROUP BY assignments.day
ORDER BY assignments.day;