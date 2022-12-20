import React from 'react';
import {Card, CardMedia, Box, Typography, CardContent, Button} from "@mui/material"
import {Link} from 'react-router-dom'

function CollectionIndex({collection, deleteCollection}) {
    const{id, title, description, collection_img}= collection
    
    return (
        <div>
              <Card sx={{width:"60%", padding:"20px", margin:"10px", borderRadius:"10px"}}>
            <CardMedia 
                component="img"
                height="200"
                src={collection_img}
            />
             <CardContent>
                <Box
                display={"inline"} >
                    <Typography variant='h3'>{title}</Typography>
                    <br></br>
                    <Typography variant='h4' color='primary'>Description: {description}</Typography>
                    <br></br>
                    <br></br>

                   <Link to={{pathname: `/collections/${id}`,}}>                   
                        <Button variant="contained">View Collection Details</Button>
                    </Link>
                   
                    <Button sx={{float:'right'}}onClick={() => deleteCollection(collection.id)}><h5>DELETE COLLECTION</h5></Button>

                </Box>
                </CardContent>
                </Card>
            
        </div>
    );
}

export default CollectionIndex;