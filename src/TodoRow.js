import React from 'react'

export class TodoRow extends React.Component {
  render = () =>
  <tr key={this.props.task.action}>
  <td>{this.props.task.action}</td>
  <td><input onChange={() => this.props.callback(this.props.task)} type="checkbox" defaultChecked={this.props.task.done}/></td>
</tr>    
}