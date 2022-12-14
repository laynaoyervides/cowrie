import React from 'react';

import InvestmentDetails from './InvestmentDetails';
import NewInvestment from './NewInvestment';


function Investments({user}) {
    return (
        <div>
              <InvestmentDetails />
                <NewInvestment />
            
        </div>
    );
}

export default Investments;