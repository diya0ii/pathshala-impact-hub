import React, { useState } from 'react';
import { Send, User, Mail, Phone, MapPin, Calendar, Clock, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VolunteerSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    availability: '',
    interests: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll contact you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      availability: '',
      interests: '',
      experience: '',
      motivation: ''
    });

    setIsSubmitting(false);
  };

  const volunteerOpportunities = [
    {
      title: "Teaching Assistant",
      description: "Help children with their studies and homework",
      commitment: "2-3 hours/week",
      icon: User
    },
    {
      title: "Event Coordinator",
      description: "Organize educational events and activities",
      commitment: "Flexible",
      icon: Calendar
    },
    {
      title: "Fundraising Support",
      description: "Help with fundraising campaigns and outreach",
      commitment: "1-2 hours/week",
      icon: Heart
    }
  ];

  return (
    <section id="volunteer" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-secondary/5 rounded-full"></div>
      
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Join Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Become a Volunteer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our passionate community of volunteers and help us make a lasting impact 
            in the lives of children. Every contribution matters in building a brighter future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Volunteer Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Volunteer Opportunities</h3>
            <div className="space-y-6 mb-8">
              {volunteerOpportunities.map((opportunity, index) => (
                <div key={index} className="card-elevated">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <opportunity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{opportunity.title}</h4>
                      <p className="text-muted-foreground mb-3">{opportunity.description}</p>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{opportunity.commitment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Volunteer */}
            <div className="bg-gradient-soft rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">Why Volunteer With Us?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Make a direct impact on children's education</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Gain valuable teaching and community experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Join a supportive community of like-minded individuals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Flexible scheduling to fit your lifestyle</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Volunteer Form */}
          <div className="card-elevated">
            <h3 className="text-2xl font-bold text-foreground mb-6">Volunteer Application</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Availability *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both weekdays and weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Areas of Interest */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Areas of Interest *
                </label>
                <select
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Select area of interest</option>
                  <option value="teaching">Teaching & Tutoring</option>
                  <option value="events">Event Coordination</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="administration">Administrative Support</option>
                  <option value="multiple">Multiple Areas</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Relevant Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-textarea h-20"
                  placeholder="Tell us about any relevant experience you have (teaching, working with children, community service, etc.)"
                />
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="form-textarea h-24"
                  placeholder="Share your motivation for joining our mission..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;