const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', '526362449184817162')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("BlareBOT | Canl� Destek")
  .setDescription("Canl� deste�i kulland���n i�in te�ekk�rler. Kurucu Birazdan Burada Olur.")
  .setColor("RANDOM")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor('BlareBOT | Talep', message.author.avatarURL)
  .addField('**� Kullan�c� Ad�: **', message.author.tag)
  .addField('**� Sunucu Ad�: **', message.guild.name)
  .setColor("RANDOM")
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canl�destek',
  description: 'Canl� Destek Talebi Olu�turur.',
  usage: 'canl�destek'
};