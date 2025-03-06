# CS 260 Notes

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

DNS: Domain Name System
- A way to make things simpler (We don't have to type in the numbers of someone's location, but we can do it by a name)
- You look up a name of a website, and a DNS server tells you what the IP address of that server is

For windows: Use nslookup to find the IP of a website

**Domain Names**
[subdomain.]secondary.top(tld)
- A/AAAA - Address record
- CNAME - Another name to go by (lds.org vs churchofjesuschrist.org)

## HTML Notes

Usually starts with:
```
<!Doctype html>
<html lang="eng">
<head>
    <title>A Title</title> #displayed on the tab
</head>

<body>
...
</body>
```

In Chrome, you can use "about:blank" and use devtools to edit directly in a browser

Local IP is 127.0.0.1

Deploy my changed simon html to server as well as my own html.

Also, don't forget to take notes as I implement (problems, solutions, tips, helpful links, etc.)

It's really helpful to have the structure already in mind as you creat the HTML.

When you deploy it to the server, use a bash terminal or it won't load.

Tips for creating the HTML:
- Create a basic structure for all pages that you can copy and paste between them before you customize
- Radio buttons must be under the same name or they won't be linked together
- Start very basic
- As you go, leave placeholders for things you may do in the future (Spans, divs, other elements)
- Pictures need to be in the local directory to load properly if they are uploaded
- Don't get too caught up in the details yet

### Elements 
- div: Block division of content
- span: Inline span of content
- h
- p
- table
- ol, ul
- a
- img
- head
- header
- title
- body
- main
- footer
- nav
- aside
- form
- input: Types-password, text, email, range, color, etc.
- menu: creates an unordered list with items that you can select from

## CSS Notes
To allow it to change window sizes (always include)
~~~ 
<meta
  name="viewport"
  content="width=device-width, initial-scale=1"
/>
~~~

The float property can make it stay in a specific place regardless of screen size

Use Bootstrap to easily use CSS that has alreay been created
- Use the card for my Story options
### Types of Display
- None
- Block
- Inline
- Flex
- Grid

Each display can be applied to a container (it will then be applied to each item in the container)

Margin-->Border-->Padding-->Content

### Media
~~~
@media (orientation: portrait) {
 div {
   transform: rotate(270deg);
 }
}
<!-- If it changes to portrait mode, it will rotate -->

@media ((orientation: portrait) and (max-height: 500px)) {
 aside {
   display: none;
 }
}
<!-- It will disappear if it is portrait and too short -->
~~~

## React Notes
JSX - Combines JavaScript and HTML (the website will then have to pull it apart)

I'll need some sort of tree structure for ech story. To read the story, I'll have all the parts defined in react as variables, and as you select the parts, it will define those variables. 

Rather than having multiple pages, we have one page with elements appearing and disappearing

~~~
<BrowserRouter>
...
<main>
  <Routes>
    <Route path="/" element={<Page ccolor="red" />} exact>
    <Route path="/green" element...>
    <Route path=...>
</main>
</BrowserRouter>
~~~

### From Experience
It's actually not that complex to port. Simply copy the sections into jsx files under a function and change class to className.

Inline styling doesn't really work in react, so use a CSS file.

Still need to fix the link on the instructions page to scroll to the bottom of the page

## React Phase 2
Pass in a const and a function that is connected to a React.useState

We can then call that const and update it with the function. 

It renders asynchronosly (it waits a little bit before rerendering to limit the ammount of times to rerender)

To do inline styling, you need to escape into javascript by using {} and then do the styling in that.

~~~
function updateText() {
  "Change the value of text"
}

const [text, setText] = React.useState(0);
<input type='text' onChange={updateText} />
<div>{text}</div>
~~~

### What I Need to Accomplish
[x] Alternate textboxes
[x] Save text to variables (maybe a list? or maybe a map?)
[x] Pass that data into my story class
[x] Save that story locally
[x] Read that story
[x] Placeholders for API
[x] Scroll in instructions
[x] Styling

## Promises
It is easy to overload the CPU with JavaScript because it is single-threaded (it can only really do one thing at a time)

Everything must be asynchronous
- Basically, it will go do something in the background and come back to tell us the result (success, failed, pending)

Eventually for use with the fetch function (this can take time, and we don't want the rest of the program to wait for a result before anything changes)

Resolve or reject (success or failure and a result to indicate which one)
- You can also use .catch to show when it is rejected or when there is an error

Await removes the nested promises and just returns the result when it's done.
- It doesn't move on until the thing happens

async function turns it into a promise with the return as the value

To use an await, every function above it has to be an async function.

## Backend
curl is an in-console search or request (shows the code for a website in the console)
- You can use the -v to show more information

Use the URL to do a fetch request
https://byu.edu:443/api/city?q=pro#3
- https:// (Scheme)
- byu.edu (Domain)
- :443 (Port)
- /api/city (Path)
- ?q=pro (Parameters)
- #3 (Anchor)

End methods
- POST (create)
- GET (Get a resource)
- PUT (Update information)
- DELETE (Delete a resource)

Status Code
- 200 or OK (Success)
- 204 (Success but no data to return)
- 301/302 redirect, 304 not modified
- 400 bad request (client made an error), 404 not found
- 403 forbidden, 429 too many requests
- 500 server error, 503 not available

### Express
- Express
- app

use will take any function, so put it after all of the others so it will check them first

In your handler, you can put additional middleware (functions that can check your request)
- You can then call next to move to the next step

Use this to secure your pages that need authentication (no token)
- You can't access it unless you have a token

: is a placeholder (then you can pull things from the path to use on the page)

## Authentication
Consider the implecations of using single sign-on
- You can use logins from other sources such as google
- Using their info gives you security in storing the credentials, but it also gives them information from your website since it is their information.

BCrypt for hashing and securely storing passwords

UUID for dandomly creating token

Cookies to store a temporary token

## Storage
Amazon has a storage service that we can use to store our files. 

