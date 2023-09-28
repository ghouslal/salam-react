import React from 'react'
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm an h1 taggg"),
      React.createElement("h2", {}, "I'm an h2 gtag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
  ]);
  
  //JSX
  
  console.log(parent); // object
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);