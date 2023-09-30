import React from 'react'
import ReactDOM from 'react-dom/client';

//JSX
const heading = <h1 id='heading' className='heading'>Salam react using JSX</h1>
const Title = () => (<h1 id='title' className='title'>Salam react using JSX</h1>)
const titleElem = <h2 id='heading' className='heading'>Salam react using Functional Comp element</h2>
const HeadingComp = () => (
    <div id='container'>
        <Title />
        {Title()}
        <h2 id='heading' className='heading'>Salam react using Functional Comp</h2>
        {titleElem}
    </div>
    
);
  
const root = ReactDOM.createRoot(document.getElementById("root"));
  
root.render(HeadingComp());
// root.render(<HeadingComp />);