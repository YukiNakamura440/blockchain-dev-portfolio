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

            <div className="h-8 w-8 bg-gradient-to-br from-solana to-solana-accent rounded-full glow"></div>
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
                <span className="px-2 py-1 rounded-md bg-neon-green/10 text-rose-600 font-semibold">Tron</span>
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
            {/* <div className="text-sm text-muted-foreground space-y-1">
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
            </div> */}
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
                <span className="block gradient-text from-solana to-solana-secondary">Defi & NFT & Trading Bots</span>
                <span className="text-foreground text-[#14f195]">Expert Developer</span>
              </h1>

              <div className="relative  md:block px-10">
                <div className="relative bg-card rounded-xl p-4 border border-border glow animate-float">
                  <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-purple-600"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-rose-600"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#14F195]"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-[#03E1FF]"></div>
                  <div className="mb-4 flex justify-between items-center"><div>
                    <h3 className="font-bold">PumpSwap Sniper Dashboard</h3>
                    <p className="text-xs text-muted-foreground">Active - Monitoring</p></div>
                    <span className="px-2 py-1 bg-solana-secondary/20 text-solana-secondary text-xs rounded-md">+42.3% MTD</span>
                  </div>
                  <div className="h-40 mb-4 bg-muted/30 rounded-md overflow-hidden relative grid place-items-center">
                    <div className="absolute inset-0 flex flex-col items-end">
                      <div className="w-full h-full flex items-end">
                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "30%",
                            background: "linear-gradient(to top, rgba(153, 69, 255, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "45%",
                            background: "linear-gradient(to top, rgba(153, 69, 255, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "25%",
                            background: "linear-gradient(to top, rgba(153, 69, 255, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "60%",
                            background: "linear-gradient(to top, rgba(20, 241, 149, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "35%",
                            background: "linear-gradient(to top, rgba(153, 69, 255, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "45%",
                            background: "linear-gradient(to top, rgba(153, 69, 255, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "70%",
                            background: "linear-gradient(to top, rgba(20, 241, 149, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "55%",
                            background: "linear-gradient(to top, rgba(20, 241, 149, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "65%",
                            background: "linear-gradient(to top, rgba(20, 241, 149, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "80%",
                            background: "linear-gradient(to top, rgba(20, 241, 149, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "65%",
                            background: "linear-gradient(to top, rgba(20, 241, 149, 0.8), transparent)"
                          }}
                        ></div>

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "75%",
                            background: "linear-gradient(to top, rgba(20, 241, 149, 0.8), transparent)"
                          }}
                        />

                        <div
                          className="flex-1 mx-px"
                          style={{
                            height: "90%",
                            background: "linear-gradient(to top, rgba(20, 241, 149, 0.8), transparent)"
                          }}
                        />


                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-line text-muted-foreground opacity-30 w-12 h-12"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg> */}
                      </div>

                      <div className="mt-4 flex items-center space-x-2 w-full">
                        <div className="h-1 flex-1 bg-muted_30 overflow-hidden">
                          <div className="h-full w-1/4 bg-solana-accent animate-data-flow"></div>
                        </div>
                        <div className="text-xs text-muted-foreground">Live Data Stream</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-muted/30 p-2 rounded-md">
                      <p className="text-xs text-muted-foreground">Token Launches</p>
                      <p className="font-bold">24</p>
                    </div>
                    <div className="bg-muted/30 p-2 rounded-md">
                      <p className="text-xs text-muted-foreground">Win Rate</p>
                      <p className="font-bold">94.7%</p></div>
                    <div className="bg-muted/30 p-2 rounded-md">
                      <p className="text-xs text-muted-foreground">Avg. ROI</p>
                      <p className="font-bold">317%</p>
                    </div>
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
