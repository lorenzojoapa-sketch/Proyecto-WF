const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth() // Local authentication
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

// Basic Commands
app.get('/command/:command', (req, res) => {
    const command = req.params.command;
    // Handle each command here
    res.send(`Command received: ${command}`);
});

// Casino command
app.get('/casino', (req, res) => {
    // Casino logic
    res.send('You initiated a casino game!');
});

// Work command
app.get('/work', (req, res) => {
    // Work logic
    res.send('You went to work!');
});

// Missions command
app.get('/missions', (req, res) => {
    // Missions logic
    res.send('You have new missions!');
});

// Bank system
app.get('/bank', (req, res) => {
    // Bank system logic
    res.send('Welcome to the bank!');
});

// Serve GIFs
app.get('/gifs/:gifName', (req, res) => {
    const gifName = req.params.gifName;
    const gifPath = path.join(__dirname, 'gifs', gifName);
    res.sendFile(gifPath);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});