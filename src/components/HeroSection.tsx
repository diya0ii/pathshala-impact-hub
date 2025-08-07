import React from 'react';
import heroImage from '@/assets/hero-education.jpg';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onNavigateToVolunteer: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToVolunteer }) => {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative overflow-hidden">
      {/* Organic shapes */}
      <div className="organic-shape organic-shape-1"></div>
      <div className="organic-shape organic-shape-2"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-8 h-8 border-2 border-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <BookOpen className="w-8 h-8 text-white" />
              <span className="text-white/90 text-lg font-medium">Education for All</span>
            </div>
            
            <h1 className="hero-title mb-6">
              Basti Ki Pathshala
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light">Foundation</span>
            </h1>
            
            <p className="hero-subtitle mb-8">
              Join us in our mission to break the barriers of education in underserved communities. 
              With your support, we can provide quality education to children living in slum areas, 
              empowering them with the knowledge and skills they need to build a brighter future. 
              Together, let's make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onNavigateToVolunteer}
                className="btn-hero group"
              >
                Take Action Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Learn Our Story
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">31K+</span>
                </div>
                <p className="text-white/80 text-sm">Lives Changed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">19K+</span>
                </div>
                <p className="text-white/80 text-sm">Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">10K+</span>
                </div>
                <p className="text-white/80 text-sm">Supporters</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Children learning in community education program"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Quality Education</p>
                    <p className="text-sm text-muted-foreground">For every child</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hope & Future</p>
                    <p className="text-sm text-muted-foreground">Building dreams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;