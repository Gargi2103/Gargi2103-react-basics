/* 
* Case 1:
* In case where only one element needs to be added within the HTML
* In this case its <h1 id="heading"></h1>
*
*/

/* const heading = React.createElement("h1", { id: "heading" }, "Hello World from React !!");
   const root = ReactDOM.createRoot(document.getElementById("root")); 
   root.render(heading);
*/
/* 
* Case 2:
* In case where more than one elements needed to be added within the HTML
* In this case its 
<div id="parent">
    <div id="child">
        <h1>This is from the div</h1>
    </div>
</div>
*
*/

/* const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "This is from the div"
        )
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 */

/* 
* Case 3:
* In case where more than one elements needed to be added within the HTML along with siblings of h1
* In this case its 
<div id="parent">
    <div id="child">
        <h1>This is the h1 sibling</h1>
        <h2>This is the h2 sibling</h2>
    </div>
</div>
*
*/

/* const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "This is the h1 sibling"),
        React.createElement("h2", {}, "This is the h2 sibling")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 
*/

/* 
* Case 4:
* In case where more than one elements needed to be added within the HTML along with siblings of h1
* In this case its 
<div id="parent">
    <div id="child">
        <h1>This is the h1 sibling</h1>
        <h2>This is the h2 sibling</h2>
    </div>
    <div id="child2">
        <h1>This is the h1 sibling</h1>
        <h2>This is the h2 sibling</h2>
    </div>
</div>
*
*However the below code in unreadable, so henceforth we will be writing JSX to have HTML elements.
*
*/

import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "This is the h1 sibling"),
        React.createElement("h2", {}, "This is the h2 sibling")]
    ),
    React.createElement(
        "div",
        { id: "child2" }, [
        React.createElement("h1", {}, "This is the h1 sibling"),
        React.createElement("h2", {}, "This is the h2 sibling")
    ])
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 