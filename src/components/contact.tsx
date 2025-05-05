import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-800 text-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="max-w-2xl mx-auto">
            We'd love to see you in person! Stop by for a cup, or get in touch with any questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-amber-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-300 mt-1" />
                  <div>
                    <h4 className="font-medium text-amber-200">Address</h4>
                    <p>123 Coffee Street, Brewville, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-300 mt-1" />
                  <div>
                    <h4 className="font-medium text-amber-200">Phone</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-amber-300 mt-1" />
                  <div>
                    <h4 className="font-medium text-amber-200">Email</h4>
                    <p>hello@brewhaven.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-amber-300 mt-1" />
                  <div>
                    <h4 className="font-medium text-amber-200">Hours</h4>
                    <p>Monday - Friday: 7AM - 8PM</p>
                    <p>Saturday - Sunday: 8AM - 10PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-amber-700">
                <h4 className="font-medium text-amber-200 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-amber-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-amber-300">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-amber-300">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-amber-900 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-amber-200 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 rounded-md bg-amber-800 border border-amber-700 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-amber-200 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 rounded-md bg-amber-800 border border-amber-700 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-amber-200 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 rounded-md bg-amber-800 border border-amber-700 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button variant="coffee" className="bg-amber-500 hover:bg-amber-600 w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}