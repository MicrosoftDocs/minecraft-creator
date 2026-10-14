---
author: alexdenfordskyboxlabs
ms.author: jashir
title: Common Scripting Errors in Minecraft
description: "Documentation of common errors encountered within scripts in Minecraft: Bedrock Edition, including their causes and how to resolve them."
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/09/2026
---

# Common Scripting Errors in Minecraft

Scripting errors are a normal part of developing and testing Minecraft: Bedrock Edition content. Learning how to read an error message and its supporting details can help you identify the source of a problem and resolve it more quickly.

## Overview

An error occurs when Minecraft cannot load, interpret, or run your script as expected. Errors can occur while a script is loading, when an event callback runs, when a script calls the Script API, or when project configuration does not match the code. Common causes include invalid values, missing objects, incorrect API versions, manifest or build configuration issues, and assumptions about the state of the world or its entities.

The examples in this article describe common scripting error scenarios and provide starting points for troubleshooting them. When an error occurs, read the complete message and stack trace, note the file and line number, and check the surrounding code and recent changes. The Minecraft content log and the Visual Studio Code debugger can provide additional information when the error is difficult to reproduce or understand.

If you need help with an issue, you can ask questions in unofficial Minecraft creator Discord channels or on community pages. These resources can provide ideas from other creators, but always verify suggested solutions against the current Script API documentation and your target Minecraft version.

We always welcome feedback about errors that are missing from this article, unclear explanations, and issues with the documented solutions. Reporting problems and suggestions helps us improve the information available to creators and makes it easier to identify and resolve scripting issues.

The best place to post feedback or issues is on [Jira](https://bugs.mojang.com/).

## Sections
- [Common scripting errors](#common-scripting-errors)
  - [Error: "Script threw an exception"](#error-script-threw-an-exception)
  - [Error: "Module not found"](#error-module-not-found)
  - [Error: "Read-only property"](#error-read-only-property)
  - [Error: Debugger won't connect](#error-debugger-wont-connect)
  - [Error: Breakpoints not triggering](#error-breakpoints-not-triggering)
  - [Error: Profiler not generating output](#error-profiler-not-generating-output)
  - [Error: Console messages not generating output](#error-console-messages-not-generating-output)
  - [Error: Type definitions not working](#error-type-definitions-not-working)
  - [Error: Script changes not taking effect](#error-script-changes-not-taking-effect)
- [Related resources](#related-resources)

## Common scripting errors

### Error: "Script threw an exception"

This generic error means your script encountered a runtime error. Look at the accompanying stack trace:

```text
[Scripting][Error]-Script threw an exception: TypeError: Cannot read property 'x' of undefined
    at checkPlayerLocation (scripts/main.js:45)
    at mainTick (scripts/main.js:23)
```

This is often caused by accessing properties on `undefined` values, calling methods on objects that don't exist, or an out-of-bounds array index. Add checks for this in your code.

```javascript
// ❌ Problem
const x = player.location.x;

// ✅ Solution
const location = player?.location;
if (location) {
  const x = location.x;
}
```

### Error: "Module not found"

Verify your **manifest.json** file includes the correct dependency and version:

```json
{
  "dependencies": [
    {
      "module_name": "@minecraft/server",
      "version": "1.17.0"
    }
  ]
}
```

### Error: "Read-only property"

Some properties in the Script API are read-only:

```javascript
// ❌ Problem
player.location.x = 100; // Error: location is read-only

// ✅ Solution
player.teleport({ x: 100, y: player.location.y, z: player.location.z });
```

### Error: Debugger won't connect

If running `/script debugger connect` gives "Failed to connect" or times out, check the following:

1. Verify VS Code is in "listening" mode (you should see "Waiting for debugger to connect..." in the Debug Console)
2. Check that port 19144 isn't blocked by firewall or antivirus software.
3. Verify **launch.json** has the correct port number.
4. Try restarting both Minecraft and VS Code.

### Error: Breakpoints not triggering

If you've set breakpoints but they don't seem to be doing anything, check the following:

1. If you're using TypeScript, verify `sourceMapRoot` and `generatedSourceRoot` paths in **launch.json** are correct.
2. Ensure you're setting breakpoints in the source file, not the compiled output.
3. Add a `console.warn()` debugging statement to verify the code path is actually being run.
4. If you have multiple behavior packs with scripts, specify a `targetModuleUuid` in **launch.json**.
5. **Reload needed**: Run `/reload` after connecting the debugger if scripts were already running

### Error: Profiler not generating output

If `/script profiler stop` doesn't create a **.cpuprofile** file, check the following:

1. Ensure you have write permissions to the logs folder (on an operating system user level).
2. Wait a few seconds after stopping before looking for the file.
3. Check both the logs folder and the root of your Minecraft data folder.
4. Verify there's a script actually running (profiles are empty without script activity).

### Error: Console messages not generating output

If your `console.warn()` calls aren't showing up anywhere, try the following:

1. Enable **Content Log File** in Settings > Creator.
2. Enable **Content Log GUI** to see messages in-game.
3. Check the log file in the logs folder (not just **content_log.txt**).
4. Ensure your script is actually loading (check for errors at the top of the log).

### Error: Type definitions not working

If Visual Studio Code doesn't show autocomplete for Minecraft APIs, make sure that `@minecraft/server` is installed in your project's **node_modules** directory. If it isn't, run `npm_install` in your project folder, and restart Code's TypeScript server. If there are still problems, check that `@minecraft/server` is listed as a package dependency.

### Error: Script changes not taking effect

If it doesn't look like your script changes are being reflected in the world, check the following:

1. Run `/reload` to reload scripts without leaving the world.
2. Exit and re-enter the world for manifest changes.
3. Completely close and restart Minecraft.
4. Verify your changes were saved as expected (in your chosen text editor).
5. If you are using Typescript:
  - Verify your build process completed successfully (check for TypeScript errors or other potential deployment issues).
  - Clear **development\_behavior\_packs** and redeploy using your build process.



## Related resources

- [Developer Tools for Minecraft](./developer-tools.md)
- [Debugging Scripts in Minecraft](./debugging-scripts.md)
