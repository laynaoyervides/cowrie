import { Typography } from '@mui/material';
import React, {useState} from 'react';

function EditArtwork({artwork, onUpdateArtwork}) {
    const {id, title, keywords, description, list_price, owner, img_url, for_sale, img_thumb} = artwork;
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedKeywords, setUpdatedKeywords] = useState(keywords)
    const [updatedDescription, setUpdatedDescription] = useState(description)

    const changeArtwork ={
        title: updatedTitle,
        keywords: updatedKeywords,
        description: updatedDescription,
    }

    function handleEditForm(e) {
        e.preventDefault();

        fetch(`/api/artworks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(changeArtwork),
        })
        .then((resp) => resp.json())
        .then((updatedArtwork) => onUpdateArtwork(updatedArtwork))
    }
        
    
    return (
        <div>
             <form            
            onSubmit={handleEditForm}>
            <Typography variant='h5' color="primary" ><label htmFor="title">TITLE: </label></Typography>
            <input
            id="title"
            type="text"
            name="title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <br></br>
            <br></br>
            <Typography variant='h5' color="primary"><label htmlFor="keywords">Keywords: </label></Typography>
            <textarea
                id="keywords"
                type="text"
                name="keywords"
                value={updatedKeywords}
                onChange={(e)=>setUpdatedKeywords(e.target.value)}
            />
            <br></br>
          <br></br>

   <input type="submit" value="SAVE" /> 

                   </form>
        </div>
    );
}

export default EditArtwork;