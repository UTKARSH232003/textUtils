import React, {useState} from 'react'

export default function TextForm() {
    const touppercase = () => {
        console.log("Uppercase was clicked");
        let Newtext = text.toUpperCase();
        setText(Newtext)
    }
    const tolowercase =() => {
        console.log("this is  to convert to lowercase")
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearAllth = () => {
        console.log("clear is called")
        setText('');
    }
    const trimthest = () => {
        let newst = text.trim();
        setText(''+newst+' ')
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
        const inputString = {text};
        const capitalizedString = camelcase({ input: inputString });
      
        setText(capitalizedString)
    }
    const betweenSpaces = () => {
        let newText = text.split("/[  ] + /");
        setText(newText.join(" "));
    }
    const copytext = () => {
        console.log("I have copied this text")
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState("");
    return (
        <div>
        <div className="mb-3">
            <label htmlFor="mybox" className="form-label fs-3"><b>Enter Your Text Here: </b></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
        </div>
        <button type="button" onClick= {touppercase} className="btn btn-primary">To UpperCase</button>
        <button type="button" onClick = {tolowercase}className="btn btn-success mx-2">ToLowerCase</button>
        <button type="button" onClick={clearAllth} className="btn btn-danger mx-2">Clear</button>
        <button type="button" onClick={trimthest} className="btn btn-info mx-2">Trim</button>
        <button type="button" onClick={camelCase} className="btn btn-info mx-2">camelCase</button>
        <button type="button" onClick={betweenSpaces} className="btn btn-info mx-2">Remove Extra Spaces</button>
        <button type="button" onClick={copytext} className="btn btn-info mx-2">Copy Text</button>
        
        <div className="container my-4">
            <h1>Summary Of The Text</h1>
            <p>{text.split(" ").length} Words, {text.length} Letters</p>
        </div>

        <h1>Preview</h1>
        <p>{text}</p>
        </div>
    )
}
