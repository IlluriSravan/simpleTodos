import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteFunction = id => {
    const {todoList} = this.state
    const filteredTodoList = todoList.filter(each => each.id !== id)

    this.setState({todoList: filteredTodoList, input: ''})
  }

  onAdd = () => {
    const {input, todoList} = this.state

    const arr = input.split(' ')
    if (!Number.isNaN(parseInt(input.slice(-1)))) {
      console.log('The last character is a number.')
      const numbe = arr[arr.length - 1]
      arr.pop()
      let i = 1
      while (i <= numbe) {
        const todo = arr.join(' ')
        todoList.unshift({id: uuidv4(), title: todo})
        i += 1
      }
    } else {
      console.log('The last character is not a number.')
      const tod = arr.join(' ')
      console.log(tod)
      todoList.unshift({id: uuidv4(), title: tod})
    }

    this.setState({todoList, input: ''})
  }

  editFunction = id => {}

  render() {
    const {todoList, input} = this.state
    console.log(todoList)
    return (
      <div className="container">
        <div className="todoContainer">
          <h1>Simple Todos</h1>
          <div className="inpp">
            <input
              type="text"
              className="inp"
              onChange={e => this.setState({input: e.target.value})}
              value={input}
            />
            <button type="button" className="button" onClick={this.onAdd}>
              Add
            </button>
          </div>
          <ul className="unorderedList">
            {todoList.map(each => (
              <TodoItem
                item={each}
                key={each.id}
                deleteFunction={this.deleteFunction}
                editFunction={this.editFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
// Write your code here
