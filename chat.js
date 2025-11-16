const { RiTa } = require('rita');


export function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function chatbotResponse(input) {
  const lower = input.toLowerCase();
  const pos = RiTa.pos(input);   
  const tokens = RiTa.tokenize(input);


  let lastNoun = null;
  for (let i = 0; i < pos.length; i++) {
    if (pos[i].startsWith("nn")) {
      lastNoun = tokens[i];
    }
  }

  if (lower.includes("math")) {
    return choose([
      "Math can be tricky, but I'm here for you!",
      "Let's break this down step by step — what's the problem?",
      "Fractions, algebra, geometry — I can help with any of them!",
      "Math is all about patterns. Want to try a problem together?",
      "Tell me the math topic you're stuck on!",
      "We can totally handle this. What part of math is confusing?",
      "Let’s solve it like a team — what’s the equation?",
      "Math isn't scary once you understand the steps!",
      "Want a quick explanation or a practice problem?",
      "I got you! What math concept do you need help with?"
    ]);
  }

  if (lower.includes("science")) {
    return choose([
        "Science is awesome — what topic are you curious about?",
        "Biology, chemistry, physics… pick a field!",
        "Tell me the science concept you want help with!",
        "Let’s explore the universe together — what’s your question?",
        "Science is full of cool facts — what are you studying?",
        "I can explain topics step-by-step! What do you need?",
        "Want a simple explanation or a deeper one?",
        "What experiment or idea are you stuck on?",
        "Let’s make science fun — ask me anything!",
        "Okay! What science topic should we dive into?"
    ]);
  }

  if (lower.includes("history")) {
    return choose([
      "History is full of fascinating stories! What era are you studying?",
      "Tell me the historical event or figure you want to learn about!",
      "Let’s travel back in time together — what’s your question?",
      "I can help explain historical concepts step-by-step!",
      "Want to know more about a specific war, culture, or invention?",
      "History is all about understanding the past — what do you need help with?",
      "Let’s make history interesting — what topic should we explore?",
      "What period or event in history are you curious about?",
      "I’m here to help with any history questions you have!",
      "Okay! What historical topic should we dive into?"
    ]);
  }

  if (lower.includes("study") || ){
    return choose([
        "A great study tip: break your work into small chunks and take short breaks!",
        "Try the Pomodoro method — 25 minutes of focus, 5 minutes of rest. It really works.",
        "Active recall is powerful! Instead of rereading notes, test yourself.",
        "Teaching the material to someone else is one of the best ways to learn it.",
        "Stay organized! A simple to-do list can make studying feel much less overwhelming.",
        "Try studying in a distraction-free space — even 10 minutes of full focus helps a lot.",
        "If you're stuck, switch subjects for a bit. Your brain keeps processing in the background.",
        "Make flashcards! They’re amazing for memorization and spaced repetition.",
        "Set a specific goal before you start studying — it boosts motivation and focus.",
        "Remember to drink water and take breaks. A rested brain learns faster!"
    ]);
  }

  return choose([
    "I'm here to help! What would you like to learn today?",
    "That’s interesting — tell me more about what you’re working on.",
    "I may be a simple chatbot, but I’m trying my best! What’s up?",
    "I’m your study buddy! Need help with a topic?",
    "Let’s figure this out together — what class is this for?",
    "Got it! What part of that confuses you the most?",
    "Okay! Want an explanation, an example, or a simpler version?",
    "I can help with math, science, or anything school-related — go ahead!",
    "No worries! Ask me anything, I won’t judge."
  ]);
}

console.log(chatbotResponse("I struggle with math."));
console.log(chatbotResponse("Tell me about science."));
console.log(chatbotResponse("I love physics."));