---
author: JimSeaman42
ms.author: mikeam
title: Introduction to Sound
description: "A guide detailing the basics of sounds in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Introduction to Sounds

Welcome to the world of sound! In this introduction, we will go over the very basics of sounds in Minecraft: Bedrock Edition. Note that this is in no way intended to be an all-encompassing or in-depth examination, and is more of the first step on a long path.

Sounds in Minecraft: Bedrock Edition work, in the broadest of terms, by playing audio files that are stored in the file structure of the game. These files are played in response to in-game events such as player actions, environmental changes, and the actions of other players.

The playback volume of sounds can be adjusted using in-game settings, while sounds can be further edited or replaced completely with resource packs.

## Sound Layout

Sounds in Minecraft: Bedrock Edition are organized in multiple ways, and can contain multiple components. To begin, let's take a look at the 'ambient.weather.rain' sound event:

```json
"ambient.weather.rain": {
    "category": "weather",
    "min_distance": 100.0,
    "sounds": [
      {
        "name": "sounds/ambient/weather/rain1",
        "volume": 0.02,
        "load_on_low_memory": true
      },
      {
        "name": "sounds/ambient/weather/rain2",
        "volume": 0.02
      },
      {
        "name": "sounds/ambient/weather/rain3",
        "volume": 0.02
      },
      {
        "name": "sounds/ambient/weather/rain4",
        "volume": 0.02
      }
    ]
  }
```

Most of the basic information we need regarding sound is included in the sample json.

- **Sounds:** These are the individual sound files that constitute everything a player hears in-game. Minecraft: Bedrock Edition supports .wav, .ogg, and .fsb sound files, and up to 32 sounds can be played in-game simultaneously. In the example, you can see the names of the sounds that can potentially play during this event, such as 'sounds/ambient/weather/rain2' and the other named files.
- **Sound Events:** The totality of the sample constitutes a sound event, which is an in-game event involving one or more sounds. Multiple sound events can contain the same sound; for example, both the 'mob.drowned.sim' and 'random.swim' sound events contain the 'sounds/random/swim1' sound.
- **Sound Categories:** Sound categories are broad fields where sounds are organized, and those fields can then be further organized in a chain. In our example, you can see that the category in the example is 'Weather.' The 'Weather' category contains sounds such as 'Thunder1' and 'Rain3.' In turn, 'Weather' is a child category of the broader 'Ambient' designation. The main function of sound categories is to set the volume for a group of sounds as opposed to configuring volumes for each sound individually.
- **Distance:** The distance that sounds fade in and fade out, also known as attenuation, can be controlled using the 'min_distance' and 'max_distance' parameters. The default values of attenuation occur at a minimum of 1.0 meters and a maximum of 10,000 meters. In the example, you can see that we have a defined minimum distance of 100.0, which means that the sound will start to fade in once the player is 100 meters from the source of the sound.
- **Volume:** Volume, in the context of what we see in the example, is interesting. Instead of being used to determine the intensity of the sound, volume is used here to define how far away a sound can be before the game will attempt to play it. By default, a listener must be <= 16 blocks from the source of the sound before the engine will attempt to play it.

## Playing Sounds

There are multiple ways to play sounds in Minecraft: Bedrock Edition. The most basic method is to use the '/playsound' command, which will allow you to play a chosen sound for a player or players. To cause sounds to play automatically with events, they need to be added to the 'sounds.json' file.

Additionally, with the use of resource packs custom sounds can be added to replace regular sounds. For a more in-depth look at this process, be sure to read our [How to Add Custom Sounds](AddCustomSounds.md) article.

