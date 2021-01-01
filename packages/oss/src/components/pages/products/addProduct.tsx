import React from "react";
import { Formik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "50% ",
      margin: "0 auto",
    },
    formField: {
      width: "100%",
    },
  }),
);

export const AddProduct = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ name: "Dabe" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <Form className={classes.root} noValidate autoComplete="off">
          <div className={classes.form}>
            <TextField className={classes.formField} id="productName" name="name" label="Outlined" variant="outlined" />
            <TextField className={classes.formField} id="productName" name="name" label="Image" variant="outlined" />
            <TextField className={classes.formField} id="productBRand" name="brand" label="Brand" variant="outlined" />
            <TextField
              className={classes.formField}
              id="category"
              name="category"
              label="Category"
              variant="outlined"
            />
            <TextField className={classes.formField} id="price" name="price" label="Price" variant="outlined" />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit" //className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
// user: {
//   type: Schema.Types.ObjectId,
//       required: true,
//       ref: "user",
// },
// name: { type: String, required: true },
// image: { type: String, unique: true },
// brand: { type: String, required: true },
// category: { type: String, required: true },
// description: { type: String, required: true },
// reviews: [reviewSchema],
//     rating: { type: Number, required: true, default: 0 },
// numOFReviews: { type: Number, required: true, default: 0 },
// price: { type: Number, required: true, default: 0 },
// countInStock: { type: Number, required: true, default: 0 },
