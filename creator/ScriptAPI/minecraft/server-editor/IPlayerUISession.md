---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IPlayerUISession Type Alias
description: Contents of the @minecraft/server-editor.IPlayerUISession type alias.
---
# IPlayerUISession Type Alias

The IPlayerUISession represents the editor user interface for a given player and given extension. Extensions registered with Minecraft are instantiated for each player which joins a server, and this interface provides the set of functionality needed to create and modify the editor UI for that player. The associated Editor Context for this session object is also player specific. From a given IPlayerUISession object, there is no way to interact with the UI of another player, that must be done from global extension scope registration and/or data sharing independent of the UI object.

## Declaration
`export type IPlayerUISession<PerPlayerStorage = Record<string, never>> = {
    createPropertyPane(options: IRootPropertyPaneOptions): IRootPropertyPane;
    readonly actionManager: ActionManager;
    readonly inputManager: IGlobalInputManager;
    readonly menuBar: IMenuContainer;
    readonly actionBar: IActionBar;
    readonly statusBar: IStatusBar;
    readonly toolRail: IModalToolContainer;
    readonly log: IPlayerLogger;
    readonly extensionContext: ExtensionContext;
    readonly builtInUIManager: BuiltInUIManager;
    readonly eventSubscriptionCache: BedrockEventSubscriptionCache;
    scratchStorage: PerPlayerStorage | undefined;
};`
