import React from 'react';
import {Paper, Typography} from '@mui/material'

function Tutorials({title, topic, video_url, description}) {
    return (
        <>
        <Paper>
            <Typography>{title}</Typography>
            <Typography>{topic}</Typography>
            <video width="100%" height="100%" controls>
                <source src={video_url} type="video/mp4"/>
            </video>
            <Typography>{description }</Typography>

            </Paper>
        </>
    );
}

export default Tutorials;