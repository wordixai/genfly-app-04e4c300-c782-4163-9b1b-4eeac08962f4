import { Button } from "@/components/ui/button";
import { Coffee, Clock, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative bg-amber-900 text-amber-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Experience Coffee <span className="text-amber-300">Perfection</span>
          </h1>
          
          <p className="text-xl mb-8">
            Artisanal coffee, freshly baked pastries, and a warm atmosphere to make your day better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="coffee" className="bg-amber-50 text-amber-900 hover:bg-amber-100">
              View Our Menu
            </Button>
            <Button variant="outline" className="border-amber-50 text-amber-50 hover:bg-amber-800">
              Reserve a Table
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-amber-300" />
              <span>Premium Beans</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-300" />
              <span>Open 7AM - 10PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-300" />
              <span>123 Coffee Street</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}