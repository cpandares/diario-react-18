import { useDispatch } from 'react-redux'

import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useMemo } from "react";
import { setActive } from "../../store/journal";

const SidebarItem = ({ title, body, id,date,imageUrls=[] }) => {
   
    const dispatch = useDispatch()
    const newTitle = useMemo(()=>{
        return title.length > 17
        ?
        title.substring(0,17) + '...'
        :
        title

    },[title]);

    const handleActive = ()=>{
        dispatch(setActive({title, body, id,date,imageUrls}))
    }

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick = { ()=>handleActive(title, body, id) }
      >
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText
            secondary={body}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
