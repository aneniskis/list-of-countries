import React from "react";

function Buttons({ list, filterO, listAZ, listZA, listAll, backList }) {
  const sortedZA = (listAll) => {
    listZA(listAll);
  };
  const sortedAZ = (listAll) => {
    listAZ(listAll);
  };
  const filterArray = (type) => {
    const types = {
      all: 'all',
      area: "area",
      region: "region",
    };
    const filterProperty = types[type];
    if (filterProperty === "region") {
      let arr = [...listAll].filter(
        (a) =>
          typeof a[filterProperty] === "string" &&
          a[filterProperty] === "Oceania"
      );
      filterO(arr);
    } else if (filterProperty === "area") {
      let arr = [...listAll ].filter(
        (a) =>
          typeof a[filterProperty] === "number" && a[filterProperty] < 65300
      );
      filterO(arr);
    } else if (filterProperty=== 'all'){
      let arr = [...listAll]
      backList(arr)

    }

  };
  return (
    <div className="buttons">
      <div className="button"> 
      <p>Sort from:</p>
        <button onClick={() => sortedAZ(listAll)}>A to Z</button>
        <p> or</p>
        <button onClick={() => sortedZA(listAll)}>Z to A</button>
      </div>
      <div className="filter">
        <label htmlFor="">Filter by:</label>
        <select name="" id="" onChange={(e) => filterArray(e.target.value)}>
          <option value="-">-</option>
          <option value="all"> All Countries</option>
          <option value="area"> Smaller than LTU</option>
          <option value="region"> Oceania region</option>
        </select>
      </div>
    </div>
  );
}

export default Buttons;
