const multer = require("multer");
const path = require("path");

// multer config options
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg" && ext !== ".PNG") {
      cb("File Type is not supported", false);
      return;
    }
    cb(null, true);
  },
});