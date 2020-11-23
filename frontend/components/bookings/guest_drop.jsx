import React from 'react';

export default ({changeGuests, numGuests, type, capacity}) => {

  const downDisabled = (numGuests === 0 && !type) || (numGuests === 1 && type === "booking");
  const upDisabled = (type === "booking") && (numGuests === capacity);

  return (

    <div className="guest-drop drop">
      <h2 className="drop">Guests</h2>
      <div className="changeNum drop">
        <button className="drop" disabled={downDisabled}
          onClick={() => changeGuests(-1)}>-</button>
        <p className="drop">{numGuests}</p>
        <button className="drop" onClick={() => changeGuests(1)} disabled={upDisabled}>+</button>
      </div>
    </div>
  )
}