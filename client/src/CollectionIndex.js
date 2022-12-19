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
                    <Typography>{title}</Typography>
                    <Typography>{description}</Typography>
                   
                   <Link to={{pathname: `/collections/${id}`,}}>                   
                        <Button>Collection Details</Button>
                    </Link>
                    <button onClick={() => deleteCollection(collection.id)}><h5>DELETE</h5></button>

                </Box>
                </CardContent>
                </Card>
            
        </div>
    );
}

export default CollectionIndex;