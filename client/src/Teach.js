import React, {useEffect, useState} from 'react';
import TeachTutorials from './TeachTutorials';

function Teach({user}) {

const [tutorials, setTutorials] = useState([])

useEffect (
    () => {
        fetch("/api/tutorials")
        .then((r)=> r.json())
        .then((tutorials)=> setTutorials(tutorials))
    }, []
)

function deleteTutorial (id) {
    fetch(`/api/tutorials/${id}` , {
        method: "DELETE",
    })
    .then((r)=> {
   
        if (r.ok) {
            setTutorials(tutorials.filter((tutorial)=>tutorial.id !==id));
        }
    })
        .catch((err)=> console.log(err))

};

    return (
        <div>
            {tutorials.map((tutorial)=>
            <TeachTutorials 
                title={tutorial.title}
                topic={tutorial.topic}
                description={tutorial.description}
                video_url={tutorial.video_url}
                cloudinary_public_id={tutorial.cloudinary_public_id}
                deleteTutorial={deleteTutorial}
            />
            )}
        </div>
    );
}

export default Teach;