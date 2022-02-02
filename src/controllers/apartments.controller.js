const apartments = require("../models/apartments.model");

exports.addApartments = async (req, res, next) => {
    try {
        const {aptImage, emailAddress, apartmentName, address} = req.body;

        const newApartment = new apartments({ 
            aptImage, 
            emailAddress, 
            apartmentName, 
            address
         });
        await newApartment.save();
        
        return res.status(201).json({
            success: true,
            newApartment,
        })
     }
     catch (error) {
         return res.status(500).json({
             success: false,
             message: "error",
         })
        
        }
    }
