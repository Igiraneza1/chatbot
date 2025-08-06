import readline from 'readline';
import  getLocalReply  from './chatbot'; 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: ',
});

console.log('🤖 Welcome to your Assistant!');
console.log('Type your message and press Enter. Type "exit" to quit.\n');
rl.prompt();

rl.on('line', async (line) => {
  const message = line.trim();

  if (message.toLowerCase() === 'exit') {
    console.log('👋 Goodbye, see you !');
    rl.close();
    return;
  }

  try {
    const reply = await getLocalReply(message);
    console.log(`Assistant: ${reply}`);
  } catch (error) {
    console.error('Error:', error);
  }

  rl.prompt();
});
