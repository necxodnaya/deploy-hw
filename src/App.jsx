import './App.css';
import { useState } from 'react';
import List from './components/List/List';


function App() {

  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([])

  const onChangeHandler = e =>{
    setCurrentItem(e.target.value)
  };

  const addItemtoList = () =>{
    updateItemList([...itemList, {item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  }


  return (
    <div className="App">
      <header className='App-header'>
    <div className='Wrapper'> 
    <div className='input-wrapper'>
    <input placeholder="Add item" value={currentItem} onChange={onChangeHandler} />
    <button type='submit' onClick={addItemtoList}>+</button>
    </div>
    <List itemList={itemList} updateItemList={updateItemList}/>
    </div>
      </header>
    </div>
  );
}

export default App;
