const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/signin', (req, res) => {
  res.send({ userInfo: 'You have signed in!' });
});

app.get('/signup', (req, res) => {
  res.send({ userInfo: 'You have successfully signed up!' });
});