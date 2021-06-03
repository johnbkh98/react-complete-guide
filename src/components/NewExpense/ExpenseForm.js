import React, {useState} from 'react';
import './ExpenseForm.css';



const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    // const [userInput, setUserInput] = useState ({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''

    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput, //to avoid losing the other inputs
        //     enteredTitle: event.target.value //overiding entered title
        // });
        // setUserInput( (prevState) => {
        //     return {...prevState, enteredTitle: event.target.vlaue};
        // }); // use this method if your state update relies on the previous State.
        // console.log(event.target.value);
        
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    //     setUserInput({
    //         ...userInput, //to avoid losing the other inputs
    //         enteredAmount: event.target.value //overiding entered amount
    //     });
    //     console.log(event.target.value);
    };

    
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput, //to avoid losing the other inputs
        //     enteredDate: event.target.value //overiding entered entered date
        // })
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData();
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'
                    value={enteredTitle} 
                    onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>amount</label>
                    <input type='number' 
                    min="0.01" step="0.01" 
                    onChange={amountChangeHandler}
                    value={enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='Date' 
                    min="2019-01-01" max="2022-12-31" 
                    onChange={dateChangeHandler}
                    value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__action">
                <button tybe='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;