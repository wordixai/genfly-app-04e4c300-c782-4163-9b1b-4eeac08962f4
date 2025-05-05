import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Local Writer",
    content: "Brew Haven is my second office. The atmosphere is perfect for creativity, and their cappuccino is consistently the best in town. The staff remembers my name and order every time!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "David Chen",
    role: "Coffee Enthusiast",
    content: "As someone who's particular about coffee, I can confidently say Brew Haven serves exceptional espresso. Their attention to detail in every cup is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Regular Customer",
    content: "The pastries are as amazing as the coffee! I've been coming here for years and have never been disappointed. It's my favorite weekend treat.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what coffee lovers in our community have to say about their Brew Haven experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-amber-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-amber-900">{testimonial.name}</h4>
                  <p className="text-sm text-amber-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}