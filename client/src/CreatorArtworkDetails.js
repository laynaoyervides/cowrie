import React, {useState} from 'react';
import EditArtwork from './EditArtwork';
import CloudinaryArtworkImg from './CloudinaryArtworkImg'
import {Box, CardHeader, CardMedia, Paper, Card, CardContent, Typography, Button} from '@mui/material'
import {Link} from 'react-router-dom'

function CreatorArtworkDetails({artwork, setArtwork, onUpdateArtwork}) {
    const {id, title, keywords, list_price, owner, img_url, for_sale, img_thumb} = artwork;
    const [isEditing, setIsEditing] =useState(false)

    const handleArtworkUpdate = (updatedArtwork) => {
        setIsEditing(false);
        onUpdateArtwork(updatedArtwork)
    }

    const handleUpload = (result) => {
        const body = {
          img_url: result.info.secure_url,
          img_thumb: result.info.eager[0].secure_url,
          cloudinary_public_id: result.info.public_id
        }
        fetch(`/api/artworks/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then(artwork => {
            console.log(artwork);
            setArtwork(artwork)
          })
      }
 
    return (
        <>
        <Box>
            <Paper
             sx={{margin:10}}>
                <Card>
                    <CardHeader
                     title={title}
                     subheader={owner}/>

                    <CardMedia
                    component="img"
            image={img_url}
            height="5%">

                    </CardMedia>
                   { for_sale ? (
                    "Cannot change image after listing this artwork"
                   ): (
                    <CloudinaryArtworkImg 
                        preset="cxoz8yx5"
                        buttonText="Change Artwork (only available before listing)"
                        handleUpload={handleUpload}
                    />
                   )}
                    <CardContent>
                        {isEditing ?(
                             <EditArtwork 
                             artwork={artwork}
                             setArtwork={setArtwork}
                             onUpdateArtwork={handleArtworkUpdate}
                
                            />
                        ): (
                            <Typography variant="h5">
                               For Sale: 
                               {for_sale ? (
                                " True"
                               ): (
                                " Not for Sale"
                               )}
                               <br></br>
                               Keywords: {keywords}
                                </Typography>

                        )}
                    <Button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></Button>

                    </CardContent>
                </Card>

           

            </Paper>
            </Box>
        </>
    );
}

export default CreatorArtworkDetails;