const botConfig = require('./botconfig.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.username} is online`);
  client.user.setActivity('Fate Core');
});


client.on('message', async message => {
    const getChannelLink = (id) => {
        return message.guild.channels.get(id).toString();
    }

    let floodChannel = '471719518427807766';
    let nastolnoRolevoyFlood = '593723363155771402';
    let knigiPravil = '548585720898650113';
    let knigiSetting = '492998858201235469';
    let prochieNarrativki = '496314340492705802';
    let nashiPerevodi = '528181300981661706';
    let naborNaIgri = '491219333339676693';
    let igrokIshetIgru = '505294784685146113';
    let nashiVidosi = '525682837417099323';
    let polezVidoe = '593726091689066497';
    let pravilaKanala = '498085488603955212';

    let t = `Добро пожаловать в **${message.guild.name}**, **${message.author.username}**. Здесь играют в Fate и прочие НРИ с акцентом на историю и персонажей. Нас здесь **${message.guild.memberCount}**`; 

    let m = 
  `• ${getChannelLink(floodChannel)} - флудим на любые темы, не HPИ.
  • ${getChannelLink(nastolnoRolevoyFlood)} - а вот здесь о НРИ.`;
  let m1 = 
  `• ${getChannelLink(knigiPravil)}  - читаем и пытаемся понять, что же такое Fate.
  • ${getChannelLink(knigiSetting)} - миры, приключения, идеи для игр.
  • ${getChannelLink(prochieNarrativki)} - уважаем и ценим не только Fate.
  • ${getChannelLink(nashiPerevodi)} - переводы книг по Fate Core на русский.`;
  let m3 = `
  • ${getChannelLink(naborNaIgri)} - тут вы найдете игру вашей мечты)
  • ${getChannelLink(igrokIshetIgru)} - пишем сюда свои хотелки.`;
  let m4 = `
  • ${getChannelLink(nashiVidosi)} - видео наших стримов.
  • ${getChannelLink(polezVidoe)} - различные интересные видео о системе для тех, кто не любит читать.`;
  let m5 = `
  • ${getChannelLink(pravilaKanala)} - не забываем заглянуть хоть раз.`;


    let colors = ['#DEB887', '#BC8F8F', '#FF8C00', '#9ACD32', '#6B8E23', '#00CED1', '#87CEFA', '#6A5ACD', '#9370DB', '#FFFFF0', '#2F4F4F', '#CD853F'];

    let prefix = botConfig.prefix;
    let messArray = message.content.split(" ");
    let cmd = messArray[0];
    let color = colors[Math.floor(Math.random()*colors.length)];

    if (cmd === `${prefix}hello`) {
        let embed = new Discord.RichEmbed()
        .setDescription(t)
        .setColor(color)
        .setThumbnail(message.guild.iconURL)
        .addField('Общение и флуд', m, true)
        .addField('Чтиво', m1, true)
        .addField('Хочу играть', m3, true)
        .addField('Видео', m4, true)
        .addField('Правила', m5, true)
        return message.channel.send(embed);
    }
});

client.login(botConfig.token);