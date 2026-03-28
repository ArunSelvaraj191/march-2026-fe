import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const skills = ["JavaScript", "React", "Node.js", "Python", "Django"];
  const [newProjects, setNewProjects] = useState(null);
  const [projects, setProjects] = useState([]);

  const fetUsers = async () => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    console.log("token :::", token);
    await axios
      .get(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Users Response :::", response);
        if (response.status === 200) {
          setUsers(response.data);
        } else {
          alert("Failed to fetch users! Please try again.");
          setUsers([]);
        }
      })
      .catch((error) => {
        console.error("Users Fetch Error :::", error);
      });
  };

  const handleEdit = (user) => {
    console.log("user :::", user);
    setProjects(user?.projects);
    setSelectedUser(user);
    setOpenEdit(true);
  };

  const handleChange = (event) => {
    setSelectedUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleProjects = (event) => {
    const { name, value } = event.target;
    setNewProjects((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    setProjects((prev) => [...prev, newProjects]);
    setNewProjects(null);
  };

  const handleSave = async () => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const payload = {
      ...selectedUser,
      projects: projects,
    };
    delete payload?._id;
    const response = await axios.put(
      `${BASE_URL}/users/${selectedUser._id}`,
      payload,
    );
    if (response.status == 200) {
      alert(response.data.message);
      setOpenEdit(false);
      fetUsers();
    }
    console.log("Update response :::", response);
  };

  const handleDelete = async (id) => {
    console.log("Delete user", id);
    const BASE_URL = import.meta.env.VITE_API_URL;
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    if (response.status == 200) {
      alert(response.data.message);
      fetUsers();
    }
  };

  useEffect(() => {
    fetUsers();
  }, []);
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Users Page
      </Typography>

      <Box>
        {users.length === 0 ? (
          <Typography variant="h6" component="p">
            No users found.
          </Typography>
        ) : (
          users.map((user) => (
            <Card key={user._id} sx={{ marginBottom: 2, padding: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography variant="h6" component="h2">
                    {user.username}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Email: {user.email}
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    color="primary"
                    aria-label="edit user"
                    onClick={() => handleEdit(user)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="delete user"
                    onClick={() => handleDelete(user._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          ))
        )}
      </Box>
      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <Box>
            <Typography variant="h5" component="h2">
              Edit User
            </Typography>
            <IconButton
              color="secondary"
              aria-label="cancel popup"
              onClick={() => setOpenEdit(false)}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CancelIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedUser ? (
            <Box>
              <Typography variant="body1" component="p">
                Email: {selectedUser.email}
              </Typography>
              <TextField
                label="Username"
                name="username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={selectedUser.username}
                onChange={handleChange}
              />
              <Select
                label="Skills"
                name="skills"
                variant="outlined"
                fullWidth
                margin="normal"
                multiple
                value={selectedUser.skills || []}
                onChange={handleChange}
              >
                {skills.map((skill) => (
                  <MenuItem key={skill} value={skill}>
                    {skill}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                label="Projects"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProjects?.name || ""}
                onChange={handleProjects}
              />
              <TextField
                label="Description"
                name="description"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProjects?.description || ""}
                onChange={handleProjects}
              />
              {projects?.map((project) => (
                <Box>
                  <Typography variant="body">
                    {project?.name} - {project?.description}
                  </Typography>
                </Box>
              ))}
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddProject}
                >
                  Add Project
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={handleSave}
                >
                  Update Changes
                </Button>
              </Box>
            </Box>
          ) : (
            <Typography variant="h6" component="h2">
              No user selected.
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Users;
