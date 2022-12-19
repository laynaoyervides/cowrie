import React, {useState} from 'react';

function EditCollection({collection, onUpdateCollection}) {
    const {id, title, description} = collection;
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedDescription, setUpdatedDescription] = useState(description)

    const changeCollection ={
        title: updatedTitle,
        description: updatedDescription,
    }
    function handleEditForm(e) {
        e.preventDefault();
    //PATCH single collection 
    fetch(`/api/collections/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(changeCollection),
    })
    .then((resp) => resp.json())
      .then((updatedCollection) => onUpdateCollection(updatedCollection));
}

    return (
        <form 
        onSubmit={handleEditForm}>
          <label htmlFor="title">Title:</label>
            <input
            id="title"
            type="text"
            name="title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
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

export default EditCollection;