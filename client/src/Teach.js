import React, {useEffect} from 'react';

function Teach({user}) {

const [tutorials, setTutorials] = useEffect([])
useEffect (
    () => {
        fetch("/api/tutorials")
        .then((r)=> r.json())
        .then((tutorials)=> setTutorials(tutorials))
    }
)
    return (
        <div>
        </div>
    );
}

export default Teach;