SELECT teams.*, COUNT(*) AS 'open_tickets' FROM tickets
    JOIN items USING (item_id)
    JOIN types USING (type_id)
    JOIN teams USING (team_id)
    WHERE current_status <> 'CLOSED'
    GROUP BY team_id
    ORDER BY team_id;

SELECT  teams.*, AVG(DATEDIFF(tickets.modification_date, tickets.creation_date)) AS 'avg_days'
    FROM tickets
    JOIN items USING (item_id)
    JOIN types USING (type_id)
    JOIN teams USING (team_id)
    WHERE tickets.current_status = 'CLOSED'
    GROUP BY team_id
    ORDER BY team_id;

SELECT COUNT(*)
    FROM tickets
    JOIN items USING (item_id)
    JOIN types USING (type_id)
    JOIN teams USING (team_id)
    WHERE team_id = ? AND (tickets.current_status <> 'CLOSED' OR (tickets.modification_date > ?));