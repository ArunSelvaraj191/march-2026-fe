import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("Name :::", event.target.name);
    console.log("Value :::", event.target.value);
    setUserDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    console.log("User Details :::", userDetails);
  };

  useEffect(() => {
    console.log("Register Mounted");
  }, []);

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Register Page
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        placeholder="Enter Your Username"
        name="username"
        value={userDetails.username}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        placeholder="Enter Your Email"
        name="email"
        value={userDetails.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        name="password"
        value={userDetails.password}
        onChange={handleChange}
        placeholder="Enter Your Password"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleClick}
      >
        Register
      </Button>
      <Button
        variant="text"
        color="primary"
        fullWidth
        onClick={() => navigate("/login")}
      >
        Already have an account? Login
      </Button>
    </Box>
  );
};
export default Register;
