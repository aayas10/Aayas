import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import Categories from "../Categories";
import Product from "../product/Product";
import axois, { headers } from "../../utils/axois";
import SearchArea from "../SearchArea";
import 'react-toastify/dist/ReactToastify.css';
// import NewsLetter from "../NewsLetter";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  productContainer: {
    paddingLeft: "5%",
    paddingRight: "5%",
    background: "#F7F8F9",
    paddingTop: "10px",
    paddingBottom: "15px",
    borderBottom: "2px solid whitesmoke",
  },
  footer: {
    position: "absolute",
    bottom: "0px",
  },
}));

const Home = ({ isLogged, setIsLogged }) => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [uid, setUid] = useState("");

  useEffect(() => {
    axois
      .get("/category/all")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  useEffect(() => {
    axois
      .get("/product/showall")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response?.data?.message);
      });
  }, []);

  useEffect(() => {
    axois
      .get("buyer/profileByToken", {
        headers: headers,
      })
      .then((res) => {
        setUid(res?.data?._id);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err?.response?.data);
      });
  }, []);

  const classes = useStyles();
  return (
    <div>
      <SearchArea
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        setProduct={setProduct}
      />
      <Banner />
      <Categories
        categories={categories}
        product={product}
        setProduct={setProduct}
      />
      {product.length === 0 && (
        <Typography align="center" style={{ color: "red", fontWeight: "bold" }}>
          Properties Not found
        </Typography>
      )}
      <div className={classes.productContainer}>
        <Grid container>
          {product.map((product) => {
            return (
              <Grid key={product._id} item lg={3} md={4} sm={6} xs={12}>
                <Product setProduct={setProduct} product={product} uid={uid} />
              </Grid>
            );
          })}
        </Grid>
      </div> 
    </div>
  );
};

export default Home;
