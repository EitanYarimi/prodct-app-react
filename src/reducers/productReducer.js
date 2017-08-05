import ProductApi from '../services/productsApi'

export default function productReducer(state = [],action){
	
	var newState = [];

	switch(action.type)
	{	
		case 'CREATE_PRODUCT':			
			action.product.date = new Date();			
			 newState =  [...state,Object.assign({},action.product)];	//shadow copy state	
			ProductApi.setProducts(newState);
			return newState;		
		case 'DELETE_PRODUCT':
			 newState = [...state].filter(element => element !== action.product);
			ProductApi.setProducts(newState);
			return newState;

		case 'SORT_PRODUCTS_NAME':
			newState =  [...state].sort(function(a,b){
			 		return compareByName(a.name,b.name);
			 	});
			ProductApi.setProducts(newState);
			return newState;
		
		case 'SORT_PRODUCTS_DATE':
			newState =  [...state].sort(function(a,b){
			 		return compareByDate(a.createDate,b.createDate);
			 	});
			ProductApi.setProducts(newState);
		 	 return newState;

		default:
			return state;
	}
}



function compareByName(a,b)
{
   a = a.toLowerCase();
   b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function compareByDate(a,b)
{    
	 return new Date(a).getTime() + new Date(b).getTime();
}
