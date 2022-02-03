// const { json } = require("body-parser");
const express = require ("express");
const mongoose = require("mongoose");
const router = require("./routes/apartments.route")


require("dotenv").config();

const app = express();
const PORT = 2022;


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

app.use("/api/v1", router)

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