import React from 'react';
import { Product } from '@org/models';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onAddToCart
}) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <div className="actions">
        <button onClick={() => onViewDetails(product)}>View Details</button>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};