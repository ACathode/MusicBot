const { SlashCommandBuilder } = require("discord.js")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Displays commands"),
    run: async ({client, interaction}) => {
        await interaction.editReply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`**`+"Commands: "+`**\n` +
                    "Join"
                    )
                    .setFooter({
                    })
            ]
        })
    }
}