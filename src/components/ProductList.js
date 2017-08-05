import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
import { ListGroupItem ,ListGroup } from 'react-bootstrap';
import * as productActions from '../Actions/productActions';
import {connect} from 'react-redux';

class ProductList extends Component {

	constructor(props,context)
	{
		super(props,context);

		

		this.createProductRow = this.createProductRow.bind(this);	
		this.onClickDelete	= this.onClickDelete.bind(this,);
	}


	onClickDelete(product)
	{		
		this.props.deleteProduct(product); 			
	}

	createProductRow(product,index) {
		
		return(<div key={index}>
				 <ListGroupItem href={'/products/' + product.id } header={product.name}  >
				 	<span >{product.description}</span>																													
				 </ListGroupItem>   
				 <button onClick={this.onClickDelete.bind(this,product)} className="btn btn-xs btn-warning">
				       <span> Delete</span>
				 </button>
				</div>
			  );				
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

		deleteProduct: product => dispatch(productActions.deleteProduct(product))

	};
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

