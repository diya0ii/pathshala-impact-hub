import React from 'react';
import { Mail, Phone, MapPin, Heart, BookOpen, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl">Basti Ki Pathshala Foundation</span>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
              Empowering children through quality education in underserved communities. 
              Together, we build brighter futures one child at a time.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-white/80">Founded under Indian Societies Act 1860</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-white/80 hover:text-primary transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">info@bastikipathshala.org</p>
                  <p className="text-white/80">volunteer@bastikipathshala.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">+91 9876543210</p>
                  <p className="text-white/80">+91 9876543211</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  New Delhi, India<br />
                  Pin: 110001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>31,245+ Lives Changed</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Quality Education for All</span>
              </div>
            </div>
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;