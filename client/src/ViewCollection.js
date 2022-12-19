import { Box } from '@mui/material';
import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CollectionDetail from './CollectionDetail';

function ViewCollection() {
    const {id} = useParams();
    const [collection, setCollection]= useState([])

   
    useEffect ( () => {

        fetch(`/api/collections/${id}`)
        .then((r) => r.json())
        .then((collection) => setCollection(collection))
        
    }, [id]);
   
   

      function handleUpdateCollection(updatedCollection){
        
        setCollection(updatedCollection);
    }


    return (
        <div>
            <Box>
            <CollectionDetail 
                            key={collection.id}
                            title= {collection.title}
                             description={collection.description}
                             collection_img = {collection.collection_img}
                                onUpdateCollection={handleUpdateCollection}
                                collection ={collection}
                                setCollection={setCollection}
                        />    
                </Box>
        </div>
    );
}

export default ViewCollection;