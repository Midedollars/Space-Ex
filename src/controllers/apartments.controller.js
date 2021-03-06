const Apartment = require("../models/apartments.model");


// creating data for apartment
exports.addApartments = async (req, res, next) => {
    try {
        const {emailAddress, apartmentName, address} = req.body;
        const {filename} = req.file;
        if (!emailAddress || !apartmentName || !address || !filename) {
        return res.status(400).json({
         message: "Please fill all the required field",
        });
        }

        const newApartment = new Apartment({ 
            aptImage:filename, 
            emailAddress, 
            apartmentName, 
            address
         });
        await newApartment.save();
        
        return res.status(201).json({
            // success: true,
            newApartment,
        });
     }
     catch (error) {
       console.log(error)
         return res.status(500).json({
             success: false,
             message: error.message,
         })
        
        }
    }


// update apartment
    exports.updateApartmentsInfo = async (req, res, next) => {
        try {
          const { _id } = req.params;
          const ApartmentsUpdate = await apartments.findOneAndUpdate({ _id: _id }, req.body, {
            new: true,
          });
          return res.status(200).json({
            // success: true,
            ApartmentsUpdate,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      };


// getting a single apartment with users unique email address
    exports.fetchSingleApartments = async (req, res, next) => {
        try {

          const { emailAddress } = req.params;
         
          const singleApartments = await apartments.findOne({emailAddress});
          if (!singleApartments) {
            return res.status(404).json({
              message: "Apartment Not Found!",
            });
          }
          return res.status(200).json({
            success: true,
            singleApartments,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: error.messsage,
          });
        }
      };



// getting the data of all registered apartments
    exports.fetchApartments = async (req, res, next) => {
        try {
          const allApartments = await apartments.find();
          return res.status(200).json({
            success: true,
            allApartments,
          });
        } catch (error) {
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      };


      


    
      




