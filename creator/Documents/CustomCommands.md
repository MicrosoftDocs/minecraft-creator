---
ms.author: mikeam
author: mammerla
title: Scripting Custom Commands (Preview)
description: "Describes how you can take advantage of new custom command in scripting support, available in Preview"
ms.service: minecraft-bedrock-edition
ms.date: 03/26/2025
---
# Scripting Custom Commands Overview

There is also a video version available of this overview of Scripting Custom Commands:

> [!VIDEO https://www.youtube.com/embed/cXfMwcDg1Lo]

## Scripting Custom Commands

Commands are a critical part of nearly any creator project. Commonly, projects are boot-strapped and tested via a set of custom commands and functions, including commands that can reset environments or change configurations. In multiplayer environments, a set of commands can be used to administer games. You can also use commands to provide helpful little builder functions, to further build out your world.

Starting in Minecraft Bedrock Edition 1.21.80.22 Preview, you can now implement custom commands in script. These commands have the full capability of scripting APIs and custom logic, allowing you to implement sophisticated operations.

Note that in the current beta, context on the executing environment (e.g., the player who ran the command, or the initiator in NPC environments) is not available; we are looking to bring this execution context in future.

You can view a sample project at [https://github.com/microsoft/minecraft-scripting-samples](https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands).

### Using 2.0.0-beta scripting environment

To get started, we'll want to work with the 2.0.0-beta scripting environment. Custom commands and registration only run in [the v2.0.0 scripting environment](./ScriptingV2.0.0Overview.md), which itself is currently in beta.

You'll want to make sure you use `2.0.0-beta` as your scripting environment, in the manifest of your behavior pack:

```json
  {
    "module_name": "@minecraft/server",
    "version": "2.0.0-beta"
  },
```

### Registering Commands

The first step is to register the command. You can do this within the `startup` event of system.beforeEvents, like so:

```typescript
system.beforeEvents.startup.subscribe((init: StartupEvent) => {
  const helloCommand: CustomCommand = {
    name: "creator:hellocustomcommand",
    description: "Celebration size",
    permissionLevel: CustomCommandPermissionLevel.Admin,
    optionalParameters: [{ type: CustomCommandParamType.Integer, name: "celebrationSize" }],
  };
  init.customCommandRegistry.registerCommand(helloCommand, helloCustomCommand);
}
```

There are several parameters you will need to specify:

|Parameter |Description |
|:----------:|-----------|
| name | Name of the command that is used. Custom commands must be namespaced (that is, follow the form of namespace:commandname). |
| description | Description of the command. This will show up in autocomplete for the command. |
| permissionLevel | Relative permission level of the command.|
| mandatoryParameters | A list of mandatory parameters for the command. These will come first in the list of parameters that a command may have. |
| optionalParameters | A list of optional parameters for the command. These will come second in the list of parameters. |

#### Permission Levels

Commands can have a permission level that is required from executing contexts and players.

|Parameter |Description |
|:----------:|-----------|
| Any | Any player or environment can run this command. |
| GameDirectors | Requires a player with an "Operator Commands" permission to run this command. Also, scripting and command environments, like command blocks, can run this command. |
| Admin | Requires a player with "Operator Commands" permission. Commands with this level cannot be used in automations like commands or script |
| Host | Only the originating game owner can run this command. |
| Owner | In dedicated server environments, this command can only be exited in the hosting environment at the dedicated server console. |

### Execution

After registering your command, Minecraft will call into your function with the parameters that are specified by the command context.

|Parameter Type | Corresponding data variable type |
|:----------:|-----------|
| BlockType | @minecraft/server.BlockType |
| Boolean| boolean |
| EntitySelector | Entity[] |
| Float | number |
| Integer | number |
| ItemType | @minecraft/server.ItemType |
| Position | Vector3 |
| PlayerSelector | Player[] |
| String | string |

If the parameter is optional, then `undefined` is passed in if the parameter is not specified.

Note that script command function runs in a "before" context, meaning that most methods that change state are unavailable in the command context. To run commands that change world state, you'll want to consider wrapping them in a function that defers execution until later in the tick, such as `system.run` for example:

```typescript
    system.run(() => {
      for (const player of world.getPlayers()) {
        player.dimension.createExplosion(player.location, celebrationSize);
      }
    });
```

## Summary

Custom script-based commands unlocks a new organization tool for functionality you have in your creations. Whether a simple internal reset tool or a sophisticated game administration suite, we hope that providing a set of powerful commands is easy and second nature in your projects.
