import React from "react";

function CountryList({ list }) {
  return (
    <ul className="countryList">
      {list.map((elem, i) => (
        <li key={i}>
          <div>
            <h2>Country name: {elem.name}</h2>
          </div>

          <p>Region: {elem.region}</p>
          <p>Arena size: {elem.area}</p>
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
