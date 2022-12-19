
# Cringemeter

Cringemeter is a module for node.js that determine the level of cringeworthiness of a given string of text. The score is calculated on a scale from 0 to 1, with 0 indicating low cringeworthiness and 1 indicating high cringeworthiness. The score is based on factors such as the use of certain words or phrases that are commonly associated with cringeworthy content. The higher the score, the more likely the text is considered to be cringeworthy.

## How to use

Dont forget to install it:

```
npm i cringemeter
```

Now have fun!

```js
const { Cringemeter } = require("cringemeter");

Cringemeter("LMAO THIS IS SO FUNNY 🤣😹😹 xddd"); // return 0.68

Cringemeter("hi bro i'm not cringe"); // return 0

Cringemeter("🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣"); // return 1
```

## Example of use

You can use it for a messaging application:

```js
const { Cringemeter } = require("cringemeter");
const prompt = require("prompt-sync")();

message = prompt("You: ");

if(Cringemeter(message) > .5) {
    return console.log("Sorry but your message is too cringe to be sent.")
}

...
```

Or even for a moderation Discord bot with discord.js:

```js
const { Cringemeter } = require("cringemeter");
// I didn't put the declarations for the client and discord.js 

client.on("interactionCreate", async (interaction) => {
	if(Cringemeter(message.content) > .5) {
        message.delete();
        message.channel.send(`Don't be cringe <@${message.author.id}>!`);
    }
});
```

## Contact

If you have any problem please contact me on Discord C0NS0LE_#6999
