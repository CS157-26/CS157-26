SELECT COUNT(tickets.*), teams.* FROM tickets
JOIN items USING (item_id)
JOIN types USING (type_id)
JOIN teams USING (team_id)
GROUP BY team_id
WHERE tickets.status <> 'CLOSED';

SELECT AVG(DATEDIFF(day, tickets.modification_date, tickets.creation_date)), teams.* FROM tickets
JOIN items USING (item_id)
JOIN types USING (type_id)
JOIN teams USING (team_id)
GROUP BY team_id
WHERE tickets.status = 'CLOSED';