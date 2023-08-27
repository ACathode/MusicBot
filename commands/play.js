const { SlashCommandBuilder } = require("@discordjs/builders")
const { YouTubeExtractor } = require('@discord-player/extractor')
const { EmbedBuilder } = require("discord.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName("play")
		.setDescription("loads songs from youtube")
				.addStringOption((option) =>
					option.setName("search").setDescription("Search keywords.").setRequired(true)
				) ,
	run: async ({ client, interaction }) => {
    const channel = interaction.member.voice.channel
    client.player.extractors.register(YouTubeExtractor);

		if (!channel) return interaction.editReply("You need to be in a VC to use this command")
		const queue = await client.player.nodes.create(interaction.guild, {
      leaveOnEmpty: false,
      leaveOnEnd: false,
      maxHistorySize: 10000
    })
    const song = interaction.options.getString("search")
    const result = await client.player.search(song, {
      requestedBy: interaction.user,
    })
    if(!result.hasTracks()){
      return interaction.editReply("No Results!")
    } else{
		if (!queue.connection) await queue.connect(channel)
    let url = interaction.options.getString("search")
    const {track} = await client.player.play(channel, url, {
      member: interaction.member,
      textChannel: interaction.channel,
      interaction,
            })
            const currentSong = queue.currentTrack
            await interaction.editReply({
            embeds: [
              new EmbedBuilder()
                .setDescription(`**`+"Playing: "+`**\n` +
                (`\`[${currentSong.duration}]\` ${currentSong.title}`))
                .setThumbnail(currentSong.thumbnail)

            ]
          })
          }
    }
  }
