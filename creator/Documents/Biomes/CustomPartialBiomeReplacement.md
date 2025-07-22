---
author: mammerla
ms.author: mikeam
title: Custom Partial Biome Replacements
description: "A reference document discussing custom partial biome replacement"
ms.service: minecraft-bedrock-edition
ms.date: 07/17/2025
---
# Custom Partial Biome Replacements

## Intro

As indicated by our 'Custom Biomes' experiment, the Minecraft team has been working on building the necessary support for Creators to define their own biomes for use in the game.

### Partial biome replacement

Partial biome replacement allows biomes the option of declaring their desire to replace some fraction of some number of Vanilla biomes. All of the replacement requests are considered after the usual three-dimensional Vanilla Overworld generation process determines the rough shape of the terrain and selects a Vanilla biome. Once the partial biome replacement logic is done (either leaving the selected Vanilla biome alone or switching to a custom biome), the remainder of Minecraft's systems and gameplay act as usual, unaware that a last-minute change took place. This allows the base Vanilla game logic to evolve over time freely while keeping the settings required to specify a biome replacement as simple and straightforward as possible.

### Example walkthrough

Here is an example biome JSON, we'll call it "example:biome". (Note this leaves out other important components like "minecraft:tags" and "minecraft:climate".)

```json
{
  "minecraft:biome": {
    "description": { "identifier": "example:biome" },
    "components": {
      "minecraft:replace_biomes": {
        "replacements": [
          {
            "dimension": "minecraft:overworld",
            "targets": [ "beach", "plains" ],
            "amount": 0.5,
            "noise_frequency_scale": 25
          }
        ]
      }
    }
  }
}
```

This biome uses the new `minecraft:replace_biomes` component to specify a single replacement setting, which asks the game to replace some of any naturally occurring areas that would otherwise be beach and plains with the custom biomes. When the Overworld generation logic happens to pick a beach or plains area, it will do some additional noise calculation, using the last two settings&mdash;`amount` and `noise_frequency_scale`. The first affects how low the noise result (in the range zero to one) needs to be to be replaced, while the second affects how quickly the noise result changes from one block to the next. While not a perfect description, you can think of `amount` as what fraction of the replaced biomes' area gets replaced. And the `noise_frequency_scale` will control the size of contiguous areas of this custom biome while inversely affecting how often it will appear. The component holds an array of replacement items, so a biome could replace all of some biomes while only sparsely replacing another biome.

### Handling competition between biomes and other add-ons

It's expected that biomes will sometimes use the `minecraft:replace_biomes` component in a way that multiple custom biomes want to replace the same Biome in the same location. In that event, the Overworld generation code will choose whichever biome's noise result is lower. This will allow for tie-breaking in a way that is consistent and not affected by things like the order that the Add-ons were added to the world. And because the tie-breaking is done based on a noise value, the border between the competing biomes should appear natural and random, like the border between other biomes.

### Adding and removing add-ons that override biomes

Minecraft generates any chunks that are near enough to a player, then saves those chunks if a meaningful change happened in that chunk. This means that if you exit the game in a newly explored area and re-enter the world, some of those chunks will have generated again, while some of those chunks will have loaded from previous save data. If the list of custom biomes that are being used by the Overworld's generation changes in between saving and reloading the game, that will lead to a possible discrepancy between the saved chunks and newly generated chunks. For example, if you save the game in a desert, then add an Add-on that replaces all desert areas with a custom biome, the game will have a mix of desert chunks that have saved before, and custom biome chunks where the chunks needed to regenerate. Because of this, if you want to add an add-on to a world that changes biome selection, it's a good idea to test the world with a backup copy of the world first.

When chunks save, they will save a record of which biome corresponds to each position. If the biome no longer exists, then the default biome for the Overworld will be used to determine things like mob spawning and sky color. The default biome for the Overworld is the Ocean biome. The blocks, entities, and items in a chunk that references a removed biome will still be there, assuming their definitions were not also part of the remove Add-on.

### The Custom biomes experiment

The Partial Biome Replacement feature is currently experimental, within the Custom Biomes experiment. During this time there will likely be some small breaking changes, and there will be new component options as we add components for some biome behaviors that can't yet be controlled in JSON files.

As the experiment prepares for release, we will also stop supporting loading older-experiment custom biome JSON files for worlds with an older base game version, and custom biomes will likely need to specify a format_version corresponding to the version number of release. We'll update this article as changes appoach.

## Conclusion

It has been a lot of work, but we are excited to see what the Creator community does with Custom Biomes and Partial Biome Replacement. Please try out the technology and send any bugs or feedback through the appropriate channels so we can make sure this feature ships as well as it can. Thank you in advance!
