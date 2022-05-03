import React from 'react'

function Pagination({countryPerPage, totalCountry, paginate, pageNr }) {

    const pageNumbers=[]
    for(let i=1; i<=Math.ceil(totalCountry/countryPerPage);i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)

  return (
    
    <div>
        <ul className='pigination'>
            {
               pageNumbers.map((number, i) =>
                   <li key={number} className={pageNr === number? 'page':'li'} >
                       <a onClick={()=>paginate(number)} href="!#">{number}</a>
                   </li>
               )
            }
        </ul>
    </div>
  )
}

export default Pagination