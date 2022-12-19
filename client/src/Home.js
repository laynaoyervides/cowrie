import React from 'react';
import {Box, Card, Avatar, Typography} from '@mui/material'
import CloudinaryUpload from './CloudinaryUpload';

function Home({user, setUser}) {
    const {bio, image_url} = user 


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
                    <Typography>EDIT ACCOUNT INFO</Typography>
                </Card>

            </Box>
        </div>
    );
}

export default Home;