import React, { useState } from 'react';
import { DataGrid, GridColDef,GridRowsProp } from '@mui/x-data-grid';


import NewPurchase from './NewPurchase';
import PurchaseDetails from './PurchaseDetails';

function Purchases({user}) {
    const[purchases, setPurchases] =useState([])

    fetch('/me')
    .then ((r) => r.json())
    .then((array) => setPurchases(array.purchases))

//Data Columns
const columns: GridColDef[] = [
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'desc', headerName: 'Description', width: 150 },
    { field: 'royalty', headerName: 'Royalties', width: 150 },
    { field: 'img', headerName: 'Image', width: 150 },


  ];
  
//Data Rows
const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

    return (
        <div>
                  <DataGrid rows={rows} columns={columns} />
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
                <NewPurchase />
        </div>
    );
}

export default Purchases;