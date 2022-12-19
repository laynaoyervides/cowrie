import { Typography, Box } from '@mui/material';
import React, {useState} from 'react';

function NewArtwork({addNewArtwork, collection_id}) {
    const [title, setTitle] = useState("")
    const [keywords, setKeywords] = useState("")

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
            keywords: keywords,
            collection_id: collection_id,
           }
    ),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new artwork
    fetch("/api/artworks", configObj)
      .then((resp) => {
      if (resp.ok){
          resp.json().then((newArtwork)=> addNewArtwork(newArtwork))
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
            <Typography variant="h4">
               + Add a new artwork to this collection
            </Typography>

            <form onSubmit={handleSubmit}>
            <label htmlFor="TITLE">TITLE: </label>
                <input
                id="TITLE"
                type="text"
                placeholder="ARTWORK TITLE"
                name="TITLE"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <label htmlFor="keywords">KEYWORDS: </label>
                <input
                id="keywords"
                type="text"
                placeholder="type keywords with commas to separate each keyword"
                name="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
            />
        
            <button type="submit">Create Artwork</button>
            <Typography>{errors}</Typography>
            </form>

            </Box>
        </div>
    );
}

export default NewArtwork;