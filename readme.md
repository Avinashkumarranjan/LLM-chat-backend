# LLM Chat Backend

A basic **LLM powered chat backend** built using **Node.js**, **Express.js**, and **Google Gemini API**.  
This application allows users to send messages to an AI model and receive intelligent responses while maintaining chat history.

---

## 🚀 Features

- REST API for chatting with AI
- Chat history support for each user
- Integration with Google Gemini LLM
- Simple backend architecture
- JSON based API communication

---

## 🛠 Technologies Used

- Node.js
- Express.js
- Gemini API
- dotenv
- REST API

---

## 📁 Project Structure
LLM-chat-backend
│
├── index.js # Main server file
├── aichat.js # Gemini AI integration
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── .env # API Key (not uploaded to GitHub)


---

## ⚙️ Installation

### 1 Clone the repository
git clone https://github.com/Avinashkumarranjan/LLM-chat-backend.git


### 2 Navigate to project
cd LLM-chat-backend


### 3 Install dependencies
npm install


### 4 Create `.env` file
GEMINI_API_KEY=your_api_key_here


### 5 Start the server
node index.js


Server will run on:
http://localhost:3000


---

## 📡 API Endpoint

### POST `/chat`

Send message to AI.

### Request Body
{
"id":"user1",
"msg":"Hello AI"
}


### Response

---

## 🔄 How it Works

1. User sends a message to the `/chat` endpoint.
2. Server stores the user's chat history.
3. Message + history is sent to the Gemini AI model.
4. AI generates a response.
5. Response is returned to the user.

---

## 🧠 Chat History Logic

Chat history is stored in memory using a **key-value object**.
chatHistory = {
"user1": [
{ role: "user", message: "Hello" },
{ role: "model", message: "Hi there!" }
]
}


This allows the AI to understand conversation context.

---

## 🧪 Testing with Postman

Use **POST request**
POST http://localhost:3000/chat


Body → JSON
{
"id":"123",
"msg":"What is Artificial Intelligence?"
}


---

## 🔒 Environment Variables

Create a `.env` file and add:
GEMINI_API_KEY=your_api_key_here


This keeps your API key secure.

---

## 📌 Future Improvements

- Database integration (MongoDB)
- User authentication
- Frontend chat UI
- Conversation storage
- Rate limiting

---

## 👨‍💻 Author

Avinash Kumar

GitHub:  
https://github.com/Avinashkumarranjan

---

## ⭐ If you like this project

Give it a **star on GitHub** ⭐