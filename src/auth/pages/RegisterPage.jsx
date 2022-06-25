import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Alert, Button, Grid, Link, TextField } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startSaveUserEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";

const initial = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email is invalid"],
  password: [(value) => value.length >= 6, "password must have 6 characters"],
  displayName: [(value) => value.length >= 1, "Name is required"],
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state=>state.auth);
  const isCheckingAuth = useMemo(()=>status === 'checking', [status])
  const [ formSubmited, setFormSubmited ] = useState(false)
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(initial, formValidations);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true)
    if(!isFormValid) return;
    dispatch(startSaveUserEmailPassword(formState))
  };


  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ my: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Your Name"
              fullWidth
              autoComplete="off"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ my: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email"
              fullWidth
              autoComplete="off"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ my: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            ></TextField>
          </Grid>

          <Grid 
            container 
            spacing={2} sx={{ my: 2 }}
            display = { !!errorMessage ? '' : 'none' }
            >
            <Grid 
              item xs={12}
             
              >
              <Alert
                severity="error"
              >
                { errorMessage }
              </Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <Button 
               /*  disabled = { isCheckingAuth } */
                type="submit" 
                variant="contained" 
                fullWidth
                >
                Sign up
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Already have an account?
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
