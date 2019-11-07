import React from 'react'

export class TodoCreate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newTask: ''
    }
  }

  updateNewTaskAction = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }

  createNewTask = () => {
    this.props.callback(this.state.newTask);
  }    

  render = () => 
    <div>
      <input onChange={this.updateNewTaskAction} value={this.state.newTask} className="form-control" />
      <button onClick={this.createNewTask} className="btn btn-primary mt-2">Adicionar</button>
    </div>

}