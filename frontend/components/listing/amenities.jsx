import React from 'react';

export default ({amenities}) => {

  return (
    <section className="amenities">
      <h2>Amenities</h2>
      <ul>  
        {amenities.map (amenity => (
          <li className="amenity-item" key={amenity.id}>
            <i className={amenity.icon_path}></i>
            <p>{amenity.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}