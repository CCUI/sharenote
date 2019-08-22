const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/signin', (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  //Check database to see if it's valid user
  const validUser = (email == "ccui@gmail.com" && password == "123");

  if(validUser) {
    res.send({
      isLoggedIn: true,
      logMessage: 'Welcome to Sharenote!'
    });
  } else {
    res.send({
      isLoggedIn: false,
      logMessage: 'Username and password doesn\'t match.'
    });
  }
});

app.get('/signup', (req, res) => {
  res.send({ userInfo: 'You have successfully signed up!' });
});