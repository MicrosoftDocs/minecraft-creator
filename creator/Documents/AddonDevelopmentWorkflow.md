---
author: chipotle
ms.author: mikeam
title: Add-On Development Workflow
description: "A comprehensive guide to establishing an efficient add-on development workflow from concept to deployment."
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 12/18/2025
---

# Add-On Development Workflow

It's time to pull everything in your Learning Journey together, and create a workflow that helps you stay organized, catch errors early, and iterate efficiently. This guide is a high-level overview of the complete development cycle for Minecraft: Bedrock Edition add-ons.

## Prerequisites

Before starting, you should have completed, or at least be familiar witih the concepts from, the rest of the [Learning Journey](./LearningJourneyGuide.md). You should understand the basics of creating Behavior and Resource Packs, understand Minecraft's JSON syntax, and have tools like Visual Studio Code and Blockbench installed. It'll also be useful to have basic knowledge of a version control system like [Git](https://github.com/git-guides).

## Step 1: Plan your project

Before writing any code, have an idea of what your add-on's going to do.

- What are the core features, the "must-haves"?
- What are the nice-to-have features?
- Who's the target audience: casual players, hardcore players, or other creators?
- Which platforms do you plan to support?

If you start your work with [Minecraft Creator Tools](https://mctools.dev), it will set up the folder and file structure that your project needs for you. We _strongly_ suggest doing it that way! If you're doing it manually, here's a refresher on the organization you need:

```text
my_addon/
├── behavior_pack/
│   ├── manifest.json
│   ├── pack_icon.png
│   ├── blocks/
│   ├── entities/
│   ├── items/
│   ├── recipes/
│   ├── scripts/
│   │   └── main.js
│   ├── spawn_rules/
│   ├── structures/
│   └── texts/
│       └── en_US.lang
├── resource_pack/
│   ├── manifest.json
│   ├── pack_icon.png
│   ├── animations/
│   ├── animation_controllers/
│   ├── entity/
│   ├── models/
│   │   ├── blocks/
│   │   └── entity/
│   ├── render_controllers/
│   ├── textures/
│   │   ├── blocks/
│   │   ├── entity/
│   │   └── items/
│   └── texts/
│       └── en_US.lang
├── README.md
└── CHANGELOG.md
```

## Step 2: Set up your development environment

While you can use any code editor, Visual Studio Code has [Minecraft-specific extensions](./scripting/developer-tools.md) that make it especially useful for Bedrock development. A few essential (or at least useful) extensions:

- Blockception's Minecraft Bedrock Development, which provides validations, completions, code actions, and more for Minecraft JSON and Molang.
- Mojang's Minecraft Bedrock Debugger, which integrates Minecraft with VS Code's debugging capabilities.
- Prettier, a code formatter which works with JSON, TypeScript, and more. (Not Minecraft-specific, but nice to have!)

In addition, these other tools can be extremely hepful:

- [Blockbench](./Blockbench.md), a free model editor
- [Snowstorm](./SnowstormOverview.md), a free particle editor
- [Minecraft Creator Tools](./MCToolsOverview.md) (MCTools), a toolset that helps you create Minecraft projects

> [!NOTE]
> Make sure you install the Node tools for developing your add-on! If you've used MCTools to start your project, you can just type `npm i` to install them; otherwise, you'll need to explicitly install packages like `@minecraft/server` and, as a development dependency, `@minecraft/core-build-tasks`.

## Step 3: Build it (and test it)

Now, you should be all set! As you're creating your add-on, follow a build-test-iterate cycle:

1. Plan the feature you're adding.
2. Write the JSON, Molang, and/or TypeScript you need.
3. Test it by loading it into Minecraft.
4. Debug any issues that come up, and repeat step 3.
5. Commit your work to version control as you go, if you're using it.

### Initialize your project

This is best done with MCTools, either on the web or on the command line (with `mct create` after MCTools is installed globally). Once your directory is set up, install the required Node tools and libraries:

```powershell
npm i
```

Make sure the **.env** file in your new project is set up correctly, with `PROJECT_NAME` specifying the folder name for the assets when they're deployed to Minecraft's actual game directories, and `MINECRAFT_PRODUCT` specifying either `BedrockGDK` or `PreviewGDK` for standard install locations. You can also specify a custom deployment path for a Minecraft installation that's installed somewhere non-standard.

```ini
PROJECT_NAME="my_addon"
MINECRAFT_PRODUCT="BedrockGDK"
CUSTOM_DEPLOYMENT_PATH=""
```

### Create a test world

When you create a test world, you should use the following settings:

- Enable cheats
- Use Creative Mode
- Set the difficulty to "Peaceful"

You may also want to use a flat world, or disable the day/night cycle, depending on the kind of add-on you're creating.

### Locally deploying for testing

As you work on your add-on, you're going to need to test it in Minecraft. The easiest way to do that is to use the `local-deploy` script, which you call from the shell with `npx`:

```powershell
npx just-scripts local-deploy
```

This compiles TypeScript into JavaScript and copies all the necessary files from your development directory into the game directory for your local Minecraft installation, using the location and name you defined in the **.env** file in the previous step. You can use the `--watch` flag to keep the deployment script running, watching for any changes you make to your TypeScript files:

```powershell
npx just-scripts local-deploy --watch
```

That way, you won't need to re-run the script every time you make a change. (Note that you'll have to use the `/reload` command in Minecraft for it to pick up the change, and as described below, not all changes can be reloaded without stopping and starting the world.)

> [!NOTE]
> You can avoid having to run the local deployment scripts by using symbolic links: you create a link from the `development_behavior_packs` and/or `development_resource_packs` folder in your Minecraft installation to the corresponding folders in your development directory. Explaining symbolic links is beyond the scope of this tutorial, but if you're comfortable using them, it's an alternative for advanced users.

### Hot reloading

You don't necessarily have to stop and restart Minecraft every time you make a change in your add-on. Some kinds of content support "hot reloading," which lets you use the `/reload` command within the game to reload them. For content types below that support (or partially support) hot reloading, use `/reload` when you make changes; for other kinds of content, like textures and models, you'll need to exit your world completely and restart it to see changes.

| Content Type       | Hot Reload |
|--------------------|------------|
| Block definitions  | Partial    |
| Entity definitions | Partial    |
| Item definitions   | Partial    |
| Scripts            | Yes        |
| Textures           | No         |
| Models             | No         |
| Sounds             | No         |

### Testing strategies

Here's some basics you should consider for testing:

- Use all the appropriate validators Visual Studio Code gives you: the TypeScript Language Server, Prettier, and so on. They'll really help knock out some errors before they ever even get into the game. Using TypeScript instead of JavaScript can also help by giving you strong type checking.
- Check that all your assets are appearing in the game, and the pack loads without content log errors.
- Verify translations, if you have them.
- Make a checklist of each feature and have a plan to test them: entity AI, item/block interactions, crafting, and so on.
- Test in multiplayer scenarios.
- Test with other add-ons enabled.
- Test with "real world" game settings (survival mode, higher difficulty levels, and so on).

### Troubleshooting

There's a full guide to [Troubleshooting Add-Ons](./TroubleshootingAddons.md) that covers common scenarios from JSON formatting to entities falling through the ground.

## Step 4 (optional): Use version control

Version control systems like Git let you save "checkpoints" for changes to your project. You can test new features and check them in if they work, revert the changes if they don't, and keep a history of all your changes. Using a service like GitHub also gives you stable off-site backup of your code. And, if you're collaborating with other creators, a version control system is essential, since it lets you work without danger of overwriting one another's work.

Teaching you all the ins and outs of Git is beyond this article, but here's the basic concept:

- You **initialize** Git inside your project folder to create a "repository."
- When you make changes, you **commit** them to your Git repository to store them. Any individual commit you create can be examined or restored.
- You **push** your commits to a remote server such as GitHub both for backing up and collaborating.
- When you're working on separate lines of development&mdash;say, a new experimental feature you want to keep separate from the main code until it's ready&mdash;you create a **branch** for that work.
- When branches are finished, you **merge** them back into the main branch.

Git's standard interface is a command line tool, `git`:

```powershell
# Initialize Git in your project
git init

# Add files and commit
git add .
git commit -m "Add custom knight entity"

# Create a branch for new features
git checkout -b feature/custom-blocks

# When done, merge back to main
git checkout main
git merge feature/custom-blocks
```

 You don't have to be a command line jockey, though. Visual Studio Code has powerful Git integration that lets you  use most of those features right in the editor, and there's also a GitHub desktop app that makes working with it exceptionally easy.
  
Here our are recommendations for working with Git:

- **Commit often:** Small, focused commits are easier to understand and revert
- **Write clear commit messages:** "Add knight AI pathfinding" is better than "fixed stuff"
- **Use branches:** Keep experimental work separate from stable code
- **Push regularly:** Back up your work to a remote repository

## Step 5: Release

You can use `just-scripts` commands to package your addon for distribution in the marketplace. The `mcaddon` command builds, bundles, and packages up your scripts and assets into a single **.mcaddon** file:

```powershell
npx just-scripts mcaddon
```

> [!TIP]
> For more details about everything you can do with `just-scripts`, read the [Open Source Scripting Libraries](./scripting/libraries.md) article.

After you make your package, make sure you've tested it!

As you make releases of your add-on, you should consider using semantic versioning:

- **MAJOR.MINOR.PATCH** (e.g., 1.2.3)
- **MAJOR** - Breaking changes, major new features
- **MINOR** - New features, backward compatible
- **PATCH** - Bug fixes only

The version number needs to be updated in your **manifest.json** file, and in any build scripts, change logs, and documentation that might refer to it. It's especially important to document any breaking changes&mdash;for instance, if previous worlds built using the add-on won't be compatible with the new release&mdash;and to provide guidance for users on how to upgrade between versions.
