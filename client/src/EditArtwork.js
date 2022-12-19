import React, {useState} from 'react';

function EditArtwork({artwork, onUpdateArtwork}) {
    const {id, title, keywords, description, list_price, owner, img_url, for_sale, img_thumb} = artwork;
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedKeywords, setUpdatedKeywords] = useState(keywords)
    const [updatedDescription, setUpdatedDescription] = useState(description)

    const changeArtwork ={
        title: updatedTitle,
        keywords: updatedKeywords,
        description: updatedDescription,
    }

    function handleEditForm(e) {
        e.preventDefault();

        fetch(`/api/artworks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(changeArtwork),
        })
        .then((resp) => resp.json())
        .then((updatedArtwork) => onUpdateArtwork(updatedArtwork))
    }
        
    
    return (
        <div>
             <form            
            onSubmit={handleEditForm}>
            <label htmFor="title">Title: </label>
            <input
            id="title"
            type="text"
            name="title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <br></br>
             <label htmlFor="keywords">Keywords: </label>
            <input
                id="keywords"
                type="text"
                name="keywords"
                value={updatedKeywords}
                onChange={(e)=>setUpdatedKeywords(e.target.value)}
            />
            <br></br>
          

        <input type="submit" value="Save" />

                   </form>
        </div>
    );
}

export default EditArtwork;