import { useState } from "react";

export function useList() {
  
  const [list, setList] = useState([
    {
      id: Date.now(),
      title: 'Молоко',
      done: false,
    },
  ])
  
  /** Создать новый элемент. */
  const createItem = () => {
    const newItem = {
      id: Date.now(),
      title: '',
      done: false,
    };

    const newList = [...list, newItem];

    setList(newList);
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */

 const setItemTitle = (id, title) => { 
  const updatedList = list.map(item => item.id === id ? ({ ...item, title }) : item);
  
  setList([...updatedList]);
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    const newList = [...list];
    const newItem = newList.find(item => item.id === id);

    newItem.done = !newItem.done;

    setList(newList);
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */

  const deleteItem = (id) => {
    setList((deleteList) => deleteList.filter((list) => list.id !== id));
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
