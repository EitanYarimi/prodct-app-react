import React, { Component } from 'react';
import { form,FormGroup ,ControlLabel ,FormControl , Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import * as productActions from '../Actions/productActions'

class Product extends Component {


	constructor(props,context)
	{
		super(props,context);
	
		this.state = {
			product: { 
						
						name:'1',
						description:'2',
						price:'3'
					 }
			

		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDescriptionChange =this.handleDescriptionChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);

	}

	getValidationState(argument) {
		
	}

	handleNameChange(e)
	{
		const product = this.state.product
		product.name =  e.target.value
 		this.setState({ product: product });

	}

	handleDescriptionChange(e){
		const product = this.state.product
		product.description =  e.target.value
 		this.setState({ product: product });
	}

	handlePriceChange(e)
	{
		const product = this.state.product
		product.price =  e.target.value
 		this.setState({ product: product });

	}

	onClickSave(e)
	{
		
		this.props.createProduct(this.state.product);

		 console.log(this.state.product);
		 e.preventDefault();
	}

  	render() {

		return (
			<div>				
			     <form>
			        <FormGroup
			          controlId="formBasicText"
			          validationState={this.getValidationState()}>
			        
			          <ControlLabel>Name</ControlLabel>
			          <FormControl
			            type="text"
			            value={this.state.product.name}
			            placeholder="Enter text"
			            onChange={this.handleNameChange}
			          />
			          <FormControl.Feedback />			        
			          <ControlLabel>Description</ControlLabel>
			          <FormControl
			            type="text"
			            value={this.state.product.description}
			            placeholder="Enter text"
			            onChange={this.handleDescriptionChange}
			          />
			          <FormControl.Feedback />			          
			          <ControlLabel>Price</ControlLabel>
			          <FormControl
			            type="number"
			            value={this.state.product.price}
			            placeholder="Enter text"
			            onChange={this.handlePriceChange}
			          />
			          <FormControl.Feedback />			          
			        </FormGroup>
			        <Button type="submit" onClick={this.onClickSave}>
				      save
				    </Button>
			      </form>

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

		createProduct: product => dispatch(productActions.createProduct(product))

	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);


