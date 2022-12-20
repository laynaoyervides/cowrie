import { Typography, Box, Button } from '@mui/material';
import React, {useState} from 'react';

function NewPurchase({artwork, user}) {
    const {img_url, id, title, list_price} = artwork
    const[description, setDescription]= useState("")

    const[nft, setNft] = useState([])

    const [errors, setErrors] = useState([]);
    const [nftErrors, setNftErrors] = useState([])

    const [tokenId, setTokenId] = useState()


    console.log (artwork)

    const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                user_id: user.id,
                price: list_price,
                image_thumbnail: img_url,
                description: description,
                nft_id: nft.id,
               }
        ),
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Make a POST request to create a new purchase
        fetch("/api/purchases", configObj)
          .then((resp) => {
          if (resp.ok){
              resp.json().then((newPurchase)=> console.log(newPurchase))
          } else {
            resp.json().then((errorData)=> setErrors(errorData.errors))
          }
          
          });
      };

      const configNft = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                token_id: tokenId,
                image: img_url,
               }
        ),
      };
    
      const handleGenerateNft = (e) => {
        e.preventDefault();
        var MIN = 1, MAX = 30000;

        setTokenId(
            Math.floor(Math.random() * (MAX - MIN + 1)) + MIN,
            )
            console.log (tokenId)
        fetch("/api/nfts", configNft)
        .then((resp) => {
            if (resp.ok){
                resp.json().then((newNft)=> {
                    setNft(newNft)
                })
            } else {
              resp.json().then((errorData)=> setNftErrors(errorData.errors))
            }
            
            });
      }

    return (
        <div>
          <Box sx={{margin:10, padding: 2}}>
           
              <Box sx={{float: 'right',backgroundColor:'#ffffff', padding: 5}}>
              <Typography variant="h3" sx={{fontFamily:'sans-serif', textAlign:'right'}}>Buy this Artwork</Typography>
                <Typography sx={{fontFamily:'sans-serif', textAlign:'right'}}>Price: {list_price}</Typography>
                <Typography sx={{fontFamily:'sans-serif', textAlign:'right'}}>Royalty Percentage: 10 (default)</Typography>
               <img src={img_url} width='10%'></img>
                
                <form onSubmit={handleSubmit}>

                    <Typography sx={{fontFamily:'sans-serif'}}><label htmlFor="description">DESCRIPTION</label></Typography>
                   <br></br>
                    <Typography variant='h6'> Write a description with any details about the purchase that you would like on the NFT</Typography>
                    <textarea
                        id="description"
                        type="text"
                        placeholder="description of the purchase"
                        name="description"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                        <Typography variant="h6" color="primary">Click Generate NFT to create a TokenId and new contract</Typography>
                        <Button variant="outlined"onClick={handleGenerateNft}>Generate NFT</Button>
                        <Typography>{nftErrors}</Typography>

                    <Button type="submit" color="secondary" variant="contained" sx={{float: 'right', color:"#ffffff"}}>Purchase Artwork</Button>

                    <Typography>{errors}</Typography>
                </form>
                </Box>
                </Box>
        </div>
    );
}

export default NewPurchase;