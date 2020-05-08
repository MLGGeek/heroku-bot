const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

const client = new Discord.Client();
const prefix = '!';



const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

client.on("ready", () => {
    console.log('ready');
    client.user.setActivity('lmao xd', { type: 'LOL?' });
  });


//urban dictionary


  client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'urban') {
		if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = list;

		const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

		message.channel.send(embed);
	}
});

//ono moje




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
    else if (message.content === 'u gay')
        message.channel.send('no u');
    else if (message.content === 'tatice')
        message.channel.send('još samo 10 minutaaaaaa');

});






client.login(BOT_TOKEN);
