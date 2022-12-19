import React, {useState} from 'react';
import EditArtwork from './EditArtwork';
import {Box, CardHeader, CardMedia, Paper, Card, CardContent, Typography, Button} from '@mui/material'

function CreatorArtworkDetails({artwork, setArtwork, onUpdateArtwork}) {
    const {id, title, keywords, list_price, owner, img_url, for_sale, img_thumb} = artwork;
    const [isEditing, setIsEditing] =useState(false)

    const handleArtworkUpdate = (updatedArtwork) => {
        setIsEditing(false);
        onUpdateArtwork(updatedArtwork)
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
                    <Button>UPLOAD IMAGE (only available if not for sale)</Button>

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