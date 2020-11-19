import React from 'react';

export default ({amenities}) => {

  return (
    <section className="amenities">
      <ul>  
        {amenities.map (amenity => (
          <li key={amenity.id}>
            {amenity.name}
            <i className={amenity.icon_path}></i>
          </li>
        ))}
      </ul>
    </section>
  )
}