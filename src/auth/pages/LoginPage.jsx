import { useDispatch,useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingStatus, startGoogleSignIn } from "../../store/auth/thunks";
const LoginPage = () => {

    const dispatch = useDispatch();
    const { status } = useSelector(state=>state.auth)
    const { email, password, formState, onInputChange } = useForm({
      email:'cesar@cear.com',
      password:'123'
    })

  

    const handleSubmit = (e)=>{
      e.preventDefault();

      console.log({email,password})
      dispatch(checkingStatus())
    }

    const signInWithGoogle = ()=>{
        dispatch(startGoogleSignIn() )
        console.log("google")
    }

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={ handleSubmit }
      >
        <Grid container>
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
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              {
                status === 'authenticated'
                ?
                <Button disabled variant="contained" fullWidth type="submit">
                  Login
                </Button>
                :
            <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
              }
             
            </Grid>

            <Grid item xs={12} sm={6}>
              {
                 status === 'authenticated'
                 ?
                 <Button disabled variant="contained" fullWidth onClick={signInWithGoogle}>
                 <Google />
                 <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
                 :
                 <Button variant="contained" fullWidth onClick={signInWithGoogle}>
                 <Google />
                 <Typography sx={{ ml: 1 }}>Google</Typography>
               </Button>
              }
             
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crea Una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
