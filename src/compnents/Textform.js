// import React , {useState} from 'react'

// export default function Textform(props) {

//     const handleupclick = ()=>{
//       console.log("upper cliced")
//       let newtext = text.toUpperCase();
//       setText(newtext)

//      const handleOnChange = (event) => {
//   setText(event.target.value);
// };
//     }
//     const [text, setText] = useState('Enter text here')
//   return (
//     <div>
//         <h1>{props.heading}</h1>
//       <div className="form-field">
//   {/* <label for="mybox" className="form-label">Example textarea</label> */}
//  <textarea
//   className="form-control"
//   value={text}
//   onChange={handleOnChange}
//   id="mybox"
//   rows="10"
// />
// </div>
// <button className='btn btn-primary' onClick={handleupclick}>Convert to Uppercase</button>
//     </div>
//   )
// }


import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');

  const handleupclick = () => {
    // console.log("uppercase clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to uppercase" , "success")
  };

  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to lowercase" , "success")
  };

  const handleclearclick = () => {
    let newtext = ('');
    setText(newtext);
    props.showAlert("clear all text" , "success")
  };

  const handletitleclick = () => {
    let newtext = text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
    setText(newtext);
    props.showAlert("Convert to titlecase" , "success")
  };

 const handlecopy = () => {
    var text = document.getElementById("mybox");
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("copy all text" , "success")
  };

  const handele = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>

      <div className="form-field">
        <textarea className="form-control" value={text} onChange={handele} id="mybox"rows="10"/>
      </div>

        <button className="btn btn-primary mx-2" onClick={handleupclick} >Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick} >lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick} >Clear</button>
        <button className="btn btn-primary mx-2" onClick={handletitleclick} >Title case</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy} >Copy text</button>
</div>
<div className="container my-3">
  <h1>tour text summry</h1>
   <p>
    <b>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length}</b> words and <b>{text.length}</b> characters
  </p>
  <p>{0.008 * text.trim().split(/\s+/).filter((element) => element.length !== 0).length} minutes read</p>
  <h2> preview</h2>
  <p>{text}</p>
</div>
</>
  );
}


