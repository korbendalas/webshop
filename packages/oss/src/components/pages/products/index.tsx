import React from "react";
import { useQuery, useMutation } from "react-query";
import { getAllProducts, deleteProduct } from "@oss/services/endpoints/products";
import {
  makeStyles,
  ButtonGroup,
  Button,
  Tooltip,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import ErrorBoundary from "@oss/components/error";
import { DeleteButton } from "./deleteButton";

export const AllProducts = React.memo(() => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const { data, refetch } = useQuery("products", getAllProducts);

  console.log("products", data);
  const classes = useStyles();
  return (
    <div style={{ height: 400, width: "100%" }}>
      {/*<Snackbar*/}
      {/*  anchorOrigin={{ vertical: "top", horizontal: "right" }}*/}
      {/*  open={true}*/}
      {/*  // onClose={handleClose}*/}
      {/*  message="I love snacks"*/}
      {/*  key={"hello"}*/}
      {/*/>*/}
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Name&nbsp;</TableCell>
              <TableCell align="right">Count In Stock&nbsp;</TableCell>
              <TableCell align="right">Price&nbsp;</TableCell>
              <TableCell align="right">Description&nbsp;</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.length &&
              data?.data?.slice(0, 10).map(row => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row?._id}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip
                      title={
                        <>
                          <p>Product Image</p> <p>Click to zoom in </p>
                        </>
                      }
                    >
                      <img src={row?.img} width="50px" />
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>

                  <TableCell align="right">{row?.countInStock > 0 ? row?.countInStock : "Out of Stock"}</TableCell>
                  <TableCell align="right">{row?.price}</TableCell>
                  <TableCell align="right">{row?.description}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                      <Tooltip title="Edit">
                        <Button>
                          {" "}
                          <EditIcon color="primary" />
                        </Button>
                      </Tooltip>

                      <Tooltip title="Delete">
                        <DeleteButton id={row._id} onClick={() => refetch()} />
                      </Tooltip>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
});
