import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoItemType } from '~/models/types';
import { toggleTodo, removeTodo } from '../../redux/actions';


function Item (props: {item: TodoItemType}) {
  const { item } = props;
  const dispatch = useDispatch();

  const onCheckboxClick = () => {
    dispatch(toggleTodo(item));
  }

  const onDeleteItem = () => {
    dispatch(removeTodo(item.id));
  }

  return(
    <li>
      <div>
        <label>
            <input 
              type='checkbox' 
              checked={item.done}
              onChange={onCheckboxClick}
            />
            <span>{item.name}</span>
          </label>
          <div className="todo-list__delete-button" onClick={onDeleteItem}>
          <DeleteIcon />
        </div>
      </div>
    </li>
  )
}

const DeleteIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M170.94 137L265.94 42C270.449 37.4993 272.985 31.3918 272.99 25.0212C272.996 18.6506 270.471 12.5387 265.97 8.03C261.469 3.52132 255.362 0.98521 248.991 0.979584C242.621 0.973958 236.509 3.49928 232 8L137 103L42 8C37.4913 3.49132 31.3762 0.958366 25 0.958366C18.6238 0.958366 12.5087 3.49132 8 8C3.49132 12.5087 0.958366 18.6238 0.958366 25C0.958366 31.3762 3.49132 37.4913 8 42L103 137L8 232C3.49132 236.509 0.958366 242.624 0.958366 249C0.958366 255.376 3.49132 261.491 8 266C12.5087 270.509 18.6238 273.042 25 273.042C31.3762 273.042 37.4913 270.509 42 266L137 171L232 266C236.509 270.509 242.624 273.042 249 273.042C255.376 273.042 261.491 270.509 266 266C270.509 261.491 273.042 255.376 273.042 249C273.042 242.624 270.509 236.509 266 232L170.94 137Z" fill="#497081"/>
    </svg>
  );
}

export default Item;
