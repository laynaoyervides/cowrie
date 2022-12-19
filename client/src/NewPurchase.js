import { Typography } from '@mui/material';
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
            <Typography>This is a new purchase component</Typography>
            <Typography variant="h4">Buy this Artwork</Typography>
                <Typography>Price: {list_price}</Typography>
                <Typography>Royalty Percentage: 10 (default)</Typography>
                <img src={img_url} width='5%'></img>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="description">DESCRIPTION</label>
                    <br></br>
                    <textarea
                        id="description"
                        type="text"
                        placeholder="description of the purchase"
                        name="description"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                    <br></br>

                        <button onClick={handleGenerateNft}>Generate NFT</button>
                        <Typography>{nftErrors}</Typography>

                    <button type="submit">Purchase Artwork</button>

                    <Typography>{errors}</Typography>
                </form>

        </div>
    );
}

export default NewPurchase;