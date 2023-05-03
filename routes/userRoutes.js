import  express  from "express";
import  {addUser, deleteUser, toggleEnableUser, forgotPassword, getUserById, getUsers, login, resetPassword, updateUser}  from "../controllers/userControllers.js"
import {isAuth} from "../middlewares/auth.js"
import { checkRole } from "../middlewares/checkRole.js";
import validorId from "../middlewares/validatorId.js"
import { validateRequestUser } from "../middlewares/validatorRequest.js";
const router = express.Router();


// Route for login
router.post('/auth/login', login)

// Route for forgot password
router.post('/auth/forgotPassword', forgotPassword)

// Route for reset the password
router.patch('/auth/requestResetPassword' , resetPassword )

// Route for added a new user
router.post('/users', isAuth, (req, res, next)=> checkRole(["Super Admin"], req, res, next),
validateRequestUser ,addUser) 

// Disable User
router.patch( '/users/toggle-enable/:id',isAuth,(req, res, next)=> checkRole(['Super Admin'], req, res, next), 
validorId, toggleEnableUser );

// Route for the display all users
router.get('/users', isAuth, (req, res, next)=> checkRole(["Super Admin"], req, res, next), 
getUsers)

// route for displaying the information of a user whose identifier is known
router.get('/users/:id', isAuth, (req, res, next)=> checkRole(["Super Admin"], req, res, next), 
validorId, getUserById)     
// router.get('/users/:id', getUserById)  

// Route for deletion of a well-defined user
router.delete('/users/:id',isAuth,(req, res, next)=> checkRole(["Super Admin"], req, res, next),
validorId, deleteUser)

// Updating a user for which the identifier is known
router.put('/users/:id', isAuth, (req, res, next)=> checkRole(['Super Admin','Director', 'Administration Director', 'Administration Assistant', 'Team Manager', 'Software Enginner'], req, res, next), 
validorId,updateUser)


export default router;