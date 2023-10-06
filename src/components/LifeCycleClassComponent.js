import React, { Component } from 'react';

class LifecycleComponent extends Component {
	constructor(props){
		super(props)
		console.log('constructor')

}

componentDidMount(){
	console.log('composant monté')
}

componentDidUpdate(prevProps){
	console.log('composant mis à jour')
	console.log(prevProps)
}

componentWillUnmount(){
	console.log('composant va être démonté')
}

	

	render(){
		return (
      <h1>{this.props.value}</h1>
    )
  }
}

export default LifecycleComponent;