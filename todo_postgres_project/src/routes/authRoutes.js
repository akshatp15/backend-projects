import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'

const router = express.Router()

// Registration endpoint /auth/register
router.post('/register', async (req, res) => {
    // save the encrypted password to database
    const {username, password} = req.body

    // encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8)

    // save the new user and hashed password to the db
    try {
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        // now that user is registered, add a default todo
        const defaultTodo = 'Hello! Add your first todo!'
        await prisma.todo.create({
            data: {
                task: defaultTodo,
                userId: user.id
            }
        })

        // create a token
        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({token})
    } catch(err){
        console.log(err.message)
        res.sendStatus(503)
    }
})

router.post('/login', async (req, res) => {
    // need to encrypt the password to cross check with the saved one for the user stored in the database
    // the encryption algorithm is one-way hence we cannot decrypt

    const {username, password} = req.body
    try{
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
       
        // If user isn't found return out of the function
        if(!user) {return res.status(404).send({message:"User not found"})}

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        // If password doesn't match then return out of function
        if(!passwordIsValid) {return res.status(401).send({message: "Invalid password"})}

        // then we have a succesful login
        // create a token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({token})
    } catch(err){
        console.log(err.message)
        res.sendStatus(503)
    }
})

export default router 