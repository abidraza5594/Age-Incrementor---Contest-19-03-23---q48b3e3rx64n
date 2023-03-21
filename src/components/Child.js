import React from "react";

function Child(props) {
    return <div id="child">
            <p id="text">Today I am {props.age} Years of Age</p>
            <button onClick={props.incrementage}>Increment</button>
        </div>;
}

export default Child;
