import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
import { ListGroupItem ,ListGroup } from 'react-bootstrap';
//import * as productActions from '../Actions/productActions';
import {connect} from 'react-redux';

class ProductList extends Component {

	constructor(props,context)
	{
		super(props,context);		
		this.createProductRow = this.createProductRow.bind(this);		
	}

	createProductRow(product,index) {
		return(
				 <ListGroupItem href={'/products/'+ product.id} key={index}>	
					 <div><h3>name: {product.name}</h3></div>
					 <div>desc:{product.description}</div>	
					 <div>id:{product.id}</div>																													
				</ListGroupItem>  ) ;				
	}	

  	render() {		

		return (

			 <ListGroup>
			   {this.props.products.map(this.createProductRow,this)}
			  </ListGroup>				
			
		);		
	}
}

function mapStateToProps(state,ownProps){

	return{

		products :state.products

	};
}

function mapDispatchToProps(dispatch){

	return {

		//createProduct: product => dispatch(productActions.createProduct(product))

	};
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

