// src/components/AuthModal.tsx
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleAuth = () => {
    if (isRegister && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`${isRegister ? "Registered" : "Logged in"} successfully!`);
    onClose(); // Close the modal after authentication
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
          {isRegister ? "Create an Account" : "Sign In"}
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister && (
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAuth}
        >
          {isRegister ? "Register" : "Login"}
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 2, textAlign: "center", cursor: "pointer" }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Sign in"
            : "Don't have an account? Register"}
        </Typography>
      </Box>
    </Modal>
  );
};

export default AuthModal;
