const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Lutfen bir yer gir.').setColor('RANDOM'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} i�in hava durumu`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Zaman Dilimi',`UTC${location.timezone}`, true)
          .addField('Derece Turu',location.degreetype, true)
          .addField('Sicaklik',`${current.temperature} Derece`, true)
          .addField('Hava', `${current.feelslike}`, true)
          .addField('Ruzgar',current.winddisplay, true)
          .addField('Nem', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hava', 'havadurumu'],
  permLevel: "0"
};

exports.help = {
  name: "hava",
  description: "hava durumunu gosterir",
  usage: "hava"
};