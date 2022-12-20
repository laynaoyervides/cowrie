import { Typography, Box, Button, InputLabel } from '@mui/material';
import React, {useState, useEffect} from 'react';
import ArtListing from './ArtListing';
//import SearchArtworks from './SearchArtworks';

function Marketplace({user}) {
    const [artworks, setArtworks] = useState([])
    const [q, setQ] =useState("")


    useEffect (
        () => {
    fetch("/api/artworks")
    .then((r) => r.json())
    .then((artworks)=> setArtworks(artworks))
        }, [])
    
        function searchArtworks (e) {
            e.preventDefault();
        
            fetch(`/api/searchartworks?q=${q}`)
            .then((r) => r.json())
            .then((results) => setArtworks(results))
            
           }
if (artworks.length === 0){
    return (
        <div>   
             <Box
                sx={{backgroundColor:'#ffe0b2'}}
            >     
            <Typography variant='h1' color="secondary" sx={{textAlign:'center', padding:10, fontFamily:'sans-serif'}}>MARKETPLACE</Typography>
        <Box            
        sx={{marginLeft:10}}                        >

        
        <form
        onSubmit = {searchArtworks}
        sx={{marginLeft:5, marginRight: 5}}>

            <InputLabel>Search Artworks by keyword</InputLabel>
            <input
            fullWidth="true"
            value={q}
            onChange= {(e) => setQ(e.target.value)}
                        ></input>
        <Button type="submit">SEARCH</Button>
        </form>
        <Typography variant='h3'>Search Results for {q} </Typography>
        <Typography variant="h3">No match for "{q}"</Typography>

        </Box>
        </Box>
        </div>
    )
}
    return (
        <div>           
            <Box
                sx={{backgroundColor:'#ffe0b2'}}
            >
            <Typography variant='h1' color="secondary" sx={{textAlign:'center', padding:10, fontFamily:'sans-serif'}}>MARKETPLACE</Typography>
            <Box
            sx={{marginLeft:10}}                        >
            
            <form
            onSubmit = {searchArtworks}
            sx={{marginLeft:5, marginRight: 5}}>

                <InputLabel><Typography variant='h5'>Search Artworks by keyword</Typography></InputLabel>
                <input
                fullWidth="true"
                value={q}
                onChange= {(e) => setQ(e.target.value)}
                            ></input>
            <Button type="submit">SEARCH</Button>
            </form>
        {/* <Typography variant="h4">Search Results for {q} </Typography> */}

            </Box>
            <Box
            display="grid" 
            flexDirection={'row'}
            gridTemplateColumns= 'repeat(4, 1fr)' 
            >
            {artworks.map((artwork)=>
            <ArtListing 
            key={artwork.id}
            title={artwork.title}
            date_created={artwork.date_created}
            list_price={artwork.list_price} 
            owner={artwork.owner}
            img_url={artwork.img_url}
            for_sale={artwork.for_sale}
            keywords={artwork.keywords}
            id={artwork.id}

            />
            )}
        </Box>
        </Box>
        </div>
    );
}

export default Marketplace;