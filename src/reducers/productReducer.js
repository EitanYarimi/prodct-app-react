
import ProductApi from '../services/productsApi'

export default function productReducer(state = [],action){
	
	switch(action.type)
	{
		case 'CREATE_PRODUCT':
			
			action.product.date = new Date();
			action.product.id = Math.max.apply(Math,state.map(function(o){return o.id;})) +1 //get next id
			var newState =  [...state,Object.assign({},action.product)];	//shadow copy state	
			ProductApi.setProducts(newState);
			return newState;		

		default:
			return state;

	}

}
