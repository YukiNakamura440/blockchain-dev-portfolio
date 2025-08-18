import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Users, DollarSign } from "lucide-react";
import nftShowcaseImage from "@/assets/nft-showcase.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "DeFiSwap Protocol",
      description: "Advanced AMM with concentrated liquidity and yield farming capabilities. Built with Solidity and featuring gas-optimized smart contracts.",
      image: nftShowcaseImage,
      technologies: ["Solidity", "Hardhat", "OpenZeppelin", "Chainlink"],
      stats: { tvl: "$1.2M", users: "5.2K", apy: "24%" },
      links: { github: "#", live: "#" }
    },
    {
      title: "NFT Marketplace Pro",
      description: "Full-featured NFT marketplace with lazy minting, royalties, and advanced search. Supports multiple file formats and IPFS storage.",
      image: nftShowcaseImage,
      technologies: ["Solidity", "React", "IPFS", "The Graph"],
      stats: { volume: "$850K", items: "12K", creators: "1.5K" },
      links: { github: "#", live: "#" }
    },
    {
      title: "Multi-Chain Bridge",
      description: "Secure cross-chain bridge supporting Ethereum, Polygon, and BSC. Features automated market making and liquidity incentives.",
      image: nftShowcaseImage,
      technologies: ["Solidity", "TypeScript", "Web3.js", "Ethers"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured</span> Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest blockchain projects showcasing advanced smart contract development 
              and innovative DeFi solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="cyber-border glow hover:glow group overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div 
                      className="aspect-video bg-cover bg-center rounded-lg m-6"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-ethereum/20 to-cyber-cyan/20 rounded-lg" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-bold gradient-text mb-3">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-cyber-cyan mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-ethereum/30 text-ethereum">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div>
                        <h4 className="text-sm font-semibold text-cyber-cyan mb-3">Key Metrics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(project.stats).map(([key, value], statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-lg font-bold text-neon-green">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4">
                        <Button variant="ethereum" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button variant="cyber" size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-16">
            <Button variant="neon" size="lg">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;