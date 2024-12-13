import React from 'react';
import Banner from '../components/home/Banner';
import TrendingProducts from '../components/home/TrendingProducts';
import TopCategories from '../components/home/TopCategories';
import Newsletter from '../components/home/Newsletter';

interface HomeProps {
  addToCart: (product: Product) => void;
}

export default function Home({ addToCart }: HomeProps) {
  return (
    <>
      <Banner />
      <TrendingProducts addToCart={addToCart} /> {/* Pass addToCart here */}
      <TopCategories />
      <Newsletter />
    </>
  );
}
