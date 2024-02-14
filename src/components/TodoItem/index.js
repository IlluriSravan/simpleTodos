// Write your code here
import './index.css'
import {useState} from 'react'

const TodoItem = props => {
  const {item, deleteFunction, editFunction} = props
  const {title, id} = item
  const [edit, setEdit] = useState(true)
  const [inp, setinp] = useState(title)
  const [checked, setChecked] = useState(false)
  const checkedClass = checked ? 'checked' : ''
  const but = edit ? 'Edit' : 'Save'

  const onDelete = () => {
    deleteFunction(id)
  }

  const onEdit = () => {
    editFunction(id)
    setEdit(prev => !prev)
  }

  return (
    <li className="individualItem">
      <div className="item">
        <input type="checkbox" onChange={() => setChecked(prev => !prev)} />
        {edit ? (
          <p className={`para ${checkedClass}`}>{inp}</p>
        ) : (
          <input
            type="input"
            className="edit-input"
            onChange={e => setinp(e.target.value)}
            value={inp}
          />
        )}
        <button className="button" type="button" onClick={onEdit}>
          {but}
        </button>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
