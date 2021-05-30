const discord = require("discord.js")
const client =new discord.Client()
const talkedRecently = new Set();    



client.on("ready", () => {
  console.log("Vex ★ MrHAMA")
  client.user.setActivity("Send Link Robot UP , MrHama")
})



client.on("message", vex => { 
if(vex.content.includes("discord.gg")){ 
    
    if (talkedRecently.has(vex.author.id)) {
      vex.author.send("Wait 1 minute before getting typing this again. - ");
    } else {

if(vex.channel.type === "dm"){ 
if(vex.author.id===client.user.id) return; 
vex.author.send("https://discord.gg/sk7d7U2ABF")
let s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");
let hama1 = client.channels.cache.get("755228220911255552")//id bashe reklam
hama1.send(`
ناردرا لە لایەن
<@${vex.author.id}> ` +`
سێرڤەرەکە
${s2}
          `)
  }

}}
  talkedRecently.add(vex.author.id);
        setTimeout(() => {
          talkedRecently.delete(vex.author.id);
        }, 60000);
  
  
})

const channelid = "848301704100577290"//id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});


client.login("")
