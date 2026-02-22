import React, { useState, useEffect } from 'react';
import { Product } from '@org/models';
import { ProductsService } from '@org/shop-data';

interface ProductDetailProps {
  productId: string;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  productId,
  onAddToCart,
  onBack
}) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = ProductsService.getProductById(productId);
    setProduct(foundProduct || null);
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <button onClick={onBack}>Back to Products</button>
      <div className="product-content">
        <img src={product.imageUrl} alt={product.name} />
        <div>
          <h1>{product.name}</h1>
          <p className="category">{product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};