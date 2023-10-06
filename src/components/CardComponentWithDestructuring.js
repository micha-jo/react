import React from 'react'
import Button from './Button'

class CardComponentWithDestructuring extends React.Component {
  render(){
    const {id, ...otherProps} = this.props
    return (
      <div>
        <p>{id}</p>
        <Button {...otherProps}/>
      </div>
    )
  }
}

export default CardComponentWithDestructuring