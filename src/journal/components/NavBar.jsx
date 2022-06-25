import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const NavBar = ({ drawerWhidth }) => {

    const dispatch = useDispatch();

    const handleLogut = ()=>{
        dispatch(startLogout())
    }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWhidth}px)` },
        ml: { sm: `${drawerWhidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{
            mr: 2,
            display: { sm: "none" },
          }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between">
          <Typography variant="h6" noWrap component="div" alignItems="center">
            Journal App
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
