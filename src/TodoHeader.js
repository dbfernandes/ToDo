import React from 'react';

export class TodoHeader extends React.Component {
  render = () =>
    <h4 className="bg-primary text-white text-center p-2">
      {this.props.name}'s To Do List &mdash; Tarefas a fazer:&nbsp;
      {this.props.tasks.filter(t => !t.done).length}
    </h4>
}
