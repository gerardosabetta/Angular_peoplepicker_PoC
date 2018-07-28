import express from 'express'
import users from './users'
const app = express()
const PORT = 3001

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/users', (req, res) => {
  if (req.query.searchText) {
    res.send(users.filter(user => user.username.includes(req.query.searchText)))
  } else {
    res.send(users)
  }
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})