import { useState } from "react"
import { FaCheck, FaTrashCan } from 'react-icons/fa6'

function App() {

    const [textValue, setTextValue] = useState('')
    const [listItem, setListItem] = useState([])

    function handleComplete(e, id) {
      
    }

    function handleAdd() {
      if(!textValue) return
      setListItem([...listItem, {
        id: crypto.randomUUID(),
        value: textValue,
        completed: false,
      }]);

      setTextValue('');
    }

    function handleInput(e) { 
      let currentValue = e.target.value
      console.log(currentValue)
      setTextValue(currentValue)
    }

    function handleDelete(id) {
      const newItems = listItem.filter(item => item.id !== id)
      setListItem(newItems)
      console.log(newItems)
    }
  
  return (

    <>
      <div className="container mx-auto ">
          <h1 className="text-3xl font-bold text-white text-center">To Do List</h1>
        <div className="w-full flex gap-2 justify-center mt-5 mb-5">
          <input placeholder="What do you need to do....?" value={textValue} onChange={handleInput} type="text" className="p-5 rounded-md w-1/2 h-12" />
          <button onClick={() => handleAdd()} className="rounded-md text-sm bg-green-400 h-12 w-1/6">Add</button>
        </div>
        <div className="w-full bg-blue-200 h-screen rounded-xl p-5">
           {listItem.map(item => {
            return (
              <div key={item.id} className="w-5/6 bg-blue-900 mt-3 flex items-center justify-between p-3 rounded-xl mx-auto">
                <h1 className="text-xl text-white">{item.value}</h1>
                <div>
                  <button onClick={() => handleComplete(item.id)}><FaCheck size={32} color="green" /></button>
                  <button onClick={() => handleDelete(item.id)}><FaTrashCan size={32} color="red"/></button>
                </div>

              </div>
              );
           })}
        </div>
      </div>
    </>
  )
}

export default App
