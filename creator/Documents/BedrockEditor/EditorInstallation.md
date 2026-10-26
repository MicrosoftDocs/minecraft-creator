---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Installation
description: "A guide detailing the process of installing and testing Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/28/2026
---

# How to get Minecraft Editor

Minecraft's Bedrock Editor is a multiblock editing experience that helps you easily craft high-quality worlds in Minecraft Bedrock. Editor is available in both the retail version of Minecraft for Windows and Minecraft Preview. Launch it from the Minecraft Launcher's **Creator Tools** tab or with a desktop shortcut; opening Minecraft from its usual Play button does not open Editor.

> [!NOTE]
> Images in this document may vary slightly from what you have on your screen.

First, we are going to install Minecraft Bedrock.
Then, we will create the shortcut that launches Editor.
After that, we will open Editor and make sure it works.

--------

In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - How to install Minecraft.
> - How to create the shortcut that launches Editor.
> - How to tell if everything is working correctly.

--------

## Requirements

To get started, you need the following:

- A Windows 10 (or later) computer
- Keyboard and mouse

> [!IMPORTANT]
> Editor is PC only and not available on mobile or console.

## Install Bedrock

The Bedrock Editor is a separate mode of Bedrock. If you already have Bedrock, you already have the Editor. If not, install the latest Bedrock Retail and/or Preview. To learn more about what Preview is and where to get it, check out the [Preview FAQ on Minecraft.net](https://aka.ms/PreviewFAQ).

The easiest way to install either of these versions is from the Minecraft Launcher. You can get Minecraft Launcher from the Microsoft Store.

![Image of Minecraft Launcher app in the Microsoft Store](Media/editor_launcher_ms_store.png)

Once the Minecraft Launcher is installed, navigate to the Creator Tools tab. From here you can install Retail and Preview versions of Bedrock.

![Image of Minecraft Launcher app to install versions of Bedrock](Media/editor_launcher_install.png)

To switch between retail and Preview, select the version from the drop-down.

![Image of Minecraft Launcher app install versions](Media/editor_launcher_version.png)

After you install Bedrock, a **Create** button appears under the Creator Tools tab in the Launcher.

![Image of Minecraft Launcher app to launch Editor](Media/editor_launcher_create.png)

To launch Editor in the selected version, click **Create**. The Launcher opens Bedrock in Editor mode.

## Make a Shortcut

Alternatively, if you already have Bedrock installed and want to create a shortcut to make accessing Editor easier in the future, follow these steps.

1. Right-click on your desktop, select **New** from the dropdown, and choose to create a new **Shortcut**.  
    ![Windows new shortcut creation](Media/editor_install_create_shortcut.png)

2. For the location of the item, enter the following:

    - Retail: `minecraft://creator/?Editor=true`
    - Preview: `minecraft-preview://creator/?Editor=true`

    Use the URI for the version you installed. The `Editor=true` parameter is case-sensitive.

    ![Editor create shortcut path](Media/editor_shortcut.png)

3. Click **Next** and give your shortcut a name like **Minecraft Editor**.

4. Click **Finish**. Your Editor shortcut has been created! You should see the shortcut created on your desktop and it should automatically have the Minecraft icon if you set it up correctly. If the icon does not populate, don't worry.

    ![Image of the Minecraft Editor desktop shortcut](Media/editor_shortcut_icon_retail.png)

5. Double-click the shortcut to launch the Editor. You should see Editor launch and display the "Create New Project" screen.

Great job! You're ready to create a project!

> [!NOTE]
> If you uninstall Bedrock, but you plan on installing a newer version later, you can leave the Editor shortcut on your desktop and it should work with the new version.

## Troubleshooting

### I can't get into the Editor when I open Minecraft

Use the Launcher’s Create button or the desktop shortcut to open Editor. Opening Bedrock normally will not launch the Editor.

### I added the desktop shortcut, but it won't open the Editor. What's going on?  

Three things to check:  

- Does the shortcut use the URI for the version you installed? Use **`minecraft://creator/?Editor=true`** for retail or **`minecraft-preview://creator/?Editor=true`** for Preview. Check the case of `Editor=true`.

- Did you install Bedrock? If not, you need to do that.

- If both versions are installed, check that the shortcut starts the version you intended. If Windows prompts you to choose an app for the URI, select the corresponding Minecraft or Minecraft Preview app.

- You can also enter the URI for your installed version in the File Explorer address bar to launch Editor:

    ![File explorer window with the Editor shortcut as the path](Media/editor_install_file_explorer_path.png)
