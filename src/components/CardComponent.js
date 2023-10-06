import React from "react"
import PropTypes from 'prop-types';

class CardComponent extends React.Component{
  
  static propTypes = {
    id: PropTypes.number.isRequired,
    ary: PropTypes.arrayOf(PropTypes.object),
    ary: PropTypes.arrayOf(PropTypes.shape({
      nom : PropTypes.string.isRequired,
      prenom : PropTypes.oneOf(['Doe', 'Dupond']),
      age : PropTypes.number.isRequired,
      admin :PropTypes.oneOf([true, false])
    })).isRequired,
  }
  
  static defaultProps = {
    color: 'red',
  }

  render () {
    return (
      <div>
        <p>{this.props.color}</p>
        <button onClick={this.props.addValue}>Ajouter 1</button>
      </div>
    )
  }
}

export default CardComponent