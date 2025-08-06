// import express, { Request, Response } from 'express';
// import  getLocalReply  from './chatbot'; 
// import swaggerUi from 'swagger-ui-express';
// import { swaggerSpec } from './swagger'; 

// const app = express();
// const port = 3000;

// app.use(express.json());

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.post('/chat', async (req: Request, res: Response) => {
//   const userMessage = req.body.message;

//   if (!userMessage) {
//     return res.status(400).json({ error: 'Message is required' });
//   }

//   const botReply = await getLocalReply(userMessage);
//   res.json({ reply: botReply });
// });

// app.listen(port, () => {
//   console.log(`✅ AI Chatbot server is running at http://localhost:${port}`);
//   console.log(`📚 Swagger docs available at http://localhost:${port}/api-docs`);
// });
