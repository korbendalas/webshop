import React, { useState } from "react";
import { Formik } from "formik";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, TextField, IconButton } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { ImageUpload } from "@oss/components/common/imageUpload";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: { display: "flex", flexDirection: "column", alignItems: "center" },
    root: {
      width: "60%",
    },
    form: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    button: {
      margin: theme.spacing(1),
      width: "10%",
    },
    input: {
      display: "none",
    },
  }),
);

export const AddProduct = () => {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  return (
    <div className={classes.wrap}>
      <div className={classes.root}>
        <h1>Add Product</h1>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: "",
            img: "",
            description: "",
            brand: "",
            category: "",
            price: null,
            countInStock: 0,
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit} className={classes.form} noValidate autoComplete="off">
              <TextField
                style={{ width: "100%" }}
                error={false}
                label="Product title"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />

              <TextField
                name="description"
                error={false}
                style={{ width: "100%" }}
                label="Product description"
                helperText="Incorrect entry."
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.description}
                multiline
                variant="outlined"
              />
              <TextField
                name="brand"
                style={{ width: "100%" }}
                label="Product brand"
                helperText="Incorrect entry."
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.brand}
                variant="outlined"
              />

              <TextField
                name="category"
                style={{ width: "100%" }}
                label="Product category"
                helperText="Incorrect entry."
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.category}
                variant="outlined"
              />
              <TextField
                name="price"
                style={{ width: "100%" }}
                label="Product price"
                helperText="Incorrect entry."
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.price}
                variant="outlined"
              />
              <TextField
                name="img"
                style={{ width: "100%" }}
                label="Enter product image URL"
                // helperText="Incorrect entry."
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.img}
                variant="outlined"
              />
              <p>OR</p>
              <p>Upload image</p>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                onChange={e => setImage(e.target.files[0])}
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>

              <ImageUpload />
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
