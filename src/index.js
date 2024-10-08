import { WebSocketServer } from 'ws';
import { RealtimeRelay } from './lib/relay.js';
import dotenv from 'dotenv';
dotenv.config({ override: true });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error(
    `A variável de ambiente "OPENAI_API_KEY" é obrigatória.\n` +
      `Por favor, defina-a no seu arquivo .env.`
  );
  process.exit(1);
}

const PORT = parseInt(process.env.PORT) || 8081;

const relay = new RealtimeRelay(OPENAI_API_KEY);

// Criar o servidor WebSocket
//const wss = new WebSocketServer({ port: PORT });

relay.listen(PORT);

console.log(`Servidor WebSocket está ouvindo na porta ${PORT}`);
