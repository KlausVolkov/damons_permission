//debug.js
exports.run = (client, message, args) => {
    var guild_info = {
    	Name: message.guild.name,
    	ID: message.guild.id,
    	Owner_ID: message.guild.ownerID,
    	Members: message.guild.memberCount,
    	Verification_level: message.guild.verificationLevel,
    	MFA_Level: message.guild.mfaLevel
    }

    console.log(guild_info);

    message.author.send(JSON.stringify(guild_info).split(',').join(',\n'));
}