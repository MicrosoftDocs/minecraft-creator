---
author: mikeam
ms.author: mikeam
title: Use Visual Studio Code tools to write script
ms.prod: gaming
description: Use tools for enhanced editing, debugging and profiling of GameTest scripts within Visual Studio Code
---

# Use Visual Studio Code tools to write script

Two new tools can make the process of writing your GameTest scripts easier and more fun within Visual Studio Code. In this article, we'll discuss how you can install custom type definitions for Minecraft to provide autocomplete as you work, the Minecraft Script Debugger, and the Minecraft Script Profiler.

## Custom type definition files for Visual Studio Code Intellisense

Visual Studio Code can display detailed type information for different libraries to provide hints and code-completion dropdowns as you type. Type information has been made available for GameTest modules `mojang-minecraft` and `mojang-gametest`.

To get started, use the Node Package Manager, or npm. npm makes it easy to download and install different modules of code within your packages. Install Node.js – which includes npm - on your development device. More info on installing npm is available from [nodejs.org](https://nodejs.org). Install the latest LTS version of Node.js to get started.

Once Node.js is installed, getting the latest type definitions is a snap. From Visual Studio Code, open the folder where your behavior pack folder is located and simply run the following commands from a terminal console window:

```powershell
npm i @types/mojang-minecraft
npm i @types/mojang-gametest
```

This will install type definitions in the node_modules folder within your project.

To edit with new code hinting, just open up Visual Studio Code. As you write JavaScript, you should see autocomplete:

![Method autocomplete in Visual Studio Code](Media/ScriptDeveloperTools/autocomplete.png)

and inline reference documentation for types:

![Inline reference documentation in Visual Studio Code](Media/ScriptDeveloperTools/inlinedocumentation.png)

>[!Note]
>We are updating these type definitions to match the latest beta APIs, so be sure to check npm often to see if there are updated type definitions.

## Get insight into your code with Minecraft script debugging

As you build more of a codebase in script, you’ll want to inspect your code at various points to see the state of variables and test your algorithms. In many starter projects, people start by using commands like Console.log or Chat to print various variables as they go – informally, this is called "print debugging". But for developers, there is a better way! With scripting within GameTest in Minecraft Bedrock Edition, you can use script debugging capabilities that make inspecting data in Minecraft script a snap.

To get started, you’ll want to use Visual Studio Code as your editor for the JavaScript files you’ve been developing. Steps from there include:

1. Install the Minecraft Bedrock Edition Debugger within Visual Studio Code – you’ll need to do this once
1. Open Visual Studio Code within your development_behavior_packs folder
1. Depending on your testing client - either in Bedrock Dedicated Server or within Minecraft Bedrock clients -- connect Minecraft Bedrock Edition and Visual Studio Code
1. Set break points and add watch variables in your code as you go, and then connect Minecraft to Visual Studio Code

>[!IMPORTANT]
>The Minecraft debugger and GameTest Framework experiment are optimized to work with the latest Beta versions of Minecraft. See [Minecraft Betas](https://aka.ms/mcbeta) for more information.

### Debugging with Minecraft Bedrock Edition

#### Step 1: Install the Minecraft Bedrock Edition Debugger within Visual Studio Code

To use debugger capabilities, you’ll want to install the Minecraft Bedrock Edition Debugger within Visual Studio Code. To do this, please click on the button below to download the **Minecraft Bedrock Edition Debugger** from Visual Studio Code's marketplace.

> [!div class="nextstepaction"]
> [Minecraft Bedrock Edition Debugger](https://aka.ms/vscodescriptdebugger)

#### Step 2: Ensure that the Minecraft Bedrock Edition client can make "loopback" requests

If you want to connect Minecraft Bedrock Edition client to Visual Studio Code running on the same machine (this is the most common scenario), you will need to exempt the Minecraft client from UWP loopback restrictions. To do this, run the following from a command prompt or the Start | Run app.

```powershell
CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436
```

![checknetisolation command being run](Media/ScriptDeveloperTools/commandprompt.png)

#### Step 3: Open Visual Studio Code within your development_behavior_packs folder

In order for the debugger to know where to find your source JavaScript files, you’ll need to specifically open up a window of Visual Studio Code relative to the behavior pack where your JavaScript source files are.

While you’re building out gametests, you will most likely deploy them to Minecraft’s development_behavior_packs folder. This is located within `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\development_behavior_packs`. Select the behavior pack you’d like to debug, and open up a Visual Studio Code window pointed at that folder.

#### Step 4: Prepare Visual Studio Code for a connection

To debug with Minecraft Bedrock Edition, you’ll need to connect from Minecraft and into Visual Studio Code. This sample assumes you are debugging on the same Windows 10 machine, but you can also debug across machines and across clients if you want to. If you are debugging across devices, you may need to open up a port within your firewall on the machine that you are running Visual Studio Code within.

To configure the connection, add a `.vscode` subfolder to your behavior pack folder.  Within that `.vscode` folder, add the following launch.json configuration file:

(NOTE: you do not need to edit any lines of this file.)

```json
{
  "version": "0.3.0",
  "configurations": [
    {
      "type": "minecraft-js",
      "request": "attach",
      "name": "Wait for Minecraft Debug Connections",
      "mode": "listen",
      "localRoot": "${workspaceFolder}/",
      "port": 19144
    }
  ]
}
```

![Visual Studio Code with launch.json](Media/ScriptDeveloperTools/launchjson.png)

#### Step 5. Run your Minecraft Behavior Pack

Now that you’ve prepared Visual Studio Code and prepared your Behavior Pack, you’re ready to start debugging!

First, click **Start Debugging** inside of Visual Studio Code. This will put Visual Studio Code into *listen for a debugging connection* mode.

Start Minecraft and load into a world with your scripting behavior pack. You may want to set a break point inside of your GameTest function. To do this, click to the left of the specific lines of code where you want to set your break point.

![Breakpoints set within Visual Studio Code](Media/ScriptDeveloperTools/listenandbreakpoints.png)

Use this slash command to connect to Visual Studio Code on a port.

`/script debugger connect localhost 19144`

You should see connection success response from slash command.

Now, trigger the code (likely by running a test, for example `/gametest run (my test name)`)

You should see your breakpoints get hit. You can also view local variables and add watches as necessary.

![Breakpoints and local variables in Visual Studio Code](Media/ScriptDeveloperTools/breakpointhit.png)

### Debugging with Minecraft Bedrock Dedicated Server

The procedure for debugging with Bedrock Dedicated Server is a little different. When debugging with Bedrock Dedicated Server, Bedrock Dedicated Server will listen for debug connections initiated from Visual Studio Code. You’ll want to start by installing the Minecraft Bedrock Edition Debugger for Visual Studio Code as described above.

#### Configure your Bedrock Dedicated Server

By default, Bedrock Dedicated Servers are not configured to allow debug connections. To enable this debugging, you'll need to change some settings within the `server.properties` file of your Bedrock Dedicated Server.

These settings configure debugging on Bedrock Dedicated Server:

- `allow-outbound-script-debugging` (true/false): enables the /script debugger connect command. Defaults to false.
- `allow-inbound-script-debugging` (true false): enables the /script debugger listen command (and the opening of ports on a server).  Defaults to false.
- `force-inbound-debug-port` (number): Locks the inbound debug port to a particular port. This will set the default script debugging port and prevent a user of the /script debugger listen command from specifying an alternate port.

For this project, we can simply set allow-inbound-script-debugging to true.

![Editing server.properties for Bedrock Dedicated Server](Media/ScriptDeveloperTools/serverproperties.png)

#### Prepare your Behavior Pack Project

Your Visual Studio Code instance should be pointing at the root of your Behavior Pack within the development_behavior_packs folder of the Minecraft instance (so you should open Visual Studio code at `(my Bedrock Dedicated Server installation)\development_behavior_packs\(behaviorpackname)`)

At the root of the behavior pack you want to debug, add a `.vscode` subfolder. Add the following launch.json file into that `.vscode` folder:
(NOTE: you do not need to edit any lines of this file.)

```json
{
  "version": "0.3.0",
  "configurations": [
    {
      "type": "minecraft-js",
      "request": "attach",
      "name": "Attach to Minecraft Bedrock Dedicated Server",
      "localRoot": "${workspaceFolder}/",
      "port": 19144
    }
  ]
}
```

#### Run your Minecraft Behavior Pack

Now that you’ve prepared Visual Studio Code and prepared your behavior pack, you’re ready to start debugging!

Start Minecraft and load into a world with your scripting behavior pack.

Within Bedrock Dedicated Server's console, use this slash command to start listening on a port:

`script debugger listen 19144`

You should see a "Debugger listening" response from this command.

![Server debugger listening to a port](Media/ScriptDeveloperTools/serverdebuggerlistening.png)

Now, hit "Start Debugging" inside of Visual Studio Code.

You can run commands in Bedrock Dedicated Server to initiate tests, such as `/gametest run (my test name)`.

You can set breakpoints in your code by clicking on the left-hand side of the editor, on specific lines of code. As you run the tests in the behavior pack, your breakpoints should be hit. You can also view local variables and add watches as necessary.

### Using sourcemap files in conjunction with the Minecraft debugger

In many cases, you may use a language with more features that "compiles to" JavaScript. One popular example is TypeScript, which adds many helpful developer features on top of JavaScript. Using a language like TypeScript typically require build tools or a build process that compiles your TypeScript into the JavaScript that Minecraft can run. You can find out more about using TypeScript and setting up a build process through [this tutorial article](ScriptingGettingStarted.md). 

To make the debugger function appropriately in conjunction with languages like TypeScript, you will need to let the debugger know where to find (a) your original TypeScript files, (b) your JavaScript files that are built from TypeScript, and (c) source map (typically .map) files that provide information for the debugger on how to connect between (a) and (b).

So, when you use the debugger in combination with a compiled language like TypeScript, you will need to adjust the configuration of `launch.json` in your `.vscode` folder to provide that additional information. Specifically, you will need two additional paths, in addition to configuring `localRoot`: 

 * `localRoot` should point at the folder location of your core TypeScript (or other higher-level) language files
 * A `generatedSourceRoot` attribute should be added which points at the folder location of your generated JavaScript files. This may be something like a build folder within your project.
 * An additional `sourceMapRoot` attribute is needed to specify to the debugger where it can find your generated source map files. In some cases, source map files may be generated alongside your JavaScript source, so your `sourceMapRoot` may be the same as `generatedSourceRoot`. 

Note that there may be additional configuration required in your build tools - for example, `gulp` or the TypeScript compiler `tsc` - to ensure that it generates source maps properly. If you are having problems getting the debugger to recognize breakpoints in your files, ensure that your built JavaScript files have a working reference to their corresponding source map file (typically listed at the bottom of a JS file in a JavaScript comment). Also, ensure that your source map file has a working reference to its corresponding source file (e.g., a TS file).


### Using the Minecraft Scripting Profiler

A profiler is a set of monitoring code that measures the amount of time spent running various functions. With it, you can identify where most of your time is spent within your GameTest scripts. This may then lead you to discovering unexpected function calling patterns that may consume a lot of time.

#### Run the profiler during a typical session for your script

To get started, ensure you have a world with the GameTest Framework experiment enabled, and a behavior pack with JavaScript within it. Your first step is to create a profile session, or in other words, log the performance characteristics of your script as you play through the game.

To run the script profiler and start a new profile session, run the following command:

``` 
/script profiler start
```

Then, exercise your code by running through and playing Minecraft. You’ll want to go through normal gameplay or testing patterns to have your GameTest code exercised in representative ways of how players might encounter your experience.

After a while – many minutes, perhaps, end your profiler session by running the following command:

```
/script profiler stop
```

This will create a .cpuprofile with a timestamp within your Minecraft log folder.

![Results after saving a new profile](Media/ScriptDeveloperTools/profilerstop.png)


If you are using the retail version of Minecraft, the log folder is located at:

`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs\`

If you are using Minecraft Preview, that log folder is located at:

`%localappdata%\Packages\Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe\LocalState\logs`

To view a CPUProfile, simply open it within Visual Studio Code. The first time you open a CPUProfile file, your operating system will ask you how you wish to open the file. Select Open in [Visual Studio Code](https://code.visualstudio.com):

![Open CPU profile files in Visual Studio Code](Media/ScriptDeveloperTools/profileropeninvsc.png)

(Note that if you wish to have source links from the profile resolve to your source files correctly, start Visual Studio Code (or set its working directory) within the root of your behavior pack.)

By default, this will give you a simple visual listing of the functions that were called during your CPU Profile session, and the cumulative time that they have taken:

![Profiler results](Media/ScriptDeveloperTools/profilerresults.png)

As a developer, you can start to optimize your code to adjust for performance - in this case, perhaps organizing code to share instances of a dimension object rather than repeatedly calling world.getDimension.

Note that within Visual Studio Code, you can install an optional "Flame Chart" plugin by clicking the little flame icon in the upper right of your screen (circled in red, below):

![Profiler showing flame icon in upper right hand corner](Media/ScriptDeveloperTools/profilerflame.png)

Note: In versions 1.19.10 and beyond, the script profiler has been expanded to support coverage of core Bedrock API calls in addition to overall function calls.

With this profiler capability, you can quickly identify hotspots and where server time is spent, and spend your time optimizing your code where it matters.

### Summary

That's it! Between updated code helpers as you add lines of JavaScript, debugger capabilities within Visual Studio Code, and profiler support we hope you'll be able to write more extensive tests and script much more quickly.
