import React from 'react'
import error_404 from '../../images/error404.svg'

export const Error404 = () => {
  return (
    <div className="container">
        <center>
            <br/>
            <h1>PAGINA NO ENCONTRADA</h1>
            <img src={error_404}  alt="..."/>
        </center>
    </div>
  )
}
