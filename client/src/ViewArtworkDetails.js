import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material'
import CreatorArtworkDetails from './CreatorArtworkDetails';

function ViewArtworkDetails() {
    const {id} = useParams();
    const [artwork, setArtwork]=useState([])

    useEffect ( () => {

        fetch(`/api/artworks/${id}`)
        .then((r) => r.json())
        .then((artwork) => setArtwork(artwork))
        
    }, [id]);
   
    function handleUpdateArtwork(updatedArtwork){
        
        setArtwork(updatedArtwork);
    }


    return (
        <div>
            <Box>
                <CreatorArtworkDetails
                    key={artwork.id}
                    artwork={artwork}
                    setArtwork={setArtwork}
                    onUpdateArtwork={handleUpdateArtwork}
                    id={artwork.id}
                    title={artwork.title}
                    keywords={artwork.keywords}
                    list_price={artwork.list_price}
                    owner={artwork.owner}
                    img_url={artwork.img_url}
                    for_sale={artwork.for_sale}
                    img_thumb={artwork.img_thumb}
                    cloudinary_public_id={artwork.cloudinary_public_id}
                />
            </Box>
        </div>
    );
}

export default ViewArtworkDetails;