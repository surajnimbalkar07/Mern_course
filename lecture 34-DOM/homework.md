 //HW=>write difference between innerHtml and textContent

1.
innerHTML is used to get or change the HTML code inside an element.includes tags also
textContent is used to get or change only the text inside an element.

2.
innerHTML render Html tags
textConetent doesnt render them shows only text part

3.

innerHTML is slower because it deal with HTML structure.
textContent is faster since it deals only with text.



//setAttribute usecase:

Use Case: Show / Hide Password:


changing the input type from "password" to "text" when we click on "showpassword" and Vice Versa

//classList and Classname difference:

1.
classList gives a list (like an array) of all classes on an element.
className gives all class names as one single string.

2.
classList have methods are add, remove, toggle classes.
className replaces all existing classes when you assign a new one.

3.
classList returns a DOMTokenList (like an array).
className  returns a string.