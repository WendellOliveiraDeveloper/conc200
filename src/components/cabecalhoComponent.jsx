import React from 'react'
import './styles/cabecalhoStyle.css'

const CabecalhoComponent = ({tituloCabecalho}) => {
  return (
    <div className='estiloCabecalho'>
      <h1>{tituloCabecalho}</h1>
    </div>
  )
}

export default CabecalhoComponent