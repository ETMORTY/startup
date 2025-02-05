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