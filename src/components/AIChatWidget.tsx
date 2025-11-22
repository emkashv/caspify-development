"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi! I'm Caspify AI. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getSmartResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    // Greeting patterns
    if (lowerInput.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
      return "Hello! I'm here to help you learn about Caspify's full-stack development services. What would you like to know?";
    }

    // Pricing patterns - more detailed
    if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("pricing") || lowerInput.includes("how much")) {
      if (lowerInput.includes("starter")) {
        return "Our Starter plan is $2,999 and includes: Landing page design, responsive layout, SEO optimization, contact form, and 2 weeks of development time. Perfect for small businesses getting online!";
      } else if (lowerInput.includes("professional") || lowerInput.includes("pro")) {
        return "The Professional plan at $7,999 includes: Multi-page website, CMS integration, custom backend API, database setup, authentication system, and 4-6 weeks development. Ideal for growing businesses!";
      } else if (lowerInput.includes("enterprise")) {
        return "Enterprise solutions start at $15,999+ and include: Full-stack application, microservices architecture, real-time features, third-party API integrations, DevOps & CI/CD, and 8+ weeks development. Built for scale!";
      }
      return "We offer three tiers: Starter ($2,999) for landing pages, Professional ($7,999) for full websites with backend, and Enterprise ($15,999+) for complex applications. Which one interests you?";
    }

    // Support/maintenance
    if (lowerInput.includes("support") || lowerInput.includes("maintenance") || lowerInput.includes("after launch")) {
      return "We offer technical support starting at $499/month including updates, bug fixes, and consultations. We also provide hosting ($99/month), SEO promotion ($799/month), and content management ($399/month).";
    }

    // Technologies - detailed
    if (lowerInput.includes("tech") || lowerInput.includes("stack") || lowerInput.includes("framework") || lowerInput.includes("language")) {
      return "We use modern technologies: React & Next.js for frontend, Node.js & TypeScript for backend, PostgreSQL/MongoDB for databases, Docker for containerization, and AWS/Vercel for deployment. Everything is production-ready and scalable!";
    }

    // Timeline/duration
    if (lowerInput.includes("how long") || lowerInput.includes("time") || lowerInput.includes("duration") || lowerInput.includes("when")) {
      return "Development timelines: Starter projects take 2 weeks, Professional 4-6 weeks, Enterprise 8+ weeks. We provide weekly progress updates and can adjust the timeline based on your specific needs.";
    }

    // Process/workflow
    if (lowerInput.includes("process") || lowerInput.includes("how it works") || lowerInput.includes("workflow") || lowerInput.includes("steps")) {
      return "Our workflow: 1) Free consultation (30-60 min), 2) Detailed proposal with timeline & cost, 3) Design mockups for approval, 4) Development with weekly updates, 5) Testing & QA, 6) Deployment & training, 7) Ongoing support. You're involved at every step!";
    }

    // Services
    if (lowerInput.includes("service") || lowerInput.includes("what do you") || lowerInput.includes("what can you") || lowerInput.includes("do you offer")) {
      return "We specialize in: Frontend development (React, Next.js), Backend APIs & databases, Full-stack web applications, E-commerce platforms, CMS integration, Authentication systems, and Real-time features. What type of project do you have in mind?";
    }

    // Contact
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("phone") || lowerInput.includes("reach")) {
      return "You can contact us by clicking the 'Contact Us' button in the header. We typically respond within 2 hours on business days. We offer a free 30-minute consultation to discuss your project!";
    }

    // About company
    if (lowerInput.includes("about") || lowerInput.includes("who are you") || lowerInput.includes("company") || lowerInput.includes("mission")) {
      return "Caspify builds modern, scalable web applications from idea to launch. Our mission is to transform your vision into reality using cutting-edge technologies. We handle design, development, deployment, and ongoing support - everything you need!";
    }

    // Portfolio/examples
    if (lowerInput.includes("portfolio") || lowerInput.includes("example") || lowerInput.includes("work") || lowerInput.includes("projects")) {
      return "We've built e-commerce platforms, SaaS applications, corporate websites, booking systems, and real-time dashboards. Click 'View Our Work' in the hero section to see examples of our projects!";
    }

    // Custom/specific questions
    if (lowerInput.includes("custom") || lowerInput.includes("unique") || lowerInput.includes("specific")) {
      return "Absolutely! Every project is unique. We don't use templates - everything is custom-built to match your brand, requirements, and business goals. Let's discuss your specific needs!";
    }

    // SEO
    if (lowerInput.includes("seo") || lowerInput.includes("search engine") || lowerInput.includes("google")) {
      return "All our websites include SEO optimization: proper meta tags, semantic HTML, fast loading times, mobile responsiveness, and structured data. We also offer ongoing SEO services at $799/month for traffic growth.";
    }

    // Mobile/responsive
    if (lowerInput.includes("mobile") || lowerInput.includes("responsive") || lowerInput.includes("phone") || lowerInput.includes("tablet")) {
      return "Every website we build is fully responsive and mobile-first. Your site will look perfect on phones, tablets, and desktops. We test on all major devices and browsers!";
    }

    // Database
    if (lowerInput.includes("database") || lowerInput.includes("data") || lowerInput.includes("storage")) {
      return "We work with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases depending on your needs. Included in Professional and Enterprise plans, with proper security, backups, and optimization.";
    }

    // Hosting
    if (lowerInput.includes("hosting") || lowerInput.includes("server") || lowerInput.includes("deploy")) {
      return "We offer hosting & infrastructure management from $99/month, including setup, monitoring, SSL certificates, automated backups, and 99.9% uptime guarantee. Or we can deploy to your preferred platform!";
    }

    // Thank you
    if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
      return "You're welcome! Feel free to ask if you have any other questions. We're here to help! 😊";
    }

    // Goodbye
    if (lowerInput.includes("bye") || lowerInput.includes("goodbye") || lowerInput.includes("see you")) {
      return "Goodbye! Feel free to come back anytime if you have questions. Have a great day! 👋";
    }

    // Default intelligent response
    const contextualResponses = [
      "That's a great question! Could you tell me more about what you're looking for? I can provide details about our services, pricing, technology stack, or development process.",
      "I'd love to help! Are you interested in learning about our pricing plans, the technologies we use, our development timeline, or something else specific?",
      "Interesting! Let me help you with that. Would you like to know about our services (Frontend, Backend, Full-Stack), pricing options, or how our development process works?",
      "I'm here to assist! You can ask me about: pricing & plans, our tech stack, development timelines, support options, or our company mission. What interests you most?"
    ];
    
    return contextualResponses[Math.floor(Math.random() * contextualResponses.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", content: input }]);
    const userInput = input;
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI thinking time with intelligent response
    setTimeout(() => {
      setIsTyping(false);
      const response = getSmartResponse(userInput);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: response
      }]);
    }, 600 + Math.random() * 400); // Variable response time for more natural feel
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
        size="icon"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>

      {/* Chat Window - Smaller and Lower */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[420px] z-50 animate-in slide-in-from-bottom-5">
          <div className="relative p-[3px] rounded-2xl overflow-hidden h-full">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-purple-500 bg-[length:200%_200%] animate-gradient-shift rounded-2xl" />
            
            {/* Inner card */}
            <Card className="relative h-full flex flex-col shadow-2xl bg-background rounded-2xl">
              {/* Header */}
              <div className="p-3 border-b border-border">
                <h3 className="font-bold text-base">Caspify AI</h3>
                <p className="text-xs text-muted-foreground">Your smart website assistant</p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl px-4 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-background border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button size="icon" onClick={handleSend} className="h-9 w-9">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};