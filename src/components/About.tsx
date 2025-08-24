import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Zap, Globe } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Shield,
      title: "Smart Contract Security",
      description: "Expert in secure smart contract development with extensive security auditing experience."
    },
    {
      icon: Code,
      title: "DeFi Development",
      description: "Building sophisticated DeFi protocols including AMMs, lending platforms, and yield farms."
    },
    {
      icon: Zap,
      title: "NFT Marketplaces",
      description: "End-to-end NFT marketplace development with advanced minting and trading features."
    },
    {
      icon: Globe,
      title: "Web3 Integration",
      description: "Seamless Web3 frontend integration with modern React and blockchain technologies."
    }
  ];

  const technologies = {
    ethereum: [
      { name: "Solidity", icon: "🟨" },
      { name: "Ethereum", icon: "⧫" },
      { name: "Hardhat", icon: "⚒️" },
      { name: "OpenZeppelin", icon: "🛡️" },
      { name: "Chainlink", icon: "🔵" },
      { name: "The Graph", icon: "📊" },
    ],
    solana: [
      { name: "Rust", icon: "🦀" },
      { name: "Anchor Framework", icon: "⚓" },
      { name: "Solana Web3.js", icon: "🌊" },
      { name: "Phantom Wallet", icon: "👻" },
      { name: "Metaplex", icon: "🎨" },
      { name: "Serum DEX", icon: "💹" },
    ],
    tron: [
      { name: "TronWeb", icon: "🔺" },
      { name: "Truffle", icon: "🍫" },
      { name: "JustLend", icon: "🏦" },
      { name: "SunSwap", icon: "☀️" },
    ],
    general: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Web3.js", icon: "🌐" },
      { name: "Ethers.js", icon: "🔗" },
      { name: "IPFS", icon: "📦" },
      { name: "MetaMask", icon: "🦊" },
    ],
  };



  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About</span> My Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 5 years in blockchain development, I specialize in creating secure,
              scalable, and innovative decentralized solutions.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {expertise.map((item, index) => (
              <Card key={index} className="cyber-border glow hover:glow group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-ethereum/20 to-cyber-cyan/20 group-hover:from-ethereum/30 group-hover:to-cyber-cyan/30 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-ethereum" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies */}
          {/* Technologies */}
          <div className="text-center">
            <h3 className="text-3xl font-extrabold mb-10 ">
              🚀 Technologies & Tools
            </h3>

            {/* Ethereum Ecosystem */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-6 text-ethereum">⧫ Ethereum Ecosystem</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {technologies.ethereum.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl bg-background/40 border border-border/40 hover:border-ethereum/60 shadow-md 
          hover:shadow-ethereum/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl group-hover:scale-125 transition-transform">
                        {tech.icon}
                      </span>
                      <span className="font-medium text-sm md:text-base text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solana Ecosystem */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-6 text-cyber-cyan">🌊 Solana Ecosystem</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {technologies.solana.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl bg-background/40 border border-border/40 hover:border-cyber-cyan/60 shadow-md 
          hover:shadow-cyber-cyan/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl group-hover:scale-125 transition-transform">
                        {tech.icon}
                      </span>
                      <span className="font-medium text-sm md:text-base text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tron Ecosystem */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-6 text-red-500">🔺 Tron Ecosystem</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {technologies.tron.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl bg-background/40 border border-border/40 hover:border-red-500/60 shadow-md 
          hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl group-hover:scale-125 transition-transform">
                        {tech.icon}
                      </span>
                      <span className="font-medium text-sm md:text-base text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Web3 / Frontend */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-neon-green">⚡ General Web3 & Frontend</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {technologies.general.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl bg-background/40 border border-border/40 hover:border-neon-green/60 shadow-md 
          hover:shadow-neon-green/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl group-hover:scale-125 transition-transform">
                        {tech.icon}
                      </span>
                      <span className="font-medium text-sm md:text-base text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;