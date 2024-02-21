CREATE SCHEMA IF NOT EXISTS social;

CREATE TABLE IF NOT EXISTS social.users (
    id serial PRIMARY KEY,
    first_name varchar(50),
    last_name varchar(50),
    university varchar(100),
    subscriptions integer[],
	audios integer[],
	videos integer[],
    settings JSONB
);

CREATE TABLE IF NOT EXISTS social.posts (
    id serial PRIMARY KEY,
    user_id integer REFERENCES social.users(id),
    text text
);

CREATE TABLE IF NOT EXISTS social.comments (
    comment_id serial PRIMARY KEY,
    post_id integer REFERENCES social.posts(id),
    user_id integer REFERENCES social.users(id),
    text text
);

CREATE TABLE IF NOT EXISTS social.likes (
    like_id serial PRIMARY KEY,
    post_id integer REFERENCES social.posts(id),
    user_id integer REFERENCES social.users(id)
);

-- Таблица "Группы"
CREATE TABLE IF NOT EXISTS social.groups (
    group_id serial PRIMARY KEY,
    group_name varchar(100),
    members integer[] -- Список id пользователей, состоящих в группе
);

CREATE TABLE IF NOT EXISTS social.audios (
    id serial PRIMARY KEY,
    author varchar(100),
    name varchar(100),
	path varchar(250)
);

CREATE TABLE IF NOT EXISTS social.videos (
    id serial PRIMARY KEY,
    author integer REFERENCES social.users (id),
    name varchar(100),
	codec varchar(20),
	path varchar(250)
);

CREATE TABLE IF NOT EXISTS social.public_pages (
    page_id serial PRIMARY KEY,
    page_name varchar(100),
    followers integer[] -- Список id пользователей, подписанных на страницу
);