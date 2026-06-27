/*
/instagram -> (req,res){}
the process in the middle to check if you are cabale of taking the req like if u had logged in or not

(err,req,res,next)
*/
// this middleware will be used whenever we will upload a file
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

export const upload = multer({
  storage: storage,
});
