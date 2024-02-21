CREATE SCHEMA IF NOT EXISTS magazine;

CREATE TABLE IF NOT EXISTS magazine.discounts (
  id serial primary key, 
  name varchar(250) not null, 
  percentage integer
);

CREATE TABLE IF NOT EXISTS magazine.categories (
  id serial primary key, 
  name varchar(250) not null
  );
 
CREATE TABLE IF NOT EXISTS magazine.products (
  id serial primary key, 
  name varchar(125) not null, 
  description varchar not null, 
  price Numeric(7, 3), 
  discount_id integer REFERENCES magazine.discounts (id), 
  category_id integer REFERENCES magazine.categories (id), 
  stock_quantity integer CHECK (stock_quantity >= 0)
);

--Доступные роли на основании которых будет меняться функционал магазина + проверка ролей для доступа в разные разделы.
DROP TYPE IF EXISTS magazine.userRoles;
CREATE TYPE magazine.userRoles AS ENUM ('administrator', 'cusomer', 'manager', 'content_maker');

CREATE TABLE IF NOT EXISTS magazine.users (
  id serial primary key,
  login varchar(30) unique not null,
  first_name varchar(125) not null, 
  last_name varchar(125) not null,
  password text not null,
  sex boolean not null,
  user_role magazine.userRoles not null,
  email varchar unique,
  -- Проверка на валидность почты
  CONSTRAINT valid_email CHECK (
    email ~* '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'
  )
);

CREATE TABLE IF NOT EXISTS magazine.basket (
    user_id REFERENCES magazine.users (id),
    product_id REFERENCES magazine.products (id),
    quantity integer CHECK (quantity >= 0)
);

DROP TYPE IF EXISTS magazine.orderStatuses;
CREATE TYPE  magazine.orderStatuses AS ENUM ('created', 'transporting', 'waiting', 'delivered');

CREATE TABLE IF NOT EXISTS magazine.Orders (
  id serial primary key, 
  user_id integer REFERENCES magazine.users (id),
  shipping_adres varchar(250),
  order_date Date,
  total_amount numeric(100,3),
  order_status magazine.orderStatuses
);

CREATE TABLE IF NOT EXISTS magazine.OrderItems (
  order_id integer REFERENCES magazine.Orders (id),
  product_id integer REFERENCES magazine.products (id),
  quantity integer check (quantity >= 0)
);

CREATE TABLE IF NOT EXISTS magazine.Reviews (
  review_id serial primary key, 
  product_id integer REFERENCES magazine.products (id),
  user_id integer REFERENCES magazine.users (id),
  rating integer CHECK (rating >= 0 and rating <= 5)
);
