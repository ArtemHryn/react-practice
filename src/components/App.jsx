import { Component } from 'react';
import { nanoid } from 'nanoid';
// import Counter from './Counter/';
// import { Dropdown } from './Dropdown';
// import { ColorPicker } from './ColorPicker/';
import { ToDoList } from './ToDoList';
// import { Form } from './Form/Form';
import { ToDoEditor } from './ToDoEditor/TodoEditor';
import { Filter } from './Filter/Filter';
import { Modal } from './Modal/';
// import { Tabs } from './Tabs/Tabs';
import { IconButton } from './IconButton/IconButton';
import {ReactComponent as IconAdd} from './icons/add.svg'
// import { Clock } from './Clock';
// import todos from '../todos.json';
// import tabs from './tabs.json';

const TODOS = 'todos';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export class App extends Component {
  state = {
    todos: [],
    inputValue: '2',
    filter: '',
    showModal: false,
  };

  deleteToDo = todoID => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoID),
    }));
  };

  onInputChange = e => {
    console.log(e.target);
    this.setState({ inputValue: e.target.value });
  };
  onNameChange = e => {
    this.setState({ name: e.target.value });
  };
  onFormSubmit = data => {
    console.log(data);
  };

  onToggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        // if (todo.id === todoId) {
        //   return{...todo, completed: !todo.completed}
        // }
        // return todo
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      }),
    }));
  };

  addToDO = text => {
    const todo = { id: nanoid(3), text, completed: false };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
    
  };
  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const filtered = filter.toLowerCase();
    return todos.filter(todo => todo.text.toLowerCase().includes(filtered));
  };

  componentDidMount() {
    const todosList = JSON.parse(localStorage.getItem(TODOS));
    if (todosList) {
      this.setState({ todos: todosList });
    }
  }

  componentDidUpdate(prevProps, prevState) {

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos

    if (nextTodos !== prevTodos) {
      localStorage.setItem(TODOS, JSON.stringify(nextTodos));
    }
    if (
      nextTodos.length > prevTodos.length &&
      prevTodos.length !== 0
    ) {
      this.onToggleModal();
    }
  }

  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const completedToDo = todos.filter(todo => todo.completed);
    const visible = this.getVisibleTodos();
    return (
      <>
        <IconButton onClick={this.onToggleModal} aria-label="Add Todo">
          <IconAdd width="40px" />
        </IconButton>
        {/* <Tabs items={tabs} /> */}
        {/* {showModal && <Clock />} */}
        {/* <button type="button" onClick={this.onToggleModal}>
          Open Modal
        </button> */}
        {/* <Counter initiateValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker colors={colorPickerOptions} /> */}

        <Filter value={filter} onChange={this.onFilter} />
        <div>
          <p>Total ToDO: {todos.length}</p>
          <p>Completed ToDO: {completedToDo.length}</p>
        </div>
        <ToDoList
          todos={visible}
          onDeleteToDo={this.deleteToDo}
          onToggleCompleted={this.onToggleCompleted}
        />
        {showModal && (
          <Modal onCloseModal={this.onToggleModal}>
            <ToDoEditor onAddTask={this.addToDO} />
          </Modal>
        )}
        {/* <Form onSubmit={this.onFormSubmit} /> */}
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <>
//       <Counter initiateValue={10} />
//       <Dropdown />
//       <ColorPicker colors={colorPickerOptions} />
//       <ToDoList/>
//     </>
//   );
// };
