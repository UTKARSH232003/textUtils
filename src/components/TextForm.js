import React, {useState} from 'react'

export default function TextForm(props) {
   
    const touppercase = () => {
        if(text.trim().length === 0){
            return;
        }
        console.log("Uppercase was clicked");
        let Newtext = text.toUpperCase();
        setText(Newtext)
        props.showAlert("Text Changed to UpperCase", "success")
    }
    const tolowercase =() => {
        if(text.trim().length === 0){
            return;
        }
        console.log("this is  to convert to lowercase")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Changed to LowerCase", "success")

    }
    const trimthest = () => {
        let newst = text.trim();
        setText(''+newst+' ')
        props.showAlert("Text Trimmed", "success")
        
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
        
    }
    const camelcase = () => {
        
        const words = text.split(' ');
        const capitalizedWords = words.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // Keep the first word as it is
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        });
        const result = capitalizedWords.join('');
        return result;
    }
    const camelCase = () => {
        if(text.trim().length === 0){
            return;
        }
        const inputString = {text};
        const capitalizedString = camelcase({ input: inputString });
        
        setText(capitalizedString)
        props.showAlert("Text Changed to camelCase", "success")
        
    }
    const betweenSpaces = () => {
        if(text.trim().length === 0){
            return;
        }
        let newText = text.split("/[  ] + /");
        setText(newText.join(" "));
    }
    const copytext = () => {
        if(text.trim().length === 0){
            return;
        }
        console.log("I have copied this text")
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")
        
    }
    const clearAllth = () => {
        console.log("clear is called")
        setText('');
        props.showAlert("Text Clear", "success")

    }
    const [text, setText] = useState("");
    return (
        <div className='container' style={{color: props.mode === 'green'?'#333333':(props.mode === 'dark'?'white':'black')}}>
        <div className="mb-3">
            <label htmlFor="mybox" className="form-label fs-3"><b>Enter Your Text Here: </b></label>
            <textarea className="form-control" style= {{backgroundColor: props.mode === 'green'? '#333333':(props.mode === 'light'?'white':'black'), color: props.mode === 'green'?'#333333':(props.mode === 'dark'?'white':'black')}} value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
        </div>
        <button type="button" onClick= {touppercase} className="btn btn-primary my-1">To UpperCase</button>
        <button type="button" onClick = {tolowercase}className="btn btn-success mx-2 my-1">ToLowerCase</button>
        <button type="button" onClick={clearAllth} className="btn btn-danger mx-2 my-1">Clear</button>
        <button type="button" onClick={trimthest} className="btn btn-info mx-2 my-1">Trim</button>
        <button type="button" onClick={camelCase} className="btn btn-info mx-2 my-1">camelCase</button>
        <button type="button" onClick={betweenSpaces} className="btn btn-info mx-2 my-1">Remove Extra Spaces</button>
        <button type="button" onClick={copytext} className="btn btn-info mx-2 my-1">Copy Text</button>
        
        <div className="container my-4">
            <h1>Summary Of The Text</h1>
            <p>{text.trim().length === 0 ? "No text provided" : `${text.trim().split(/\s+/).length} Words, ${text.trim().length} Letters`}</p>
        </div>

        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter Something to preview here"}</p>
        </div>
    )
}
