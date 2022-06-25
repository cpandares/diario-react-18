import { Grid, Typography } from "@mui/material";

const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
      className="animate__animated animate__fadeIn "
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 4,
          width: { md: 450 },
        }}
      >
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
