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

  const technologies = [
    "Solidity", "Ethereum", "Hardhat", "OpenZeppelin", "React", "TypeScript", 
    "Web3.js", "Ethers.js", "IPFS", "MetaMask", "Chainlink", "The Graph"
  ];

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
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 gradient-text">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm cyber-border hover:border-ethereum/50 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;