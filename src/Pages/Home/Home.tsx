// Home.tsx
import React, { useState } from "react";
import { useTheme } from "../../Hooks/ThemeContext";
import { useLanguage } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Home.css";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/200",
      title: "პროდუქტი 1",
      description: "მოკლე აღწერა პროდუქტის შესახებ.",
      price: 29.99,
      category: "ტექნიკა",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/200",
      title: "პროდუქტი 2",
      description: "მოკლე აღწერა პროდუქტის შესახებ.",
      price: 39.99,
      category: "ტანსაცმელი",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/200",
      title: "პროდუქტი 3",
      description: "მოკლე აღწერა პროდუქტის შესახებ.",
      price: 49.99,
      category: "აქსესუარები",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/200",
      title: "პროდუქტი 1",
      description: "მოკლე აღწერა პროდუქტის შესახებ.",
      price: 29.99,
      category: "ტექნიკა",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/200",
      title: "პროდუქტი 2",
      description: "მოკლე აღწერა პროდუქტის შესახებ.",
      price: 39.99,
      category: "ტანსაცმელი",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/200",
      title: "პროდუქტი 3",
      description: "მოკლე აღწერა პროდუქტის შესახებ.",
      price: 49.99,
      category: "აქსესუარები",
    },
  ];

  const handleFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  const handleDetails = (id: number) => {
    alert(`დეტალური გვერდი პროდუქტის ID: ${id}`);
  };

  return (
    <div className={`page ${theme}`}>
      <h2>{TEXTS[language].home}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            onFavorite={handleFavorite}
            onDetails={handleDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
