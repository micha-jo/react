import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div>
      <p>{props.color}</p>
      <button onClick={props.addValue}>Ajouter 1</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  ary: PropTypes.arrayOf(PropTypes.object),
  ary: PropTypes.arrayOf(PropTypes.shape({
    nom : PropTypes.string.isRequired,
    prenom : PropTypes.oneOf(['Doe', 'Dupond']),
    age : PropTypes.number.isRequired,
    admin :PropTypes.oneOf([true, false])
  })).isRequired,
}

Card.defaultProps = {
  color: 'blue',
}

export default Card