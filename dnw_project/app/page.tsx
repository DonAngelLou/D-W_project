"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Header';
import About from '../components/About';
import SwiperSection from '../components/SwiperSection';
import CharacterGrid from '../components/CharacterGrid';
import SocialSection from '../components/SocialSection';
import Footer from '../components/Footer';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar/>
      <Hero />
      <About />
      <SwiperSection />
      <CharacterGrid />
      <SocialSection />
      <Footer />
    </div>
  );
}
