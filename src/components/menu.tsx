import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Espresso",
    description: "Rich and intense shot of pure coffee essence",
    price: "$3.50",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7afe3e6a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and milk foam",
    price: "$4.75",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Chocolate Croissant",
    description: "Buttery, flaky pastry filled with rich chocolate",
    price: "$4.25",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Avocado Toast",
    description: "Sourdough bread topped with avocado, sea salt, and red pepper flakes",
    price: "$8.50",
    category: "Food",
    image: "https://images.unsplash.com/photo-1603046891744-76e6481cf539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Menu</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Discover our carefully crafted selection of coffee, pastries, and light meals made with the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-amber-900">{item.name}</h3>
                  <span className="text-amber-700 font-medium">{item.price}</span>
                </div>
                <p className="text-amber-600 text-sm mb-4">{item.description}</p>
                <span className="inline-block px-3 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="coffee">View Full Menu</Button>
        </div>
      </div>
    </section>
  );
}