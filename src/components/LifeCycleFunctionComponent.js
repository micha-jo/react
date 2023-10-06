import {useEffect, useState, useMemo} from 'react'

const LifeCycleFunctionComponent = () => {
  const [value, setValue]= useState(0)
  const [state, setState]= useState('Le composant n\'existe pas')

  const incrValue = ()=> {
    setValue (prevValue => prevValue+ 1)
  }

  useEffect(()=>{
    setState('Le composant de type function  est monté')
    console.log('Le composant de type function est monté')
  },[])

  useEffect(()=>{
    setState('Le composant de type function est mis à jour')
    console.log('Le composant de type function est mis à jour')

    if (value>10){
      return () =>{
        setState('Le composant de type function  va être demonté')
        console.log('Le composant de type function va être demonté')
      }
    }
  },[value])
  
  const memoValue = useMemo(()=> value + 10, [])
  const memoValue2 = useMemo(()=> value + 10, [value])

  return (
    <>
      <div className='useState'>
        <p>{value}</p>
        <button onClick={incrValue}>Cliquez-moi</button>
      </div>
      <div className='useEffect'>
        <p>{state}</p>
      </div>
      <div className='usememo'>
        <p>{memoValue} - {memoValue2} </p>
      </div>
      
    </>
  )
}

export default LifeCycleFunctionComponent