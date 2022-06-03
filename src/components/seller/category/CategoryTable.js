import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axoisInstance, { headers } from "../../../utils/sellerAxois";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
  table: {
    minWidth: 350,
  },
  row: {
    backgroundColor: "grey",
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

const CategoryTable = ({ categories, setCategories }) => {
  const deleteCat = (id) => {
    axoisInstance
      .delete(`/category/${id}`, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        axoisInstance
          .get("/category/all")
          .then((res) => {
            setCategories(res.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
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
            <TableRow className={classes.row}>
              <TableCell>
                <b>Name </b>
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row" style={{height: "44px", textTransform: 'capitalize'}}>
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button variant="outlined" startIcon={<DeleteIcon />}
                    className={classes.btn}
                    onClick={() => deleteCat(row._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CategoryTable;
