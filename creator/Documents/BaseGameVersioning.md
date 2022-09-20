---
ms.author: mikeam
title: Base Game Versioning
ms.prod: gaming
author: neonerz
description: "A tutorial to introduce creators to the concept of base game versioning"
---
# Base Game Versioning

Base game versioning is a way to keep changes in vanilla Minecraft: Bedrock Edition from causing unexpected changes in your world files. This will allow you to lock your world template to a specific Minecraft version, assuring future game changes don’t impact your .mcworld files. Base game versioning will not affect your texture packs or skin packs.

For example, if your world template relies on the behavior of certain entities, or even their spawning mechanics, the world template might break in unexpected ways if Minecraft is updated in a manner that changes those behaviors. For example, if you are running a version 1.18 client but the `base_game_version` of a world template is set to 1.15, it will load the resources for all versions up to 1.15, skipping any new resources implemented in 1.16 through 1.18.

> [!IMPORTANT]
> Base game versioning was introduced in 1.13, so that’s the earliest version of the game this system supports. **Do not** try to set your `base_game_version` to anything below 1.13.

> [!CAUTION]
> When setting up your content for base versioning, please note that your content will only be able to access content relative to the version used. For example, if you set `"base_game_version": [1, 16, 0]`, you **cannot** utilize any Caves and Cliffs content in your Add-Ons that were introduced in `[1, 17, 0]`.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to apply base game versioning to restrict the versions that your Minecraft: Bedrock Edition world templates may be used in.
> - How to update an existing world template that has been released to the Marketplace.
> - How to deal with potential issues when updating a world template to 1.18.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Packaging a World Template](PackagingAWorldTemplate.md)

## Setup

In the header of your world template’s manifest, you will need to specify the Minecraft version your world template was created for. This is done through a field called `base_game_version`.

If your content is version agnostic (such as a simple survival spawn which is unlikely to break from future updates), you can forgo locking your content to a specific version by using a "wildcard": `"base_game_version": "*"`.

### Example

Below, you’ll find an example `manifest.json` for a world template that uses a `base_game_version` of `[1, 13, 0]`. If you use it, remember to update the header and module UUIDs.

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

Specifying what version your world is verified against makes it far less likely to break in future versions of Minecraft. Base game versioning doesn't replace diligent testing and maintenance of your content, but it does allow you to spend more time focusing on creating cool new things instead of fixing old content.

## Updating a World Template's Base Game Version in the Minecraft Marketplace

Today a creator may submit an update to their world template at any time. These updates may include revisioning the base game version of their world template to a newer version.

When the world template is updated in the Minecraft Marketplace:

1. All newly created worlds from the template will follow the newest available state.
1. All worlds instantiated from the template will ALSO receive the update.

This behavior enables Marketplace creators to update their products at any time to address bugs and other in-production issues.

## Updating a World Template's Base Game Version to 1.18

With the upcoming 1.18 release for Caves and Cliffs Part 2, we are making significant changes to world generation. There is a potential for content to break when working with existing templates.

To ensure that content continues to operate as intended, Minecraft Marketplace Creators will be unable to update the base game version of their content to v1.18+ after the release of client v1.18. This is a temporary measure to ensure that content continues to operate as designed after this large update.  

Creators in the community should be aware of a potential scenario:

1. A Creator creates a world template called **TemplateA** and sets the `base_game_version` to `[1, 17, 0]`.
1. A Player opens Minecraft: Bedrock Edition v1.18, and downloads **TemplateA**.
1. Creator instantiates a new world utilizing **TemplateA** and calls it **WorldA**.
1. The Creator updates **TemplateA's** `base_game_version` to `[1, 18, 0]`.
1. The Player opens **WorldA**.

In this scenario, a Creator creates and releases a world template for a version of Minecraft that does not utilize the updated world height changes. If the Creator updates the existing template to `[1, 18, 0]` (which does use the new world height), then worlds that players have generated using that template will automatically update to the new world height. This can potentially shift the layout of the worlds and break existing content.

In order to prevent any loss of information, it is recommended to create a copy of the existing template, **TemplateB** from our scenario, that has the `base_game_version` set to `[1, 18, 0]` and to use this new template for distributing to players.

1. A Creator creates a template called **TemplateA** and sets the `base_game_version` to `[1.17.4]` or previous version.
1. A Player opens Minecraft: Bedrock Edition in a version older than 1.18, and downloads **TemplateA**.
1. The Creator instantiates a new world utilizing **TemplateA** called **WorldA**.
1. Minecraft: Bedrock Edition client is updated to v1.18+.
1. The Creator copies **TemplateA** and creates a **TemplateB** with `base_game_version` set to `[1, 18, 0]`.
1. The Creator tests and validates **TemplateB** before publishing.
1. The Player downloads **TemplateB** and creates a new world, **WorldB**.
