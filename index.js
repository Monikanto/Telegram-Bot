var express = require("express");
var app = express();
var bodyParser  =require("body-parser");
const axios = require("axios");

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })


)

app.post("/new-message", function(req, res){
    const {message}=req.body

    if(!message || message.text.toLowerCase().indexOf("dexter")<0){
        return res.end()

    }

   	axios
		.post(
			"https://api.telegram.org/bot8357664779:AAFcSbt2kUPlFwtoTn89sCOcWd1ZP5-YOAY",
			{
				chat_id: message.chat.id,
				text: "Polo!!",
			}
		)
        .then((response) => {
			// We get here if the message was successfully posted
			console.log("Message posted")
			res.end("ok")
		})
		.catch((err) => {
			// ...and here if it was not
			console.log("Error :", err)
			res.end("Error :" + err)
		})
})

// Finally, start our server
app.listen(3000, function() {
	console.log("Telegram app listening on port 3000!")
})

