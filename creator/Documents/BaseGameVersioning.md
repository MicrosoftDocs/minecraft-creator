---
ms.author: v-jeffreykim
title: Base Game Versioning
ms.prod: gaming
author: ReWrite-Media
description: "A tutorial to introduce creators to base game versioning"
---
# Base Game Versioning

Base game versioning is a way to keep changes in vanilla Minecraft: Bedrock Edition from causing unexpected changes in your content. This will allow you to lock your world template to a specific Minecraft version, assuring future game changes don’t impact your content.

For example, if your world template relies on the behavior of certain entities, or even their spawning mechanics, the world template might break in unexpected ways if Minecraft is updated in a manner that changes those behaviors. With base game versioning, if you are running a version 1.20 client, but the `base_game_version` of a piece of content is set to 1.15, it will load the resources for all versions up to 1.15, skipping any new resources implemented in 1.16 through 1.20. 

> [IMPORTANT!]
> Base game versioning was introduced in 1.13, so that’s the earliest version of the game this system supports. Don't try to set your `base_game_version` to anything below 1.13.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to apply base game versioning to restrict the versions that your Minecraft: Bedrock Edition world templates may be used in.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Packaging a World Template](PackagingAWorldTemplate.md)

## Setup

In the header of your world template’s manifest, you will need to specify the Minecraft version your world template was created for. This is done through a new field called `base_game_version`.

The value you enter should always be the same as the latest version of the game without the third octet. For example, if the latest version of the game was `[1, 14, 2]`, you would use the version `[1, 14, 0]`.

If your content is version agnostic (a simple survival spawn, for instance, which is unlikely to break from future updates), you can forgo locking your content to a specific version by using a "wildcard": `"base_game_version": "*"`.

## Example

Below, you’ll find an example `manifest.json` for a world template that uses a `base_game_version` of 1.13.0. Remember to update the header and module UUIDs.

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

Being able to specify what version your world is verified against makes it far less likely to break in future versions of Minecraft. Base game versioning doesn't replace diligent testing and maintenance of your content, but it does allow you to spend more time focusing on creating cool new things instead of fixing old content.
