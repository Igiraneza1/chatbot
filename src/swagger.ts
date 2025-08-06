import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AI Chatbot API',
      version: '1.0.0',
      description: 'API for chatting with bot',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/app.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
