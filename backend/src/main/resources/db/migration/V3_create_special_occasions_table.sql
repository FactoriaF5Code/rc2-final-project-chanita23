CREATE TABLE special_occasions (
    id SERIAL PRIMARY KEY,
    occasion_name VARCHAR(100) UNIQUE NOT NULL
);