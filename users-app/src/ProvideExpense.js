// src/ProvideExpense.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, timestamp } from "./firebase";

function ProvideExpense() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "ideas"), {
        title,
        description,
        submittedBy: "empId1",
        companyId: "companyId123",
        expense: {
          amount: parseFloat(expenseAmount) || 0,
          currency,
          date: expenseDate,
          breakdown: [],
          receipt: receipt ? URL.createObjectURL(receipt) : null
        },
        status: "pending",
        currentStep: 1,
        approvals: [],
        createdAt: timestamp(),
        updatedAt: timestamp()
      });
      alert("Idea + Expense submitted!");
      setTitle(""); 
      setDescription(""); 
      setExpenseAmount(""); 
      setExpenseDate(""); 
      setReceipt(null); 
      setCurrency("INR");
    } catch (err) {
      console.error(err);
      alert("Error submitting idea");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ maxWidth: "400px", margin: "auto", display: "flex", flexDirection: "column", gap: "12px" }}
    >
      <h2>Submit Idea & Expense</h2>

      <input 
        type="text" 
        placeholder="Idea Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />

      <textarea 
        placeholder="Idea Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />

      <input 
        type="number" 
        placeholder="Expense Amount" 
        value={expenseAmount} 
        onChange={(e) => setExpenseAmount(e.target.value)} 
      />

      <input 
        type="date" 
        value={expenseDate} 
        onChange={(e) => setExpenseDate(e.target.value)} 
      />

      <select 
        value={currency} 
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <input 
        type="file" 
        accept="image/*,application/pdf" 
        onChange={(e) => setReceipt(e.target.files[0])} 
      />

      {/* Big Submit Button */}
      <button 
        type="submit" 
        style={{ padding: "12px", backgroundColor: "#007bff", color: "white", fontSize: "16px", border: "none", borderRadius: "6px", cursor: "pointer" }}
      >
        🚀 Submit Idea
      </button>
    </form>
  );
}

export default ProvideExpense;

