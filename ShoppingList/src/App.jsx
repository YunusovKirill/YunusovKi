import { CardList } from './CardList';
import { useList } from './useList';
import './App.css';

export const App = () => {
  const { list, createItem, setItemTitle, toggleItem, deleteItem } = useList();

  return (
    <div className="app">
      <h1>Список покупок</h1>

      <CardList
        list={list}
        onItemTitleChange={setItemTitle}
        onItemToggle={toggleItem}
        onItemDelete={deleteItem}
      />

      <button className="create-button" onClick={createItem}>
        Новый элемент
      </button>
    </div>
  );
};
