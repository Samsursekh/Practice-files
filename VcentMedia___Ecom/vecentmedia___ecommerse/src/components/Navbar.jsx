import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
      <Stack direction="row" spacing={10} justifyContent='center' alignItems={'center'} height='70px'>
          <Link to="/add" style={{ textDecoration: 'none' }}>
            <Typography  color="white"   component="p" sx={{ flexGrow: 1 }}>
              ADD PRODUCT
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography color="white" component="p" sx={{ flexGrow: 1 }}>
              SIGN UP
            </Typography>
          </Link>
          <Link to="/all" style={{ textDecoration: 'none' }}>
            <Typography color="white" component="p" sx={{ flexGrow: 1 }}>
             ALL PRODUCTS
            </Typography>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Typography color="white" component="p" sx={{ flexGrow: 1 }}>
              LOGIN
            </Typography>
          </Link>
          </Stack>
      </AppBar>
    </Box>
  );
};

export default Navbar;