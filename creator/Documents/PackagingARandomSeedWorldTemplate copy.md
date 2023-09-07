---
author: JimSeaman42
ms.author: mikeam
title: Packaging a Random Seed World Template
ms.prod: gaming
description: "An article detailing the process of packaging a world template for random seed generated worlds"
---

# Random Seed Generation

The Random Seed Generation (RSG) feature allows players to change the world seed when creating a new world using a creator’s pack. Once the world is created, the world seed is locked and no longer editable.
This optional feature allows creators to create unique experiences using custom behavior and resource packs, while allowing for a random world to be conjured every time the template is used to create a new world.

## Pack Setup

To enable a pack to use the RGS feature, create all world files as you would normally, with one exception: you must assure there is no `db` folder in the `worlds` folder. The reason the `db` folder must not exist is to avoid blending issues when creating a new world; if there is any existing chunk data, which is stored in the db folder, this would be used during world generation.

You will also need to add the `allow_random_seed` property to the manifest.json file, and set the property to `true`

## Sample RSG manifest.json file

```json
{
        "format_version" : 2,
        "header" : 
        {
            "base_game_version" : [ 1, 20, 1 ],
            "description" : "pack.description",
            "lock_template_options" : true,
            "name" : "Allow Random Seed True",
            "platform_locked" : false,
            "uuid" : "eae96517-a409-4442-8de3-c518c1d3b2eb",
            "version" : [ 1, 0, 0 ],
            "allow_random_seed" : true
        },
        "modules" : 
      [
        {
            "type" : "world_template",
            "uuid" : "0b07f5e4-9e5d-4bbf-97ae-8e4c4d6c184b",
            "version" : [ 1, 0, 0 ]
        }
    ]
}
```
