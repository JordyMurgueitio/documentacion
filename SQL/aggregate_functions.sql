/* AGGREGATE FUNCTIONS */

SQL Queries dont just access raw data, 
they can also perform calculations on the raw data to answer specific data questions

Calculations performed on multiple rows of a table are called aggregates


/* COUNT */
/* The COUNT function counts the number of rows in a table
Takes the name of a column as an argument and counts the number of non-empty values in that column  */
SELECT COUNT(*)
FROM table_name;

SELECT COUNT(*)
FROM fake_apps
WHERE price = 0;  /* Returns how many apps are free */



/* SUM */
/* Adds all values in a particular column
Takes the name of a column as an argument and returns the sum of all the values in that column  */
SELECT SUM(downloads)
FROM fake_apps;  /* Returns the total number of downloads for all apps combined */



/* MAX */
/* Returns the highest value in a column */
SELECT MAX(downloads)
FROM fake_apps; /* Returns the highest number of downloads for any app in the table */



/* MIN */
/* Returns the lowest value in a column */
SELECT MIN(downloads)
FROM fake_apps; /* Returns the lowest number of downloads for any app in the table */



/* AVG */
/* Returns the average value in a column */
SELECT AVG(price)
FROM fake_apps; /* Returns the average price of all apps in the table */



/* ROUND */
/* Rounds a number to a specified number of decimal places
Takes two arguments: 
1. a column name
2. the number of decimal places to round to */
SELECT ROUND(AVG(price), 1)
FROM fake_apps; /* Returns the average price of all apps in the table rounded to 1 decimal */



/* GROUP BY */
/* Groups rows that have the same values in specified columns into summary rows
Takes the name of a column as an argument and groups the rows in the table by that column
GROUP BY statement comes after any WHERE statements, but before ORDER BY or LIMIT */
SELECT price, COUNT(*) 
FROM fake_apps
GROUP BY price; /* Returns the number of apps at each price point */

SELECT price, COUNT(*) 
FROM fake_apps
WHERE downloads > 20000
GROUP BY price; /* Returns the number of apps at each price point that have more than 20,000 downloads */

SELECT category, SUM(downloads) 
FROM fake_apps
GROUP BY category; /* Returns the total number of downloads for each category of app */


/* When we want to GROUP BY a calculation done on a column
SQL lets us use column reference(s) in our GROUP BY
1 is the first column selected
2 is the second column selected
3 is the third column selected */
SELECT ROUND(rating),
    COUNT(name)
FROM movies
GROUP BY 1 /* 1 refers to the first column in our SELECT statement */
ORDER BY 1; /* Returns the number of movies with each rating rounded to the nearest whole number
The results are ordered by the rounded rating */

SELECT category, 
    price,
    AVG(downloads)
FROM fake_apps
GROUP BY 1, 2; /* Returns the average number of downloads for each category of app at each price point
The results are grouped by category and price */ 



/* HAVING */
/* Filters the results of a GROUP BY statement
When we want to limit the results of a query based on an aggregate property, use HAVING
HAVING comes after the GROUP BY statement, but before the ORDER BY statement
HAVING takes a column name and a condition as arguments */
SELECT price, 
    ROUND(AVG(downloads)),
    COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;  /* Returns the average downloads and the number of apps at each price point that have more than 10 apps
The results are grouped by price */

/* The WHERE clause filters rows, whereas the HAVING clause filter groups. */
SELECT category, COUNT(*)
FROM startups
GROUP BY category
HAVING COUNT(*) > 3
ORDER BY 2 DESC; /* Returns the number of startups in each category that have more than 3 startups
The results are grouped by category and ordered by the number of startups in descending order */



/* EXAMPLES */

SELECT COUNT(*)
FROM startups; /* returns all columns in the startups table */

SELECT SUM(valuation)
FROM startups; /* returns the sum of all valuations in the startups table */

SELECT MAX(raised)
FROM startups
WHERE stage = 'Seed'; /* returns the maximum amount raised by startups in the Seed stage */

SELECT MIN(founded)
FROM startups; /* returns the min value in the founded column (oldest company)  */

SELECT AVG(valuation)
FROM startups;  /* returns the average valuation of all startups in the table */

SELECT category, AVG(valuation)
FROM startups
GROUP BY category; /* returns the average valuation of startups in each category */

SELECT category, ROUND(AVG(valuation), 2)
FROM startups
GROUP BY 1
ORDER BY 2 DESC; /* returns the average valuation of startups in each category rounded to 2 decimal places
The results are ordered by the average valuation in descending order */

SELECT category, COUNT(*)
FROM startups
GROUP BY 1
HAVING COUNT(*) > 3; /* returns the number of startups in each category that have more than 3 startups
The results are grouped by category */

SELECT location, AVG(employees)
FROM startups 
GROUP BY location;  /* returns the average number of employees for startups in each location */

SELECT location, AVG(employees)
FROM startups 
GROUP BY 1
HAVING AVG(employees) > 500; /* returns the average number of employees for startups in each location that have more than 500 employees
The results are grouped by location */


