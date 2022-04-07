import React, {useState} from 'react'
import Alert from './Alert';

export default function Forms() {
    const [text,setText] = useState('');
    const handleClicked=()=>{
        // setText('jksdfhskjfdhjfdhskjdhfkjsd')
        // let CapitalText = text.toUpperCase();
        // setText(CapitalText);
        setText(text.toUpperCase());
    }
    const textBoxChange=(event)=>{
        // console.log(event.target.value);
        setText(event.target.value)
        console.log('State Text = ',text);
    }
  return (
    <div>
      {/* <Alert /> */}
        <div className="mb-10">
            <label className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={textBoxChange} id="exampleFormControlTextarea1" rows="3"></textarea>
       </div>
            <button className="btn btn-primary" onClick={handleClicked}>Covert</button>
            
       <div className="mb-10">
            <p>{text.split(' ').length} Words and {text.length} Characters</p>
            <p>{text}</p>
       </div>
    </div>
  )
}
