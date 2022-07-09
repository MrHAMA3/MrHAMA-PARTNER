const discord = require("discord.js")
const client =new discord.Client()
const talkedRecently = new Set();    



client.on("ready", () => {
  console.log("RANYAI")
  client.user.setActivity("Send Link Robot UP , RANYAI")
})



client.on("message", vex => { 
if(vex.content.includes("https://discord.gg/uUrxZEvC")){ 
    
    if (talkedRecently.has(vex.author.id)) {
      vex.author.send("Wait 1 minute before getting typing this again. - ");
    } else {

if(vex.channel.type === "r!"){ 
if(vex.author.id===client.user.id) return; 
vex.author.send("https://discord.gg/BmzN8ZvgQN")
let s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");
let hama1 = client.channels.cache.get("995081431925657682")//id bashe reklam
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
client.on("ready", (r!) => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(r! => {
        console.error(r!);
    });
});


client.login("")
