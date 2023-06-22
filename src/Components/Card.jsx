import React from 'react';
import './card.css';
import data from '../Data/Index.js';

export const Card = ({ filterValues }) => {
  const { subscriptionChecked, burnerChecked, ownerNumber } = filterValues;

  const filteredData = data.filter((item) => {
    if (subscriptionChecked && !burnerChecked && item.card_type !== 'subscription') {
      return false;
    }
    if (!subscriptionChecked && burnerChecked && item.card_type !== 'burner') {
      return false;
    }
    if (ownerNumber && item.owner_id !== ownerNumber) {
      return false;
    }
    return true;
  });

  return (
    <div className="cardbox">
      {filteredData.map((item) => (
        <div className="outerdiv" key={item.name}>
          <div className="innerdiv">
            <h2 id="heading">{item.name}</h2>
            <div id="paradiv">
              <p id="mem">Memberfive</p>
              <div className="round" />
              <p id="mem">{item.budget_name}</p>
            </div>
            <div>
              <div className="innerdiv2">
                <p>Amount</p>
                <p>Frequency</p>
                <p>Expiry</p>
              </div>
              <div className="innerdiv3">
                <p>{item.available_to_spend.value - item.spent.value} SGD</p>
                <p>Monthly</p>
                <p>{item.expiry}</p>
              </div>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
};
