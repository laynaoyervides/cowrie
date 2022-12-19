import React from 'react';
import {Typography, Box} from '@mui/material'
//import Purchases from './Purchases';
//import Investments from './Investments';




function Wallet({user}) {
    return (
        <div>
            <Typography variant='h1' sx={{textAlign: 'center'}}>WALLET</Typography>

            <Box> 
                <Typography variant='h3' sx={{textAlign: 'center'}}>YOUR NFTS</Typography>
            </Box>

            <Box>
                <Typography variant='h3' sx={{textAlign: 'center'}}>PURCHASES</Typography>
                {/* <Purchases user={user}/> */}
               
            </Box>
            <Box>
                <Typography variant='h3'sx={{textAlign: 'center'}}>INVESTMENTS</Typography>
                {/* <Investments user={user}/> */}
              
            </Box>
            
        </div>
    );
}

export default Wallet;