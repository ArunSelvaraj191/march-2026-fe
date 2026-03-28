import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    setUserDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async () => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    console.log("User Details :::", userDetails);
    await axios
      .post(`${BASE_URL}/users/login`, userDetails)
      .then((response) => {
        console.log("response ::::", response);
        if (response?.status == 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user[0]));
          alert(response.data.message);
          navigate("/");
        }
      })
      .catch((error) => {
        alert("User Invalid");
      });
  };

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log("Axios Response :::", response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    console.log("Email Changed :::", userDetails.email);
  }, [userDetails.email]);

  useEffect(() => {
    console.log("Login Mounted");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log("Users :::", data))
      .catch((error) => console.error("Error fetching users:", error));
    fetchData();
    return () => {
      console.log("Login Unmounted");
    };
  }, []);

  return (
    <Box>
      {users?.length == 0 ? (
        <Typography variant="h4" component="h1" gutterBottom>
          Loading.............
        </Typography>
      ) : (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            Login Page
          </Typography>
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
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="text"
            color="primary"
            fullWidth
            onClick={() => navigate("/register")}
          >
            Don't have an account? Register
          </Button>
          {/* {users.map((user) => {
            return (
              <Box
                key={user.id}
                sx={{
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body1">{user.email}</Typography>
              </Box>
            );
          })} */}
        </>
      )}
    </Box>
  );
};
export default Login;
