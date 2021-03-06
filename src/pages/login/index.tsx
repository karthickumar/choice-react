import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useCookies } from "react-cookie";
import { useLoginAPI } from "../../api/user/userAPI";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import LoadingGauage from "../../components/LoadingGauage/index";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Choice Shopy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
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
  },
}));

function SignIn(props: any) {
  const classes = useStyles();

  const [cookies, setCookie] = useCookies(["isLoggedin"]);
  const { user = {}, isLoading = false, login = () => {} } = useLoginAPI();
  const [isToastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    console.log("[user] -", user);
    if (Object.keys(user).length) {
      console.log("[User Details] - ", user);
      if (user?.uid) {
        setCookie("isLoggedin", true);
        props.history.push("/home");
      } else if (user?.error) {
        setToastOpen(true);
      }
    }
  }, [user]);

  const onLoginSubmit = (event: any) => {
    event.preventDefault();
    const email = event?.target?.email?.value;
    const password = event?.target?.password?.value;

    if (email && password) {
      login({ email, password });
    }
    //props.history.push("/home");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {isLoading && <LoadingGauage showProgress={false} />}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onLoginSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isToastOpen}
        onClose={() => setToastOpen(false)}
      >
        <Alert variant="filled" severity="error">
          {user?.error}
        </Alert>
      </Snackbar>
    </Container>
  );
}
export { SignIn };
export default SignIn;
