USE pim;

CREATE TABLE users(
	user_id int NOT NULL AUTO_INCREMENT,
    username varchar(64) NOT NULL,
    password VARCHAR(128) NOT NULL,
    email varchar(64) NOT NULL,
    creation_date datetime NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE login_attempts(
	attempt_id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
	ip varchar(64) NOT NULL,
	is_successful bool,
	time_stamp datetime NOT NULL,
	PRIMARY KEY (attempt_id)
);

CREATE TABLE teams(
	team_id int NOT NULL AUTO_INCREMENT,
    name varchar(64) NOT NULL,
    PRIMARY KEY (team_id)
);

CREATE TABLE tickets(
	ticket_id int NOT NULL AUTO_INCREMENT,
    item_id int NOT NULL,
    author_id int NOT NULL,
	title varchar(128) NOT NULL,
	content_text text,
	current_status ENUM ('PENDING', 'ASSIGNED', 'WIP', 'RESOLVED', 'CLOSED') NOT NULL,
	priority TINYINT NOT NULL,
    creation_date datetime NOT NULL,
    modification_date datetime,
    protected_status bool NOT NULL,
    CHECK (priority >= 1 AND priority <= 5),
    PRIMARY KEY (ticket_id)
);

CREATE TABLE comments(
	comment_id int NOT NULL AUTO_INCREMENT,
    ticket_id int NOT NULL,
    author_id int NOT NULL,
    content_text text,
    creation_date datetime NOT NULL,
    modification_date datetime,
    PRIMARY KEY (comment_id)
);

CREATE TABLE categories(
	category_id int NOT NULL AUTO_INCREMENT,
    name varchar(64),
    PRIMARY KEY (category_id)
);

CREATE TABLE types(
	type_id int NOT NULL AUTO_INCREMENT,
    category_id int NOT NULL,
    team_id int NOT NULL,
    name varchar(64),
    PRIMARY KEY (type_id)
);

CREATE TABLE items(
	item_id int NOT NULL AUTO_INCREMENT,
    type_id int NOT NULL,
    name varchar(64),
    PRIMARY KEY (item_id)
);

CREATE TABLE teammembers(
	user_id int NOT NULL,
    team_id int NOT NULL,
    PRIMARY KEY (user_id, team_id)
);

CREATE TABLE userassignment(
	user_id int NOT NULL,
    ticket_id int NOT NULL,
    PRIMARY KEY (user_id, ticket_id)
);
