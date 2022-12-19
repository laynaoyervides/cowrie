import React, { useEffect, useState } from 'react';
import Tutorials from './Tutorials';
import {Box} from '@mui/material'

function Learn() {

const [tutorials, setTutorials] = useState([])

useEffect(() => {
        fetch(`/api/tutorials`)
        .then((r)=> r.json())
        .then((tutorials)=> setTutorials(tutorials))
},[]
);
    
console.log(tutorials)

    return (
        <div>
            <Box>
            {tutorials.map((tutorial) => (

                <Tutorials 
                    key={tutorial.id}
                    title={tutorial.title}
                    topic={tutorial.topic}
                    video_url={tutorial.video_url}
                    description={tutorial.description}
                
                />
                ))
            }
          </Box>
        </div>
    );
}

export default Learn;