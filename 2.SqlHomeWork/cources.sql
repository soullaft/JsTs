CREATE SCHEMA IF NOT EXISTS cource;

CREATE TABLE IF NOT EXISTS cource.discounts (
  id serial primary key, 
  name varchar(250) not null, 
  percentage integer
);

CREATE TABLE IF NOT EXISTS cource.categories (
  id serial primary key, 
  name varchar(250) not null
  );
 
CREATE TABLE IF NOT EXISTS cource.cource (
  id serial primary key, 
  name varchar(125) not null, 
  description varchar not null, 
  price Numeric(6, 2),
  discount_id integer REFERENCES magazine.discounts (id), 
  category_id integer REFERENCES magazine.categories (id)
);

--Доступные роли на основании которых будет меняться функционал курса + проверка ролей для доступа в разные разделы.
DROP TYPE IF EXISTS cource.userRoles;
CREATE TYPE cource.userRoles AS ENUM ('administrator', 'cusomer', 'manager', 'content_maker', 'teacher');

CREATE TABLE IF NOT EXISTS cource.users (
  id serial primary key,
  login varchar(30) unique not null,
  first_name varchar(125) not null, 
  last_name varchar(125) not null,
  password text not null,
  sex boolean not null,
  user_role cource.userRoles not null,
  email varchar unique,
  -- Проверка на валидность почты
  CONSTRAINT valid_email CHECK (
    email ~* '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'
  )
);

CREATE TABLE IF NOT EXISTS cource.members(
	cource_id integer REFERENCES cource.cource (id),
	user_id integer REFERENCES cource.users (id)
);

CREATE TABLE IF NOT EXISTS cource.basket (
    user_id integer REFERENCES magazine.users (id),
    product_id integer REFERENCES magazine.products (id),
    quantity integer CHECK (quantity = 1)
);

CREATE TABLE IF NOT EXISTS cource.Reviews (
  review_id serial primary key, 
  cource_id integer REFERENCES magazine.products (id),
  user_id integer REFERENCES magazine.users (id),
  rating integer CHECK (rating >= 0 and rating <= 5)
);
