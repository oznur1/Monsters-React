

import "./cardlist.css"
import Card from "../card/Card"
import React from 'react'

function CardList({monsters}) {
  return (
    <div className="card-list">
     {
        monsters.map((monster)=>{
            return <Card monster={monster}/>
        })
     }
    </div>
  )
}

export default CardList;