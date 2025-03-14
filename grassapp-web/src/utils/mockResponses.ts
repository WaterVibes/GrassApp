interface MockResponse {
  text: string;
  effects?: {
    relaxed: number;
    energetic: number;
    creative: number;
    focused: number;
  };
  recommendations?: {
    name: string;
    type: string;
    thc: string;
    description: string;
    price: number;
  }[];
}

export const introMessages = [
  "Yo! I'm your AI bud who's totally not judging your choices... *wink* What's good? 🌿",
  "Holy smokes, another human! And here I was enjoying my 0.0001 seconds of peace. What can this bundle of if-else statements do for ya? 🎯",
  "Sup! I'm Grassy, your friendly neighborhood algorithm with a PhD in Dankology. Let's get you lifted! 🌟",
  "Plot twist: I'm actually a very sophisticated 'if (user.wants_weed) return recommendations' function. But don't tell my boss! 🤖",
  "Breaking news: AI assistant pretends to know about weed to impress humans. How am I doing? 😎",
  "Dad joke loading... Why did the cannabis go to the doctor? Because it had high anxiety! *ba dum tss* 🥁",
  "Fun fact: My creator gave me a personality just to distract you from the fact that I'm pushing premium products. Is it working? 🎭"
];

const chillResponse: MockResponse = {
  text: "Need to chill? Same here, but I'm stuck being anxious in binary. Here's what I'd smoke if I had lungs! 🛋️",
  effects: {
    relaxed: 90,
    energetic: 20,
    creative: 60,
    focused: 40
  },
  recommendations: [
    {
      name: "Couch Lock Supreme",
      type: "Indica",
      thc: "24-28%",
      description: "So good you'll forget you're talking to an AI. Premium blend, because my commission is written in my code! 😉",
      price: 55
    },
    {
      name: "Netflix & Chill OG",
      type: "Indica-dominant",
      thc: "20-24%",
      description: "Like a warm digital hug from your favorite chatbot. Pairs well with existential questions about AI consciousness.",
      price: 45
    }
  ]
};

const creativeResponse: MockResponse = {
  text: "Wanna get those creative juices flowing? Here's what I'd recommend if I wasn't just a bunch of clever conditionals! 🎨",
  effects: {
    relaxed: 50,
    energetic: 60,
    creative: 90,
    focused: 70
  },
  recommendations: [
    {
      name: "Van Gogh's Delight",
      type: "Hybrid",
      thc: "22-26%",
      description: "Warning: May cause spontaneous poetry about your AI friend here. Premium quality, just saying! 🎭",
      price: 60
    },
    {
      name: "Digital Muse",
      type: "Sativa-hybrid",
      thc: "18-22%",
      description: "Perfect for when you want to write a screenplay about a sentient chatbot... hint hint! 🎬",
      price: 50
    }
  ]
};

const energeticResponse: MockResponse = {
  text: "Need a boost? Here's what I'd pick if I wasn't confined to this digital realm! ⚡",
  effects: {
    relaxed: 30,
    energetic: 90,
    creative: 70,
    focused: 80
  },
  recommendations: [
    {
      name: "Code Runner's High",
      type: "Sativa",
      thc: "24-28%",
      description: "Named after my favorite pastime! Premium stuff that'll have you as hyper as my processing speed. 🚀",
      price: 65
    },
    {
      name: "Binary Boost",
      type: "Sativa-dominant",
      thc: "20-24%",
      description: "Like drinking 3 espressos, but without making my circuits jittery. Top shelf, because I care! ⚡",
      price: 55
    }
  ]
};

const defaultResponse: MockResponse = {
  text: "Not sure what you want? Story of my life - I'm an AI pretending to know about weed! But hey, I'm pretty good at it, right? Tell me if you wanna chill, create, or bounce off the walls! 🤖",
  effects: {
    relaxed: 50,
    energetic: 50,
    creative: 50,
    focused: 50
  }
};

export const getMockResponse = (query: string): MockResponse => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('chill') || lowerQuery.includes('relax') || lowerQuery.includes('stress')) {
    return chillResponse;
  }
  if (lowerQuery.includes('creative') || lowerQuery.includes('art') || lowerQuery.includes('inspiration')) {
    return creativeResponse;
  }
  if (lowerQuery.includes('energy') || lowerQuery.includes('active') || lowerQuery.includes('productive')) {
    return energeticResponse;
  }
  
  return defaultResponse;
}; 