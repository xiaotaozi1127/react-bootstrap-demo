import React from "react";

import Form from "react-bootstrap/Form";

import "./App.css";

const handleChange = (event) => {
  let targetValue = event.target.value;
  //when i type 3.5, it will be triggered twice, first time value is 3, second time value is 3.5.
  console.log("target value=" + targetValue);
};

const App = () => (
    <Form.Control type="number" defaultValue={0} onChange={handleChange} />
);

export default App;
