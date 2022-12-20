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
        <Typography variant='h6' sx={{padding:2}}>Date Created: {date_created}, 
        <br></br> For Sale: {for_sale}, 
        <br></br>Keywords: {keywords}</Typography>
        <Typography sx={{padding:2}}>List Price : {list_price}</Typography>
<br></br>
            <Link to={{
                pathname: `/artworks/${id}`, 
                                }}>
            <Button variant='contained' color='secondary' sx={{float:'right', margin:2}}><Typography variant='h6'sx={{color:'#ffffff'}}>See More</Typography></Button>
            </Link>
            <br></br>

            </Card>
    
            
        </>
    );
}

export default ArtListing;