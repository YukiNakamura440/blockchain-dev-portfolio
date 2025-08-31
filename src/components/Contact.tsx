import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar, Github, Linkedin, Twitter, Send } from "lucide-react";
import { config } from "@/config";
const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line for project inquiries",
      action: "Hello, touchsky000111",
      href: "mailto:touchsky000111@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      description: "Quick chat about your project",
      action: "@touchsky000111",
      href: "https://discord.com/users/377888885461483530"
    },
    {
      icon: Send,
      title: "Telegram",
      description: "Quick chat about your project",
      action: "@touchsky000111",
      href: "https://t.me/touchsky000111"
    },
  ];

  const socialLinks = [
    { icon: Github, href: config.socialLinks.github, label: "GitHub" },
    { icon: Twitter, href: config.socialLinks.twitter, label: "Twitter" },
    { icon: Send, href: config.socialLinks.telegram, label: "Telegram" }

  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build the <span className="gradient-text">Future</span> Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your blockchain vision to life? Let's discuss your project
              and explore innovative solutions.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="cyber-border glow hover:glow group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-ethereum/20 to-cyber-cyan/20 w-fit mx-auto mb-4 group-hover:from-ethereum/30 group-hover:to-cyber-cyan/30 transition-all duration-300">
                    <method.icon className="h-6 w-6 text-ethereum" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    className="text-cyber-cyan hover:text-neon-green transition-colors font-medium"
                  >
                    {method.action}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="cyber-border p-8 rounded-lg bg-gradient-to-br from-card/50 to-deep-purple/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need smart contract development, DeFi protocol design, or NFT marketplace creation,
                I'm here to help bring your ideas to reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-[#9945ffe6] text-white w-[200px]">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="cyber" size="lg" className="w-[200px]">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full cyber-border hover:border-ethereum/50 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-ethereum transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;