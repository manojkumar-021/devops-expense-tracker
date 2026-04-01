const express = require('express');
const app = express();

app.use(express.json());

let expenses = [];

// Home
app.get('/', (req, res) => {
  res.send('Expense Tracker API 🚀');
});

// Add expense
app.post('/expense', (req, res) => {
  const { title, amount } = req.body;

  const expense = {
    id: expenses.length + 1,
    title,
    amount,
    date: new Date()
  };

  expenses.push(expense);
  res.status(201).json(expense);
});

// Get all expenses
app.get('/expenses', (req, res) => {
  res.json(expenses);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(3000, () => {
  console.log('Expense Tracker running on port 3000');
});