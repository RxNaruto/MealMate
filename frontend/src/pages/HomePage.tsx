import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';

export const HomePage = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={isLoggedIn} />
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              title="FOOD DELIVERY"
              subtitle="FROM RESTAURANTS"
              discount="UPTO 60% OFF"
              imageSrc="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
              imageAlt="Delicious breakfast with eggs and toast"
            />
            <ServiceCard
              title="DINEOUT"
              subtitle="EAT OUT & SAVE MORE"
              discount="UPTO 50% OFF"
              imageSrc="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
              imageAlt="Restaurant dining experience"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold">MealMate</span>
            </div>
            <p className="text-gray-400 mb-8">© 2025 MealMate Limited. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Team</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">MealMate Blog</a>
              <a href="#" className="hover:text-white transition-colors">Bug Bounty</a>
              <a href="#" className="hover:text-white transition-colors">MealMate One</a>
              <a href="#" className="hover:text-white transition-colors">MealMate Corporate</a>
              <a href="#" className="hover:text-white transition-colors">MealMate it</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
