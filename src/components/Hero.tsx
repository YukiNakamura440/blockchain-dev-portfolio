import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-blockchain.jpg";
import profileImage from "../assets/avatar.jpg"; // 👈 Add your profile image
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { config } from "@/config/index"
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ethereum/20 rounded-full blur-xl floating" />
      <div
        className="absolute bottom-32 right-16 w-32 h-32 bg-cyber-cyan/20 rounded-full blur-xl floating"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-green/20 rounded-full blur-xl floating"
        style={{ animationDelay: "-4s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-32 ">
          {/* Profile Section */}


          <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-cyber-cyan shadow-xl"
            />

            {/* Name & Title */}
            <div className="space-y-3">
              {/* Name */}
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-ethereum via-cyber-cyan to-neon-green bg-clip-text text-transparent">
                {config.author}
              </h2>

              {/* Role */}
              <p className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 shadow-sm">
                🚀 Defi & NFT & Trading bot Developer
              </p>

              {/* Tech Stack */}
              <p className="text-muted-foreground flex flex-wrap gap-3 items-center">
                <span className="px-2 py-1 rounded-md bg-ethereum/10 text-ethereum font-semibold">Ethereum</span>
                <span className="px-2 py-1 rounded-md bg-cyber-cyan/10 text-cyber-cyan font-semibold">Solana</span>
                <span className="px-2 py-1 rounded-md bg-neon-green/10 text-neon-green font-semibold">Tron</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={config.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-cyber-cyan/20 transition"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              {/* <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-cyber-cyan/20 transition"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a> */}
              <a
                href={config.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-cyber-cyan/20 transition"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a
                href={config.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-cyber-cyan/20 transition"
              >
                <Send className="w-5 h-5 text-foreground" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>{config.socialLinks.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌍</span>
                  <span>{config.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full cyber-border mb-8">
                <div className="w-2 h-2 bg-neon-green rounded-full pulse-glow" />
                <span className="text-sm text-muted-foreground">
                  Available for Projects
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.2] tracking-tight">
                <span className="block gradient-text">Defi & NFT & Trading Bots</span>
                <span className="text-foreground">Expert Developer</span>
              </h1>

              {/* Subtitle */}
              <p className="relative text-lg md:text-2xl text-muted-foreground/80 mb-12 max-w-3xl leading-relaxed tracking-wide">
                <span className="absolute -left-6 top-2 w-1 h-12 bg-gradient-to-b from-ethereum to-cyber-cyan rounded-full hidden md:block" />
                Crafting <span className="font-semibold text-foreground">scalable</span>
                <span className="gradient-text font-semibold"> Ethereum </span> &
                <span className="gradient-text font-semibold"> Solana </span> smart contracts,
                <span className="gradient-text font-semibold"> DeFi </span> protocols, and
                <span className="gradient-text font-semibold"> NFT ecosystems</span>.
                <br className="hidden md:block" />
                <span className="text-foreground font-semibold">Let’s build the decentralized future 🚀</span>
              </p>



              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg">
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Smart Contracts
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold gradient-text mb-2">$2M+</div>
                  <div className="text-sm text-muted-foreground">
                    TVL Managed
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">
                    NFT Projects
                  </div>
                </div>
              </div>

              {/* /*{CTA Buttons}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="cyber" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-ethereum to-cyber-cyan rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
