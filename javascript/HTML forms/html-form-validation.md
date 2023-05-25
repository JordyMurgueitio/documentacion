# Introduction to HTML Form Validation

Validation is the concept of checking user provided data against the required data.
Shared among the different browsers are the benefits of using HTML5’s built-in client-side validation. It saves us time from having to send information to the server and wait for the server to send back confirmation or rejection of the data.


## 1. Requiring an input
There must be information provided before we can submit it. To enforce this rule, we can add the **required** attribute to an `<input>` element.

``` html
<form action="/practice.html" method="POST">
    <label for="allergies">Do you have any dietary restrictions?</label>
    <br>
    <input id="allergies" name="allergies" type="text" required>
</form>
```

## 2. Set a minimun and maximum 
Assign a minimum or maximum value for a number field
We use the **min** and **max** attributes on the `<input>` element

``` html
<form action="/example.html" method="POST">
    <label for="guests">Enter # of guests:</label>
    <input id="guests" name="guests" type="number" min="1" max="4">

    <input type="submit" value="Submit">
</form>
```


## 3. Checking text length

To set a minimum number of characters for a text field, we add the **minlength** attribute and a value to set a minimum value. To set the maximum number of characters for a text field, we use the **maxlength** attribute and set a maximum value

``` html
<form action="/example.html" method="POST">
    <label for="summary">Summarize your feelings in less than 250 characters</label>
    <input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>

    <input type="submit" value="Submit">
</form>ype="submit" value="Submit">
```


## 4. Matching a pattern 

For cases when we want user input to follow specific guidelines, we use the **pattern** attribute and assign it a regular expression

Regular expressions are a sequence of characters that make up a search pattern. If the input matches the regex, the form can be submitted.

Let’s say we wanted to check for a valid credit card number (a 14 to 16 digit number). We could use the regex: [0-9]{14,16} which checks that the user provided only numbers and that they entered at least 14 digits and at most 16 digits

``` html
<form action="/example.html" method="POST">
    <label for="payment">Credit Card Number (no spaces):</label>
    <br>
    <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">

    <input type="submit" value="Submit">
</form>
```