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


## 3. Number input 
We can restrict what users type into the input field to just numbers
``` html
<form>
    <label for="years"> Years of experience: </label>
    <input id="years" name="years" type="number" step="1">
</form>
```


## 4. Range input 
Limit what numbers our users could type
To set the minimum and maximum values of the slider we assign values to the min and max attribute of the `<input>`
Smaller step values will make the slider move more fluidly, whereas larger step values will make the slider move more noticeably.
``` html
<form>
    <label for="volume"> Volume Control</label>
    <input id="volume" name="volume" type="range" min="0" max="100" step="1">
</form>
```



## 5. Checkbox input
Multiple options to users and allow them to select any number of options
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



## 6. Radio Button Input
Present multiple options and only allow for one selection
``` html
<form>
    <p>What is sum of 1 + 1?</p>
    <input type="radio" id="two" name="answer" value="2">
    <label for="two">2</label>
    <br>
    <input type="radio" id="eleven" name="answer" value="11">
    <label for="eleven">11</label>
</form>
```

Radio buttons (like checkboxes) do not display their value. We have an associated `<label>` to represent the value of the radio button. 
To group radio buttons together, we assign them the same name and only one radio button from that group can be selected



## 7. Dropdown list
Allow our users to choose one option from an organized list
``` html
<form>
    <label for="lunch">What's for lunch?</label>
    <select id="lunch" name="lunch">
        <option value="pizza">Pizza</option>
        <option value="curry">Curry</option>
        <option value="salad">Salad</option>
        <option value="ramen">Ramen</option>
        <option value="tacos">Tacos</option>
    </select>
</form>
```

The text rendered is the text included between the opening and closing `<option>` tags. However, it is the value of the value attribute that is used in `<form>` submission (notice the difference in the text and value capitalization). When the `<form>` is submitted, the information from this input field will be sent using the **name** of the `<select>` and the **value** of the chosen `<option>`. For instance, if a user selected Pizza from the dropdown list, the information would be sent as **"lunch=pizza"**



## 8. Datalist input
The `<datalist>` is used with an `<input type="text">}` element. The `<input>` creates a text field that users can type into and filter options from the `<datalist>` 
``` html
<form>
    <label for="city">Ideal city to visit?</label>
    <input type="text" list="cities" id="city" name="city">
    
    <datalist id="cities">
        <option value="New York City"></option>
        <option value="Tokyo"></option>
        <option value="Barcelona"></option>
        <option value="Mexico City"></option>
        <option value="Melbourne"></option>
        <option value="Other"></option>  
    </datalist>
</form>
```

we have an `<input>` that has a list attribute. The `<input>` is associated to the `<datalist>`  via the `<input>`‘s list attribute and the id of the `<datalist>` 

In the associated `<input>` element, users can type in the input field to search for a particular option. If none of the `<option>`s match, the user can still use what they typed in. When the form is submitted, the value of the `<input>`‘s name and the value of the option selected, or what the user typed in, is sent as a pair.




## 9. Textarea element 
The `<textarea>` element is used to create a bigger text field for users to write more text. We can add the attributes **rows** and **cols** to determine the amount of rows and columns for the `<textarea>`

``` html
<form>
    <label for="blog">New Blog Post: </label>
    <br>
    <textarea id="blog" name="blog" rows="5" cols="30">
    </textarea>
</form>
```
When we submit the form, the value of `<textarea>` is the text written inside the box. If we want to add a default value to `<textarea>` we would include it within the opening and closing tags

``` html
<textarea>Adding default text</textarea>
```



## 10. Placeholder 
The placeholder attribute is used in HTML forms to provide a short hint or example value that describes the expected input for an input field

``` html
<input type="text" placeholder="Enter your name">
```
Note that the placeholder text is not submitted as part of the form data. It is only used as a visual aid and is replaced by the user's actual input when they start typing



## 11. Submit form 
Use the `<input>` element and set the type to "submit"

``` html
<form>
    <input type="submit" value="Send">
</form>
```

The **value** assigned to the `<input>` shows up as text on the submit button. If there isn’t a **value** attribute, the default text, **Submit** shows up on the button