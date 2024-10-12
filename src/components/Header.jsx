import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./images/ST_Logo.webp";
import profile from "./images/profile2.avif";
import cart from "./images/cart2.png";
import bestseller from "./images/bestseller.jpeg";
import { useShop } from "../Store/store";

const Header = () => {
  const API = "https://fakestoreapi.com/products";
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();
  

  // Fetch product data
  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setProducts(jsonData || []);
      setFiltered(jsonData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData(API);
  }, []);

  const { handleShop } = useShop();
  useEffect(() => {
    if (filtered.length > 0) {
      handleShop(filtered);
    }
  }, [filtered]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilteredClick = () => {
    let filteredList = [];
    if (search.trim() === "") {
      filteredList = products; // No search, show all products
    } else {
      filteredList = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(filteredList);
  };

  const handleShopClick = async () => {
    handleFilteredClick();
    await new Promise((resolve) => setTimeout(resolve, 0));
    navigate("/shop");
  };
  //api feching ends;

  const handleProfileClick = () => {
    navigate("/login");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <nav className={styles.navlinks}>
          <a href="/">Home</a>
          <a href="/shop" onClick={handleShopClick}>
            Shop
          </a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit" onClick={handleFilteredClick}>
            Search
          </button>
        </div>

        <div className={styles.icons}>
          <img src={bestseller} alt="Bestseller" className={styles.icon} onClick={handleShopClick} />
          <img
            src={profile}
            alt="Profile"
            className={styles.icon}
            onClick={handleProfileClick}
          />
          <img src={cart} alt="Cart" className={styles.icon} />
        </div>
      </header>
    </>
  );
};

export default Header;
