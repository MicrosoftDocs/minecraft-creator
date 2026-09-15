---
author: brian-schwartz
ms.author: brisch
title: Minecraft Bedrock Editor Cinematic Tool
description: "An overview of the Cinematic Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/04/2026
---

# Cinematic Tool

The Cinematic Tool lets you create camera path animations by placing keyframes in your world. Build smooth cinematic sequences using spline-based camera paths, edit timing in the Cinematic Timeline, preview the result, and copy the animation code for use in your projects.

## Tool configuration

### Spline type

Choose the interpolation method for the camera path:

- **Catmull-Rom**: Produces smooth curves through the keyframes. Requires a minimum of **4** keyframes.

- **Linear**: Connects keyframes with straight-line segments. Requires a minimum of **3** keyframes.

### Total duration

Sets the total animation time in seconds (**range: 1–300s; default: 10s**). You can edit the value in the tool pane or drag the duration handle in the Cinematic Timeline.

## Keyframes

Each keyframe defines a camera position, orientation, and timing along the path:

- **Name**: A label for the keyframe.
- **Position**: The 3D world coordinate (X, Y, Z).
- **Rotation**: Camera pitch (−90° to 90°) and yaw (0° to 360°).
- **Easing Type**: The easing function used for the transition to the keyframe.
- **Timestamp**: The time in seconds when the camera reaches the keyframe.

### Add and edit keyframes

Select the **+** button in the **Keyframe List** to add a keyframe at your current camera position and view direction. Expand a keyframe to edit its name, timestamp, camera position, rotation, and easing type.

You can also:

- Drag the keyframe widget in the viewport to reposition it.
- Select **Set Camera to Current View** to update the keyframe from your current camera.
- Select **Go to Camera View** to move to the keyframe's camera position and rotation.
- Duplicate or delete a keyframe from its action menu.

### Bulk operations

Use the actions in the Keyframe List footer to manage keyframes:

- **Distribute Keyframes**: Evenly spreads all keyframe timestamps across the total duration.
- **Duplicate Keyframes**: Duplicates every checked keyframe.
- **Delete Keyframes**: Deletes every checked keyframe after confirmation.

You can sort the list by timestamp or keyframe name. Use **Copy JSON** to copy the cinematic data for reuse, or **Import JSON** to load keyframe data from JSON.

## Cinematic Timeline

Select the timeline button in the Keyframe List header to show or hide the **Cinematic Timeline** at the bottom of the screen. Use the timeline to:

- View keyframes along the duration of the cinematic.
- Add, move, or remove keyframes directly on the timeline.
- Preview or stop playback with the timeline controls.
- Drag the duration handle to adjust the total duration.

> [!NOTE]
> The minimum time difference between consecutive keyframes is **0.05 seconds**. Keyframes with timestamps closer together than this produce an error.

## Display options

- **Show Track**: Shows or hides the camera path between keyframes.
- **Show Speed Dots**: Shows or hides dots that visualize camera speed along the path.

## Preview and copy animation code

Select **Preview Cinematic** to watch the camera follow the spline through all keyframes. Select **Stop Cinematic** to end the preview and return to your original position.

Select **Copy Code** to copy a TypeScript function to the clipboard. The generated code uses the `@minecraft/server` Camera API and includes the spline definition, progress keyframes, rotation keyframes, and animation options.

## Using the camera

1. Select **Cinematic** from the tool rail on the left side of the Editor.

2. Navigate to the starting position for your camera path and click **+** to add the first keyframe.

3. Move to subsequent positions, adding keyframes along the desired path.
    ![Viewing cinematic keyframes](../BedrockEditor/media/camera/lookaround.gif)

4. Adjust the **Spline Type**, **Total Duration**, and individual keyframe settings as needed.

5. Select **Preview Cinematic** or use the Cinematic Timeline to preview the camera path.
    ![Preview Animation](../BedrockEditor/media/camera/previewanimation.gif)

6. Select **Copy Code** to generate a script you can use in your add-on.

## Keyboard shortcuts

For the full list of Editor shortcuts, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).

> [!NOTE]
> The following command only works while the Cinematic Tool is active.

|Command|Shortcut|
|:--------|:---------|
|Delete selected keyframe|**Delete**|
