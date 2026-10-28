import express from 'express';
const app = express();
const PORT = 3000;

// 1. Root path GET route
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// 2. Hobbies GET route
app.get('/hobbies', (req, res) => {
  res.send('I cycle, go boating, and play guitar.');
});

// 3. Skills GET route
app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

// 4. API profile JSON route
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

// Start listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
