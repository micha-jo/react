import Button from "./Button.js"



const CardWidthDestructuring = ({id, ...otherProps}) => {
  return (
    <div>
      <p>{id}</p>
      <Button {...otherProps}/>
    </div>
  )
}

export default CardWidthDestructuring