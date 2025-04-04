/* QUERIES */
/* Queries allow us to communicate with the database and retrieve the information stored in it */


/* SELECT */
/* Used every time you want to query data from a database and * means all columns. */
SELECT name, genre 
FROM movies;



/* AS */
/* Keyword in SQL that allows you to rename a column or table using an alias
It's best practice to surround your aliases with single quotes 
When using AS, the columns are not being renamed in the table. The aliases only appear in the result */
SELECT name AS 'Titles'
FROM movies;



/* SELECT DISTINCT */
/* Used to return unique values in the output. 
It filters out all duplicate values in the specified column(s). */
SELECT DISTINCT genre
FROM movies;    /* shows all the genres in the movies table withouth duoplicates */



/* WHERE */
/* Restrict our query results in order to obtain only the information we want
Filters the result set to only include rows where the given condition is true */
SELECT *
FROM movies
WHERE rating > 8; /* only rows with a value greater than 8 in the rating column will be returned */



/* LIKE */
/* Useful operator when you want to compare similar values
Special operator used with the WHERE clause to search for a specific pattern in a column */
SELECT * 
FROM movies 
WHERE name LIKE 'Star%'; /* returns all rows in the movies table where the name column starts with "Star" */

SELECT *
FROM movies 
WHERE name LIKE '%Star%'; /* returns all rows in the movies table where the name column contains "Star" */

SELECT * 
FROM movies
WHERE name LIKE 'Se_en'; /* returns all rows in the movies table where the name column starts with "Se" and ends with "en" 
_ means you can substitute any individual character here without breaking the pattern */



/* IS NULL */
/* Unknown values are indicated by NULL 
IS NULL 
IS NOT NULL */
SELECT name 
FROM movies 
WHERE rating IS NOT NULL;



/* BETWEEN */
/* used in a WHERE clause to filter the result set within a certain range. 
It accepts two values that are either numbers, text or dates 
When the values are text, it filters the result set for within the alphabetical range */
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999;  /* Includes 1999 */

SELECT * 
FROM movies 
WHERE name BETWEEN 'D' AND 'G'; /* Does not incluce G, goes until F */



/* AND */
/* Combine multiple conditions in a WHERE clause 
Displays a row if all the conditions are true. */
SELECT * 
FROM movies
WHERE year BETWEEN 1990 AND 1999
AND genre = 'romance';

SELECT * 
FROM movies 
WHERE year < 1985 
AND genre = 'horror';



/* OR */
/* Combine multiple conditions in a WHERE clause
Displays a row if any condition is true */
SELECT *
FROM movies
WHERE year > 2014
OR genre = 'action';



/* ORDER BY */
/* Used to sort the result set in ascending or descending order alphabetically or numerically
The default order is ascending.
The keyword DESC is used to sort the result set in descending order */                              
SELECT *
FROM movies
WHERE rating > 8
ORDER BY year DESC;



/* LIMIT */
/* Clause that lets you specify the maximum number of rows the result set will have
LIMIT always goes at the very end of the query */
SELECT * 
FROM movies 
ORDER BY rating DESC
LIMIT 3;   /* returns the top 3 movies with the highest rating */



/* CASE */
/* Returns different output based on the conditions of each statement. 
SQL’s way of handling if-then logic */
SELECT name,
    CASE
    WHEN rating > 8 THEN 'Fantastic'
    WHEN rating > 6 THEN 'Poorly Received'
    ELSE 'Avoid at All Costs'
    END AS 'Review'
FROM movies;

/* WHEN */ tests a condition and /* THEN */ gives us the string if the condition is true.
/* ELSE */ gives us the string if all the above conditions are false.
The /* CASE */ statement must end with /* END */.
we can rename the columnwe can rename the column using /* AS */

SELECT name,
    CASE
    WHEN genre = 'romance' OR genre = 'comedy' THEN 'Chill'
    ELSE 'Intense'
    END AS 'Mood'
FROM movies;