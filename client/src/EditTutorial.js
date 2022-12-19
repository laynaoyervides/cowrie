import React, {useState} from 'react';

function EditTutorial({tutorial, onUpdateTutorial}) {

    const {id, title, topic, description} = tutorial;
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedTopic, setUpdatedTopic] = useState(topic)
    const [updatedDescription, setUpdatedDescription] = useState(description)

    const changeTutorial = {
        title: updatedTitle,
        topic: updatedTopic,
        description: updatedDescription,
    }

    function handleEditForm(e) {
        e.preventDefault();

        fetch(`/api/tutorials/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(changeTutorial),
        })
        .then((resp) => resp.json())
        .then((updatedTutorial) => onUpdateTutorial(updatedTutorial))
    }
    return (
        <form            
            onSubmit={handleEditForm}>
            <label htmFor="title">Title:</label>
            <input
            id="title"
            type="text"
            name="title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            />
             <label htmlFor="topic">Topic</label>
            <input
                id="topic"
                type="text"
                name="topic"
                value={updatedTopic}
                onChange={(e)=>setUpdatedTopic(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input
                id="description"
                type="text"
                name="description"
                value={updatedDescription}
                onChange={(e)=>setUpdatedDescription(e.target.value)}
            />

        <input type="submit" value="Save" />

                   </form>
    );
}

export default EditTutorial;