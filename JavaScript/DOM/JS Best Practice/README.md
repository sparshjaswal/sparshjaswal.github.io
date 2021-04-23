# JS Best Practices

noscript tag
noscript tag displays the content once the target script is disabled for the page. 
<noscript>You need to enable JavaScript to run this app.</noscript>

 JavaScript:void(0)
Advantage
To avoid unnecessary side effects
To avoid page refresh
Disadvantage
It doesn’t follow the principles of unobtrusive JavaScript.
Unobtrusive JavaScript
It doesn’t follow the principles of unobtrusive JavaScript One of the very important aspects of the websites is how easily it can be understandable to web crawlers or SEO and secondly, if javascript is not enabled in the browsers(nowadays which is practically impossible) and to ensure that the content website still deliveries its content. This is also known as Progressive Enhancement.
Mostly people will do
<button onclick="onClick()">Click me</button>

<button onclick="javascript:void(0)">Click me</button> 

<button onclick="javascript:void(0)" class="buttonClick">
Click me</button>
