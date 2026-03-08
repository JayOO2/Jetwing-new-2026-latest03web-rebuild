"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const botResponses: Record<string, string[]> = {
  greeting: ["Hello! Welcome to Jetwing Travels! How can I help you today?", "Hi there! I'm here to help you plan your Sri Lanka trip!"],
  tours: ["We offer amazing tours: Authentic Ceylon, Adventurous Spirit, Barefoot Luxury, Following The Wild, and Romantic Serendipity. Which interests you?", "Our tours include: 7-10 days exploring Sigiriya, Kandy, Ella, beaches, and more! Would you like details on any specific tour?"],
  destinations: ["Sri Lanka has amazing destinations! Popular ones: Sigiriya, Colombo, Ella, Galle, Bentota, Anuradhapura, and more!", "We cover all of Sri Lanka - from ancient temples to beautiful beaches. Which area interests you?"],
  hotels: ["We have 20+ Jetwing hotels across Sri Lanka! Popular ones: Jetwing Blue (Negombo), Jetwing Colombo Seven, Jetwing Saman Villas (Bentota), Jetwing Vil Uyana (Sigiriya)"],
  prices: ["Our tour prices vary based on duration and luxury level. Contact us at info@jetwingtravels.com for a custom quote!", "For pricing details, please contact our team. We offer packages for all budgets!"],
  contact: ["You can reach us at info@jetwingtravels.com or call +94 77 726 5746. We're happy to help!"],
  default: ["That's a great question! For more details, please contact our travel experts at info@jetwingtravels.com or call +94 77 726 5746.", "I'd love to help with that! Contact our team for personalized assistance.", "For that, I'd recommend speaking with our travel experts. Email us or call anytime!"]
};

const keywords: Record<string, string[]> = {
  greeting: ["hello", "hi", "hey", "good morning", "good evening"],
  tours: ["tour", "package", "trip", "itinerary", "travel"],
  destinations: ["destination", "place", "visit", "sigiriya", "ella", "galle", "colombo", "beach"],
  hotels: ["hotel", "stay", "accommodation", "resort", "luxury"],
  prices: ["price", "cost", "budget", "cheap", "expensive", "money"],
  contact: ["contact", "email", "phone", "call", "reach"]
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! I'm your AI assistant for Jetwing Travels. How can I help you plan your Sri Lanka adventure?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    for (const [category, words] of Object.entries(keywords)) {
      if (words.some(word => lowerInput.includes(word))) {
        const responses = botResponses[category];
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    const defaultResponses = botResponses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const botMessage: Message = { role: "bot", content: getResponse(input) };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const quickReplies = [
    "Tell me about tours",
    "Best destinations",
    "Hotel prices",
    "Contact info"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gold rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-600 transition-colors"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Jetwing AI Assistant</h3>
              <p className="text-xs text-gray-300">Online now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.role === "user" 
                    ? "bg-primary text-white" 
                    : "bg-white border shadow-sm text-gray-800"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border shadow-sm p-3 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-gray-100 flex gap-2 overflow-x-auto">
            {quickReplies.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => { setInput(reply); }}
                className="whitespace-nowrap px-3 py-1 bg-white text-xs border rounded-full hover:bg-gold hover:text-white transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-gold"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-gold text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
