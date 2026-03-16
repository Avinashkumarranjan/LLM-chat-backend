const express =require("express")
const app = express();
const main = require("./aichat")


// jo bhi data aayega json format me aayega
// isko object me convert karne ke liye ye middleware use karte hai
app.use(express.json());


const chatHistory ={};
// we will install our user chat history here
// histpory store in :key :value pair
// key = id
// value= array of messages

app.post("/chat",async(req,res)=>{
    const {id,msg}= req.body;


    if(!chatHistory[id]){
        chatHistory[id] = [];
    }
    // to check chatting history exist karti hai ki nahi
    // ager nahi karti hai key:id and value : empty array create kar do

    // extract user chat history
    const History = chatHistory[id];


    // after combine user message with history and send to ai model
    const promtmessage = [...History,{
        role:"user",
        parts:[{text:msg}]
    }]

    const answer = await main(promtmessage);
    

    // after user question ko bhi insert karna hai
    // model ke rsponse ke bhi insert karna hai
    
    History.push({role:"user",parts:[{text:msg}]});
    History.push({role:"model",parts:[{text:answer}]});
    res.send(answer);


})






app.listen(3000,()=>{
    console.log("listening on port 3000");
})