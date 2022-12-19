import React,{useState} from 'react';

function EditUserInfo({user, handleUserUpdate}) {
    const{email, bio} =user;
    const[updatedEmail, setUpdatedEmail] = useState(email)
    const[updatedBio, setUpdatedBio] = useState(bio)

    const changeUserInfo = {
        email: updatedEmail,
        bio: updatedBio,
    }

    function handleEditForm(e) {
        e.preventDefault();
    //PATCH single collection 
    fetch(`/api/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(changeUserInfo),
    })
    .then((resp) => resp.json())
      .then((updatedUser) => handleUserUpdate(updatedUser));
}

    return (
        <>
               <form 
        onSubmit={handleEditForm}>
          <label htmlFor="email">Email:</label>
          <br></br>
            <input
            id="email"
            type="text"
            name="email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            />
            <br></br>
            <label htmlFor="bio">Bio</label>
            <br></br>
            <input
                id="bio"
                type="text"
                name="bio"
                value={updatedBio}
                onChange={(e)=>setUpdatedBio(e.target.value)}
            />
           <br></br>
            <input type="submit" value="Save" />
            </form>
            
        </>
    );
}

export default EditUserInfo;