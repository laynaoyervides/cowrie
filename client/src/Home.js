import React, {useState} from 'react';
import {Box, Card, Avatar, Typography, Button} from '@mui/material'
import CloudinaryUpload from './CloudinaryUpload';
import EditUserInfo from './EditUserInfo';

function Home({user, setUser, onUpdateUser}) {
    const {bio, email, image_url, username} = user 

    const [isEditing, setIsEditing]= useState(false);

    const handleUpload = (result) => {
        const body = {
          image_url: result.info.secure_url,
          img_thumb: result.info.eager[0].secure_url,
          cloudinary_public_id: result.info.public_id
        }
        fetch('/api/me', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then(user => {
            console.log(user);
            setUser(user)
          })
      }

  
      const handleUserUpdate = (updatedUser) => {
        setIsEditing(false);
        onUpdateUser(updatedUser);
      };
 

    return (
        <div>
            <Box
            display="grid"            
            flexDirection={'row'}
            gridTemplateColumns= 'repeat(3, 1fr)' 
            >
                <Card>
                    <Typography>PROFILE</Typography>
                    <Avatar alt="profile picture" src={image_url}></Avatar>
                    <CloudinaryUpload 
                        preset="hgkxhiw2"
                        buttonText="Update Profile Picture"
                        handleUpload={handleUpload}
                    
                    />
                </Card>
                <Card>
                    <Typography>BIO</Typography>
                    <p>{bio}</p>
                </Card>
                <Card>
                   <Typography>ACCOUNT INFO</Typography>
                   {isEditing ? (
                      <EditUserInfo handleUserUpdate={handleUserUpdate} user={user} setUser={setUser}/>

                   ):(
                    <>
                    <Typography>Username: {username}</Typography>
                    <Typography> Email: {email}</Typography> 
                     </>
                   )}
                <Button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></Button>

                </Card>

            </Box>
        </div>
    );
}

export default Home;