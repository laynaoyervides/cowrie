import { Typography, Box, Button} from '@mui/material';
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
                sx={{margin:10,
                    backgroundColor: '#fff1ff',
                    padding: 4
                }}
            >
            <Typography variant="h4" color="primary">
               + Add a new artwork to this collection
            </Typography>
            <br></br>
            <form onSubmit={handleSubmit}>
          <Typography variant='h5' color="primary"><label htmlFor="TITLE">TITLE: </label></Typography>  
                <input
                id="TITLE"
                type="text"
                placeholder="ARTWORK TITLE"
                name="TITLE"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <br></br>
            <Typography variant='h5' color="primary"> <label htmlFor="keywords">KEYWORDS: </label></Typography>
                <textarea
                id="keywords"
                type="text"
                placeholder="type keywords with commas to separate each keyword"
                name="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
            />
        <br></br>
        <br></br>
            <Button type="submit" variant='contained'>Create Artwork</Button>
            <Typography>{errors}</Typography>
            </form>

            </Box>
        </div>
    );
}

export default NewArtwork;