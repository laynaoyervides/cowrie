import { FormControl, InputLabel, Input, Button, Box, Typography} from '@mui/material';
import React, { useState } from 'react';
import ArtListing from './ArtListing';

function SearchArtworks(props) {
   const [searchResults, setSearchResults] = useState([])
   const [q, setQ] =useState("")


   
   function searchArtworks (e) {
    e.preventDefault();

    fetch(`/searchartworks/${q}`)
    .then((r) => r.json())
    .then((results) => setSearchResults(results))
    
   }
    
    return (
        <>
            <FormControl
            onSubmit = {searchArtworks}
            sx={{marginLeft:5, marginRight: 5}}>

                <InputLabel>Search Artworks by keyword</InputLabel>
                <Input
                fullWidth="true"
                value={q}
                onChange= {(e) => setQ(e.target.value)}
                            ></Input>
            <Button type="submit">SEARCH</Button>
            </FormControl>
             <Box>
                <Typography>Search Results for {q} </Typography>
                {searchResults.map((artwork)=>
                <ArtListing 
                key={artwork.id}
                title={artwork.title}
                date_created={artwork.date_created}
                list_price={artwork.list_price} 
                owner={artwork.owner}
                img_url={artwork.img_url}
                for_sale={artwork.for_sale}
                keywords={artwork.keywords}                      />
                )}
            </Box>
            </>
    )

        };

export default SearchArtworks;