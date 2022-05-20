create TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    password VARCHAR(25)
);

create TABLE history_game (
    id SERIAL PRIMARY KEY,
    score INTEGER,
    users_id INTEGER,
    time_of_game INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create TABLE topUser (
    id SERIAL PRIMARY KEY,
    score INTEGER,
    users_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);