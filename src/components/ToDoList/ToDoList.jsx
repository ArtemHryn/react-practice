import { Component } from 'react';
import classNames from 'classnames';
import { Todo } from 'components/Todo/Todo';
import './ToDoList.scss';

export class ToDoList extends Component {
  render() {
    const { todos, onDeleteToDo, onToggleCompleted } = this.props;
    return (
      <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            className={classNames('TodoList__item', {
              'TodoList__item--completed': completed,
            })}
          >
            <Todo
              text={text}
              completed={completed}
              onDeleteToDo={() => onDeleteToDo(id)}
              onToggleCompleted={() => onToggleCompleted(id)}
            />
          </li>
        ))}
      </ul>
    );
  }
}
