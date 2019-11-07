import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: 'Penelope'
    }
  }

  changeName = () => {
    this.setState({
      nome: (this.state.nome === 'Penelope')?'Ricardo':'Penelope'
    })
  }

  render = () =>
  <div>
    <h4 className="bg-primary text-white text-center p-2">
      {this.state.nome}'s To Do List
    </h4>
    <button onClick={this.changeName} className="btn btn-primary">Mudar Nome</button>
  </div>
}

export default App