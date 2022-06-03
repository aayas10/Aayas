import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Icon } from '@iconify/react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import axoisInstance from "../../utils/axois";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
    color: "black",
    padding: 50,
    borderRadius: 15,
    marginBottom: 25,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#00BFFF !important",
    textTransform: "none",
  },
}));

const Login = ({ isLogged, setIsLogged }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    axoisInstance
      .post("/buyer/login", user)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("JWTUSER", response.data.token);
        setEmail("");
        setPassword("");
        setError("");
        setIsLogged(true);
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        setIsLogged(false);
        setError(err.response.data.message);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in as Buyer
        </Typography>
        <p align="center" style={{ color: "red" }}>
          {error}
        </p>
        <form className={classes.form} onSubmit={loginUser} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Black"
            className={classes.submit}
          >
            <Icon icon="arcticons:lock" color="Red" width="30" />
           Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                to="seller/login"
                variant="body2"
                style={{ color: "#3A8057" }}
              >
                Seller?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" style={{ color: "#3A8057" }} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
