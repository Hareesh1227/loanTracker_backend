const express = require(`express`)
const bcrypt = require(`bcrypt`)
const jwt = require(`jsonwebtoken`)
const app = express()

app.use(express.json())

module.exports = app


app.listen(3000, ()=> {
    console.log("Server is running at http://localhost:3000")
})

app.post('/register', async (request, response) => {
    let {name, password, gender, phone, address, creditLimit} = request.body
    let hashedPassword = await bcrypt.hash(request.body.password, 10)
    //checking name is availble in data or not.
    let checkTheUsername = `  
      SELECT *
      FROM shopkeeper
      WHERE name = '${name}';`
    let userData = await db.get(checkTheUsername)
    if (userData === undefined) {
      let postNewUserQuery = `
        INSERT INTO
        shopkeeper (name, password, gender, phone, address, creditLimit, trustScore)
        VALUES (
          '${name}',
          '${hashedPassword}',
          '${gender}'
          '${phone}'
          '${address}'
          ${creditLimit}
        );`
  
      if (password.length < 6) {
        response.status(400)
        response.send('Password is too short')
      } else {
        let newUserDetails = await db.run(postNewUserQuery)
        response.status(200)
        response.send('User created successfully')
      }
    } else {
      response.status(400)
      response.send('User already exists')
    }
  })

  app.post('/login', async (request, response) => {
    const {name, password} = request.body
    const selectUserQuery = `SELECT * FROM shopkeeper WHERE name = '${name}'`
    const dbUser = await db.get(selectUserQuery)
    if (dbUser === undefined) {
      response.status(400)
      response.send('Invalid user')
    } else {
      const isPasswordMatched = await bcrypt.compare(password, dbUser.password)
      if (isPasswordMatched === true) {
        const payload = {
          name: name,
        }
        const jwtToken = jwt.sign(payload, 'asdfghjkl')
        response.send({jwtToken})
      } else {
        response.status(400)
        response.send('Invalid password')
      }
    }
  })

  //middle ware
const getUserIdFromUsername = async name => {
    const selectUserQuery = `SELECT id FROM shopkeeper WHERE name = '${name}'`
    const dbUser = await db.get(selectUserQuery)
    return dbUser.id
  }
  
const authenticateToken = (request, response, next) => {
    let jwtToken
    const authHeader = request.headers['authorization']
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(' ')[1]
    }
    if (jwtToken === undefined) {
      response.status(401)
      response.send('Invalid JWT Token')
    } else {
      jwt.verify(jwtToken, 'asdfghjkl', async (error, payload) => {
        if (error) {
          response.status(401)
          response.send('Invalid JWT Token')
        } else {
          const userId = await getUserIdFromUsername(payload.name)
          request.Id = userId
          next()
        }
      })
    }
  }

//not able to add database it works in another IDE but in vs code its not connected. 
  app.get('/customers', authenticateToken, async (req, res) => {
    const customers = await Customer.findAll({ where: { userId: req.user.id } });
    res.send(customers);
});
app.put('/customers/:id', authenticateToken, async (req, res) => {
    const { error } = customerSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const customer = await Customer.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!customer) return res.status(404).send('Customer not found.');
    await customer.update(req.body);
    res.send(customer);
});
app.delete('/customers/:id', authenticateToken, async (req, res) => {
    const customer = await Customer.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!customer) return res.status(404).send('Customer not found.');
    await customer.destroy();
    res.send(customer);
});


