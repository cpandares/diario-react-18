import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { changeShow } from "../../store/ui/uiSlice";

export const NavBar = ({ drawerWidth=240 }) => {

    const dispatch = useDispatch();

    const handleLogut = ()=>{
        dispatch(startLogout())
    }

    const handleShowSide = ()=>{
      dispatch(changeShow())
    }

  return (
    <AppBar     
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
        }}
    >
      <Toolbar>
        <IconButton
          color="inherit"         
          edge="start"
          sx={{
            mr: 2,
            
          }}
          onClick = { ()=>handleShowSide() }
        >
          <MenuOutlined />
        </IconButton>

        <Grid 
          container 
          direction="row" 
          justifyContent="space-between">
          <Typography 
          variant="h6" 
          noWrap 
          component="div" 
          alignItems="center">
             Diary app
          </Typography>

          <IconButton 
            onClick = { handleLogut }
          color="error">
            <LogoutOutlined 
                
            />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
