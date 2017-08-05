import React, { Component } from 'react';
import ProductList from './ProductList';
import Product from './Product';
import Header from './common/header'
import {connect} from 'react-redux';
import * as productActions from '../Actions/productActions'
import { DropdownButton , MenuItem ,Grid ,Col ,Row } from 'react-bootstrap';

class Store extends Component {
	
	constructor(props,context)
	{
		super(props,context);	

		

		this.sortByName = this.sortByName.bind(this);	
		this.sortByDate	= this.sortByDate.bind(this);		
	}	
	
	sortByName()
	{
		this.props.actions.sortProductsByName();
	}
	
	sortByDate()
	{
		this.props.actions.sortProductsByDate();	

	}


  	render() {
			
  		return (
			<div>
				<Header/>
				<Grid>				  	
				    <Row className="show-grid">
				      	<Col md={6} mdPush={6}>
				      		<Product></Product>
				      	</Col>
				      	<Col md={6} mdPull={6}>
					        <div className="Store">
				  				<DropdownButton title="Order By" id="bg-nested-dropdown">
						  			<MenuItem onClick={this.sortByName} eventKey="1">Name</MenuItem>
						  			<MenuItem onClick={this.sortByDate}  eventKey="2">Create Date</MenuItem>
				    			</DropdownButton>

				  				<ProductList  products={this.props.products}></ProductList>
				  			</div>
				    	</Col>
				  </Row>
			  	</Grid>  			
			</div>	  		
  		);
  	}
  }

 function mapStateToProps(state,ownProps){

	return{

		products :state.products

	};
}

function mapDispatchToProps(dispatch){

return{ 
		actions:{
					sortProductsByName:()=>  dispatch(productActions.sortProductsByName()),
					sortProductsByDate:()=>  dispatch(productActions.sortProductsByDate())
				}	
	};
	
}

export default connect(mapStateToProps,mapDispatchToProps)(Store);
