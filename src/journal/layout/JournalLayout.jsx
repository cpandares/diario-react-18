import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import { SideBar, NavBar } from "../components/";


const drawerWhidth = 240;

const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display:'flex' }}>
            <NavBar 
                drawerWhidth = { drawerWhidth }
            />
            
            <SideBar drawerWidth={ drawerWhidth } />

            <Box 
                component="main"
                sx={{ flexGrow:1, p:3 }}
                >

            <Toolbar />
                
                { children }

            </Box>
        </Box>
    );
};

export default JournalLayout;