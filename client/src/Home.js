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
        <div >
            <Box
            display="grid"            
            flexDirection={'row'}
            sx={{backgroundColor:'#e1bee7'}}
            >
                <Card
                sx={{margin:5, padding:5}}               
                >
                    <Typography variant='h2'>PROFILE PICTURE</Typography>
                    <img src={image_url} width="10%" alt="profile pic"></img>
                    <br></br>
                    <CloudinaryUpload 
                        preset="hgkxhiw2"
                        buttonText="Update Profile Picture"
                        handleUpload={handleUpload}
                    
                    />
                </Card>
                <Card
                 sx={{margin:5, padding:5}}
                >
                    <Typography variant='h2'>BIO</Typography>
                    <Typography variant='h4' color='primary'>{bio}</Typography>
                </Card>
                <Card
                sx={{margin:5, padding:5}}               
                >
                   <Typography variant='h2'>ACCOUNT INFO</Typography>
                   {isEditing ? (
                      <EditUserInfo handleUserUpdate={handleUserUpdate} user={user} setUser={setUser}/>

                   ):(
                    <>
                    <Typography variant='h4' color='primary'>Username: {username}</Typography>
                    <Typography variant='h4' color='primary'> Email: {email}</Typography> 
                     </>
                   )}
                   <br></br>
                <Button variant="outlined" onClick={() => setIsEditing((isEditing) => !isEditing)}><Typography variant='h5'>EDIT</Typography></Button>

                </Card>

            </Box>
        </div>
    );
}

export default Home;