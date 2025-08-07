import React from 'react';
import aboutImage from '@/assets/about-community.jpg';
import volunteersImage from '@/assets/volunteers-together.jpg';
import { Users, Heart, Utensils, GraduationCap, Target, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '31,245', label: 'Lives Changed', icon: Heart, color: 'bg-gradient-primary' },
    { number: '28,976', label: 'Meals Served', icon: Utensils, color: 'bg-secondary' },
    { number: '19,854', label: 'Interns', icon: GraduationCap, color: 'bg-gradient-primary' },
    { number: '10,989', label: 'Supporters', icon: Users, color: 'bg-secondary' },
  ];

  return (
    <section id="about" className="section-padding bg-accent/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/5 rounded-full"></div>
      
      <div className="container-custom">
        {/* Main intro */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">We Work Together</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Foundation
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do. 
            Under the banner of 'We Work Together,' we embrace the power of unity, recognizing that 
            real change comes from collective action.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card bg-white border border-border/50">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="stat-number text-foreground">{stat.number}</div>
              <div className="stat-label text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <Target className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-medium">Our Mission</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Breaking Barriers of Education
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education 
              in underserved communities. We are dedicated to providing quality education to children 
              living in slum areas, ensuring that every child has the opportunity to thrive and succeed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our goal is to create a nurturing learning environment where every child can access the 
              tools, resources, and support they need to unlock their full potential. Through innovative 
              teaching methods, community engagement, and strategic partnerships, we empower children 
              with the knowledge and skills necessary to build a brighter future.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Quality Education Access</p>
                <p className="text-muted-foreground">For every child, regardless of circumstances</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Community education program in action"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Story</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              From Vision to Impact
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Basti Ki Pathshala Foundation began with a simple yet powerful vision: to transform the 
              lives of children living in slum areas through education. Founded under the Indian 
              Societies Act of 1860, our journey started with a deep-seated belief in the potential 
              of every child, regardless of their circumstances.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              It all began when Sunita, inspired by their own experiences and driven by a passion for 
              social justice, embarked on a mission to address the educational inequalities prevalent 
              in underserved communities. Armed with determination and fueled by compassion, they 
              rallied a team of like-minded individuals who shared their vision.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through the years, we've witnessed the transformative power of education firsthand. 
              We've seen shy, uncertain children blossom into confident, capable individuals, equipped 
              with the knowledge and skills to pursue their dreams.
            </p>
          </div>
          <div className="lg:order-1 relative">
            <img
              src={volunteersImage}
              alt="Volunteers working together in education program"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Community Unity</p>
                  <p className="text-sm text-muted-foreground">Working together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;