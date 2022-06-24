import { NoteView, NothingSelectedView } from "../views/";
import JournalLayout from "../layout/JournalLayout";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eaque vero harum voluptatum non blanditiis ducimus delectus consectetur sed optio iusto repellat iure quo, animi omnis voluptate similique necessitatibus quod.
            </Typography> */}

       <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;
