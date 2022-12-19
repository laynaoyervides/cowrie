import React, {useState} from 'react';
import {Box, Paper, Typography, Button} from '@mui/material'
import EditTutorial from './EditTutorial';
import CloudinaryTutorialVid from './CloudinaryTutorialVid'

function TutorialDetail({onUpdateTutorial, tutorial, setTutorial}) {
    const {id, title, topic, description, video_url} = tutorial
    const [isEditing, setIsEditing] =useState(false)

  


const handleTutorialUpdate = (updatedTutorial) => {
    setIsEditing(false);
    onUpdateTutorial(updatedTutorial)
}



const handleUpload = (result) => {
    const body = {
      video_url: result.info.secure_url,
      cloudinary_public_id: result.info.public_id
    }
    fetch(`/api/tutorials/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(tutorial => {
        console.log(tutorial);
        setTutorial(tutorial)
      })
  }
 
    return (
        <>
            <Box>
            <Paper
        sx={{margin:10}}>
            <video width="100%" height="100%" controls>
                <source src={video_url} type="video/mp4"/>
            </video>
            <CloudinaryTutorialVid 
                preset="tjds9crv"
                buttonText="Update Tutorial Video"
                handleUpload={handleUpload}

            />
            {isEditing ? (
                <EditTutorial tutorial={tutorial} setTutorial={setTutorial} onUpdateTutorial={handleTutorialUpdate}/>
            ) : (<>
                <Typography >{title}</Typography>
                <Typography>{topic}</Typography>
                 <Typography>{description }</Typography>

            </>
            ) }
            <Button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></Button>

            </Paper>
            </Box>
            
        </>
    );
}

export default TutorialDetail;