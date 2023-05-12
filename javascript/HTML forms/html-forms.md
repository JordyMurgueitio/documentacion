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



## text input 
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

## password input 

