// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// serve static files
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

// basic routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// hello API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

// 1. Empty date parameter route
app.get('/api', (req, res) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// 2. Parameterized date route
app.get('/api/:date', (req, res) => {
  const dateParam = req.params.date;
  let date;

  if (!isNaN(dateParam)) {
    date = new Date(parseInt(dateParam, 10));
  } else {
    date = new Date(dateParam);
  }

  if (isNaN(date.getTime())) {
    return res.json({ error: 'Invalid Date' });
  }

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// listen for requests
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + PORT);
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
});

export default app;