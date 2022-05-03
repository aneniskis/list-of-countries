
import { useEffect, useState } from "react";
import CountryList from "./Compinents/CountryList";
import Pagination from "./Compinents/Pagination";
import "./pignation.scss";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Buttons from "./Compinents/Buttons";

function App() {
  const [country, setCountry] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [listAll, setListAll] = useState([])


  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())

      .then((data) => {
        // setList(data);
        setCountry(data);
        setListAll(data)
        
        
      });
  }, []);

  const countryPerPage = 5;
  const pagesVisited = pageNumber * countryPerPage;



  const pageCount = Math.ceil(country.length / countryPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const listZA = (list) => {
    const sorted = [...list].sort((a, b) => b.name.localeCompare(a.name));
    localStorage.setItem("list", JSON.stringify(sorted));
    
    
    setCountry(sorted);
  };
  const listAZ = (list) => {
    const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem("list", JSON.stringify(sorted));
    setCountry(sorted);
  };
  const filterO = (arr) => {
    const arr1 = [...arr];
    localStorage.setItem("list", JSON.stringify(arr1));
    setCountry(arr1);
    setPageNumber(0);
    
  };
  const backList = (arr)=>{
    const arr1 = [...arr];
    localStorage.setItem("list", JSON.stringify(arr1));
    setCountry(arr1);
    setPageNumber(0);
  }

  return (
    <div className="app">
      <h2 className="title">List of Country</h2>
      <Buttons
        filterO={filterO}
        listAZ={listAZ}
        listZA={listZA}
        listAll={listAll}
        backList={backList}
      ></Buttons>
      {
          <ul className="countryList">
          {country.slice(pagesVisited, pagesVisited+countryPerPage).map((elem, i) => (
            <li key={i}>
              <div>
                <h2>Country name: {elem.name}</h2>
              </div>

              <p>Region: {elem.region}</p>
              <p>Arena size: {elem.area}</p>
            </li>
          ))}
        </ul>
      }
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        onPageChange={changePage}
        />
    </div>
  );
}
export default App;