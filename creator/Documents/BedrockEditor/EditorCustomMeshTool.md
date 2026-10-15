---
author: brian-schwartz
ms.author: brisch
title: Minecraft Bedrock Editor Custom Mesh Tool
description: "An overview of the Custom Mesh Tool (Structure Import) in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/03/2026
---

# Custom Mesh Tool

The Custom Mesh tool lets you import 3D mesh files and voxelize them into Minecraft blocks. Use Custom Mesh to import an STL, glTF, or GLB file, preview the wireframe in your world, adjust its transform, and place it as a block structure. If the mesh contains vertex color data, you can map its predominant colors to different block types.

## Using the Custom Mesh tool

1. Select **Custom Mesh** from the tool rail on the left side of the Editor.

2. Click **Import** to open the file picker, then select the `.stl`, `.gltf`, or `.glb` file you want to convert into a structure.
   > [!NOTE]
   > Files exceeding 50 MB or 200,000 triangles will be rejected.

3. A gold wireframe preview of the mesh appears in the world after the file finishes importing. You can view the mesh name, triangle count, and file size from the tool pane.

4. Adjust the placement settings to suit your situation:
   - **Position**: Use the move gizmo in the viewport or enter coordinates directly to reposition the mesh.
   - **Scale By**: Choose whether the size is measured along the **Longest Axis**, **Width (X)**, **Height (Y)**, or **Depth (Z)**. Scaling remains uniform across all axes.
   - **Size** (in blocks): Controls the number of blocks along the selected **Scale By** axis. The default is 20 blocks on the longest axis, and the upper limit is 256 blocks on any axis.
   - **Roll X / Yaw Y / Pitch Z**: Rotate the mesh along each axis (±360°).

5. Select one block from the **Block Picker** or hotbar to fill the voxelized shape.

6. Optional: To use vertex colors from the imported mesh, expand **Color Block List**:
   1. Expand **Regenerate Color List** and choose the maximum number of colors to use. The range is 1–64, and the default is 16.
   1. Click **Generate Color List**.
   1. Select a generated color row to choose the block that should represent that color. You can remove rows to redistribute their colors among the remaining blocks.

   > [!NOTE]
   > Color Block List requires vertex color data. If the imported mesh has no source colors, the structure uses the single block selected from the Block Picker or hotbar.

7. Click **Place Blocks** to voxelize the mesh and place it in the world.
   > [!TIP]
   > The placement operation is undoable. Use **Ctrl+Z** to revert if the result isn't what you expected.

8. After placement finishes, the imported mesh remains loaded. Adjust the position or other settings and click **Place Blocks** again to place another copy.

Use **Change Mesh** to import a different file without leaving the tool. Click **Cancel** while no placement is running to clear the imported mesh. If you click **Cancel** in the placement progress dialog, only the current placement is canceled and the mesh remains loaded.

## Limits

| Limit                      | Value            |
| :------------------------- | :--------------- |
| Maximum file size          | 50 MB            |
| Maximum preview triangles  | 200,000          |
| Maximum blocks per axis    | 256              |
| Maximum total block volume | 4,000,000 blocks |
