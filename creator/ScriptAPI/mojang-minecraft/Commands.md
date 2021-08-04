---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Commands Class
description: Contents of the mojang-minecraft.Commands class.
---
# Commands Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


Contains a method that lets you run console commands within Minecraft.


## Methods
- [run](#run)
  
### **run**
`
run(commandString: string, dimension: Dimension): any
`

Runs a particular command from the context of the server.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **commandString** | *string* | n/a | Command to run. Note that command strings should not start with slash. |
| **dimension** | [*Dimension*](Dimension.md) | n/a | Dimension to be used as context for the command to run within. |

Returns *any* - For commands that return data, returns a JSON structure with command response values.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***commands.js***
```javascript
Commands.run("say You got a new high score!", World.getDimension("overworld"));
Commands.run("scoreboard players set @p score 10", World.getDimension("overworld"));

```

