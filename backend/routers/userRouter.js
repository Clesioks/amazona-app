import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import data from '../data.js'
import User from '../models/userModel.js'

const userRouter = express.Router()

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    // remove todos usuários
    //await User.remove({})
    const createUsers = await User.insertMany(data.users)
    res.send({ createUsers })
}))

export default userRouter