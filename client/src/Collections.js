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
  /*   function handleUpdateCollection(updatedCollection){
        const updatedCollections = collections.map((collection) => {
            if (collection.id === updatedCollection.id) {
                return updatedCollection;
            }
            else{
                return collection;
            }
        });
        setCollections(updatedCollections);
    } */
    
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

        <div class="div-1"
        >
            
            <Box
                display="grid" 
                flexDirection={'row'}
                sx={{margin:10}}
                >
                    <Typography variant='h1' sx={{textAlign: 'left', fontFamily: 'sans-serif', margin:3}}>  MY COLLECTIONS</Typography>
                     {collections.map((collection) => (
                         <CollectionIndex
                            key={collection.id}
                            title= {collection.title}
                             description={collection.description}
                             collection_img = {collection.collection_img}
                              deleteCollection={deleteCollection}
                                collection ={collection}
                        />
                     ))
                 }

                 </Box>
                 <Box sx={{margin:10}}>
                <Typography variant='h4' color='primary'>ABOUT COLLECTIONS : </Typography>
                <Typography variant='h6' color='primary'>
                <br></br>Your Collections are themed groups of artworks.
                <br></br>You can create a collection here and then update details as needed. <br></br>You'll be able to add artworks to the collection. </Typography>
            </Box>
                 <Box sx={{margin:10, backgroundColor:'#ffddc1', padding:5}}>
                 <NewCollection addNewCollection={addNewCollection} user={user}/> 
                 </Box>
        </div>
    );
}

export default Collections;