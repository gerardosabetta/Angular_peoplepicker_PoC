import express from 'express'
import users from './users'
const app = express()
const PORT = 3001

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