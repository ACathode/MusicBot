# MusicBot
Alright fellas, this is the how to

Gonna need to follow some online tutorials
I forgor them at the moment, so I'll update this later.

But chances are, if you are seeing this, I'm already telling you how to download the necessary packages.

First of all: Create a .env file, just name it ".env".
In this file type "TOKEN = Your token here"

I'm no expert so I can't really say why it's not in this repo.

Secondly!
You're gonna need to download node and npm to install discordjs packages and whatnot.
For that I recommend this old, outdated video from ages ago... 2020: https://youtu.be/j_sD9udZnCk
Just watch the first 5-7 minutes. 

If you've seen a bit of that video you'll know how to install packages using npm and have probably successfully installed the discord.js package.

You'll now need to install some other packages to get this to work.
Keep in mind that this was a frankenstein project where I yoinked things from ANYWHERE and EVERYWHERE until it started working.
So odds are you'll needn't some packages I had installed and listed in the package.json file.

List of packages:

@discord-player/extractor,
@discordjs/builders,
@discordjs/opus,
@discordjs/rest,
@discordjs/voice,
discord-api-types,
discord-player,
discord.js,
dotenv


ALSO MAKE SURE YOU'VE REPLACED THE VALUES IN THE CONFIG.JSON FILE TOO!

To run the bot FIRST do "node . load" to load up the commands THEN type "node ."
There's obviously a way to shorten that down but I haven't found, nor tried to find, it.

That's it.
