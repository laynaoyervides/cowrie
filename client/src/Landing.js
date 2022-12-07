import React, {useState} from 'react';
import { Typography, Box, Button } from '@mui/material';
import Login from "./Login"
import Signup from "./Signup"

function Landing({onLogin}) {

    const [showLogin, setShowLogin] = useState(true);


    return (
        <div>
        <Box>
            <Typography>Cowry Education</Typography>
        
        {showLogin ? (
                    <>
                    <Login onLogin={onLogin}/>
                    <hr></hr>
                    <Typography variant="h6">
Need an account?                    </Typography>
                        <br></br>
                        <Button 
                        color="primary" 
                        variant="contained" 
                        onClick={() => setShowLogin(false)}>
                         Sign Up
                     </Button>
                     </>
        )
                    :
                    
                     (
                    <>
                    <Signup onLogin={onLogin} />
                    <Typography variant="h6">
                        Already have an account?
                    </Typography>

                    <br></br>
                        <Button color="primary" variant="contained" onClick={() => setShowLogin(true)}>
                         Log In
                        </Button>

                    </>
                )
                     }
        </Box>
        </div>
    );
}

export default Landing;