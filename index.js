// Good luck!

const express = require("express")
const app = express()

app.use((request,response,next)=>{
   console.log(request.method + " " + request.url)
   next()
})
app.get("/", (request,response)=>{
    response.status(200).send("<h1>Welcome to Baking API</h1>")
})
app.get("/api/cookie", (request,response)=>{
    response.status(200).json(whatsyourPick.cookieTypes)
})
app.get("/api/topping", (request,response)=>{
    response.status(200).json(whatsyourPick.toppings)
})
app.get("/api/serving", (request,response)=>{
    response.status(200).json(whatsyourPick.servingSize)
})

app.use((request,response,next)=>{
    console.log("route handlers work properly")
})

app.get("/docs", (request,response)=>{
    response.status(200).send("Go to /api/cookie to see cookie tyes and /api/toppings to see different cookir toppers")
})
app.get("/choice", (request, response) => {
   
    const randomIndex = Math.floor(Math.random() * whatsyourPick.cookieTypes.length);
    const randomCookie = whatsyourPick.cookieTypes[randomIndex];

    
    const randomIndex2= Math.floor(Math.random() * whatsyourPick.servingSize.length);
    const randomCookie2 = whatsyourPick.cookieTypes[randomIndex2];
    
    response.status(200).send("You could have a " + randomCookie + " cookie! I would recommend " + randomcookie2);
})

app.use((request,response,next)=>{
    response.status(404).send("404 not found")
})

const whatsyourPick = {
     cookieTypes:
    [ "Chocolate Chip", "Oatmeal Raisin", "Peanut Butter", "Sugar", "Snickerdoodle", "Double Chocolate", "White Chocolate Macadamia", "Gingerbread", "Shortbread", "Molasses" ],
    toppings: 
   [ "Chocolate Chips", "Sprinkles", "Nuts", "Caramel Drizzle", "Marshmallows", "Peanut Butter Chips", "Coconut Flakes", "M&Ms", "Sea Salt", "Toffee Bits" ],
    servingSize:
    [ "1 cookie", "2 cookies", "3 cookies", "4 cookies", "5 cookies", "6 cookies", "7 cookies", "8 cookies", "10 cookies", "12 cookies" ] }

    

app.listen(3000, ()=>{
    console.log("server is running")
})