import React, { useState } from "react";
import "../styles/App.css";
import Child from "./Child";
const App = () => {
    const [age,setage]=useState(0)
    function incrementAge() {
        setage(age+1)
    }

    return <Child age={age} incrementage={incrementAge} />;
};

export default App;
