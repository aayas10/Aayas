import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axoisInstance, { API_URL, headers } from "../../../utils/sellerAxois";
import CloseIcon from "@material-ui/icons/Close";
import EditProduct from "./EditProduct";
import EditProductImage from "./EditProductImage";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    display: "flex",
    background: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
  table: {
    minWidth: 350,
  },
  tablerow: {
    backgroundColor: theme.palette.info.light,
  },
  btn: {
    textTransform: "none",
    background: "#FF6347",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
}));

const ProductTable = ({ product, setProduct, action }) => {
  const [eid, setEId] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openImage, setOpenImage] = React.useState(false);

  const handleClickOpenImage = (id) => {
    setOpenImage(true);
    setEId(id);
  };

  const handleCloseImage = () => {
    setOpenImage(false);
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setEId(id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const deleteCat = (id) => {
    axoisInstance
      .delete(`/product/delete/${id}`, {
        headers: headers,
      })
      .then((response) => {
        if (
          localStorage.getItem("type") === undefined ||
          localStorage.getItem("type") === "admin"
        ) {
          axoisInstance
            .get("/product/showall", {
              headers: headers,
            })
            .then((res) => {
              setProduct(res.data);
            })
            .catch((err) => {
              console.log(err.response.data);
            });
        } else {
          axoisInstance
            .get("/product/seller/showall", {
              headers: headers,
            })
            .then((res) => {
              setProduct(res.data);
            })
            .catch((err) => {
              console.log(err.response.data);
            });
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const classes = useStyles();
  return (
    
    <div className={classes.tableContainer}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tablerow}>
              <TableCell>
                <b>Name </b>
              </TableCell>
              <TableCell>
                <b>Description </b>
              </TableCell>
              <TableCell>
                <b>Price </b>
              </TableCell>
              <TableCell>
                <b>Bidded</b>
              </TableCell>
              <TableCell>
                <b>Likes </b>
              </TableCell>
              <TableCell>
                <b>Comments </b>
              </TableCell>
              <TableCell>
                <b>Image </b>
              </TableCell>
              <TableCell>  
              </TableCell>
              <TableCell>   
              </TableCell>
              <TableCell>   
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.PropertyTitle}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.ProductDescription.substring(0, 25)}
                  {row.ProductDescription.length > 50 && "..."}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.ProductPrice}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.ProductSold === 0 ? "no" : "yes"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.likes.length}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.comments.length}
                </TableCell>

                <TableCell component="th" scope="row">
                  <a
                    href={`${API_URL}/image/${row.ProductImage}`}
                    target="_blank"
                    alt={row.PropertyTitle}
                    rel="noreferrer"
                  >
                    <img
                      src={`${API_URL}/image/${row.ProductImage}`}
                      height="200"
                      width="200"
                      style={{ objectFit: "contain" }}
                      alt={row.PropertyTitle}
                    />
                  </a>
                </TableCell>

                {action && (
                  <>
                    <TableCell component="th" scope="row">
                      <Button variant="outlined" startIcon={<DeleteIcon />}
                        className={classes.btn}
                        onClick={() => deleteCat(row._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Button variant="outlined" startIcon={< EditIcon/>}
                        className={classes.btn}
                        onClick={() => handleClickOpen(row._id)}
                      >
                        Edit
                      </Button>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Button variant="outlined" startIcon={< EditIcon/>}
                        className={classes.btn}
                        onClick={() => handleClickOpenImage(row._id)}
                      >
                        EditImage
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog box edit---------------- */}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div style={{ display: "flex" }}>
            <div>Edit Property</div>
            <div style={{ flex: 1 }}></div>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <EditProduct eid={eid} setEId={setEId} />
        </DialogContent>
      </Dialog>

      {/* Dialog box edit image---------------- */}

      <Dialog
        onClose={handleCloseImage}
        aria-labelledby="customized-dialog-title"
        open={openImage}
      >
        <DialogTitle
          id="customized-dialog-titleImage"
          onClose={handleCloseImage}
        >
          <div style={{ display: "flex" }}>
            <div>Edit Property Image</div>
            <div style={{ flex: 1 }}></div>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleCloseImage}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <EditProductImage eid={eid} setEId={setEId} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductTable;
