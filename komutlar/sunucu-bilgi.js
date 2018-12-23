const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  var konum = ''
        if(message.guild.region === "russia") {
            var konum = 'Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Bati Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = 'Guney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doðu Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Bati Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Guney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doðu Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya'
        }
	   message.delete();

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.tag)
    const sunucubilgi = new Discord.RichEmbed()
    .addField(':warning: Uyari :warning:', '`sunucubilgi` adli komutu ozel mesajlarda kullanamazsin.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL || message.guild.iconURL)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter('ReVa| /davet', client.user.avatarURL)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Ad:', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('Bolge ', konum)
    .addField('uye sayisi :', message.guild.memberCount)
    .addField('Sahibi :', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal sayisi :', message.guild.channels.size)
    .addField('Sunucu olusturma tarihi:', moment(message.guild.createdAt).format('DD/MM/YYYY'), true)
    .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=526136728310906891&scope=bot&permissions=805314622)` +  "**\n**"+`[Destek Sunucusu](https://discord.gg/8sZpfBY)`, false);
    console.log("dve!sunucubilgi komutu " + message.author.username + '#' + message.author.discriminator + " tarafindan kullanildi.")
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'Sunucu hakkinda bilgi verir.',
  usage: 'sunucu'
};