import { useState } from "react"
import Card from "./Card"
import CardComponent from "./CardComponent"
import CardWidthDestructuring from "./CardWithDestructuring"
import CardComponentWithDestructuring from "./CardComponentWithDestructuring"

import Style from '../styles/Props.module.css'

const propType = [
  { 
    nom: 'john',
    prenom : 'Doe',
    age: 25, 
    admin: false, 
  }, 
  {
    nom: 'jean',
    prenom : 'Dupond',
    age: 40, 
    admin: true, 
  }
]

const Props = () => {
  const [value, setValue] = useState (0)
  const addValue = () => {
    setValue(value + 1)
  }

  return (
    <>
      <div className={Style.cardContainer}>
        <Card id={1} addValue={addValue} ary={propType}/>
        <CardComponent id={2} addValue={addValue} ary={propType}/>
        <CardWidthDestructuring id={3} addValue={addValue}/>
        <CardComponentWithDestructuring id={4} addValue={addValue}/>
        
      </div>
      <p>{value}</p>
    </>
  )
}

export default Props