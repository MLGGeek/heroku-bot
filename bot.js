const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzA4MjYzMjA3MTM1MDg0NjI0.XrVXKw.j2YZg7wgdXR2P_xOxEGQ000jFLQ';

client.on("ready", () => {
    console.log('ready');
    client.user.setActivity(`Hentai Girl Fantasy`);
  });

  client.on('message', message => {
    if (message.content === 'druker')
        message.channel.send('Ovo ide razrednici');
    else if (message.content === 'sirnica')
        message.channel.send('Error 404. Did you mean "burek sa sirom"?');
    else if (message.content === 'pin')
        message.channel.send('Jel te ko pito?');
    else if (message.content === 'bebic')
        message.channel.send('jebem ti boga isusa krvavog');
    else if (message.content === 'eva' || message.content === 'Eva')
        message.channel.send('Keva*');
    else if (message.content === 'mattey')
        message.channel.send('\\*puts the microphone down his throat\\* iks-de');
    else if (message.content === 'gay')
        message.channel.send('no u');
    else if (message.content === 'tatice')
        message.channel.send('još samo 10 minutaaaaaa');

});

client.login(process.env.BOT_TOKEN);
