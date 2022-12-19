import { Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ArtworkCRUD from './ArtworkCRUD';

function CollectionArtworks() {
    const {id} = useParams();
    const [artworks, setArtworks] = useState([])

    useEffect ( () => {

        fetch(`/api/collections/${id}`)
        .then((r) => r.json())
        .then((collection) => {
            setArtworks(collection.artworks);
        })
        
    }, [id]);

    console.log(artworks)

    return (
        <div>
            <Typography>Title</Typography>
            {artworks.map((artwork)=> 
                    <ArtworkCRUD 
                        key={artwork.key}
                        title={artwork.title}
                        description={artwork.description}
                        img_url={artwork.img_url}
                        img_thumnb={artwork.img_thumnb}
                        keywords={artwork.keywords}
                        owner={artwork.owner}
                        list_price={artwork.list_price}
                        for_sale={artwork.for_sale}
                    />

            )}
                
        
        </div>
    );
}

export default CollectionArtworks;