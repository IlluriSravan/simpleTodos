// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, deleteFunction} = props
  const {title, id} = item

  const onDelete = () => {
    deleteFunction(id)
  }

  return (
    <li className="individualItem">
      <div className="item">
        <p className="para">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
