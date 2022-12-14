import React from 'react';
import {Paper, Typography, Button} from '@mui/material'
import {Link} from 'react-router-dom'


function TeachTutorials({id, title, topic, description, video_url, cloudinary_public_id, deleteTutorial}) {
    return (
        <div>
              <>
        <Paper
        sx={{margin:10}}>
            <Typography >{title}</Typography>
            <Typography>{topic}</Typography>
            <video width="100%" height="100%" controls>
                <source src={video_url} type="video/mp4"/>
            </video>
            <Typography>{description }</Typography>
            <Link to={{pathname: `/tutorials/${id}`,}}     >     
                <Button>Edit Tutorial Details</Button>
            </Link>
            
            <br>
            </br>
            <Button 
            sx={{float:'right'}}
            onClick={deleteTutorial}
            >Delete Tutorial</Button>
            </Paper>
            </>
            
        </div>
    );
}

export default TeachTutorials;