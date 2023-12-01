---
author: JimSeaman42
ms.author: mikeam
title: World Templates and Base Game Versioning
description: "A guide detailing the concept of base game versioning"
ms.service: minecraft-bedrock-edition
---
# World Templates and Base Game Versioning

Base game versioning is a method of keeping changes in Vanilla Minecraft: Bedrock Edition from causing unexpected changes in your world files, allowing you to lock your world template to a specific Minecraft version and assuring future game changes don't impact your **.mcworld** files. Base game versioning will not affect texture packs or skin packs.

If a world template relies on the behavior of certain entities or their spawning mechanics, the world template may break in unexpected ways if Minecraft is updated in a manner that changes those behaviors. For example, when running a version 1.18 client while the `base_game_version` of a world template is set to 1.15, the game will load the resources for all versions up to 1.15 and will skip any new resources implemented in 1.16 through 1.18.

> [!IMPORTANT]
> Base game versioning was introduced in 1.13, and as such is the earliest version of the game that supports base game versioning. **Do not** try to set your `base_game_version` to anything below 1.13.

> [!CAUTION]
> When setting up a world for base versioning, please note that it will only be able to access content relative to the version used. For example, if you set `"base_game_version": [1, 16, 0]`, you **cannot** use any Caves and Cliffs content introduced in `[1, 17, 0]`.

In this article you will learn the following:

> [!div class="checklist"]
>
> - How to restrict the versions that your Minecraft: Bedrock Edition world templates may be used in.
> - How to update an existing world template that has been released to the Marketplace.
> - How to deal with potential issues when updating a world template to 1.18.

### Requirements

It's recommended that the following be completed before reviewing this article:

- [Creating a World Template](CreateWorldTemplate.md)

## Setup

In the header of your world template's manifest, you will need to specify the Minecraft version your world template was created for using the `base_game_version` field.

If your content is version agnostic, like a simple map that is unlikely to break from future updates, you can use a "wildcard" in the field: `"base_game_version": "*"`.

### Example

The following represents a world template that uses a `base_game_version` of `[1, 13, 0]`. When using this example, remember to update the header and module UUIDs.

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

While specifying what version a world is verified against makes it less likely to break due to updates, base game versioning doesn't replace diligent testing and maintenance of your content to ensure an enjoyable experience for players.

## Updating a World Template's Base Game Version in the Minecraft Marketplace

Today a creator may submit an update to their world template at any time, including updating the base game version of the template to a newer version.

When a world template is updated in the Minecraft Marketplace:

1. All newly created worlds from the template will follow the newest available state.
1. All worlds previously created from the template will ALSO receive the update.

This behavior enables Marketplace creators to update their products at any time to address bugs and other issues.

## Dealing with Different World Heights

With the 1.18 release for Caves and Cliffs Part 2, significant changes happened to world generation that can affect older templates.

Creators in the community should be aware of a potential scenario:

1. A creator creates a world template called **TemplateA** and sets the `base_game_version` to `[1, 17, 0]`.
1. A player opens Minecraft: Bedrock Edition 1.18 or newer and downloads **TemplateA**.
1. Creator instantiates a new world using **TemplateA** and calls it **WorldA**.
1. The creator updates **TemplateA's** `base_game_version` to `[1, 18, 0]`.
1. The player opens **WorldA**.

In this scenario, a creator creates and releases a world template for a version of Minecraft that does not use the updated world height changes. If the creator updates the existing template to `[1, 18, 0]` (which does use the new world height), then worlds that players have generated using that template will automatically update to the new world height. This can shift the layout of the worlds and break existing content.

To prevent any loss of information, it is recommended to create a copy of the existing template, **TemplateB** from our scenario, that has the `base_game_version` set to `[1, 18, 0]` and to use this new template for distributing to players.

1. A creator creates a template called **TemplateA** and sets the `base_game_version` to `[1.17.4]` or previous version.
1. A player opens Minecraft: Bedrock Edition in a version older than 1.18, and downloads **TemplateA**.
1. The creator instantiates a new world using **TemplateA** called **WorldA**.
1. Minecraft: Bedrock Edition client is updated to v1.18+.
1. The creator copies **TemplateA** and creates a **TemplateB** with `base_game_version` set to `[1, 18, 0]`.
1. The creator tests and validates **TemplateB** before publishing.
1. The player downloads **TemplateB** and creates a new world, **WorldB**.
