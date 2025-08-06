import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// export const getChatbotReply = async (message: string): Promise<string> => {
//   try {
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: message }],
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${OPENAI_API_KEY}`,
//         },
//       }
//     );

//     return response.data.choices[0].message.content.trim();
//   } catch (error) {
//     console.error('Error contacting OpenAI:', error);
//     return 'Sorry, I could not process your message.';
//   }
// };


function getLocalReply(message: string): string {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('hello')) {
    return 'Hello, feel free to ask me any question';
  }

  if (lowerMsg.includes('hi')) {
    return 'Hello, feel free to ask me any question';
  }

  if (lowerMsg.includes('hey')) {
    return 'Hello, feel free to ask me any question';
  }

  if (lowerMsg.includes('javascript')) {
    return 'JavaScript is a popular programming language for web development.';
  }

  if (lowerMsg.includes('node') || lowerMsg.includes('node.js')) {
    return 'Node.js is a runtime that allows you to run JavaScript on the server.';
  }

  if (lowerMsg.includes('express')) {
    return 'Express is a fast and minimalist web framework for Node.js.';
  }

  if (lowerMsg.includes('typescript')) {
    return 'TypeScript is a superset of JavaScript that adds static typing.';
  }

  if (lowerMsg.includes('frontend')) {
    return 'Frontend development deals with the user interface and client-side logic.';
  }

  if (lowerMsg.includes('backend')) {
    return 'Backend development involves server-side logic, databases, and APIs.';
  }

  if (lowerMsg.includes('api')) {
    return 'An API is an interface that allows software to communicate with other software.';
  }

  if (lowerMsg.includes('database')) {
    return 'A database stores and manages structured data for your application.';
  }

  if (lowerMsg.includes('react')) {
    return 'React is a JavaScript library for building user interfaces.';
  }

  
  return "I'm not sure about that. Try asking something related to software development.";
}


export default getLocalReply;
