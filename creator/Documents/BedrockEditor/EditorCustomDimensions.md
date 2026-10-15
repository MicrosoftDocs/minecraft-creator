---
author: brian-schwartz
ms.author: brisch
title: Minecraft Bedrock Editor Custom Dimensions
description: "An overview of the Custom Dimensions manager in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/04/2026
---

# Custom Dimensions

The Custom Dimensions manager lets you create and navigate between dimensions in your Editor project. In addition to the standard Minecraft dimensions (Overworld, Nether, and The End), you can use the Action Bar to create your own custom dimensions for building separate areas within a single project.

## Creating a new dimension

You can add a new dimension to your world with these steps:

1. Click **Add New Dimension** in the Custom Dimensions panel.

2. In the dialog that appears, enter a name in `namespace:name` format.

   > [!NOTE]
   > Dimension names must use lowercase letters, numbers, and underscores only. The `minecraft:` namespace is reserved and can't be used for custom dimensions. Duplicate names are not allowed.

3. Click **Confirm** to create the dimension. You'll automatically be teleported to the new dimension after creation.

   > [!WARNING]
   > You can't delete a dimension from your world once you add it.

4. Click a dimension in the panel list to teleport to it, or use **World** > **Dimensions** in the menu bar to teleport from anywhere.
   > [!NOTE]
   > Editor returns you to your last-known position in a dimension. On your first visit to a dimension, you arrive at its origin.
   > [!TIP]
   > The ***teleport to player*** feature in the navigation panel respects the target player's dimension, teleporting you across dimensions if needed.

## Viewing available dimensions

Once you've created your custom dimension(s), you can use the Editor to instantly teleport to and from the standard dimensions:

1. Open the Custom Dimensions panel from the Action Bar or select **World** > **Dimensions** > **Dimensions Panel**.

2. The panel lists all available dimensions in two groups:
   - **Standard Minecraft**: Overworld, Nether, and The End, each with a dimension-specific icon.
   - **Custom dimensions**: Grouped by namespace in collapsible sections.
   > [!TIP]
   > Custom dimensions also appear under **World** > **Dimensions**, grouped by namespace. A checkmark identifies your current dimension.

3. Click any dimension in the list to instantly teleport to it.

## Naming rules

| Rule | Detail |
| :----------------- | :-------------------------------------------- |
| Format | `namespace:name` (e.g., `mypack:sky_realm`) |
| Allowed characters | Lowercase letters (`a-z`), numbers (`0-9`), underscores (`_`) |
| Reserved namespace | `minecraft:` can't be used |
| Uniqueness | Each dimension name must be unique within the project |
