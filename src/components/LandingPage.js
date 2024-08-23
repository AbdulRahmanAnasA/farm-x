// src/components/LandingPage.js
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import '../styles/LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page">
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
        </div>
    );
}

export default LandingPage;
