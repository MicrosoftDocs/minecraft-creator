---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Camera Tool
description: "An overview of the Camera Tool (Cinematic Tool) in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 02/09/2026
---

# Camera Tool

The Camera Tool (also known as the Cinematic Tool) lets you create camera path animations by placing control points in your world. Build smooth cinematic sequences using spline-based camera paths, preview them in real time, and export the resulting animation code for use in your projects.

## Tool configuration

### Spline type

Choose the interpolation method for the camera path:

- **Catmull-Rom**: Produces smooth curves through the control points. Requires a minimum of **4** control points.

- **Linear**: Connects control points with straight-line segments. Requires a minimum of **3** control points.

### Total duration

Sets the total animation time in seconds (**range: 1–300s; default: 10s**). Changing this value redistributes the time values across all control points evenly.

## Control points

Each control point defines a camera position, orientation, and timing along the path:

- **Name**: A label for the control point.
- **Position**: The 3D world coordinate (X, Y, Z).
- **Rotation**: Camera pitch (−90° to 90°) and yaw (0° to 360°).
- **Easing Type**: The easing function used for transitions at this point (e.g., Linear, InOutQuad, etc.).
- **Timestamp**: The time in seconds when the camera reaches this point.

### Adding control points

Click the **+** button in the control point list to add a new point at your current player position and view direction. Control points are stored per-player as a world-level dynamic property, so they persist across sessions.

### Editing control points

Select a control point from the list to open its detail panel. You can:

- Update its position, rotation, and timing values.
- Click **Update Location** to move the point to your current player position and view angle.
- Click **Move to Point** to teleport to the control point's position.
- Drag the control point's widget in the 3D viewport to reposition it.

### Bulk operations

- **Select All / Deselect All**: Toggle selection on all control points using the select all button.
- **Delete Selected**: Remove all checked control points after confirmation.

## Playing animations

Click **Play Animation** to preview the camera path. The camera follows the spline through all control points in sequence. Click **Stop** to end the preview early and return to your original position.

> [!NOTE]
> The minimum time difference between consecutive control points is **0.05 seconds**. Control points with timestamps closer together than this will produce an error.

## Exporting animation code

Click **Export Code** to copy a TypeScript function to your clipboard. The generated code uses the `@minecraft/server` Camera API and can be pasted directly into a script project. It includes the spline definition, progress keyframes, rotation keyframes, and animation options.

## Using the camera

1. Select Camera by clicking the button in the tool rail on the left side of the Editor.

2. Navigate to the starting position for your camera path and click **+** to add the first control point.

3. Move to subsequent positions, adding control points along the desired path.
    ![Viewing camera points](../BedrockEditor/media/camera/lookaround.gif)

4. Adjust the **Spline Type**, **Total Duration**, and individual control point settings as needed.

5. Click **Preview Animation** to preview the camera path.
    ![Preview Animation](../BedrockEditor/media/camera/previewanimation.gif)

6. Click **Export Code** to generate a script you can use in your add-on.

## Keyboard shortcuts

For the full list of Editor shortcuts, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).

> [!NOTE]
> The following command only works while the Camera Tool is active.

|Command|Shortcut|
|:--------|:---------|
|Delete selected control point|**Delete**|
