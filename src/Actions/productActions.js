export function createProduct(product)
{
	return {type : 'CREATE_PRODUCT',product}
}

export function deleteProduct(product)
{
	return {type : 'DELETE_PRODUCT',product}
}


