import React from 'react';

// Components
import Product from './Product';
import { ProductContext } from '../contexts'

const Products = () => {
const {products} = React.useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
