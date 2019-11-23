SELECT COUNT(*), teams.* FROM tickets
JOIN items USING (item_id)
JOIN types USING (type_id)
JOIN teams USING (team_id)
WHERE current_status <> 'CLOSED'
GROUP BY team_id;

SELECT AVG(DATEDIFF(tickets.modification_date, tickets.creation_date)), teams.*
FROM tickets
JOIN items USING (item_id)
JOIN types USING (type_id)
JOIN teams USING (team_id)
WHERE tickets.current_status = 'CLOSED'
GROUP BY team_id;