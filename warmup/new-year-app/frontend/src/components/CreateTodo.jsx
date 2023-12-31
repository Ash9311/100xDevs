import { useState } from "react"

export function CreateTodo() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="title" /> <br />
        <input style={{ padding: 10, margin: 10 }} type="text" placeholder="description" /> <br />
        <button onClick={()=>{fetch("http://localhost:3000/todos",{method:"POST",body:{title:title,description:""}})}}>Add a Todo</button>
    </div>
}

