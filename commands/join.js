const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Joins VC"),
    run: async ({client, interaction}) => {
		const queue = await client.player.nodes.create(interaction.guild, {
            leaveOnEmpty: false,
            leaveOnEnd: false
          })
        const channel = interaction.member.voice.channel
        queue.connect(channel)
        interaction.editReply('Joined!')
    }
}