exports.run = (client, message, args) => {

    var Question = args.join(" ");
    
    var Option = [
        "It is certain.", "It is decidedly so.", "Without a doubt.",
        "Yes - definitely", "You may rely on it.", "As i see it yes.",
        "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.",
        "Reply hazy, try again", "Ask again later.", "Better not tell you now.",
        "Cannot predict now.", "Concentrate and ask again.", "Dont count on it.",
        "My reply is no.", "My sources say no.", "Outlook not so good.",
        "Very doubtful."
    ];

	var Answer = Option[Math.floor(Math.random() * Option.length)];

    message.reply(`\nQ: ${Question}\nR: ${Answer}`);
};
