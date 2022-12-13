import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardMedia, Button, CardHeader, Typography} from '@mui/material'

function ArtListing({id, title, date_created, list_price, owner, img_url, for_sale, keywords }) {

   
    return (
        <>
        <Card sx={{margin:5}}>
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
        <Typography>{date_created}, {for_sale}, {keywords}</Typography>
            <Link to={{pathname: `/artworks/${id}`}}>
            <Button><Typography>See More</Typography></Button>
            </Link>
            <br></br>
            <Button>List Price : {list_price}</Button>

            </Card>
    
            
        </>
    );
}

export default ArtListing;