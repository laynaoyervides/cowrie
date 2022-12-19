import React from 'react';
import {Card, CardMedia, CardContent, CardHeader, Typography, Button} from '@mui/material'

function ArtworkCRUD({title, description, img_url, img_thumb, keywords, owner, list_price, for_sale}) {
    return (
        <>
          <Card
          sx={{margin:5}}>

          <CardHeader
            title={title}
            subheader={owner}
                />
            <CardMedia
            component="img"
            image={img_url}
            height="200"
            >
            </CardMedia>
            <Button>Upload New Artwork Image</Button>
          
            <CardContent>
            <Typography>Keywords: {keywords}</Typography>
            <Typography>Description: {description}</Typography>
           
           <br></br>
            { for_sale ?  (
          `List Price: ${list_price}`
             ) : (
          "Not for Sale" )
             }
            </CardContent>
            <Button>Edit Artwork Details</Button>
            </Card>  
        </>
    );
}

export default ArtworkCRUD;