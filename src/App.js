import React from 'react'

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

  render = () =>
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.name}'s To Do List &mdash; Tarefas a fazer:&nbsp;
        {this.state.tasks.filter(t => !t.done).length}
      </h4>
      <div className="container-fluid">
        <input onChange={this.updateNewTaskAction} value={this.state.newTask} className="form-control" />
        <button onClick={this.createNewTask} className="btn btn-primary mt-1">Adicionar</button>
      </div>
    </div>
}

export default App