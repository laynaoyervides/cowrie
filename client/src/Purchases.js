import React, { useState, useEffect } from 'react';
import {Box} from '@mui/material'
//import { DataGrid, GridColDef,GridRowsProp } from '@mui/x-data-grid';
import PurchaseDetails from './PurchaseDetails';

function Purchases({user}) {
    
    const[purchases, setPurchases] =useState([])

    useEffect ( () => {
    fetch('/api/me')
    .then ((r) => r.json())
    .then((array) => setPurchases(array.purchases))
    }, []
    )
    
//Data Columns
//const columns: GridColDef[] = [
  //  { field: 'price', headerName: 'Price', width: 150 },
  //  { field: 'desc', headerName: 'Description', width: 150 },
  //  { field: 'royalty', headerName: 'Royalties', width: 150 },
  //  { field: 'img', headerName: 'Image', width: 150 },


  //];
  
//Data Rows
//const rows: GridRowsProp = [
 //   { id: 1, col1: 'Hello', col2: 'World' },
 //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
 //   { id: 3, col1: 'MUI', col2: 'is Amazing' },
 // ];

    return (
        <div>
            <Box
                sx={{padding: 5, backgroundColor: '#ffffff'}}
            >
            {purchases.map((purchase)=>
                <PurchaseDetails
                    key={purchase.id}
                    id={purchase.id}
                    price={purchase.price}
                    royalty_percentage={purchase.royalty_percentage}
                    image_thumbnail={purchase.image_thumbnail}
                    description= {purchase.description}
                         />
            )}
            </Box>
        </div>
    );
}

export default Purchases;