import React , {useState} from 'react';
import {Card, CardMedia, Box, Typography, CardContent} from "@mui/material"
import EditCollection from './EditCollection';
import ArtworkDetail from './ArtworkDetail';

function CollectionDetail({deleteCollection, onUpdateCollection, collection, user }) {

    const[artworks, setArtworks] = useState([])
    
    const{title, description, collection_img}= collection
    const [isEditing, setIsEditing]= useState(false);
   // const [artworks, setArtworks] = useState([])


    const handleCollectionUpdate = (updatedCollection) => {
        setIsEditing(false);
        onUpdateCollection(updatedCollection);
      };

 //function showArtworks (e) {
 //       e.preventDefault();
  //      setArtworks(collection.artworks)

   // } 
   function handleClick(e) {
    e.preventDefault();
    //get the course
    //show a list of the learners in the course
    //map through the learners with the learners list
    console.log(collection.artworks);    
   
    //{ */      
    setArtworks(collection.artworks);
}

    return (
        <div>
             <Card sx={{width:"60%", padding:"20px", margin:"10px", borderRadius:"10px"}}>
            <CardMedia 
                component="img"
                height="200"
                src={collection_img}
            />
            <CardContent>
                <Box
                display={"inline"}
                >
             { isEditing ? (
                   <EditCollection collection={collection} onUpdateCollection={handleCollectionUpdate} user={user}/>
                  ) :
                  (<>
                  <Typography variant="h3">Title: {title}</Typography>
                  <Typography variant="h6">Description{description}</Typography>
                  </>
                  )
            }
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></button>
            <button onClick={() => deleteCollection(collection.id)}><h5>DELETE</h5></button>
            <br></br>
            <br></br>
            <button onClick={handleClick}>View Artworks</button>
            </Box>
            <Box>
            {artworks.map((artwork) => 
                <ArtworkDetail
                key={artwork.id}
                id={artwork.id}
                title={artwork.title}
                owner={artwork.owner}
                image={artwork.img_url}
                for_sale={artwork.for_sale}
                date_created={artwork.date_created}
                list_price={artwork.list_price}
                keywords={artwork.keywords}
                artworks={artworks}
                />
            )}
            </Box> 
            </CardContent>
        </Card>
        
        </div>
    );
}

export default CollectionDetail;