import React, {useState} from 'react';
import {Typography, Box, TextField, Button} from '@mui/material'

function Login({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch ("/api/login", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        })
         .then ((r) => {
            if (r.ok) {
            r.json().then((user) => onLogin(user));
            }
        });
    }
    
    return (
        <div>
        <Typography variant="h2"
        sx={{marginTop:10, paddingLeft:10, paddingRight:10, textAlign:"center"}}
        >
            Welcome Back!
        </Typography>
        <form 
        onSubmit={handleSubmit}>
            <Box 
            display ="flex" 
            flexDirection={'column'} 
            width='50%'
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
                marginTop={10}
                marginBottom={10}
                padding={3}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
                sx={{ 
                    backgroundColor: "#ffffff",           
                    ":hover": {
                    boxShadow:'10px 10px 20px #ccc'
                }}}
            >
            <Typography 
            variant="h2" 
            padding={3} 
            textAlign="center">
            LOGIN       
            </Typography>
            
            <TextField 
                onChange={(e)=> setUsername(e.target.value)}
                name="username"
                value={username}
                margin="normal" type={'username'} 
                variant="outlined"
                placeholder="Username"/>
            <TextField 
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
                value={password}
                margin="normal" 
                type={'password'} 
                variant="outlined"
                placeholder="Password"/>
            <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                sx={{marginTop: 3, borderRadius: 3}}
                >
            LOGIN                    
            </Button>            

</Box>
        </form>              
    </div>
);
}

export default Login;