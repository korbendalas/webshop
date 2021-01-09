import React, { useState } from "react";
import { Formik } from "formik";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, TextField, IconButton } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { useImageUpload } from "@oss/hooks/useImageupload";
import Dashboard from "@uppy/react/lib/Dashboard";
import { createProduct } from "@oss/services/endpoints/products";
import { useMutation } from "react-query";

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
  const { uppy, url } = useImageUpload({});
  const { mutate } = useMutation(createProduct, {
    onSuccess: async response => {
      console.log("I'm first!", response);
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });

  return (
    <div className={classes.wrap}>
      <div className={classes.root}>
        <h1>Add Product</h1>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: "",
            img: url,
            description: "",
            brand: "",
            category: "",
            price: null,
            countInStock: 0,
          }}
          onSubmit={(values, actions) => {
            mutate(values);
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

              <Dashboard
                // width={200}
                // height={400}
                replaceTargetContent={true}
                showProgressDetails={true}
                uppy={uppy}
                inline={true}
                plugins={["ImageEditor"]}
                // note={description}
                // locale={{ strings: { dropPasteImport: `${title} %{browse}` } }}
                metaFields={[{ id: "name", name: "Name", placeholder: "file name" }]}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                type="submit"
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
