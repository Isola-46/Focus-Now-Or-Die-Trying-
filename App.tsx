import React from 'react';
import Hero from './components/Hero';
import Psychology from './components/Psychology';
import Transformation from './components/Transformation';
import ContentPreview from './components/ContentPreview';
import SocialProof from './components/SocialProof';
import PurchaseForm from './components/PurchaseForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Hero />
      <Psychology />
      <Transformation />
      <SocialProof />
      <ContentPreview />
      <PurchaseForm />
      <Footer />
    </div>
  );
}

export default App;