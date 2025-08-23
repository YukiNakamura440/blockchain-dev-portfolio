import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import FlexibleStarField from "@/components/FlexibleStarField";

const Index = () => {
  return (
    <div className="min-h-screen">
      {
        /* Star Field Background */
      }
      <FlexibleStarField 
        showControls={true}
        initialConfig={{
          spawnRate: 0.3,
          maxStars: 50,
          starLifetime: 3000,
          animationSpeed: 1,
          glowIntensity: 0.8
        }}
      />
      <Navigation />
      <main>
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 BlockchainDev. Built with React & Love for Web3.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
