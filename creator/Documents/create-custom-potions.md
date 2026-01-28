---
author: chipotle
ms.author: mikeam
title: Creating Custom Potions
description: "Two ways to create custom potions in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
ms.date: 09/19/2025
---

# Creating Custom Potions

Potions are a special kind of item in Minecraft, and just like [custom items](./AddCustomItems.md), you can make custom potions. There are two ways to create them: a simple way using the `/give` command, and a more complex (but much more flexible) way by making them a custom item.

## Using the give command

The [`/give` command](../Commands/commands/give.md) specifies a player to give an item to, the kind of item (specified by [item enum](../Commands/enums/Item.md)) and optional parameters including amount and data value. The data value is the special parameter here; its meaning changes depending on what kind of item you're creating with the `give` command. To give yourself a regular potion of invisibility, the command would be:

```text
/give @p potion 1 7
```

In that command, `1` is the amount and `7` is the data value for a potion of invisibility.

While the data values have remained consistent to date, there's no guarantee they might not change in later versions (although the most likely changes are additions). This is the current list as of version 1.21.111, but if you're using a later version, you should double-check that you're getting the potion you actually want.

| Potion Type     | Data Value                   |
|-----------------|:----------------------------:|
| Water           | 0                            |
| Mundane         | 1, 2 (long)                  |
| Thick           | 3                            |
| Awkward         | 4                            |
| Night Vision    | 5, 6 (long)                  |
| Invisibility    | 7, 8 (long)                  |
| Leaping         | 9, 10 (long), 11 (enhanced)  |
| Fire Resistance | 12, 13 (long)                |
| Swiftness       | 14, 15 (long), 16 (enhanced) |
| Slowness        | 17, 18 (long), 42 (enhanced) |
| Water Breathing | 19, 20 (long)                |
| Healing         | 21, 22 (enhanced)            |
| Harming         | 23, 24 (enhanced)            |
| Poison          | 25, 26 (long), 27 (enhanced) |
| Regeneration    | 28, 29 (long), 30 (enhanced) |
| Strength        | 31, 32 (long), 33 (enhanced) |
| Weakness        | 34, 35 (long)                |
| Decay           | 36                           |
| Turtle Master   | 37, 38 (long), 39 (enhanced) |
| Slow Falling    | 40, 41 (long)                |
| Wind Charging   | 43                           |
| Weaving         | 44                           |
| Oozing          | 45                           |
| Infestation     | 46                           |

## Creating a custom item

There's a couple of good tutorials on creating custom items using Minecraft's developer tools like Blockbench and Visual Studio Code, including:

* [Adding Custom Items](./AddCustomItems.md)
* [Chill Dreams Add-On](../Casual/ChillDreamsPart1TheDreamTurkey.md)

The "Dream Turkey" from the Chill Dreams Add-On functions a lot like a custom potion: you consume it, and it triggers a temporary effect. To make a potion, we're going to take a similar approach, but we're going to use [custom components](./scripting/custom-components.md). And, to get a head start, we're going to use the [Minecraft Creator Tools](./MCToolsOverview.md).

### Prerequisites

You should be comfortable using TypeScript and Visual Studio Code. If you haven't read the following articles in a while (or at all), check them out first:

* [Introduction to Scripting in Minecraft](./scripting/introduction.md)
* [Scripting with TypeScript](./scripting/next-steps.md)

### Create a new project

> [!NOTE]
> We're assuming you have Node.js and Visual Studio Code installed already.

1. Go to the MCTools website: <https://mctools.dev>

2. From the home screen,  select **TypeScript Starter** and click  **New**.

3. In the dialog box that comes up, fill in an appropriate title (like "Custom Potion"), creator name, and description. MCTools will offer some sensible defaults you can leave as-is for some fields. When you're done with that, select **OK** to create your project.

    :::image type="content" source="./Media/custom-potions/add-on-setup.png" alt-text="The dialog box for creating a new Add-On starter project in MCTools.":::

    MCTools will grab current versions of the files it needs from GitHub, then take you to your new project's home screen.

    :::image type="content" source="./Media/custom-potions/mctools-home.png" alt-text="The MCTools home screen, with the unmodified Add-On Starter project loaded.":::

### Create a new item

The first thing we need to do is create a new item. Click **+ Add** and **New Item Type**. We're going to make a potion of fire resistance. (Yes, this is something you can do with the `/give` command, but this is a good demonstration.) Click on "Custom Sword" as the mob type to base it on. Even though we're not making a sword, this creates some useful files for us. Give the item type the name "Potion of Fire Resistance," then click **Add**.

:::image type="content" source="./Media/custom-potions/add-new-item.png" alt-text="New Item Type screen in MCTools, showing us creating a Potion of Fire Resistance based on the custom sword.":::

You'll see a few new items appear in the MCTools sidebar. Hover over **my\_sword** under **Item types** and click the three-dot button (&middot;&middot;&middot;), and select **Rename**. Give the item the name "my\_potion".

### Get some potion bottle textures

While we're still in MCTools, let's add some textures for our new potion bottles, one showing it empty and one showing it full. You can create your own textures with an application like [Blockbench](./Blockbench.md), or just download our files:

![(Empty bottle)](./Media/custom-potions/potion_bottle_empty.png) [`potion_bottle_empty.png`](./Media/custom-potions/potion_bottle_empty.png)

![(Full bottle)](./Media/custom-potions/potion_bottle_full.png) [`potion_bottle_empty.png`](./Media/custom-potions/potion_bottle_full.png)

To upload your textures to MCTools, drag them onto the MCTools window. In the dialog box that comes up, select **Add file at folder...**. The dialog will expand to show the file tree; select **items** under **textures** in your resource pack folder.

:::image type="content" source="./Media/custom-potions/upload-texture.png" alt-text="Uploading a texture to MCTools.":::

You may not see the files you've uploaded in the Items view yet, but that's okay. If you click **View** and then **View as files**, you can see them in the file tree in the **items** folder.

:::image type="content" source="./Media/custom-potions/mctools-view-as-files.png" alt-text="The file tree view of the project in MCTools, showing the uploaded textures.":::

### Export the project

From this point on, we're going to be editing TypeScript files directly. You can do this all in MCTools, too, but it'll be easier to move it into Visual Studio Code now.

1. Open PowerShell or the Command Prompt, and go to a folder you'd like to create this project in. Create a folder for this project:

    ```text
    > mkdir custom_potion
    ```

    (You can create the folder any way you want, but you're going to be at the command line for a few more steps after this one.)

2. Go back to the web browser. On the MCTools menu bar, click **Share** and **Export to a folder on this device**. Select the folder that you just created. If your browser asks you to allow the site to edit files, select **Allow**.

      :::image type="content" source="./Media/custom-potions/allow-edit-files.png" alt-text="Microsoft Edge's prompt for allowing a site to edit files on your local computer.":::

3. Go back to the command prompt and change to the custom potion directory. When you look at the directory, you'll see there are files now!

    Install the Node project dependencies:

    ```text
    npm i
    ```

4. You're ready to open the project in Visual Studio Code:

    ```text
    code .
    ```

### Edit the Resource Pack

1. In your resource pack, open the **manifest.json** file. (In mine, that's in the folder **resource\_packs/chip\_potion/**; in yours, the "chip\_potion" segment will correspond to the short name you gave your pack in MCTools.) Double-check that the `name` and `description` keys are a little less generic. Here's what mine looks like. Yours will be a little different: MCTools will have generated different UUIDs, for example. (Leave those alone!)

    ```json
    {
      "format_version": 2,
      "header": {
        "name": "custom_potion",
        "description": "Example Custom Potion",
        "uuid": "84dd1254-b530-4c42-b017-409cf1e97c06",
        "version": [1, 0, 0],
        "min_engine_version": [1, 21, 100]
      },
      "modules": [
        {
          "description": "Custom Resource Pack",
          "type": "resources",
          "uuid": "e51d5e98-fd2e-489b-b77f-7a273448e3b4",
          "version": [1, 0, 0]
        }
      ],
      "dependencies": [
        {
          "uuid": "59929256-ee32-4d58-9b0d-98917cf6ec9c",
          "version": [1, 0, 0]
        }
      ],
      "metadata": {
        "generated_with": {
          "mctoolsweb": ["0.14.1"]
        }
      }
    }
    ```

2. Now, let's edit the texture JSON files so they reference our potion bottle textures. In your Resource Pack, open the **item\_texture.json** file. (In mine, that's in the folder **resource\_packs/chip\_potion/textures/**; in yours, the "chip\_potion" segment will correspond to the short name you gave your pack in MCTools.)

    Replace the contents of this file with the following code. (You can use a different namespace than `demo:`, as long as you don't use `minecraft:`. If you change it, remember what you changed it to, though!)

    ```json
    {
      "resource_pack_name": "Potion of Fire Resistance RP",
      "texture_name": "atlas.items",
      "texture_data": {
        "demo:potion_bottle_full": {
          "textures": "textures/items/potion_bottle_full"
        },
        "demo:potion_bottle_empty": {
          "textures": "textures/items/potion_bottle_empty"
        }
      }
    }
    ```

3. While we're here, we'll give the potion bottles translation names. In the **texts** folder (it's at the same level as **textures**), open the **en_US.lang** file and replace its contents with this:

    ```ini
    item.demo:potion_bottle_full=Potion Bottle (Full)
    item.demo:potion_bottle_empty=Potion Bottle (Empty)
    ```

### Edit the Behavior Pack

1. We don't need the recipe folder for this test; right-click **recipes** and select **Move to Recycle Bin**.

2. Open up the **manifest.json** file in the **behavior\_packs/short\_name** folder, and give it the same name and description in the header as you gave the Resource Pack's manifest file. If there's a dependency block, you can delete it. (Make sure the JSON doesn't show up with an error, though.)

3. Rename **my\_sword.json** in the Behavior Pack **items** folder to **potion\_bottle\_full.json** and open it for editing. Let's just give it the basics an item needs:

    ```json
    {
      "format_version": "1.21.90",
      "minecraft:item": {
        "description": {
          "identifier": "demo:potion_bottle_full",
          "menu_category": {
            "category": "items",
            "group": "minecraft:itemGroup.name.potion"
          }
        },
        "components": {
          "minecraft:icon": "demo:potion_bottle_full",
          "minecraft:display_name": {
            "value": "Potion Bottle (Full)"
        }
      }
    }
    ```

4. The empty potion bottle needs to have a JSON file, too. Right-click on **potion\_bottle\_full.json** in the sidebar, copy it, and paste the copy into the **items** folder. Rename the copy to **potion\_bottle\_empty.json** and edit it to change the word "full" to "empty" everywhere:

    ```json
    {
      "format_version": "1.21.90",
      "minecraft:item": {
        "description": {
          "identifier": "demo:potion_bottle_empty",
          "menu_category": {
            "category": "items",
            "group": "minecraft:itemGroup.name.potion"
          }
        },
        "components": {
          "minecraft:icon": "demo:potion_bottle_empty",
          "minecraft:display_name": {
            "value": "Potion Bottle (Empty)"
          }
        }
      }
    }
    ```

5. Now, we need to add a few components to **potion\_bottle\_full.json** to make the potion magical. We need to do two things:

    * Give the player the fire resistance effect.
    * Replace the full potion bottle item with the empty potion bottle item.

    For the last one, we can use a shortcut property in the `food` component, `using_converts_to`, which specifies the item that a food item becomes after it's used. For the first one, though, we'll use a little custom component.

    Edit the `"components"` block to give it a drinking animation, a food component, a duration (how long it takes to consume), and a custom component:

    ```json
    "components": {
      "minecraft:icon": "demo:potion_bottle_full",
      "minecraft:display_name": {
        "value": "Potion Bottle (Full)"
      },
      "minecraft:food": {
        "nutrition": 0,
        "can_always_eat": true,
        "using_converts_to": "demo:potion_bottle_empty"
      },
      "minecraft:use_modifiers": {
        "use_duration": 3
      },
      "minecraft:use_animation": "drink",
      "demo:add_fire_resistance": {}
    }
    ```

    The custom component is named `add_fire_resistance`. We're going to register it in the **main.ts** file in the **scripts** folder, attaching it to the component registry and listening for an [`onConsume` event](../ScriptAPI/minecraft/server/ItemCustomComponent.md).

6. Open **main.ts** and replace everything in it with the following code:

    ```typescript
    import { system, ItemComponentConsumeEvent } from "@minecraft/server";

    system.beforeEvents.startup.subscribe((initEvent) => {
      initEvent.itemComponentRegistry.registerCustomComponent("demo:add_fire_resistance", {
        onConsume(event: ItemComponentConsumeEvent) {
          event.source.addEffect("minecraft:fire_resistance", 1200);
        },
      });
    });
    ```

    When the function is called (that is, the potion is drunk), it calls [`addEffect`](../ScriptAPI/minecraft/server/Entity.md#addeffect) to add `fire_resistance` to the `source` (which is, in this case, the player) with a duration of 6000 ticks (five minutes).

### Testing

Open the **.env** configuration file in Visual Studio Code. Change the `PROJECT_NAME` variable to something like `"fire_resistance_potion"` (this needs to be a valid folder name, so no spaces). If you want to test your new add-on in the production release of Minecraft: Bedrock Edition, leave the `MINECRAFT_PRODUCT` variable set to `"BedrockGDK"`; change it to `"PreviewGDK"` if you want to test in the Preview release.

> [!NOTE]
> These instructions assume you've installed Minecraft in a standard location, and that you've taken other system configuration steps like setting execution policy properly. Read [Scripting with TypeScript](./scripting/next-steps.md) for help with those.

Now, go back to the command prompt in your add-on's directory, and deploy it locally.

```text
npx just-scripts local-deploy
```

Launch Minecraft, and create a new world. In the sidebar, select **Cheats** and make sure they're enabled, then select **Resource packs** and activate your **custom_potion** pack (or whatever you've named it). Create a survival world.

Now, give yourself the potion:

```text
/give @p demo:potion_bottle_full
```

You should now be holding a red potion bottle! Now, use it. You'll have to hold down the use button until you start, then finish, drinking it. When you're done, you'll be holding an empty potion bottle&mdash;and you'll have fire resistance, indicated by the icon along the right side of the screen and the snazzy particle effect.

:::image type="content" source="./Media/custom-potions/fire-resistance-potion.png" alt-text="The player after the fire resistance potion is consumed, with the effect turned on.":::

## Next steps

Now that you've learned the basic "how-to" of custom potions, the sky's the limit: while all our custom component in this example did was call `addEffect`, anything that can be scripted could potentially be triggered by the `ItemComponentConsumeEvent`. The effects from the [Chill Dreams Add-On](../Casual/ChillDreamsPart1TheDreamTurkey.md) could be turned into a component. A potion could teleport the player to another part of the world, maybe one that's only accessible that way. You're limited only by your imagination.

* Read the [Introduction to Custom Components](./scripting/custom-components.md)
* Delve into the Item Components section of [Building With Custom Components](./scripting/components-tutorial.md)
* Review the [Script API Reference Documentation](../ScriptAPI/index.yml)
