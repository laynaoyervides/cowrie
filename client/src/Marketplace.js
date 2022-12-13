import { Typography, Box } from '@mui/material';
import React, {useState, useEffect} from 'react';
import ArtListing from './ArtListing';
import SearchArtworks from './SearchArtworks';

function Marketplace({user}) {
    const [artworks, setArtworks] = useState([])

    useEffect (
        () => {
    fetch("/artworks")
    .then((r) => r.json())
    .then((artworks)=> setArtworks(artworks))
        })
    
    
    return (
        <div>           
            <Typography variant='h1' sx={{textAlign:'center'}}>Marketplace</Typography>
            <SearchArtworks />

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
        </div>
    );
}

export default Marketplace;