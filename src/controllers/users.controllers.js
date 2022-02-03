const users = require("../models/users.model");

exports.addUsers = async (req, res, next) => {
    try {
        const {firstName, lastName, email, phoneNumber} = req.body;

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
             message: "error",
         })
        
        }
    }



    exports.addUsers = async (req, res, next) => {
        try {
            const {firstName, lastName, email, phoneNumber} = req.body;
    
            const count = new users({ 
                firstName, 
                lastName,
                email, 
                phoneNumber
             });
            await newUser.countUsers();
            
            return res.status(201).json({
                success: true,
                count,
            })
         }
         catch (error) {
             return res.status(500).json({
                 success: false,
                 message: "error",
             })
            
            }
        }