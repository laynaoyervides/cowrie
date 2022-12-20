import { Typography, Box } from '@mui/material';
import React from 'react';

function PurchaseDetails({
    id, 
    price, 
    royalty_percentage,
    image_thumbnail,
    description
}) {
    return (
        <div>
            <Box>
            <Typography variant="h4">            
           <img src={image_thumbnail} width="2%"></img>
               ---Purchase Details: <Typography color='secondary' paddingLeft='30px'>Purchase Number: {id}, <br></br>Royalty Percentage: {royalty_percentage},<br></br> Price: {price}, <br></br>Description: {description}</Typography>
              
              </Typography>
            </Box>
        </div>
    );
}

export default PurchaseDetails;