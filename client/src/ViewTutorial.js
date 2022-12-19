import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material'
import TutorialDetail from './TutorialDetail';

function ViewTutorial() {
    const {id} = useParams();
    const [tutorial, setTutorial]=useState([])

    useEffect ( () => {

        fetch(`/api/tutorials/${id}`)
        .then((r) => r.json())
        .then((tutorial) => setTutorial(tutorial))
        
    }, [id]);
   
    function handleUpdateTutorial(updatedTutorial){
        
        setTutorial(updatedTutorial);
    }
    return (
        <div>
            <Box>
                <TutorialDetail
                    key={tutorial.id}
                    title={tutorial.title}
                    topic={tutorial.topic}
                    video_url={tutorial.video_url}
                    description={tutorial.description}
                    onUpdateTutorial={handleUpdateTutorial}
                    tutorial={tutorial}
                    setTutorial={setTutorial}
                 />
            </Box>
            
        </div>
    );
}

export default ViewTutorial;