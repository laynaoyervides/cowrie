import React from 'react';
import {Typography, Box} from '@mui/material'
import Purchases from './Purchases';
//import Investments from './Investments';




function Wallet({user}) {
    return (
        <div>
            <Box
                            sx={{backgroundColor:'#ffe0b2'}}

            >
            <Typography variant='h1' color="secondary" sx={{textAlign: 'center', fontFamily: 'sans-serif', padding:10}}>WALLET</Typography>

            <Box sx={{margin:10, backgroundColor:'#ffffe4', padding:5}}> 
                <Typography variant='h3' sx={{textAlign: 'left', fontFamily: 'sans-serif', padding: 2}}>YOUR NFTS</Typography>
            </Box>

            <Box sx={{margin:10, backgroundColor:'#ffffe4', padding:5}}>
                <Typography variant='h3' sx={{textAlign: 'left', fontFamily: 'sans-serif', padding: 2}}>PURCHASES</Typography>
                <br></br>
                 <Purchases user={user}/> 
               
            </Box>
            <Box sx={{margin:10, backgroundColor:'#ffffe4', padding:5}}>
                <Typography variant='h3'sx={{textAlign: 'left', fontFamily: 'sans-serif', padding: 2}}>INVESTMENTS</Typography>
                {/* <Investments user={user}/> */}
              
            </Box>
            </Box>
            
        </div>
    );
}

export default Wallet;