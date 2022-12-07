import React, {useState}from 'react';
import { Box, Typography, Button, TextField} from "@mui/material";


function Signup({onLogin}) {
    const [username, setUsername] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        fetch ("/signup", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, 
                email, 
                password, 
            }),
        })
         .then ((r) => {
            
            if (r.ok) {
            r.json().then((user) => onLogin(user));
            } 
            
        });
    }

    return (
        <div>
        <Box>
        <Typography variant="h2"
        sx={{marginTop:10, paddingLeft:10, paddingRight:10, textAlign:"center"}}
        >
Learn about Crypto, Art, NFTs, and more          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
            <Box display ="flex" 
            flexDirection={'column'} 
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
                marginTop={10}
                padding={3}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
                sx={{
                    backgroundColor: "#ffff72",           
                    ":hover": {
                    boxShadow:'10px 10px 20px #ccc'
                }}}
            >
            <Typography 
            variant="h2" 
            padding={3} 
            textAlign="center">
SIGNUP        
            </Typography>
            
          

                 <TextField 
                onChange={(e)=> setEmail(e.target.value)}
                name="email"
                value={email}
                margin="normal" type={'email'} 
                variant="outlined"
                placeholder="Email"/>

            <TextField 
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                value={username}
                margin="normal" 
                type={'text'} 
                variant="outlined" 
                placeholder="Username"/>
            <TextField 
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                margin="normal" 
                type={'password'} 
                variant="outlined"
                placeholder="Password"/>
            <Button 
                type="submit"
                variant="contained" 
                color="secondary" 
                sx={{marginTop: 3, borderRadius: 3}}
                > 
Submit                </Button>
            


</Box>
        </form> 
    </div>
        
    );
}

export default Signup;