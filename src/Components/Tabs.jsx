import React, { useState } from 'react';
import './Tabs.css';
import { Card } from './Card';
import { Filter } from './Filter';
import { NavLink } from 'react-router-dom';


export const Tabs = () => {
  const [filterValues, setFilterValues] = useState({
    subscriptionChecked: false,
    burnerChecked: false,
    ownerNumber: '',
  });

  const handleApplyFilters = (subscriptionChecked, burnerChecked, ownerNumber) => {
    setFilterValues({
      subscriptionChecked,
      burnerChecked,
      ownerNumber,
    });
  };

  const handleClearFilters = () => {
    setFilterValues({
      subscriptionChecked: false,
      burnerChecked: false,
      ownerNumber: '',
    });
  };

  return (
    <div>
      <div className="navbar">
        <ul>
          <li>Your</li>
          <li>All</li>
          <li>Blocked</li>
        </ul>
        <hr />
      </div>
      <div>
        <Filter
          applyFilters={handleApplyFilters}
          clearFilters={handleClearFilters}
          filterValues={filterValues}
        />
        <Card filterValues={filterValues} />
      </div>
    </div>
  );
};