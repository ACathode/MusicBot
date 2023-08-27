const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("resume")
        .setDescription("Resumes The Song!"),
    run: async ({ client, interaction }) => {
        const queue = await client.player.nodes.get(interaction.guildId)
        queue.node.resume()
        interaction.editReply('Now Resuming!')
        }
}