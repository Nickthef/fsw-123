import React, {useState} from "react";

function TodoForm({addTodo}) {
    const initInput = {text: ""}
    const [input, setInput] = useState(initInput);
    const [errormsg, setErrormsg] = useState("");

    const changeEvent = (e) => {
        var {value, name} = e.target;
        setInput({
            ...input, 
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        if (input.text === "") {
            let msg = "Error!"
            setErrormsg(msg);
            return; 
        }
        else {
            addTodo(input.text);
            setInput(initInput);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} name={"text"} value={input.text} onChange={changeEvent} required="required"/> 
            {errormsg}
            <button type="submit">Add Todo!</button>
        </form>
    )
}

export default TodoForm;