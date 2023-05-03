import mongoose from 'mongoose'

// Url of your project in mongoDBCompass
const urlCompass = "mongodb://localhost:27017/employeesManagement"

//Connect with your project
export const connectDB = () => {
    mongoose.set('strictQuery',false)
mongoose.connect(urlCompass)
    .then(() =>
        console.log("successful connexion DB"));
    
}
