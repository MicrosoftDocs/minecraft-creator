---
author: mikeam
ms.author: mikeam
title: Scripting Bedrock Dedicated Server
description: "Use TypeScript to customize and configure your dedicated server experience."
ms.service: minecraft-bedrock-edition
ms.date: 06/04/2025
---

# Scripting Bedrock Dedicated Server

Bedrock Dedicated Server supports JavaScript APIs, including several additional, more powerful experimental APIs. These let you build deeply customized gameplay experiences by connecting your server to external services. For example, you could use this functionality to connect your server to back-end infrastructure that powers a website-based leaderboard. Or you can build an advanced administrative console to give server administrators to more flexibility when managing players in a game.

## Before you begin

* You should have installed, tested, and configured Bedrock Dedicated Server, and be familiar with its general operation. If you haven't read the [Dedicated Server Getting Started Guide](./getting-started.md), now's the time.
* You should be familiar with the [basics of scripting](../scripting/introduction.md) and, ideally, [scripting with TypeScript](../scripting/next-steps.md), since a lot of the same concepts apply.

> [!IMPORTANT]
> The additional APIs discussed here are **experimental** as part of the Beta APIs program. As with all experiments, you may see changes or even removal of functionality in updated Minecraft versions. Check the [the Minecraft changelog](https://aka.ms/mcchanges) for details on any changes to Beta APIs. Make sure you back up your worlds and files before you start modifying them.
>
> This article only applies to Bedrock Dedicated Server. You cannot use these experimental script APIs on gameplay servers provided as part of Minecraft Realms.

## Enabling scripting

By default, most server configuration is stored within the **server.properties** file in the root of your Minecraft Bedrock Dedicated Server folder. Properties that can be set include default permissions for players joining the server, server ports, and much more. Consult the [reference guide](./server-properties.md) for a complete list of properties. You can open **server.properties** with your favorite text editor, like Notepad, or Visual Studio Code.

Scripting configuration files are stored in the **config** folder of Bedrock Dedicated Server. This folder is created the first time the server is run. In that folder is a subfolder named **default**, which controls default settings for all script modules. The server will create a **permissions.json** file within that folder, which lists the default set of Mojang scripting modules accessible to worlds with the Beta APIs experiment enabled.

The default contents of **config/default/permissions.json** are:

```json
{
  "allowed_modules": [
    "@minecraft/server-gametest",
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-editor"
  ]
}
```

You can find more information about scripting modules in the [Script API Reference Documentation](../../ScriptAPI/index.yml) section.

## Enable differentiated module permissions

You can set different permissions for different references to scripts that are embedded as modules within behavior packs.

* Create a subfolder within **config**, at the same level as **default**, and name it the same as the module identifier (UUID) of the scripting module. For example, you would create a folder named **a8d43bd0-cffd-4988-949a-5105e14bb5f2** for a scripting module that had the following excerpt in its behavior pack's **manifest.json** file:

``` JSON
  "modules": [
    {
      "description": "Script resources",
      "language": "javascript",
      "type": "script",
      "uuid": "a8d43bd0-cffd-4988-949a-5105e14bb5f2",
      "version": [0, 0, 1],
      "entry": "scripts/main.js"
    }
  ],
```

* Next, to customize the set of built in modules your behavior pack's script module can access, you can place a "permissions.json" file within that folder. (Yes, the UUID folder name is a bit clunky, but we hope to improve this in a future update.) We strongly recommend keeping **config/default/permissions.json** basic and minimal, while extending additional module permissions on an individual basis.

![Extending permissions by adding @minecraft/minecraft-server-net](../Media/ScriptingServers/permissions2.png)

## Variables and secrets

You can give your server administrators some control over your custom script's configuration without requiring them to hand-edit your JSON files by declaring **variables** in a configuration file. The value of variables can be changed by your administrators when they're connected.

For example, maybe your script has alternate levels of difficulty by controlling mob spawn rate. To let administrators configure that, put a **variables.json** file in one of the configuration folders, either **default** or one of the module folders with the UUID names. This file contains the configurable variable name and its default value. For example:

```json
{
  "mobSpawnRate": 22
}
```

Within your script, use the `variables.get()` method to retrieve that property using the [@minecraft/server-admin](../../ScriptAPI/minecraft/server-admin/minecraft-server-admin.md) module:

```javascript
const spawnRate = variables.get("mobSpawnRate");
```

There is a similar system for storing "secrets": sensitive data that you want to ensure can be used only in very constrained ways. For example, secrets could be data like authentication tokens that you wish to pass to a web service. Secrets are stored in the **secrets.json** file, which can be placed in **config/default** or a module configuration folder.

Unlike variables, secrets can only be read in certain contexts&mdash;they're not made available to the scripting environment everywhere. In certain objects, like `HttpHeader` in the `@minecraft/server-net` module, secret values are resolved at runtime, and you can use the `secrets.get()` method. For more details and an example, read the [ServerSecrets documentation](../../ScriptAPI/minecraft/server-admin/ServerSecrets.md).

## Working with your server

Your next step will probably be building an automated process to easily apply your JavaScript updates&mdash;and more easily debug them&mdash;while you work. You'll also want to make it easier to apply your world customizations to Dedicated Server. Your own process will reflect your preferences and what you're comfortable with, but we have an example ready to give you some ideas.

Work through the [Scripting with TypeScript](../scripting/next-steps.md) article. This shows you how to get started with client-side development using TypeScript and the `just-scripts` build tool. It's worthwhile to do the entire example using the Minecraft app to get started.

## Wrapping up

Now you have all the ingredients you need to build powerful dedicated servers that can connect to external web services to give you:

* scripting via the GameTest Framework experiment
* connections to external web services via the `@minecraft/server-net` module
* configurations for your dedicated server to enable additional permissions and server configuration variables
* build processes for making working with your dedicated server a snap

Because these features are experimental, check [the changelog](https://aka.ms/mcchanges) for upcoming changes that may impact you. We'd also love to know if you have feedback or suggestions&mdash;please log them [via our documentation issues](https://github.com/MicrosoftDocs/minecraft-creator/issues).
