---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Getting Started with Minecraft Bedrock Editor Extensions
description: "How to get started creating Editor Extensions"
ms.service: minecraft-bedrock-edition
ms.date: 09/08/2025
---

# Getting Started with Editor Extensions

Wondering where to get started with Editor Extensions? Well, that depends on what you already know. There are a lot of parts to it and the more you know about each part, the easier it will be. Let's assume...

>- You have Minecraft Bedrock running on a Windows PC.
>- You know what an Application Programming Interface (API) is.
>- You would like to change the functionality of one or more of the Editor tools or at least know more about how to do it.
>- You have worked with Resource Packs and Behavior Packs to change something in Minecraft. If not, you should start with [Getting Started with Minecraft Add-Ons](../GettingStarted.md).
>- You know how to use slash commands in Minecraft as shown in the [Commands Introduction](../CommandsIntroduction.md).
>- You have taken a look at [Minecraft scripting](../ScriptingGettingStarted.md) and set up your programming environment so you can try it.
>- You have used Editor to edit a world. If not, you should start with the [Editor Tutorial](EditorTutorial.md).


The Bedrock Editor is a framework built into certain platform versions of Minecraft: Bedrock Edition, designed to allow creators to use more complex tools than the ones found in simple gameplay to build, edit, and test worlds. In fact, the Editor framework even lets creators build their own tools to better suit your individual building style!

An Editor Extension is a catch-all for a set of Resource and Behavior Packs that contain script and binary assets that get loaded into Editor at start-up. Extensions are written in TypeScript and are compiled into JavaScript before loading into the game. The compiler tools and various libraries required to do this are supplied in the [Editor Extension Starter Kit](https://github.com/Mojang/minecraft-editor).

Minecraft has a [Scripting API](../ScriptingGettingStarted.md) that can be used to do some pretty amazing stuff. Editor has an API, too, and these two APIs are connected. Minecraft uses existing server-side scripting APIs (like SetBlock, Spawn, Camera, and slash commands) and enhances them with APIs specific to Editor. See [server-editor](../../ScriptAPI/minecraft/server-editor/minecraft-server-editor.md) for a full reference of Editor-specific APIs.

If you've never worked with APIs before, it's worth taking the time to learn about them. It involves scripting (writing small amounts of code), so if you're new to that, you can find some excellent free resources on the Web to learn JavaScript and TypeScript.

Then, you could go through the [Scripting tutorial](../ScriptingGettingStarted.md).

After you get all the prerequisites out of the way, you could take a look at some examples of Extensions&mdash;there is a [starter kit and GitHub repo](https://github.com/mojang/minecraft-editor).

Now you're ready to try one of the examples or get started building your own!
