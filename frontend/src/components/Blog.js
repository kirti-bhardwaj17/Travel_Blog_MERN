// import { Avatar, CardContent, CardMedia, Typography, Card, CardHeader, Box, IconButton } from "@mui/material";
// import { red } from "@mui/material/colors";
// import { React } from "react";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Blog = ({title,description,imageURL,userName,isUser,id}) => {
//   const navigate = useNavigate();

//   const handleEdit = (e) => {
//     navigate(`/myBlogs/${id}`)
//   };
//   const deleteRequest = async () => {
//     const res = await axios
//       .delete(`http://localhost:4000/api/blog/${id}`)
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };
//   const handleDelete = () => {
//     deleteRequest()
//       .then(() => navigate("/"))
//       .then(() => navigate("/blogs"));
//   };

//   // console.log(title,isUser);
//   return (
//     <div style={{ backgroundImage: "url('https://i.pinimg.com/474x/2b/8c/11/2b8c11ce7a01bf57b95ffcfd60b16553.jpg')", backgroundSize: "cover", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"  }}>
//       <Card sx={{ width: "40%", margin: 'auto', mt: 2, padding: 2, boxShadow: "5px 5px 10px #B09E99", ":hover": { boxShadow: "10px 10px 20px #", bgcolor:'#B09E99' } , bgcolor:'#FEE9E1'}}>
//         {isUser && (
//           <Box display='flex'>
//             <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><ModeEditOutlineIcon/></IconButton>
//             <IconButton onClick={handleDelete}><DeleteForeverIcon/></IconButton>
//           </Box>
//         )}
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: "#F4D35E" }} aria-label="recipe">
//               {userName}
//             </Avatar>
//           }
//           title={title}
//           subheader="September 14, 2016"
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image={imageURL}
//           alt="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">.
//           <b>{userName}</b> {":"} {description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Blog;
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useStyles } from "./utils";
const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  // const classes = useStyles();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:4000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/blogs"));
  };
  return (
    <div style={{ backgroundImage: "url('https://i.pinimg.com/474x/2b/8c/11/2b8c11ce7a01bf57b95ffcfd60b16553.jpg')", backgroundSize: "cover", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"  }}>
      {" "}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              // className={classes.font}
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              {userName ? userName.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />

        <CardContent>
          <hr />
          <br />
          <Typography
            // className={classes.font}
            variant="body2"
            color="text.secondary"
          >
            <b>{userName}</b> {": "} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;