import React from 'react'

const LabelComponent = ({tituloLabel, required}) => {
  return (
    <div className='label'>
        <label>{tituloLabel}{required && <span style={{color: 'red'}}>*</span>}</label>
    </div>
  )
}

export default LabelComponent