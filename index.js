const myToken = "OTY5MzA0MDcyODYxNjc1NTcx.Ymrcww.P9sS72L0_16kvCyN1I8Uh70SxjE" 
const discord = require("discord.js");
const client = new discord.Client({
    intetnts : [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILDS_MEMBERS,
        discord.Intents.FLAGS.GUILDS_MESSAGES,
        discord.Intents.FLAGS.DIRECT_MESSAGES
         

    ]
});
const kick = require("../commands/kick")
module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
}

const rank = null
const point = null

const prefix = "!"

client.on("ready",() =>{
    console.log("bot operationnel");
});

client.on("messageCreate", message => {
    if(messsage.author.bot)return;
    
    if(message.content === prefix + "rank"){
        const embed = new discord.MessageEmbed()
            .setColor("FFFFFF")
            .setTitle("Status dans la Compet" +nomCompet )
            .setURL("https://fortnitetracker.com/events")
            .setDescription("Vous y trouverez votre rank, votre nombre de point ")
            .addField("__Votre place :__ ", +rank)
            .addField("__Votre nombre de point__ ", point)
            .setTimestamp();

        message.channel.send({ embeds : [embed]});
    }

});

client.on("guildMemberAdd", member =>{
    Console.log("un membre est arrivé ");
    client.channels.cache.get("969317376468324422").send(member.displayName + " à bien atteri.");


});
Client.on("guildMemberRemove", member =>{
    console.log("un membre à quitté le serveur");
    client.channels.cache.get("969317376468324422").send(member.displayName + " a filer à l'anglaise"); 
})
client.login(myToken);
