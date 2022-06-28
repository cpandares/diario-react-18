import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

import { SideBar, NavBar } from "../components/";


const drawerWidth = 240;

const JournalLayout = ({ children }) => {

    const { show } = useSelector(state=>state.ui)

    return (
        <Box sx={{ display:'flex' }}>

            {
                show 
                ?
                <NavBar 
                    drawerWidth = { drawerWidth }
                />
                :
                <NavBar  drawerWidth = {'100%' }/> 
            }
            
            {
                show &&
                <SideBar 
                    drawerWidth={ drawerWidth }
                />

            }
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