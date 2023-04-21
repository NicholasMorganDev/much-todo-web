
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [itemList, setItemList] = useState();
  const [loading, setLoading] = useState(true);
  return (
    <main>
      <h1>Much To Do</h1>
      <Header setItemList={setItemList} setLoading={setLoading}/>
      <ToDoList loading={loading} itemList={itemList} setItemList={setItemList} setLoading={setLoading}/>
    </main>
  );
}

export default App;
