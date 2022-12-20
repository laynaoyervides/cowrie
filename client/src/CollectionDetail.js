import React , {useState} from 'react';
import {Card, CardMedia, Box, Typography, CardContent, Button} from "@mui/material"
import EditCollection from './EditCollection';
//import ArtworkDetail from './ArtworkDetail';
import CloudinaryCollectionImg from './CloudinaryCollectionImg';
import {Link} from 'react-router-dom'

function CollectionDetail({ onUpdateCollection, collection, user, setCollection }) {
   // const[artworks, setArtworks] = useState([])
    
    const{id, title, description, collection_img}= collection


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
  /*  function handleClick(e) {
    e.preventDefault();
    //get the course
    //show a list of the learners in the course
    //map through the learners with the learners list
    console.log(collection.artworks);    
   
    //{ */      
 //  setArtworks(collection.artworks);
//} 



const handleUpload = (result) => {
    const body = {
      collection_img: result.info.secure_url,
      cloudinary_public_id: result.info.public_id
    }
    fetch(`/api/collections/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(collection => {
        console.log(collection);
        setCollection(collection)
      })
  }

    return (
        <div>
          <Box
            sx={{margin:10}}
          >
             <Card sx={{width:"60%", padding:"20px", margin:"10px", borderRadius:"10px"}}>
            <CardMedia 
                component="img"
                height="200"
                src={collection_img}
            />
            <Box 
            sx={{float:'right', marginTop:2}}>
            <CloudinaryCollectionImg 
              preset="ikf1pzqu"
              buttonText="Update Cover Image"
              handleUpload={handleUpload}
            
            />
            </Box>
            <CardContent>
                <Box
                display={"inline"}
                >
             { isEditing ? (
                   <EditCollection collection={collection} setCollection={setCollection} onUpdateCollection={handleCollectionUpdate} user={user}/>
                  ) :
                  (<>
                  <br></br>
                  <Typography variant="h3">Title: {title}</Typography>
                  <br></br>
                  <Typography variant="h6">Description{description}</Typography>
                  </>
                  )
            }
            <br></br>
            <Button color="primary" variant="contained" onClick={() => setIsEditing((isEditing) => !isEditing)}>EDIT</Button>
            <br></br>
            <br></br>
            <Link to={{
                pathname: `/viewartworks/${id}`, 
                                }}>
            <Button sx={{float:'right'}}>View Artworks</Button>
            </Link>
            </Box>
            <Box>
            {/* {artworks.map((artwork) => 
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
            )} */}
            </Box> 
            </CardContent>
        </Card>
        </Box>
        </div>
    );
}

export default CollectionDetail;