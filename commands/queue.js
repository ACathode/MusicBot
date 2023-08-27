const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("queue")
        .setDescription("Displays the queue!")
        .addNumberOption((option) => option.setName("page").setDescription("Queue Page").setMinValue(1)),
    run: async ({client, interaction}) =>{
        const queue = client.player.nodes.get(interaction.guild)
        const page_total = Math.ceil(queue.tracks.size / 10) || 1
        const page = (interaction.options.getNumber("page") || 1) - 1

        if (page > page_total) {
            return await interaction.editReply("Invalid page")
        }else{
            try{
                const song_page = queue.tracks.toArray().slice(page * 10, page * 10 + 10).map((song, i) => {
                    return `**${page * 10 + i +1}.** \`[${song.duration}]\` ${song.title}`
                }).join("\n")
        
                const currentSong = queue.currentTrack
                
        
                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setDescription(`**` + "Playing: " + `**\n` +
                            (currentSong ? `\`[${currentSong.duration}]\` ${currentSong.title}` : "There are no songs in queue!") +
                            `\n\n**`+ "Queue" + `**\n${song_page}`
                            )
                            .setFooter({
                                text: "Page " + (page + 1) + " Of " + page_total
                            })
                    ]
                })
            }catch (e) {
                return interaction.followUp("Something went wrong: " + e)
            }
        }
    }
}