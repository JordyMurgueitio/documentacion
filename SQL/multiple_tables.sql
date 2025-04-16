/* MULTIPLE TABLES */


/* Combining Tables */
/* Suppose we have 3 tables: orders, customers, subscriptions */

/* JOIN */
/* Combines tables */
/* When we perform a simple JOIN (often called an inner join) our result only includes rows that match our ON condition */
SELECT *
FROM orders
JOIN customers  /* combine information from orders with customers */
ON orders.customer_id = customers.customer_id; /* match orders table’s customer_id column with customers table’s customer_id column */

SELECT orders.order_id,
    customers.customer_name /* We use the syntax table_name.column_name in any statement where we refer to column names. */
FROM orders
JOIN customers
ON orders.customer_id = customers.customer_id;

SELECT * 
FROM orders 
JOIN subscriptions 
ON orders.subscription_id = subscriptions.subscription_id 
WHERE subscriptions.description = 'Fashion Magazine';

SELECT COUNT(*)
FROM newspaper 
JOIN online 
ON newspaper.id = online.id; /* Returns the number of rows in the newspaper table that have a matching row in the online table */
/* The result set will include all rows from the newspaper table and only the rows from the online table that match the ON condition */ 





/* LEFT JOIN */
/* Combine two tables and keep some of the un-matched rows
The result set will include all rows from table1 and only the rows from table2 that match the ON condition
If there are no matching rows in table2, the result set will include NULL values for the columns from table2 */

SELECT *  /* selects all columns from both tables */
FROM table1   /* table1 is the first table */
LEFT JOIN table2   /* table1 is the first table */
ON table1.column2 = table2.column2;  /* column2 is the column we are matching on */ 


SELECT * 
FROM newspaper 
LEFT JOIN online 
ON newspaper.id = online.id
WHERE online.id IS NULL; /* Returns all rows in the newspaper table that do not have a matching row in the online table */
/* The result set will include all rows from the newspaper table and only the rows from the online table that match the ON condition */




/* PRIMARY KEY VS FOREIGN KEY */
/* A primary key is a column that uniquely identifies each row in a table
Primary keys have a few requirements:
1. None of the values can be NULL.
2. Each value must be unique (i.e., you can’t have two customers with the same customer_id in the customers table).
3. A table can not have more than one primary key column. */ 

/* Foreign Key: When the primary key for one table appears in a different table */ 
-- So customer_id is a primary key when it appears in customers, but a foreign key when it appears in orders
CREATE TABLE customers (
    customer_id INTEGER NOT NULL,
    first_name varchar(255),
    last_name varchar(255)
);
CREATE TABLE orders (
    order_id INTEGER NOT NULL,
    customer_id INTEGER,
    order_date DATE,
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
/* Returns all rows in the classes table that have a matching row in the students table */
SELECT * 
FROM classes  
JOIN students 
ON classes.id = students.class_id; /* Primary key of classes is id 
Foreign key of students is class_id which corresponds to the primary key of classes */




/* CROSS JOIN */
-- Combine all rows of one table with all rows of another table
-- Returns all possible combinations of rows from both tables
-- Cross joins don’t require an ON statement. You’re not really joining on any columns
SELECT shirts.shirt_color,
    pants.pants_color
FROM shirts
CROSS JOIN pants; 
-- A more common usage of CROSS JOIN is when we need to compare each row of a table to a list of values



/* UNION */
-- stacks one dataset on top of another
-- Combines the results of two or more SELECT queries
-- The number of columns and the data types of the columns must be the same in each SELECT statement
SELECT *
FROM table1
UNION
SELECT *
FROM table2;



/* WITH */
-- Combine two tables, but one of the tables is the result of another calculation
-- The WITH statement allows you to create a temporary table that you can use in your main query
-- Stores the result of a query in a temporary table using an alias
WITH temp_table AS (
    SELECT *
    FROM table1
    WHERE column1 = 'value'
)
SELECT *
FROM temp_table
JOIN table2
ON temp_table.column2 = table2.column2; -- The result set will include all rows from temp_table and only the rows from table2 that match the ON condition 

WITH previous_query AS (
    SELECT customer_id,
    COUNT(subscription_id) AS 'subscriptions'
    FROM orders
    GROUP BY customer_id
)
SELECT customers.customer_name,
    previous_query.subscriptions
FROM previous_query 
JOIN customers 
ON customers.customer_id = previous_query.customer_id; 








