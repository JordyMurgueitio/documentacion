// FORM VALIDATION -The process of checking that the information submitted through a form adheres to expectations




## 1.  Regular Expressions - is a sequence of characters representing a pattern. 
/*  We can use patterns to match a string, parts of a string, confirm that data is formatted acceptably, 
or replace parts of strings with different characters. */



// 2. Client-side validation: HTML - prevent problematic inputs from being submitted in the first place

 <form action="" method="POST">
    <label for="text">Enter your name here:</label>
    <input id="name" name="name" type="text" required minlength="3" maxlength="100">
    <br><br>

    <label for="number">Enter your age here:</label>
    <input type="number" name="age" id="age" required min="1" max="123">
    <br><br>

    <label for="code">Best place to learn to code: (hint: starts with a "C")</label>
    <input id="code" name="code" type="text" required pattern="[cC]odecademy">
    <br><br>

    <input type="submit" value="Submit">
</form> 



// 3. Client-side validation JavaScript - code ourselves or use a validation library


// 4. Back-end Validation - allows us to write validation code that a user can’t see
// We can validate the information against other data — for example, check our database to see if a given username is already in use.

// 1. We can make asynchronous requests to the server with pieces of their data and send feedback directly to the user before they’ve submitted.
// 2. 

