import StoreData from './storeData'

var ProductApi = {

	setProducts : function(products)
	{
		setlocalStorageProducts(products);

	},

	getProducts : function (sortType) {

			var products = getlocalStorageProducts();
			
			products = products? products : StoreData.products;

			products = products.sort(function(a,b){
				
				if(sortType === 'name')
				{
					return compareByName(a.name,b.name);
				}
				else
				{
					return compareByDate(a.createDate,b.createDate);
				}			
			
			});
			
			setlocalStorageProducts(products);

			return products;
			
	},

	deleteProduct :function(productId)
	{
		var products = getlocalStorageProducts();	
		
		products = products.filter(function(item) {
		  return item.id !== productId;
		});	
		
		setlocalStorageProducts(products);

	},

	updateProduct :function(product)
	{
		var products = getlocalStorageProducts();	

		products.forEach(function(item) {
		  
		  if (product.id === item.id) {
		   		item.name = product.name;
		   		item.creadate = product.creadate;
		   		item.description = product.description;
		   		item.price = product.price;
		  }

		});			

		setlocalStorageProducts(products);

		
	},

	addProduct :function(product)
	{
		let products = getlocalStorageProducts();

		products.push(product);

		setlocalStorageProducts(products);

		return product;
	},

}

export default ProductApi;


function setlocalStorageProducts(products) {
	
	localStorage.setItem("products", JSON.stringify(products));
}

function getlocalStorageProducts() {

	return JSON.parse(localStorage.getItem("products"));
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