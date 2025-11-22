"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MissionText } from "@/components/MissionText";
import { Code2, Sparkles, Rocket, Check, ArrowRight, Zap, Globe, Layers } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
      
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        featuresRef.current.style.transform = `translateY(${-scrollY * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-lg z-40">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">Caspify</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium relative group overflow-hidden">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-primary group-hover:to-primary">
                Products
              </span>
            </a>
            <a href="#services" className="text-sm font-medium relative group overflow-hidden">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-primary group-hover:to-primary">
                Services
              </span>
            </a>
            <a href="#pricing" className="text-sm font-medium relative group overflow-hidden">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-primary group-hover:to-primary">
                Pricing
              </span>
            </a>
            <a href="#mission" className="text-sm font-medium relative group overflow-hidden">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-primary group-hover:to-primary">
                About
              </span>
            </a>
            <a href="#support" className="text-sm font-medium relative group overflow-hidden">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-primary group-hover:to-primary">
                Support
              </span>
            </a>
            <Button size="sm">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        
        <div ref={heroRef} className="container mx-auto px-4 text-center z-10">
          <Badge className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 scale-110" variant="secondary">
            <Sparkles className="mr-2 h-3 w-3" />
            Full-Stack Development
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            Building Websites
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-pulse">
              of the Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1200">
            Modern full-stack solutions for your business. From idea to launch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-7 duration-1400">
            <Button size="lg" className="text-lg h-14 px-8 shadow-2xl shadow-primary/50">
              Start a Project
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8">
              View Our Work
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </section>

      {/* Features */}
      <section id="services" ref={featuresRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Zap className="mr-2 h-3 w-3" />
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-cycle development of modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Frontend</CardTitle>
                <CardDescription className="text-base">
                  Modern interfaces with React, Next.js, and TypeScript
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Backend</CardTitle>
                <CardDescription className="text-base">
                  Scalable servers with Node.js, APIs, and databases
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Full-Stack</CardTitle>
                <CardDescription className="text-base">
                  Complete solutions from design to deployment
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-8" variant="secondary">
            Our Mission
          </Badge>
          <MissionText />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible packages for projects of any scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Starter</Badge>
                <CardTitle className="text-3xl">$999</CardTitle>
                <CardDescription className="text-base">Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Landing Page design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Responsive layout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>2 weeks development</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">Choose Plan</Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-primary hover:shadow-2xl hover:shadow-primary/30 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">Professional</Badge>
                <CardTitle className="text-3xl">$4,999</CardTitle>
                <CardDescription className="text-base">For growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Multi-page website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>CMS integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Custom Backend API</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>4-6 weeks development</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">Choose Plan</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Enterprise</Badge>
                <CardTitle className="text-3xl">$8,999+</CardTitle>
                <CardDescription className="text-base">Maximum capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Full-Stack application</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Microservices architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Real-time features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>API integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>DevOps & CI/CD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>8+ weeks development</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">Discuss Project</Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="mt-16 max-w-4xl mx-auto" id="support">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Additional Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Technical Support
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      From $499/month - updates, bug fixes, consultations
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Hosting & Domain
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      From $99/month - infrastructure setup and management
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      SEO Promotion
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      From $799/month - optimization and traffic growth
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Content Management
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      From $399/month - content and material updates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/10 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today and get a free consultation
          </p>
          <Button size="lg" className="text-lg h-14 px-8">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold">Caspify</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Caspify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}