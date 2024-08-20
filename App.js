import React from "react";
import ReactDOM from 'react-dom/client';

// React Element 
const jsxHeading = (
    <h1 id="heading" tabIndex="5">
        Namaste React from JSX
    </h1>
);


const number = 1000;
//React Functional Component

const Title = () => (
    <h1>Hello this is a React World !!</h1>
);

const element = (
    <div>
        <Title />
    </div>
);

const HeadingComponent = () => (
    <div id="container">
        {jsxHeading}
        {element}
        {Title()}
        <h1 className="heading">Namaste React from Functional Component!!</h1>
        <h2>{number}</h2>
        <h3>{number + 100}</h3>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);