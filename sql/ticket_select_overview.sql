USE pim; 
SELECT ticket.*, item.name AS "item_name", type.name AS "type_name", category.name AS "category_name"
FROM tickets ticket
JOIN items item ON item.item_id = ticket.item_id
JOIN types type ON type.type_id = item.type_id
JOIN categories category ON category.category_id = type.category_id
WHERE ticket.ticket_id = 1;