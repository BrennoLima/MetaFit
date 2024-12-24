import React from 'react';

import { Hero } from './Hero';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { Footer } from './Footer';

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};
