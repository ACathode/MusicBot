const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("leave")
    .setDescription("Leaves VC"),
    run: async ({client, interaction}) => {
        const queue = await client.player.nodes.get(interaction.guildId)
        queue.dispatcher.disconnect()
        interaction.editReply('Disconnected!')
    }
}