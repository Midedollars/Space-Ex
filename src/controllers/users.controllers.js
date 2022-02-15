const users = require("../models/users.model");


// creating data for users
exports.addUsers = async (req, res, next) => {
    try {
        const {firstName, lastName, email, phoneNumber} = req.body;
        if (!firstName || !lastName || !email || !phoneNumber) {
            return res.status(400).json({
             message: "Please fill all the required field",
            });
            }
    

        const newUser = new users({ 
            firstName, 
            lastName,
            email, 
            phoneNumber
         });
        await newUser.save();
        
        return res.status(201).json({
            success: true,
            newUser,
        })
     }
     catch (error) {
         return res.status(500).json({
             success: false,
             message: error.message,
         })
        
        }
    }


// count total numbers of registered users
    exports.countUsers = async (req, res, next) => {
        try {
            // const {firstName, lastName, email, phoneNumber} = req.body;
    
            const count = await users.countDocuments()
            
            return res.status(200).json({
                // success: true,
                count,
            })
         }
         catch (error) {
             return res.status(500).json({
                 success: false,
                 message: error.message,
             })
            
            }
        }