// ProductCard.tsx
import React, { useState } from "react";
import "./ProductCard.css";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category?: string;
  onFavorite: (id: number) => void;
  onDetails: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  category,
  onFavorite,
  onDetails,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavorite(id);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-card-image" />
      {category && <span className="product-card-category">{category}</span>}
      <h3 className="product-card-title">{title}</h3>
      <p className="product-card-description">{description}</p>
      <div className="product-card-footer">
        <span className="product-card-price">${price.toFixed(2)}</span>
        <button className="product-card-button" onClick={() => onDetails(id)}>
          დეტალები
        </button>
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
