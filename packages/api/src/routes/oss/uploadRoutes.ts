import express from "express";
import multer from "multer";
import path from "path";
import { buildStaticHostLink } from "../../helpers/buildHostLink";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/images/");
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname.toLowerCase()));
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images Only");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

uploadRouter.post("/", upload.single("image"), (req: any, res) => {
  // res.send({ url: `${buildStaticHostLink({ req })}/${req.file.path}` });
  res.send({ url: `/${req.file.path}` });
});

export { upload };

export default uploadRouter;
