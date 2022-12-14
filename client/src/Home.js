import React from 'react';
import {Box, Card, Avatar, Typography} from '@mui/material'

function Home({user}) {
    const {bio, image_url} = user 

 

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