// src/components/Navbar.tsx
import { Button, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useState } from "react";
import AuthModal from "./AuthModal"; // Ensure correct casing in the import

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#282828" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Quel "
          </Typography>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Service</Button>
          <Button color="inherit">Pages</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" variant="outlined" sx={{ ml: 2 }}>
            Explore Properties
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ ml: 2 }}
            onClick={() => setOpen(true)}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>

      {/* Authentication Modal */}
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}

export default Navbar;
