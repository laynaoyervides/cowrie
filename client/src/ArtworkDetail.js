import React from 'react';
import {Card, CardHeader, Typography, CardMedia } from '@mui/material'

function ArtworkDetail({id, title, image, owner, list_price, date_created, for_sale, keywords}) {
    return (
        <>
              <Card sx={{margin:5}}>
            <CardHeader
            title={title}
            subheader={owner}
                />

        <CardMedia
            component="img"
            image={image}
            height="200"
        >

        </CardMedia>
        <Typography>{date_created}, {for_sale}, {keywords}</Typography>
           
            <br></br>
            List Price : {list_price}

            </Card>
            
        </>
    );
}

export default ArtworkDetail;