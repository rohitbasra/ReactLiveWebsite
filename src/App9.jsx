import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) => {
        console.log('Deleted');

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });


    };   


    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1> ToDo List</h1>
                    <input type='text'
                        placeholder='Add an Item'
                        value={inputList}
                        onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {items.map((itemVal, index) => {
                            return <ToDoList text={itemVal}
                                key={index}
                                id={index}
                                onSelect={deleteItems}
                            />;
                        })}

                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;