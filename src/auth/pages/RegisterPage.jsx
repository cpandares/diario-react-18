import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const initial = {
  displayName:"enrique",
  email: "enrique@gmail.com",
  password: "123456",
}

const RegisterPage = () => {

  const { displayName, email, password, formState, onInputChange } = useForm(initial);

  

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formState)
  }
  return (
    <AuthLayout title="Register">
      <form
      onSubmit={ handleSubmit }
      >
        <Grid container>
        <Grid item xs={12} sx={{ my: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Your Name"
              fullWidth
              autoComplete="off"
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
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
              value={ email }
              onChange={ onInputChange }
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ my: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} >
              <Button type="submit" variant="contained" fullWidth>
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
