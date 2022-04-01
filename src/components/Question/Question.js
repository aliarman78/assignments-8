import React from 'react';

const Question = () => {
    return ( 
        <div className = 'mx-5 my-3 py-5'>
        <h2 className = 'question text-center bg-primary text-white rounded-pill py-1'> Question Section</h2> 
        <div>
        <h3 className='mt-3'> 1. How react works ? </h3> 
        <p className = 'text-justify fs-5' > <strong > Answer : </strong>React make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
        </div>
        </div>
    );
};

export default Question;