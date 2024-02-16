CREATE SCHEMA IF NOT EXISTS todolist;

CREATE TABLE IF NOT EXISTS todolist.Statuses (
	id serial primary key,
	name varchar(250) not null
);

CREATE TABLE IF NOT EXISTS todolist.Tasks (
	id serial primary key,
	name varchar(250) not null,
	description varchar not null,
	due_date Date not null,
	status_id integer REFERENCES todolist.Statuses (id)
);