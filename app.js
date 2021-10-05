const { phoneNumbers, message } = require("./constants");
const { removeDuplicates, isValidNumber } = require("./utils");

require("dotenv").config();

const accountSid = process.env.ACCOUNT_SSID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendMessage = (number) => {
  client.messages
    .create({
      body: message,
      messagingServiceSid: "MGe8e26140891be45b876a6aafee8c353d",
      to: number,
    })
    .then((message) => {
      console.log("===============================\n");
      console.log("Status: ", message.status, "\n");
      console.log("PhoneNumber: ", message.to, "\n");
      console.log("Price: ", message.price, "\n");
      console.log("===============================\n");
    })
    .catch((err) => {
      console.error("Sending Error:", err);
    })
    .done();
};

// Sending logic
const filteredNumbers = removeDuplicates(phoneNumbers);
filteredNumbers.forEach((number) => {
  const valid = isValidNumber(number);
  if (valid) {
    sendMessage(valid);
  } else {
    console.warn(number, "is not valid number");
  }
});
