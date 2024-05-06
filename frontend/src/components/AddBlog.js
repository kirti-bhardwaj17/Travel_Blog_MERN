// import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { useStyles } from "./utils";

// const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
// const AddBlog = () => {
//   // const classes = useStyles();
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     imageURL: "",
//   });
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const sendRequest = async () => {
//     const res = await axios
//       .post("http://localhost:4000/api/blog/add", {
//         title: inputs.title,
//         description: inputs.description,
//         image: inputs.imageURL,
//         user: localStorage.getItem("userId"),
//       })
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     sendRequest()
//       .then((data) => console.log(data))
//       .then(() => navigate("/myBlogs"));
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           border={3}
//           borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
//           borderRadius={10}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin={"auto"}
//           marginTop={3}
//           display="flex"
//           flexDirection={"column"}
//           width={"80%"}
//         >
//           <Typography
//             // className={classes.font}
//             fontWeight={"bold"}
//             padding={3}
//             color="grey"
//             variant="h2"
//             textAlign={"center"}
//           >
//             Post Your Blog
//           </Typography>
//           <InputLabel  sx={labelStyles}>
//             Title
//           </InputLabel>
//           <TextField
//             // className={classes.font}
//             name="title"
//             onChange={handleChange}
//             value={inputs.title}
//             margin="auto"
//             variant="outlined"
//           />
//           <InputLabel sx={labelStyles}>
//             Description
//           </InputLabel>
//           <TextField
//             // className={classes.font}
//             name="description"
//             onChange={handleChange}
//             value={inputs.description}
//             margin="auto"
//             variant="outlined"
//           />
//           <InputLabel  sx={labelStyles}>
//             ImageURL
//           </InputLabel>
//           <TextField
          
//             name="imageURL"
//             onChange={handleChange}
//             value={inputs.imageURL}
//             margin="auto"
//             variant="outlined"
//           />
//           <Button
//             sx={{ mt: 2, borderRadius: 4 }}
//             variant="contained"
//             color="warning"
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddBlog;
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

const AddBlog = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      });
      return res.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await sendRequest();
      console.log(data);
      navigate("/myBlogs");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
<div style={{ background: "#218380", minHeight: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <Box
          borderRadius={10}
          boxShadow={10}
          padding={3}
          margin={"auto"}
         marginTop={1}
          display="flex"
          flexDirection={"column"}
          width={"60vh"}
          bgcolor={"white"}
        >
          <Typography
            variant="h4"
            fontWeight={"bold"}
            style={{  color: "#B48EAE" }}

            
            textAlign={"center"}
            marginBottom={2}
          >
            Post Your Blog
          </Typography>
          <TextField
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="normal"
            variant="outlined"
            label="Title"
          />
          <TextField
            name="description"
            onChange={handleChange}
            value={inputs.description}
            margin="normal"
            variant="outlined"
            label="Description"
            multiline
            rows={4}
          />
          <TextField
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            margin="normal"
            variant="outlined"
            label="Image URL"
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#73D2DE", color: "#fff", marginTop: 20 }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
