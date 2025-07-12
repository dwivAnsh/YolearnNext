// src/data/responses.ts

export interface ResponseItem {
  keywords: string[];
  reply: string;
}

const responses: ResponseItem[] = [
  {
    keywords: ["api", "API"],
    reply: "An API (Application Programming Interface) lets apps talk to each other, like a waiter delivering your request to the kitchen.",
  },
  {
    keywords: ["javascript"],
    reply: "JavaScript makes websites interactive — from buttons to animations, it brings pages to life.",
  },
  {
    keywords: ["react"],
    reply: "React is a JavaScript library that lets you build UI using components — reusable building blocks of code.",
  },
  {
    keywords: ["node", "node.js"],
    reply: "Node.js allows you to run JavaScript on the server, perfect for building fast APIs and backend apps.",
  },
  {
    keywords: ["frontend", "backend"],
    reply: "Frontend is what users see. Backend is the logic behind it. Both work together to power websites and apps.",
  },
  {
    keywords: ["database"],
    reply: "A database is where data is stored — like a smart digital notebook. Examples: SQL, MongoDB.",
  },
  {
    keywords: ["hello", "hi"],
    reply: "Hi! I'm Alex, your AI Learning Companion. What would you like to explore today?",
  },
  {
    keywords: [],
    reply: "That's a great question! Let's explore it together.",
  },
];

export default responses;
