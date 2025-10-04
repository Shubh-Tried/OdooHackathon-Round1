import React, {useState} from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from "./firebase";
function IdeaForm(){
    const [title, setTitle] = useState("");
    const [description, setDescription] =  useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [receipt, setReceipt] = useState(null);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await addDoc(collection(db, "ideas"),{
                title,
                description,
                submittedBy: empId,
                companyId,
                expense:{
                    amount: parseFloat(expenseAmount) || 0,
                    currency :"INR",
                    date: expenseDate,
                    receipt: receipt?URL.createObjectURL(receipt): null,
                    breakdown:[]
                },
                status:"pending",
                currentStep :0,
                approvals:[]
            });

            alert("Idea + Expense submitted!");

            setTitle("");
            setDescription("");
            setExpenseDate("");
            setReceipt(null);
        }
        catch(err){
            console.error(err);
            alert("Error submitting idea");
        }
    };
    return (
        <form onSubmit={handleSubmit} style = {{maxWidth:400, margin:"auto"}}>
            <h2>Submit Idea and expense</h2>
            <input type ="text"
            placeholder = "Idea Title"
            value = {title}
            onChange = {(e)=> setTitle(e.target.value)}
            required
            />
            <br/>
            <br/><br/><br/>

            <textarea
                placeholder='Idea Description'
                value = {description}
                onChange={(e)=> setDescription(e.target.value)}
                required
            />
            <br/><br/><br/><br/>
            <input
                type = "number"
                placeholder='Expense Amount'
                value = {expenseAmount}
                onChange={(e)=> setExpenseAmount(e.target.value)}
                required
            />
            <br/><br/><br/><br/>
            <input
                type = "date"
                value = {expenseAmount}
                onChange={(e)=> setExpenseDate(e.target.value)}
                required
            />


        
        </form>
    )
}


export default IdeaForm;