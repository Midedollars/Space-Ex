const apartments = require("../models/apartments.model");

exports.addApartments = async (req, res, next) => {
    try {
        const {emailAddress, apartmentName, address} = req.body;

        const {filename} = req.file

        const newApartment = new apartments({ 
            aptImage:filename, 
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
       console.log(error)
         return res.status(500).json({
             success: false,
             message: "error",
         })
        
        }
    }



    exports.updateApartmentsInfo = async (req, res, next) => {
        try {
          const { _id } = req.params;
          const ApartmentsUpdate = await apartments.findOneAndUpdate({ _id: _id }, req.body, {
            new: true,
          });
          return res.status(200).json({
            success: true,
            ApartmentsUpdate,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: "Server Error",
          });
        }
      };



    exports.fetchSingleApartments = async (req, res, next) => {
        try {

          const { emailAddress } = req.params;
         
          const singleApartments = await apartments.findOne({emailAddress});
          if (!singleApartments) {
            return res.status(404).json({
              success: false,
              unique: true,
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
            message: "Server Error",
          });
        }
      };




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
            message: "Server Error",
          });
        }
      };


      


    
      




