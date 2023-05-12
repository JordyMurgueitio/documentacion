# HTML FORMS 

## How a form works

We need to supply the `<form>` element with both the location of where the form‘s information goes and what HTTP request to make
``` html
<form action="/example.html" method="POST">
</form>
```
1. The action attribute determines where the information is sent.
2. The method attribute is assigned a HTTP verb that is included in the HTTP request.

``` html
<form action="/practice.html" method="POST">
    <h1>Burgers</h1>
    <p>Feedback is important to us</p>
</form>
```



## 1. text input 
The `<input>` element has a type attribute which determines how it renders on the web page and what kind of data it can accept.

We have to include a name attribute for the `<input>` — without the name attribute, information in the `<input>` won’t be sent when the `<form>` is submitted

After users type into the `<input>` element, the value of the value attribute becomes what is typed into the text field. The value of the value attribute is paired with the value of the name attribute and sent as text when the form is submitted.

### adding a label 
To associate a `<label>` and an `<input>`, the `<input>` needs an id attribute. We then assign the for attribute of the `<label>` element with the value of the id attribute of `<input>`

``` html
<form action="/practice.html" method="POST">
    <p>Feedback is important to us</p>
    <label for = "meal">What do you want to eat?</label>
    <br>
    <input type = "text" name="food" id = "meal">
</form>
```

## 2. password input 
An `<input type ="password">`  element will replace input text with another character like an asterisk (*) or a dot (•).
``` html
<form>
    <label for="user-password">Password: </label>
    <input type="password" id="user-password" name="user-password">
</form>
```

## 3. number input 
We can restrict what users type into the input field to just numbers
``` html
<form>
    <label for="years"> Years of experience: </label>
    <input id="years" name="years" type="number" step="1">
</form>
```

## 4. range input 
Limit what numbers our users could type
To set the minimum and maximum values of the slider we assign values to the min and max attribute of the `<input>`
Smaller step values will make the slider move more fluidly, whereas larger step values will make the slider move more noticeably.
``` html
<form>
    <label for="volume"> Volume Control</label>
    <input id="volume" name="volume" type="range" min="0" max="100" step="1">
</form>
```

## 5. checkbox input
multiple options to users and allow them to select any number of options
``` html
<form>
    <p>Choose your pizza toppings:</p>
    <label for="cheese">Extra cheese</label>
    <input id="cheese" name="topping" type="checkbox" value="cheese">
    <br>
    
    <label for="pepperoni">Pepperoni</label>
    <input id="pepperoni" name="topping" type="checkbox" value="pepperoni">
</form>
```
1. there are assigned values to the value attribute of the checkboxes. These values are not visible on the form itself, that’s why it is important that we use an associated `<label>` to identify the checkbox.
2. each `<input>` has the same value for the name attribute. Using the same name for each checkbox groups the `<input>`s together. However, each `<input>`has a unique id to pair with a `<label>`