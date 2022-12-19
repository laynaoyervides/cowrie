import React from 'react';
import {Card, CardMedia, CardContent, CardHeader, Typography, Button} from '@mui/material'
import {Link} from 'react-router-dom'

function ArtworkCRUD({id, title, img_url, img_thumb, keywords, owner, list_price, for_sale}) {
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
          
            <CardContent>
            <Typography>Keywords: {keywords}</Typography>
           
           <br></br>
            { for_sale ?  (
          `List Price: ${list_price}`
             ) : (
          "Not for Sale" )
             }
            </CardContent>
            <Link to={{ pathname: `/editartwork/${id}`,}}>
                <Button>Edit Artwork Details</Button>
            </Link>
            </Card>  
        </>
    );
}

export default ArtworkCRUD;