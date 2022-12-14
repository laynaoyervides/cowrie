import { Typography, Box, Paper, Button } from '@mui/material';
import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
//filter through artworks in state by id to match the route id
//
function ViewArtwork() {
    const {id} = useParams();
    const [artwork, setArtwork]= useState([])

    useEffect ( () => {

        fetch(`/artworks/${id}`)
        .then((r) => r.json())
        .then((artwork) => setArtwork(artwork))
        
    }, [id]);

console.log(id);
console.log(artwork);
    return (
        <>
             <Box>  
                <Paper
                    sx={{margin:5, padding:10, textAlign:"center", float:'left', height:"15%"}}
                > 
                    <img alt={artwork.keywords} src={artwork.img_url}></img>  
                </Paper>      
                 <Typography 
                    variant='h3' 
                    sx={{textAlign:"center"}}
                    >
                        {artwork.title}
                </Typography>
                    <Typography
                    variant="h5"
                    >
                        Owner: {artwork.owner}
                        <br></br>
                        Keywords: {artwork.keywords}
                        <br></br>
                        list price: {artwork.list_price}

                    </Typography>
                                 <br></br>
                    <Button>PURCHASE</Button>
            </Box>
            
        
            
        </>
    );
}

export default ViewArtwork;