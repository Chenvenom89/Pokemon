import React from 'react'

export default function Pagination({gotoNextPage,gotoPrevPage}) {
  return (
    <div>
       {gotoPrevPage &&<button onClick={gotoPrevPage}> previous page</button>}
       {gotoNextPage && <button onClick={gotoNextPage}>Next page</button>}
    </div>
  )
}
