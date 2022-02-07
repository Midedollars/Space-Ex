// const { json } = require("body-parser");
const express = require ("express");
const mongoose = require("mongoose");
const multer = require("multer");
const apartrRouter = require("./routes/apartments.route")
const userRouter = require('./routes/users.route')


require("dotenv").config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());



const connectdb = async ()=> {
    try {
        await mongoose.connect(
            process.env.DATABASE_URI,
        
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
console.log("Gingo");
    }  
    catch (error) {
        console.log(error);
        console.log('Data is not connected');
    }
}
connectdb();

app.use("/api/v1/apartment", apartrRouter)
app.use('/api/v1/user', userRouter)

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});



// const connectDB = async () => {
//     try {
//       await mongoose.connect(
//         "mongodb+srv://space-ex:12345@cluster0.kh4cu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//         {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         }
//       );
//       console.log("Database is connected");
//     } catch (error) {
//       console.log(error);
//       console.log(`Database Not Connected`);
//     }
//   };
  
//   connectDB();