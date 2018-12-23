const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', '526362449184817162')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("BlareBOT | Canlý Destek")
  .setDescription("Canlý desteði kullandýðýn için teþekkürler. Kurucu Birazdan Burada Olur.")
  .setColor("RANDOM")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor('BlareBOT | Talep', message.author.avatarURL)
  .addField('**» Kullanýcý Adý: **', message.author.tag)
  .addField('**» Sunucu Adý: **', message.guild.name)
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
  name: 'canlýdestek',
  description: 'Canlý Destek Talebi Oluþturur.',
  usage: 'canlýdestek'
};