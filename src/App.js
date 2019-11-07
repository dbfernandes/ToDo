import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Penelope'
    }
  }

  render = () =>
  <div>
    <h4 className="bg-primary text-white text-center p-2">
      {this.state.name}'s To Do List
    </h4>
  </div>
}

export default App