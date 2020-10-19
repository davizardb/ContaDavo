import React from 'react'

export default function Button(props) {

  return (
    <button 
    style=
      {{background: "#0b42c2",
        color: "#fff",
        border: 0,
        padding: "10px 30px",
        cursor: "pointer",
        margintop: "15px",
        fontweight: "bold",
        fontsize: "14px"
      }}
    onClick={props.function}>{props.counter === 0 ? 'Vamo Contar?' : 'Adicionar 1'}</button>
  )
}
