// ✅ MainSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import dayjs from "dayjs";
import responses from "../data/responses";

interface Message {
  sender: "user" | "bot";
  content: string;
  time: string;
}

export default function MainSection() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(e.target as Node) &&
        !(e.target as Element).classList.contains("emoji-toggle")
      ) {
        setShowEmoji(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleEmojiClick = (emojiData: any) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const getSmartReply = (userMsg: string) => {
    const lower = userMsg.toLowerCase();
    for (const res of responses) {
      for (const keyword of res.keywords || []) {
        if (lower.includes(keyword)) return res.reply;
      }
    }
    return responses.find((r) => r.keywords.length === 0)?.reply || "I'm still learning!";
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const timestamp = dayjs().format("h:mm A");
    const userMsg: Message = {
      sender: "user",
      content: message,
      time: timestamp,
    };

    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        sender: "bot",
        content: getSmartReply(message),
        time: dayjs().format("h:mm A"),
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="flex flex-col justify-between w-full h-full px-4 py-6 bg-base-100 text-base-content">
      <div className="flex-1 w-full max-w-4xl mx-auto mb-6 overflow-y-auto space-y-4 scrollbar-hide scroll-smooth">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <img src="/avatar2.png" alt="Tutor" className="w-28 h-28 rounded-full object-cover mb-6" />
            <p className="text-lg font-medium max-w-md text-center">
              👋 Hello there! Ready to learn something new? <br />
              Start the conversation by saying hi or asking a question.
            </p>
            <button className="mt-6 btn btn-primary btn-sm rounded-lg" onClick={() => setMessage("Hi")}>
              Say Hi 👋
            </button>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <div key={index} className={`chat ${msg.sender === "user" ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt={msg.sender} src={msg.sender === "user" ? "/user.jpg" : "/avatar2.png"} />
                  </div>
                </div>
                <div
                  className={`chat-bubble text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-black"
                      : "bg-base-200 text-base-content"
                  }`}
                >
                  {msg.content}
                </div>
                <div className="chat-footer text-xs opacity-50 mt-2">
                  {msg.sender === "user" ? "You" : "Alex"} • {msg.time}
                </div>
              </div>
            ))}

            {typing && (
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="typing" src="/avatar2.png" />
                  </div>
                </div>
                <div className="chat-bubble bg-base-200 text-base-content text-sm font-light animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="w-full max-w-4xl mx-auto bg-base-200 rounded-full border border-base-300 flex items-center gap-2 py-2 px-4 relative shadow-sm">
        <i
          className="ri-emotion-line text-xl cursor-pointer emoji-toggle text-base-content/70 hover:text-primary"
          onClick={() => setShowEmoji((prev) => !prev)}
        />
        <i
          className="ri-attachment-2 text-xl cursor-pointer text-base-content/70 hover:text-primary"
          onClick={() => fileInputRef.current?.click()}
        />
        <input type="file" ref={fileInputRef} className="hidden" />
        <input
          type="text"
          placeholder="Type a message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input input-sm bg-transparent border-none flex-1 focus:outline-none text-sm text-base-content"
        />
        <i className="ri-mic-line text-xl cursor-pointer text-base-content/70 hover:text-primary" />
        <button
          className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center hover:scale-105 transition-transform"
          onClick={handleSendMessage}
        >
          <i className="ri-send-plane-fill text-white text-lg" />
        </button>

        {showEmoji && (
          <div ref={emojiRef} className="absolute bottom-14 left-0 w-full max-w-4xl z-[10] h-[60vh]">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
}
