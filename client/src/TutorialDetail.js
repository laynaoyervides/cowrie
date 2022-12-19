import React, {useState} from 'react';
import {Box, Paper, Typography, Button} from '@mui/material'
import EditTutorial from './EditTutorial';

function TutorialDetail({onUpdateTutorial, tutorial, setTutorial}) {
    const {title, topic, description, video_url} = tutorial
    const [isEditing, setIsEditing] =useState(false)

  


const handleTutorialUpdate = (updatedTutorial) => {
    setIsEditing(false);
    onUpdateTutorial(updatedTutorial)
}
 
    return (
        <>
            <Box>
            <Paper
        sx={{margin:10}}>
            <video width="100%" height="100%" controls>
                <source src={video_url} type="video/mp4"/>
            </video>

            <Button>Upload New video</Button>
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