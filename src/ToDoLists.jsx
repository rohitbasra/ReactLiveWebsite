import Raect, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComp from './ListComp';

const ToDoLists = () =>{

    const[item,setItem] = useState("");
    const[newItem,setnewItem] = useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value);
    }

    const listOfItems = () =>{
        setnewItem((prevValue)=> {
            return [...prevValue,item];
        })

        setItem("");
    }
    return(
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List </h1>
                    <br />
                    <input
                    type='text'
                    placeholder='Add an item'
                    onChange={itemEvent}
                    value={item}
                    />
                    <Button className='new_btn' onClick={listOfItems}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {newItem.map((val,index) => {
                            return <ListComp
                                text ={val}
                                key={index}
                            />;
                        })
                        }
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    )
    
    
}

export default ToDoLists;