import { Typography, Box, Paper, Button } from '@mui/material';
import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import NewPurchase from './NewPurchase';
//filter through artworks in state by id to match the route id
//
function ViewArtwork({user}) {
    const {id} = useParams();
    const [artwork, setArtwork]= useState([])

    const[isClicked, setIsClicked] = useState(false)

    useEffect ( () => {

        fetch(`/api/artworks/${id}`)
        .then((r) => r.json())
        .then((artwork) => setArtwork(artwork))
        
    }, [id]);

console.log(id);
console.log(artwork);


    return (
        <>
             <Box
                sx={{backgroundColor:'#ffe0b2', height:1000}}
                >  
                <Paper
                    sx={{margin:5, padding:10, textAlign:"center", float:'left', height:"75%"}}
                > 
                    <img alt={artwork.keywords} src={artwork.img_url} height="80%"></img>  
                </Paper>      
                <Box>
                 <Typography 
                    variant='h3' 
                    sx={{textAlign:"center", padding:10, fontFamily:'sans-serif'}}
                    >
                       TITLE: {artwork.title}
                </Typography>
                    <Typography
                    variant="h4"
                    sx={{fontFamily:'sans-serif'}}
                    >
                        Owner: {artwork.owner}
                        <br></br>
                        Keywords: {artwork.keywords}
                        <br></br>
            { artwork.for_sale ?  (
                `List Price: ${artwork.list_price}`
                    ) : (
                "Not for Sale" )
             }
                    </Typography>
                                 <br></br>
                { artwork.for_sale ?  (
                    <Button variant="contained" color="secondary" id="purchase_button" sx={{color:'#ffffff'}}onClick={
                        () => setIsClicked((isClicked) => !isClicked)
                    } >PURCHASE</Button>
                    ) : (
          "Check back later to see when this is listed" )
             }
             <> { isClicked ? (
                <NewPurchase artwork={artwork} user={user}/>
             ):
             ( 
                <></>
             )

             }
             </>
             </Box>
            </Box>
            
        
            
        </>
    );
}

export default ViewArtwork;