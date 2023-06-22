import React, { useState } from 'react';
import './Filter.css';
export const Filter = ({ applyFilters, clearFilters, filterValues }) => {
  const { subscriptionChecked, burnerChecked, ownerNumber } = filterValues;

  const [subscriptionCheckedState, setSubscriptionCheckedState] = useState(subscriptionChecked);
  const [burnerCheckedState, setBurnerCheckedState] = useState(burnerChecked);
  const [ownerNumberState, setOwnerNumberState] = useState(ownerNumber);

  const handleSubscriptionChange = (e) => {
    setSubscriptionCheckedState(e.target.checked);
  };

  const handleBurnerChange = (e) => {
    setBurnerCheckedState(e.target.checked);
  };

  const handleOwnerNumberChange = (e) => {
    setOwnerNumberState(e.target.value);
  };

  const handleApplyFilters = () => {
    applyFilters(subscriptionCheckedState, burnerCheckedState, ownerNumberState);
  };

  const handleClearFilters = () => {
    setSubscriptionCheckedState(false);
    setBurnerCheckedState(false);
    setOwnerNumberState('');
    clearFilters();
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={subscriptionCheckedState}
          onChange={handleSubscriptionChange}
        />
        Subscription
      </label>
      <label>
        <input type="checkbox" checked={burnerCheckedState} onChange={handleBurnerChange} />
        Burner
      </label>
      <input
        type="text"
        value={ownerNumberState}
        onChange={handleOwnerNumberChange}
        placeholder="Owner Number"
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
      <button onClick={handleClearFilters}>Clear Filters</button>
    </div>
  );
};