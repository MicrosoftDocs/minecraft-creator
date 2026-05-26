---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Custom Mesh Tool
description: "An overview of the Custom Mesh Tool (Structure Import) in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 05/18/2026
---

# Custom Mesh Tool

The Custom Mesh tool lets you import 3D mesh files and voxelize them into Minecraft blocks. Use the Custom Mesh to import an STL file, preview the wireframe in your world, adjust the size and rotation, and place it as a block structure.

## Using the Custom Mesh tool

1. Select **Custom Mesh** from the tool rail on the left side of the Editor.

2. Click **Import** to open the file picker, then select the STL file you want to convert into a structure.
   > [!NOTE]
   > Only `.stl` files are supported. Files exceeding 50 MB or 200,000 triangles will be rejected.

3. A gold wireframe preview of the mesh appears in the world after the file finishes importing. You can view the  mesh name, triangle count, and file size from the tool pane.

4. Adjust the placement settings to suit your situation:
   - **Position**: Use the move gizmo in the viewport or enter coordinates directly to reposition the mesh.
   - **Size** (in blocks): Controls the number of blocks along the mesh's longest axis. The default is 20 blocks and the upper limit is 256 blocks.
   - **Roll X / Yaw Y / Pitch Z**: Rotate the mesh along each axis (±360°).

5. Select a block type from the **Block Picker** to fill the voxelized shape with.

6. Click **Place Blocks** to voxelize the mesh and place it in the world.
   > [!TIP]
   > The placement operation is undoable. Use **Ctrl+Z** to revert if the result isn't what you expected.

7. Click **Cancel** at any time to discard the current import and start over.
   > [!NOTE]
   > A progress dialog appears during placement. You can cancel the operation while it's in progress.

## Limits

| Limit                      | Value            |
| :------------------------- | :--------------- |
| Maximum file size          | 50 MB            |
| Maximum preview triangles  | 200,000          |
| Maximum blocks per axis    | 256              |
| Maximum total block volume | 4,000,000 blocks |
