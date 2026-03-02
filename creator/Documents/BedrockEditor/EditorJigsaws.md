---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Jigsaws
description: "An overview of Jigsaws in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 02/09/2026
---

# Jigsaws

[Jigsaws](../Structures/IntroductionToJigsawStructures.md) let you design modular, procedurally generated structures using template pools. Create collections of structure pieces, assign weights to control how frequently each piece appears, and generate assembled structures directly in your world.

> [!NOTE]
> This is the same system that Minecraft vanilla uses to generate villages, trial chambers, and other world structures.

## Generation settings

Configure these settings in the **Generate** section of the Jigsaws panel:

- **Generation Depth**: How many levels of recursion the jigsaw assembler uses. Range: **1–20** (default: **5**). Higher values produce more complex structures.

- **Horizontal Size**: The maximum horizontal extent (in blocks) for generation. Range: **16–1,024** (default: **164**).

- **Lock Seed**: When enabled, uses a consistent seed so the same inputs produce the same output.

- **Bypass Validation**: Skips name validation checks during generation. A warning prompt appears the first time you enable this.

- **Starting Pool**: Select which template pool the generator begins with.

- **Starting Target**: An optional target identifier for the jigsaw connector to match.

- **Generate Preview**: Click to assemble the jigsaw structure at the cursor location. The generation runs in a void world preview so you can inspect the result before committing.

## Using Jigsaws

### Managing collections

1. Open the Jigsaws panel from the action bar or from the **View** menu.

2. Use the **Jigsaw Collection** dropdown to select an existing collection, or click the **+** button to create a new one.
    > [!NOTE]
    > the Jigsaw Collection is a named container that holds one or more template pools. Collection names must be alphanumeric (letters, numbers, underscores only).

3. To delete a collection, click the trash icon next to the dropdown.

### Creating template pools

A template pool is a named set of one or more structure pieces with weighted probabilities. Pool names use namespace format (e.g., `mypack:village/houses`)and must be unique within a collection. Duplicate names will cause a validation error during generation. A pool element is a single structure piece within a template pool, consisting of a structure reference and a weight value.

1. Click **Add Pool** to create a new template pool. Enter a name in `namespace:name` format.

2. The pool appears in the collection tree. Expand it to see its structure pieces.

### Adding structure pieces

1. Click the **+** button on a template pool folder to add a new piece.

2. For each piece, select a **Structure** from the dropdown (populated from structures in your project) and set a **Weight** (1–20).
    > [!NOTE]
    > A piece's weight controls the likelihood that it's selected during generation (**range: 1–20**).

3. You can remove pieces using the trash icon on each entry.

### Exporting the jigsaw(s)

Click the **Export** button to export the jigsaw structures you create to your project's file system. The export location is displayed in the log by default.

## Keyboard shortcuts

For the full list of Editor shortcuts, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).
