export function createProduct(product)
{
	return {type : 'CREATE_PRODUCT',product}
}

export function deleteProduct(product)
{
	return {type : 'DELETE_PRODUCT',product}
}

export function sortProductsByName()
{
	return {type : 'SORT_PRODUCTS_NAME'}
}

export function sortProductsByDate()
{
	return {type : 'SORT_PRODUCTS_DATE'}
}




