const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("Skips the current song!"),



    run: async({client, interaction}) => {
        const queue = client.player.nodes.get(interaction.guild)

        if (!queue){
            return await interaction.editReply("No More Songs!")
        }else{
            try{
            const song  = queue.currentTrack

            queue.node.skip()
            await interaction.editReply({
                embeds: [new EmbedBuilder()
                    .setDescription("Now Skipping!")
                    .setThumbnail(song.thumbnail)
                ]
            })
        } catch (e) {
            return interaction.editReply("An Error Has Occured!" + e)
        }
    }
    }
}
