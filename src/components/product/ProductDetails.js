import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axoisInstance, { API_URL, headers } from "../../utils/axois";

import Comment from "./Comment";
const useStyles = makeStyles((theme) => ({
  productDetails: {
    background: "#F8F8FF",
    paddingTop: "25px",
    height: "auto",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "100px",
  },
  Map: {
    height: "300px",
    marginLeft: "20px",
    width: "300px",
  },
  detailsContent: {
    display: "flex",
    justifyContent: "space-around",
    background: "#Fdfcfa",
    marginTop: "30px",
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  AboutUs:{
    marginTop: "20px",
    height: "100px",
    width: "100px"
  },
  productImage: {
    height: "auto",
    width: "400px",
    objectFit: "contain",
    marginTop: "10px",
  },
}));
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const classes = useStyles();
  const { id } = useParams();
  const [uid, setUid] = useState("");

  

  const containerStyle = {
    width: '100%',
    height: '100%'
  }
 
  useEffect(() => {
    axoisInstance
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

  useEffect(() => {
    axoisInstance
      .get(`/product/single/${id}`)
      .then((product) => {
        setProduct(product.data);
      })
      .catch((err) => {
        console.log(err.response?.data?.message);
      });
  }, [id]);

  return (
    <div className={classes.productDetails}>
      {!product.PropertyTitle ? (
        <Typography variant="body2" color="textSecondary" align="center">
          Property Not found
        </Typography>
      ) : (
        <>
          <p align="center" style={{fontWeight: "bold"}}>Home / Property/ {product.PropertyTitle}</p>
          <div className={classes.detailsContent}>
            <div>
              <a href={`${API_URL}/image/${product?.ProductImage}`}>
                <img
                  src={`${API_URL}/image/${product?.ProductImage}`}
                  alt={product?.PropertyTitle}
                  className={classes.productImage}
                />
              </a>
            </div>

            <div style={{ marginLeft: "2%", marginTop: "25px" }}>
              <h1>{product.PropertyTitle}</h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography gutterBottom={false} variant="h6" component="h6">
                  Rs {product.ProductPrice}
                </Typography>

                <Button
                  style={{
                    background: "#24a0ed",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "20px",
                  }}
                >
                  <Icon icon="ant-design:like-twotone" width="30"/>
                  {product.likes.length}
                </Button>

                <Button
                  style={{
                    background: "#FFA07A",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "20px",
                  }}
                >
                  <Icon icon="codicon:comment" width="30" />
                  {product.comments.length}
                </Button>
              </div>

              <Typography style={{fontWeight: "bold", height: "44px", textTransform: 'capitalize', marginBottom:"10px"}}

                variant="h8"
                color="textSecondary"
                component="p"
              >
                <b>Room:</b> {product.Room} rooms
                <br></br>
                Address: {product.PropertyAddress}
                <br></br>
                <br></br> 
                
              </Typography>
              <Typography style={{fontWeight: "bold", height: "44px", textTransform: 'capitalize', textAlign: 'justify', marginTop:"20px"}}
                // style={{ height: "44px" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {product.ProductDescription}
                
              </Typography>
              {/* <Typography style={{marginTop:"130px"}}>
              <Link
                to='/GoogleMap'
                style={{ color: "Red" }}
              >
                Google Map Location
              </Link>
              </Typography> */}
            </div>
            <div className="tab-pane fade" id="review" style={{ height: "600px" }} role="tabpanel" aria-labelledby="review-tab">
                  
                  
                  <Map google={product.google}
                    containerStyle={containerStyle}
                    zoom={14}
                    center={
                      {
                        lat: product.latitude,
                        lng: product.longitude
                      }
                    }
                  >
                    <Marker
                      position={{ lat: product.latitude, lng: product.longitude }} />
                    <Marker />
                  </Map>

                </div>
                
          </div>
                    
        <div>
          <Comment
            form={false}
            product={product}
            setProduct={setProduct}
            uid={uid}
            
          />
          </div>
          
         
        </>
        
      )}
    </div>
  );                             
};


export default  GoogleApiWrapper({
  apiKey: ("AIzaSyBuOHeyKTqtlHdi2KRSmafMih_5O-OGIfM")
 })(ProductDetails);

