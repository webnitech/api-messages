CREATE TABLE IF NOT EXISTS MESSAGES(ID SERIAL NOT NULL PRIMARY KEY, MESSAGE TEXT NOT NULL, URL VARCHAR(512) NOT NULL, CREATED_AT TIMESTAMP NOT NULL);
CREATE TABLE IF NOT EXISTS NOTIFICATIONS(ID SERIAL NOT NULL PRIMARY KEY, NOTIFICATION TEXT NOT NULL, URL VARCHAR(512) NOT NULL, CREATED_AT TIMESTAMP NOT NULL);
CREATE TABLE IF NOT EXISTS CATEGORY(ID SERIAL NOT NULL PRIMARY KEY, NAME VARCHAR(256) NOT NULL);
