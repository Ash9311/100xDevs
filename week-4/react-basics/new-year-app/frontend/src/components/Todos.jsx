

export function Todos({ todos }) {

    return <div>
        {todos.map(function (todo) {
            return
            <><h1>{todo.title}</h1>
                <h1>{todo.title}</h1>
                <h1>{todo.title}</h1></>
        })}
        <h1>Go to Gym</h1>
        <h2>You need to go to the gym</h2>
        <button>Mark as completed</button>
    </div>
}