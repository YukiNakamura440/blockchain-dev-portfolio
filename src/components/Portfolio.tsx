import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Users, DollarSign } from "lucide-react";
import nftShowcaseImage from "@/assets/nft-showcase.jpg";
import cryptoTradingPlatformImage from "@/assets/cryptoTradingPlatformImage.png";
import AINFTMarketPlace from "@/assets/AI-NFT-Marketplace.png";
import OmnibusImage from "@/assets/Omnibus.png";
import MiniappImage from "@/assets/mini-project-1.png"
import MevBotImage from "@/assets/Solana-MevBot.gif"
import PepeImage from "@/assets/pepe.png"
import BTCBullTokenImage from "@/assets/BTCBullToken.png"
import FantasyPepeImage from "@/assets/fantasy-pepe.gif"
import DYDXBotImage from "@/assets/DYDX_Bot.png"
import SniperBotImage from "@/assets/SniperBotImage.png"
import CrypoCasinoImage from "@/assets/CryptoCasino.png"

const Portfolio = () => {
  const projects = [
    {
      title: "DeFiSwap Protocol",
      description: "Advanced AMM with concentrated liquidity and yield farming capabilities. Built with Solidity and featuring gas-optimized smart contracts.",
      image: nftShowcaseImage,
      technologies: ["Solana", "Anchor", "Rust", "NextJS"],
      stats: { tvl: "$1.2M", users: "5.2K", apy: "24%" },
      links: { github: "https://github.com/touchsky000111/Solana-Spl-Token-Swap-Platform", live: "https://spl-token-swap.vercel.app/" }
    },
    {
      title: "Crypto Casino Game",
      description: "This is Crypto Casino Game platform",
      image: CrypoCasinoImage,
      technologies: ["React Vite", "TypeScript", "NodeJs", "Ethers", "Back-end"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/Crypto-Casino", live: "https://redowex.com" }
    },

    {
      title: "Crypto Trading Protocol on B2 Network",
      description: "PumpBit is a comprehensive crypto trading platform designed to facilitate perpetual contract trading on the B2 network and offer a staking feature for liquidity pools. ",
      image: cryptoTradingPlatformImage,
      technologies: ["Solidity", "Hardhat", "OpenZeppelin", "B2 Network"],
      stats: { tvl: "$1.2M", users: "5.2K", apy: "24%" },
      links: { github: "https://github.com/touchsky000111/Crypto-Trading-Platform-EVM", live: "https://testnet.pumpbit.io/" }
    },
    {
      title: "Solana Sniper Bot",
      description: "This trading bot is sniper bot with memecoin",
      image: SniperBotImage,
      technologies: ["Solana/Web3", "TypeScript", "NodeJs", "Helius", "Back-end"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/Solana-Raydium-Sniper-Bot", live: "" }
    },
    {
      title: "AI NFT Marketplace Pro",
      description: "Full-featured NFT marketplace with lazy minting, royalties, and advanced search. Supports multiple file formats and IPFS storage.",
      image: AINFTMarketPlace,
      technologies: ["Solidity", "React", "IPFS", "The Graph"],
      stats: { volume: "$850K", items: "12K", creators: "1.5K" },
      links: { github: "https://github.com/touchsky000111/Ethereum-AI-NFT-Marketing-Place", live: "http://nfprompt.io/" }
    },
    {
      title: "Omnibus-Wallet-mMoney Platform",
      description: "This service provides a comprehensive API for managing cryptocurrency wallets, handling transactions, and interacting with the Solana blockchain. Built with Rust and Axum, it offers high performance, type safety, and scalability for blockchain applications.",
      image: OmnibusImage,
      technologies: ["Rust", "TypeScript", "Web3.js", "Ethers", "Back-end"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/Omnibus-Wallet-mMoney/", live: "#" }
    },
    {
      title: "Telegram mini app Game",
      description: "This innovative mini app seamlessly blends entertainment and opportunity, making it the perfect launchpad for our upcoming token.",
      image: MiniappImage,
      technologies: ["React Vite", "TypeScript", "NodeJs", "Ethers", "Back-end"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/Opullenx-TG-mini-app-Bot-Backend", live: "https://t.me/@opulencex_airdropgame_bot" }
    },
    {
      title: "Solana Mev Bot",
      description: "This high-performance MEV bot delivers strategic edge through validator-node-level front-running, leveraging Solana's speed for real-time arbitrage and transaction pool dominance.",
      image: MevBotImage,
      technologies: ["TypeScript", "NodeJs", "Bot", "Validate Node"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/Solana-Mev-Bot", live: "" }
    },
    {
      title: "Pepe NFT Generate app",
      description: "This high-performance MEV bot delivers strategic edge through validator-node-level front-running, leveraging Solana's speed for real-time arbitrage and transaction pool dominance.",
      image: PepeImage,
      technologies: ["React Vite", "TypeScript", "NodeJs", "Ethers", "Back-end"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/littlepepe", live: "https://littlepepe.com/" }
    },
    {
      title: "Bull Token Pre-sale Platform",
      description: "",
      image: BTCBullTokenImage,
      technologies: ["React Vite", "TypeScript", "NodeJs", "Ethers", "Back-end"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/BullBtc-Presale", live: "https://btcbulltoken.com/" }
    },
    {
      title: "Fantasy Pepe",
      description: "This project is Presale and Staking Platform for Pepe coin on Ethereum and Binance Smart chaain",
      image: FantasyPepeImage,
      technologies: ["React Vite", "TypeScript", "NodeJs", "Ethers", "Back-end"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/Fantasy-Pepe", live: "https://fantasypepe.com/" }
    },
    {
      title: "DYDX Telegram Bot",
      description: "This trading bot is using DYDX account on https://mintscan.io",
      image: DYDXBotImage,
      technologies: ["TypeScript", "NodeJs", "Ethers", "Back-end"],
      stats: { bridged: "$2.1M", txs: "15K", chains: "3" },
      links: { github: "https://github.com/touchsky000111/btc_eth_pair_bot", live: "" }
    },


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
                    <div className="absolute inset-0 bg-gradient-to-br from-ethereum/20 to-cyber-cyan/20 rounded-lg" />
                    <div
                      className="aspect-video bg-cover bg-center rounded-lg m-6 z-1000 transform group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
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
                      {/* <div>
                        <h4 className="text-sm font-semibold text-cyber-cyan mb-3">Key Metrics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(project.stats).map(([key, value], statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-lg font-bold text-neon-green">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div> */}

                      {/* Links */}
                      <div className="flex gap-3 pt-4">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="ethereum" size="sm">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </a>

                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <Button variant="cyber" size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </a>
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
      </div >
    </section >
  );
};

export default Portfolio;