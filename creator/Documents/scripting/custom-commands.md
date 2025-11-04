---
ms.author: mikeam
author: mammerla
title: Scripting Custom Commands
description: "Describes how you can take advantage of custom command in scripting support"
ms.service: minecraft-bedrock-edition
ms.date: 11/04/2025
---
# Scripting Custom Commands Overview

There is also a video version available of this overview of Scripting Custom Commands:

> [!VIDEO https://www.youtube.com/embed/cXfMwcDg1Lo]

## Scripting custom commands

Commands are a critical part of nearly any Minecraft creator project. You can use them for bootstrapping and testing your projects, adding commands that reset environments or change configurations. For multiplayer servers, commands can be used to administer games. You can also use commands to provide helpful little builder functions, to further build out your world.

With scripting in Minecraft, you can implement your own custom commands. These commands have the full capability of scripting APIs and custom logic, allowing you to implement sophisticated operations.

You can view a sample project at [https://github.com/microsoft/minecraft-scripting-samples](https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands).

### Registering commands

The first step is to register the command. You can do this within the `startup` event of `system.beforeEvents`, like so:

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
| permissionLevel | Relative permission level of the command. |
| mandatoryParameters | A list of mandatory parameters for the command. These will come first in the list of parameters that a command may have. |
| optionalParameters | A list of optional parameters for the command. These will come second in the list of parameters. |

#### Permission Levels

Commands can require executing contexts and players to have specific permissions:

|Parameter |Description |
|:----------:|-----------|
| Any | Any player or environment can run this command. |
| GameDirectors | Requires a player with an "Operator Commands" permission to run this command. Also, scripting and command environments, like command blocks, can run this command. |
| Admin | Requires a player with "Operator Commands" permission. Commands with this level cannot be used in automations like commands or script. |
| Host | Only the originating game owner can run this command. |
| Owner | In dedicated server environments, this command can only be exited in the hosting environment at the dedicated server console. |

#### Command enums

You can register custom enums for script-based commands, like so:

```typescript
system.beforeEvents.startup.subscribe((init: StartupEvent) => {
  const commandRegistry = event.customCommandRegistry;

  commandRegistry.registerEnum("creator:my_enum", ["foo", "bar", "baz"]);

  const helloCommand: CustomCommand = {
    name: "creator:hellocustomcommand",
    description: "Example command",
    permissionLevel: CustomCommandPermissionLevel.Any,
    mandatoryParameters: [
      { 
        type: CustomCommandParamType.Enum, 
        name: "creator:my_enum" // The parameter name must match the registered enum name above
    }],
  };
  commandRegistry.registerCommand(helloCommand, helloCustomCommand);
}
```

### Execution

After registering your command, Minecraft will call into your function with the parameters that are specified by the command context.

| Parameter Type | Corresponding data variable type |
|:--------------:|----------------------------------|
| BlockType      | @minecraft/server.BlockType      |
| Boolean        | boolean                          |
| EntitySelector | Entity[]                         |
| Float          | number                           |
| Integer        | number                           |
| ItemType       | @minecraft/server.ItemType       |
| Position       | Vector3                          |
| PlayerSelector | Player[]                         |
| String         | string                           |

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

Custom script-based commands unlock a new organization tool for functionality you have in your creations. Whether a simple internal reset tool or a sophisticated game administration suite, we hope that providing a set of powerful commands is easy and second nature in your projects.
