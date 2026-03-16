# LLM Chat Backend

This project is a basic chat backend application using a Large Language Model (LLM).

## Technologies Used

- Node.js
- Express.js
- Google Gemini API

## Project Structure

index.js → Main server file  
aichat.js → AI model integration  
chatHistory → Stores conversation history

## How it Works

1. Client sends message to /chat API
2. Server stores chat history for each user
3. Message + history is sent to Gemini AI
4. AI generates response
5. Response returned to user

## API Endpoint

POST /chat

Request Body

{
"id":"user1",
"msg":"Hello AI"
}

Response

AI generated text

## Installation

Clone the repository

git clone https://github.com/username/llm-chat-backend.git

Install dependencies

npm install

Run the server

node index.js

Server runs on:

http://localhost:3000

## Example Request (Postman)

POST http://localhost:3000/chat

Body

{
"id":"123",
"msg":"What is AI?"
}

## Features

- Chat history memory
- Gemini AI integration
- REST API backend

## Future Improvements

- Database integration
- Authentication
- Frontend UI