import { InputAdornment, makeStyles, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import axoisInstance from "../utils/axois";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    height: "130px",
    padding: "20px",
    paddingTop: "10px",
    paddingLeft: "11%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    alignItems: "center",
    borderBottom: "2px solid whitesmoke",
  },
  search: {
    paddingTop: "10px",
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: "10px",
    padding: "10px",
    
    border: "1.5px solid #24A0ED",
    borderRadius: "2px",
    width: "93%",
  },
  searchIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  cart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "2%",
  },
  icons: {
    borderRadius: "250px",
    paddingTop: "30px",
    marginTop: "20px",
    color: "black",
    cursor: "pointer",
    height: "100px",
  },
}));
const SearchArea = ({ setIsLogged, setProduct }) => {
  const [query, setQuery] = useState("");

  const searchProducts = () => {
    if (!query) {
      return;
    }
    axoisInstance.get(`/product/search/${query}`).then((res) => {
      setProduct(res.data);
      setQuery("");
    });
  };

  const classes = useStyles();
  return (
    <div className={classes.searchContainer}>
      <div className={classes.search}>
        <TextField type="text"
          className={classes.input}
          placeholder="Search Properties"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps ={{
          endAdornment: (
          <InputAdornment position="start">
          <SearchIcon className={classes.searchIcon} onClick={searchProducts} />
          </InputAdornment> 
          )
          }}
          />
      </div>

      <div className={classes.cart}>
       

        {localStorage.getItem("JWTUSER") === undefined ||
        !localStorage.getItem("JWTUSER") ? (
          <div style={{ marginLeft: "15%" }}>
            <Tooltip title="Login">
              <Link to="/login">
               
                <Icon  className={classes.icons} icon="mdi:login"  width="40" height="40" />
              </Link> 
            </Tooltip>
          </div>
        ) : (
          <div style={{ marginLeft: "15%" }}>
            <Tooltip title="Logout">
              <Icon icon="carbon:logout"  width="40" height="40" 
                className={classes.icons}
                onClick={() => {
                  setIsLogged(false);
                  localStorage.removeItem("JWTUSER");
                  window.location.reload();
                }}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchArea;
