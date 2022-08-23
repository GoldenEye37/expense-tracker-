import { useState } from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import  '../UI/ExpenseItem.css';

function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(setTitle);
    } 
   
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    );
}


export default ExpenseItem;
