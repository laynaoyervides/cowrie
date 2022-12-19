import React, {useState, useEffect} from 'react';
import {Box, Typography}from '@mui/material'
import CollectionIndex from './CollectionIndex';
import NewCollection from './NewCollection';

function Collections({user}) {
    const [collections, setCollections] = useState([])

console.log('collections', user.collections)
    
useEffect(()=> {
    fetch("/api/me")
    .then((r)=> r.json())
    .then((userArray)=>setCollections(userArray.collections))
}, []);
  //useEffect( ()=>  {
  //  fetch("/me")
/*     .then((r) => r.json())
    .then((userArray)=> setCollections(userArray.collections))
}, []) */

     // Add a new Collection - CREATE - 
     const addNewCollection= (collection) => {
        setCollections([...collections, collection]);
     }
    //handle the edit - UPDATE -
    function handleUpdateCollection(updatedCollection){
        const updatedCollections = collections.map((collection) => {
            if (collection.id === updatedCollection.id) {
                return updatedCollection;
            }
            else{
                return collection;
            }
        });
        setCollections(updatedCollections);
    }
    
    function deleteCollection (id) {
        fetch(`/api/collections/${id}` , {
            method: "DELETE",
        })
        .then((r)=> {
       
            if (r.ok) {
                setCollections(collections.filter((collection)=>collection.id !==id));
            }
        })
            .catch((err)=> console.log(err))
    
    };

    return (

        <div>
            <Box>
                <Typography>Your Collections are a themed set of artworks</Typography>
            </Box>
            <Box
                display="grid" 
                flexDirection={'row'}
                
                >
                     {collections.map((collection) => (
                         <CollectionIndex
                            key={collection.id}
                            title= {collection.title}
                             description={collection.description}
                             collection_img = {collection.collection_img}
                              deleteCollection={deleteCollection}
                                onUpdateCollection={handleUpdateCollection}
                                collection ={collection}
                        />
                     ))
                 }

                 </Box>
                 <Box>
                 <NewCollection addNewCollection={addNewCollection} user={user}/> 
                 </Box>
        </div>
    );
}

export default Collections;