import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from './ListIem';
import { StateType } from '~/models/types';

function ItemList () {
	const { todoList } = useSelector((state: StateType) => state);

  return (
    <>
      {todoList?.length === 0 && (
        <div>No ToDos yet!</div>
      )}
      {todoList?.length !== 0 && (
        <ul className="todo-list__list">
          {todoList.map(item => (
            <Item item={item} key={item.id}/>
          ))}
        </ul>
      )}
    </>
  )
}

export default ItemList;