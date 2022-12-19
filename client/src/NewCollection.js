import { Typography } from '@mui/material';
import React, { useState } from 'react';

function NewCollection({addNewCollection, user}) {
   
   const [title, setTitle] = useState("")
   const [description, setDescription]=useState("")

   const [errors, setErrors] = useState([]);


   const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
        {
            title: title,
            description: description,
            user_id: user.id,
           }
    ),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new instructor
    fetch("/api/collections", configObj)
      .then((resp) => {
      if (resp.ok){
          resp.json().then((newCollection)=> addNewCollection(newCollection))
      } else {
        resp.json().then((errorData)=> setErrors(errorData.errors))
      }
      
      });
  };
   
    return (
        <div>
            <h3>+ ADD A NEW COLLECTION </h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="TITLE">TITLE:</label>
                <input
                id="TITLE"
                type="text"
                placeholder="COLLECTION TITLE"
                name="TITLE"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
                <input
                id="description"
                type="text"
                placeholder="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        
            <button type="submit">Create Collection</button>
            <Typography>{errors}</Typography>
            </form>
            </div>
    );
}

export default NewCollection;