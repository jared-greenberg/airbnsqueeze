import React from 'react';

export default ({changeGuests, numGuests, type}) => {

  const disabled = (numGuests === 0 && !type) || (numGuests === 1 && type === "booking"); 

  return (

    <div className="guest-drop drop">
      <h2 className="drop">Guests</h2>
      <div className="changeNum drop">
        <button className="drop" disabled={disabled}
          onClick={() => changeGuests(-1)}>-</button>
        <p className="drop">{numGuests}</p>
        <button className="drop" onClick={() => changeGuests(1)}>+</button>
      </div>
    </div>
  )
}