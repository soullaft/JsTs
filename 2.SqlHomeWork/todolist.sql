CREATE SCHEMA IF NOT EXISTS todolist;

CREATE TABLE IF NOT EXISTS todolist.Workspace (
	id serial primary key,
	name varchar(250) not null,
	description varchar not null,
);

CREATE TABLE IF NOT EXISTS todolist.Statuses (
	id serial primary key,
	name varchar(250) not null
);

CREATE TABLE IF NOT EXISTS todolist.Priority (
	id serial primary key,
	name varchar(250) not null
);

CREATE TABLE IF NOT EXISTS todolist.Tasks (
	id serial primary key,
	name varchar(250) not null,
	description varchar not null,
	due_date Date not null,
	status_id integer REFERENCES todolist.Statuses (id),
	priority_id integer REFERENCES todolist.Priority (id),
);

CREATE TABLE IF NOT EXISTS todolist.workspacetotasks (
	workspace_id REFERENCES todolist.workspace (id),
	task_id REFERENCES todolist.Tasks (id)
);