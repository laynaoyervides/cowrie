import React, { useState } from 'react';
import {Typography, Box, Button} from '@mui/material'

function NewTutorial({addNewTutorial, user}) {

   const [title, setTitle] = useState("")
   const [topic, setTopic] = useState("")
   const [description, setDescription]=useState("")

   const [errors, setErrors] = useState([]);
   console.log(user.id)

   const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
        {
            title: title,
            topic: topic,
            description: description,
            user_id: user.id,
           }
    ),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new instructor
    fetch("/api/tutorials", configObj)
      .then((resp) => {
      if (resp.ok){
          resp.json().then((NewTutorial)=> addNewTutorial(NewTutorial))
      } else {
        resp.json().then((errorData)=> setErrors(errorData.errors))
      }
      
      });
  };

    return (
        <div>
            <Box
            sx={{margin:10}}
            >
            <Typography variant='h3'>Create a New Tutorial</Typography>
            <form onSubmit={handleSubmit}>
            <label htmlFor="TITLE">TITLE:</label>
            <br></br>
                <input
                id="TITLE"
                type="text"
                placeholder="COLLECTION TITLE"
                name="TITLE"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <label htmlFor="topic">TOPIC</label>
            <br></br>
                <input
                id="topic"
                type="text"
                placeholder="topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
            <br></br>
            <label htmlFor="description">DESCRIPTION</label>
                <br></br>
                <textarea
                id="description"
                type="text"
                placeholder="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <Button type="submit">Create New Tutorial</Button>
            <Typography>{errors}</Typography>
            </form>
            </Box>
        </div>
    );
}

export default NewTutorial;