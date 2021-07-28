---
author: v-jeffreykim
ms.author: v-jeffreykim
title: NPC Dialogue Command
ms.prod: gaming
---

# NPC Dialogue Command

Branching Dialogue allows you to create a dynamic NPC dialogue script that can provide updated dialogue based on a player’s in-game actions or responses.
The Branching Dialogue system is comprised of three parts: The NPC entity, the dialogue commands, and the resource scene files.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Create a Custom NPC](CreateNPCs.md)

## The Scene File

The scene file is a json file located inside the **dialogue** folder in the root directory of your behavior pack (`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\development_behavior_packs\<your behavior pack folder>`) that contains all the information needed for your branching dialogue. You can create as many scene files as you need. You can create a scene file for each NPC in your world or create a scene file for each chapter of your narrative, or you can simply have one scene file for the world - the choice is completely up to you as the branching dialogue feature will read all files in the dialogue folder, regardless of how you decided to organize them.

### Properties

The first property is the header which defines this json file as a valid scene file. 

Example:
```json
{
    "format_version": "1.17",
    "minecraft:npc_dialogue": {}
}
```

Since this is a json file, we need to include brackets. The next property we will add is the “scenes” property, the place where all our branching dialogue will live.

```json
    {
        "format_version": "1.17",
        "minecraft:npc_dialogue": {
            "scenes": []
        }
    }
 ```

With the header and scene file properties in place, we can now create our individual scenes for our NPC branching dialogue. Every new instance of NPC dialogue will require a new scene. This is defined in the scene file by creating a scene tag. You will use the scene tag in-game to call the text you supply in the scene file. You can also set up NPC buttons and commands that will behave identically as they would if you had set them up using the in-game NPC editor. 

Let’s examine the NPC scene structure:

```json
    {
        "scene_tag": "ducky_intro",
        "npc_name": "Ducky",
        "text": "Hello. My name is Ducky. Take this gold!",
        "on_open_commands": [
            "/clear @p"
        ],
        "on_close_commands": [
            "/say Enjoy the gold! "
        ],
        "buttons": [
            {
                "name": "Take Gold",
                "commands": [
                    "/give @initiator gold_ingot"
                ]
            }
        ]
    }
  ```

### Scene Properties

**scene_tag**: This is the name you will use to call this scene in-game. This is a required property.

**npc_name**: This is where you can add or change a name for your NPC dialogue box. This is an optional property that is useful for dynamically changing NPC names.

**Text**: This is where you enter the dialogue you want your NPC to display in-game for this scene. You can type the dialogue text directly here or use raw text if you are using a language file. This is an optional property, but without it your NPC dialogue box will be empty.

**on_open_commands**: This is where you can define which commands will fire when the NPC dialogue box opens. Optional property.

**on_close_command**: This is where you can define which commands will fire when the NPC dialogue box closes. Optional property.

**Buttons**: This is where you can create buttons for your NPC. The subset includes “name” and “commands” properties. The “name” property allows you to set the text that is going to be displayed on your NPC’s button. The second property - “commands” - allows you to add commands which will be run in-game when the button is pressed. Optional property; required for NPC buttons.

### Rawtext

All the scene properties listed above support rawtext.

```json
    {
        "scene_tag": "ducky_intro",
        "npc_name": { "rawtext": [ { "translate": "character.name", "with": ["\n"] } ] },
        "text": { "rawtext": [ { "translate": "ducky.intro.text", "with": ["\n"] } ] },
        "on_open_commands": ["/clear @p"],
        "on_close_commands": ["/say Enjoy the gold! "],
        "buttons": [
            {
                "name": { "rawtext": [ { "translate": "dialogue.button.name" } ] },
                "commands": [
                    "/give @initiator gold_ingot"
                ]
            }
        ]
    }
```
## Dialogue Command

The Dialogue command is what enables NPCs to open or read scene files. The command has two distinct modes, each with their own unique purpose and syntax.

### Dialogue Open

Dialogue Open is used to force open an NPC dialogue box to the targeted player(s). This feature has previously been referred to as Remote Fire, as it simulates the experience of clicking on an NPC. This command can be used on any NPC and doesn’t require a behavior pack unless you want the NPC to use a scene file for its dialogue (which is not a requirement when using dialogue open). 

The syntax for Dialogue Open is as follows:

```json
    /dialogue open <npc: target> <player: target> [sceneName:string]
```

`/dialogue`: The initial command.

`open`: The command variant.

`<npc: target>`: The NPC that you are targeting.

`<player: target>`: The player that you are targeting. This the player who will see the NPC dialog box.

`[sceneName:string]`: This is the name used if you want to use dialogue contained in a scene file. The string must be a valid scene tag name, or it will fail. This is an optional parameter.

>[!NOTE]
> If no sceneName is specified, whatever the last dialogue that NPC had will display.

### Practical Usage

Dialogue Open is primarily used in two ways.

The first is to initiate an NPC dialogue box without the player interacting directly with the NPC, essentially using the NPC as a ‘pop-up’ window that doesn’t require the player to click the NPC. The NPC in this scenario doesn’t even have to be visible to the player in the world (although they must be in a loaded chunk and within ticking distance of the player receiving the dialogue) and could be stashed underground or in some other inaccessible location.

The second way Dialogue Open is used is to create branching dialogue trees using the scene file. By using the Dialogue Open command inside of an NPCs scene file, the NPC can automatically open the next dialogue box for a player, using an On Close command or a Button command. This is the basis for all dialogue tree branching paths.

### Dialogue Change

Dialogue Change is used to direct an NPC to use the dialogue provided in a specifically designated scene file. This command requires the use of a behavior pack containing a dialogue folder and scene file to function correctly. The command will instruct the targeted NPC to pull its dialogue from the location designated by the scene tag name. The command should be run before the player initiates contact with the NPC.

The syntax for Dialogue open is as follows:

```json
    /dialogue change <npc: target> <sceneName:string> [player: target]
```

`/dialogue`: The initial command.

`change`: The command variant.

`<npc: target>`: The NPC that you are targeting.

`<sceneName:string>`: This is the name used if you want to use dialogue contained in a scene file. The string must be a valid scene tag name, or it will fail.

`[player: target]`: The player that you are targeting (this is the player who will see the dialogue box). If omitted in a “/dialogue change” command, the NPC dialogue will be updated for all players.

### Practical Usage

Dialogue Change is primarily used to change an NPC’s dialogue using commands. The command can come from a player-triggered command block in the world, fired by another NPC, or can be run from the targeted NPC itself.

You may want to change an NPCs dialogue based on a player’s actions in the world, such as entering a particular area, speaking with another NPC, or performing a specific task. If the action can be assessed, it can be used to run the dialogue command and change the NPC’s dialogue.

Dialogue Change does not display the NPC dialog box as Dialogue Open does, it simply points the NPC to the scene file dialogue that you want the player to see during their next interaction with that NPC.

## Targeting 

Targeting is a vital part of the NPC dialogue branching system. It determines which NPCs receive the commands and which players see the dialogue. It is also used to ensure that each player sees the dialogue you want them to see and does not lose the dialogue in multiplayer scenarios.

### Targeting NPCs 

To use the `/dialogue` command, you must target an NPC. This will act as the NPC the dialogue is showing up from and will use that NPC’s image inside the dialog’s portrait.

The NPC you want to trigger the dialog from must exist inside the world.

### Targeting Players

When using the `/dialogue` command, there will be times when you will need to target players as well. To target players, use player selectors such as @a (all players) or @p (nearest player). Those will typically work well for a single-player experience but if you wish to have per-player scene changes, you will need to use a special target type called @initiator(the player interacting with the NPC).

Example:

```json
    "buttons": [
        {
            "name": { "rawtext": [ { "translate": "dialogue.button.name" } ] },
            "commands": [
                "/give @initiator gold_ingot"
            ]
        }
    ]
```

Using this target selector with NPCs allows them to update their dialogue on a per-player basis, meaning that in multiplayer, NPCs can remember each player’s dialogue state and send them unique dialogue accordingly. This is useful for times where a player changing an NPCs dialogue could result in other players missing out on the complete dialogue branch or to ensure each player only receives one item from an NPC, not allowing that same player to return to the NPC for more items or locking out other players from collecting their items.

## Full Example: 

```json
    {
        "format_version": "1.17",
        "minecraft:npc_dialogue": {
            "scenes": [
                {
                    "scene_tag": "ducky_intro",
                    "npc_name": { "rawtext": [ { "translate": "character.name", "with": ["\n"] } ] },
                    "text": { "rawtext": [ { "translate": "ducky.intro.text", "with": ["\n"] } ] },
                    "on_open_commands": ["/clear @p"],
                    "on_close_commands": ["/say Enjoy the gold! "],
                    "buttons": [
                        {
                            "name": { "rawtext": [ { "translate": "dialogue.button.name" } ] },
                            "commands": [
                                "/give @initiator gold_ingot"
                            ]
                        }
                    ]
                }
            ]
        }
    }
```

Command to trigger the scene:

```json
    /dialogue open @e[tag=ducky] @p ducky_intro
```

