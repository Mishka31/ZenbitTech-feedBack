create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS feed_back(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  content VARCHAR(255),
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id)
);


-- CREATE TABLE IF NOT EXISTS `table_name` (
--   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(255),
--   PRIMARY KEY `pk_id`(`id`)
-- ) ENGINE = InnoDB;
