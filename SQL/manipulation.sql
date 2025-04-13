/* Introduction to SQL  */
Structured Query Language, is a programming language designed to manage data stored in relational databases

/*  File extensions */
If your file ends in .sqlite, you are using a SQLite database. 
If your file ends in .sql, you are working with PostgreSQL


/*  Relational Databases  */
A relational database is a database that organizes information into one or more tables.
All data stored in a relational database is of a certain data type

Some of the most common data types are:
    INTEGER, a positive or negative whole number
    TEXT, a text string
    DATE, the date formatted as YYYY-MM-DD
    REAL, a decimal value


/*  Statements */
/* A statement is a text that the database recognizes as a valid command.  */
/* Statements always end in a semicolon ; */
CREATE TABLE table_name (
    column_1 data_type, 
    column_2 data_type, 
    column_3 data_type
);


/* CREATE TABLE */
/* Create a new table in the database. */
CREATE TABLE celebs (
    id INTEGER, 
    name TEXT, 
    age INTEGER
);
/* CREATE TABLE */ is the command that creates a new table in the database
/* celebs */ is the name of the table you want to create
/* id, name, and age */ are the names of the columns in the table
/* data_type */ is the type of data that will be stored in that column


/* INSERT INTO */
/* Inserts a new row into a table  */
/* We can use the INSERT statement when we want to add new records */
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 29);


/* SELECT */
/* Fetch data from a database */
/* SELECT is a clause that indicates that the statement is a query. You will use SELECT every time you query data from a database */
SELECT * FROM celebs;
/* SELECT statements always return a new table called the result set. */



/* ALTER TABLE */ 
/* Adds a new column to a table */
ALTER TABLE celebs 
ADD COLUMN twitter_account TEXT;
/* ALTER TABLE */  is a clause that lets you make the specified changes
/* ADD COLUMN */ is a clause that lets you add a new column to a table
/* TEXT */ is the data type of the new column


/* UPDATE */
/* Edits a row in a table. 
You can use the UPDATE statement when you want to change existing records */
UPDATE celebs 
SET twitter_account = '@justinbieber'
WHERE id = 1;
/* UPDATE */ is a clause that edits a row in the table.
/* SET */ is a clause that indicates the column to edit.
/* WHERE */ is a clause that indicates which row(s) to edit.


/* DELETE FROM */
/* Deletes one or more rows from a table.
The statement below deletes all records in the celebs table with no twitter_handle.
If a WHERE statment is excluded, all the rows in the table will be deleted */
DELETE FROM celebs 
WHERE twitter_account IS NULL;
/* DELETE FROM */ is a clause that lets you delete rows from a table.
/* WHERE */ is a clause that lets you select which rows you want to delete
/* IS NULL */ is a condition in SQL that returns true when the value is NULL and false otherwise



/* Constraints */
/* Constraints are rules that limit the type of data that can go into a table.
tell the database to reject inserted data that does not adhere to a certain restriction */
CREATE TABLE celebs (
    id INTEGER PRIMARY KEY, 
    name TEXT UNIQUE,
    date_of_birth TEXT NOT NULL,
    date_of_death TEXT DEFAULT 'Not Applicable'
);
/* PRIMARY KEY */ Attempts to insert a row with an identical value to a row already in the table will result in a constraint violation
/* UNIQUE */ Ensures all values in a column are different. A table can have many different UNIQUE columns
/* NOT NULL */ Indicates that the column cannot contain NULL values, they must have a value
/* DEFAULT */ Indicates that the column will have a default value if no value is provided

