import React, { Component } from 'react'
import Todo from "./Todo"
import NewToDoForm from './NewTodoForm'

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todos: [
            {task: "Walk the fish"},
            {task: "Groom Chickens"}
        ]}
        this.create=this.create.bind(this)
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task}/>
        })
        return (
            <div>
                <h1>Todo List!</h1>
                <ul>
                    <NewToDoForm createTodo={this.create}/>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;