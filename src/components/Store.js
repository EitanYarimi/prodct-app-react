import React, { Component } from 'react';
import ProductList from './ProductList';
import Product from './Product';
import ProductApi from '../services/productsApi'
import Header from './common/header'
import {connect} from 'react-redux';
//import * as productActions from '../Actions/productActions'
import { DropdownButton , MenuItem ,Grid ,Col ,Row } from 'react-bootstrap';

class Store extends Component {
	
	state = {
		products:[]	
		
	};

	componentDidMount() {					

		this.setState({
			products: ProductApi.getProducts()
			
		});		
	}

  	render() {
			
  		return (
			<div>
				<Header/>
				<Grid>				  	
				    <Row className="show-grid">
				      	<Col md={6} mdPush={6}>
				      		<Product  lastIndex={this.state.lastIndex}  ></Product>
				      	</Col>
				      	<Col md={6} mdPull={6}>
					        <div className="Store">
				  				<DropdownButton title="Order By" id="bg-nested-dropdown">
						  			<MenuItem eventKey="1">Name</MenuItem>
						  			<MenuItem eventKey="2">Create Date</MenuItem>
				    			</DropdownButton>

				  				<ProductList products={this.state.products}></ProductList>
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

	return {

		//createProduct: product => dispatch(productActions.createProduct(product))

	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Store);
