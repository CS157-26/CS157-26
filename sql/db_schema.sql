USE cs157a;

CREATE TABLE users(
	user_id int,
    username varchar(64) NOT NULL,
    email varchar(64) NOT NULL,
    creation_date datetime NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE login_attempts(
	attempt_id int,
	ip varchar(64) NOT NULL,
	is_successful bool,
	time_stamp datetime NOT NULL,
	PRIMARY KEY (attempt_id)
);

CREATE TABLE teams(
	team_id int,
    name varchar(64) NOT NULL,
    PRIMARY KEY (team_id)
);

CREATE TABLE tickets(
	ticket_id int,
    item_id int NOT NULL,
	title varchar(128) NOT NULL,
	content_text text,
	current_status ENUM ('PENDING', 'ASSIGNED', 'WIP', 'RESOLVED', 'CLOSED') NOT NULL,
	priority TINYINT CHECK (priority >= 1 AND priority <= 5) NOT NULL,
    creation_date datetime NOT NULL,
    modification_date datetime,
    protected_status bool NOT NULL,
    PRIMARY KEY (ticket_id)
);

CREATE TABLE comments(
	comment_id int,
    ticket_id int NOT NULL,
    content_text text,
    creation_date datetime NOT NULL,
    modification_date datetime,
    PRIMARY KEY (comment_id)
);

CREATE TABLE categories(
	category_id int,
    name varchar(64),
    PRIMARY KEY (category_id)
);

CREATE TABLE types(
	type_id int,
    name varchar(64),
    PRIMARY KEY (type_id)
);


