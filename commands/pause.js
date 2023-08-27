const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("Pauses whatever's playing!"),
    run: async ({client, interaction}) => {
		const queue = await client.player.nodes.get(interaction.guildId)
        queue.node.pause();
        interaction.editReply('Pausing!')
}
}