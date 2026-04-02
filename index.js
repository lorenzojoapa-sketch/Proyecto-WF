const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('dotenv').config();

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  console.log('📱 Escanea este QR con WhatsApp:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Bot conectado correctamente');
});

client.on('message', async (msg) => {
  console.log(`📨 Mensaje de ${msg.from}: ${msg.body}`);
  
  if (msg.body === '!hola') {
    msg.reply('¡Hola! Soy un bot 🤖');
  }
  
  if (msg.body === '!ayuda') {
    msg.reply('Comandos disponibles:\n!hola - Saludo\n!ayuda - Esta ayuda');
  }
});

client.on('disconnected', (reason) => {
  console.log('❌ Bot desconectado:', reason);
});

client.initialize();