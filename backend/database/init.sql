CREATE TABLE users (
	id serial PRIMARY KEY,
	username VARCHAR(30) NOT NULL,
	password VARCHAR(30) NOT NULL
);

CREATE TYPE room_status AS ENUM ('open', 'close');

CREATE TABLE room (
	id serial PRIMARY KEY,
	topic VARCHAR(100) NOT NULL,
	status room_status NOT NULL
); 

CREATE TABLE idea (
    id serial PRIMARY KEY,
    userID serial NOT NULL,
    content VARCHAR(200) NOT NULL,
    vote INT NOT NULL DEFAULT 0,
    roomID serial NOT NULL REFERENCES room(id)
); 

CREATE TABLE user_room (
    userID serial REFERENCES users(id),
    roomID serial REFERENCES room(id),

    PRIMARY KEY (userID, roomID)
);

