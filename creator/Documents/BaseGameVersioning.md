---
author: JimSeaman42
ms.author: mikeam
title: World Templates and Base Game Versioning
description: "A guide detailing the concept of base game versioning"
ms.service: minecraft-bedrock-edition
---
# World Templates and Base Game Versioning

If a world template relies on the behavior of certain entities, the world template may break if Minecraft is updated in a way that changes those behaviors. Base game versioning is a method of keeping current or future changes in Vanilla Minecraft: Bedrock Edition from causing unexpected changes to your world files, and allowing you to lock your world template to a specific Minecraft version. Base game versioning does not affect texture packs or skin packs.

For example, when running a version 1.18 client while the `base_game_version` of a world template is set to 1.15, the game will load the resources for all versions up to 1.15 and will skip any new resources implemented in 1.16 through 1.18.

Finally, the base game version can be updated at any time, including after content has been uploaded to the Minecraft Marketplace. Updating the base game version of a Marketplace world template will affect not only new world created from the template, but all worlds previously created from the template as well.

> [!IMPORTANT]
> Base game versioning was introduced in 1.13, and is the earliest version of the game that supports base game versioning. **Do not** try to set your `base_game_version` below 1.13.

## Requirements

It's recommended that the following be completed before reviewing this article:

- [Creating a World Template](CreateAWorldTemplate.md)

## Setup

In the header of your world template's manifest, you will need to specify the Minecraft version your world template was created for using the `base_game_version` field.

If your content doesn't depend on version features, like a simple map that is unlikely to break from future updates, you can use a "wildcard" in the field: `"base_game_version": "*"`.

### Example

The following example shows a world template using a `base_game_version` of `[1, 13, 0]`. If using this example, remember to update the header and module UUIDs.

```json
{
    "format_version": 2,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "version": [ 1, 0, 0],
        "lock_template_options": true,
        "base_game_version": [ 1, 13, 0],
        "uuid": "<FIRST GENERATED UUID>"
    },
    "modules": [
        {
        "version": [ 1, 0, 0],
        "type": "world_template",
        "uuid": "<SECOND GENERATED UUID>"
        }
    ],
    "metadata": {
        "authors": ["Author Name"]
    }
}
```

While specifying a version makes a world less likely to break due to updates, base game versioning can't replace testing and maintenance of your content for the best results.