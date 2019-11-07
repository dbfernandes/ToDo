import React from 'react'
import { TodoHeader } from './TodoHeader';
import { TodoRow } from './TodoRow'

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

  updateNewTaskAction = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }

  createNewTask = () => {
    this.setState({
      tasks: [...this.state.tasks, { action: this.state.newTask, done: false }],
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
        <input onChange={this.updateNewTaskAction} value={this.state.newTask} className="form-control" />
        <button onClick={this.createNewTask} className="btn btn-primary mt-2">Adicionar</button>
        <table className="table table-striped table-bordered mt-2">
        <thead><tr><th>Descrição</th><th>Feito</th></tr></thead>
        <tbody>{this.tasksTable()}</tbody>
      </table>        
      </div>
    </div>
}

export default App