import React from 'react'
import { TodoHeader } from './TodoHeader';
import { TodoRow } from './TodoRow'
import { TodoCreate } from './TodoCreate'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "Ricardo",
      tasks: [
        { action: "Comprar flores", done: false },
        { action: "Estudar para a prova", done: false },
        { action: "Ligar para a Maria", done: true },
        { action: "Limpar a casa", done: false }
      ],
      newTask: ""
    }
  }

  createNewTask = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, { action: newTask, done: false }],
      newTask: ''
    })
  }  

  changeTaskDone = (task) => {
    this.setState({
      tasks: this.state.tasks.map((t) => (task.action===t.action)?{ action:t.action, done:!t.done }: t)
    });
  }

  tasksTable = () => 
    this.state.tasks.map((task) => 
    <TodoRow key={task.action} task={task} callback={this.changeTaskDone} />
    )

  render = () =>
    <div>
      <TodoHeader name={this.state.name} tasks={this.state.tasks} />
      <div className="container-fluid">
        <TodoCreate callback={this.createNewTask} />
        <table className="table table-striped table-bordered mt-2">
        <thead><tr><th>Descrição</th><th>Feito</th></tr></thead>
        <tbody>{this.tasksTable()}</tbody>
      </table>        
      </div>
    </div>
}

export default App