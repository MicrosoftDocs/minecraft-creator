---
author: mammerla
ms.author: mikeam
title: 'Introducing Custom Components'
description: "An introduction to a new concept of custom components."
ms.service: minecraft-bedrock-edition
ms.date: 06/30/2025
---

# Introducing Custom Components

Custom components combine JSON-driven configuration of blocks and items with the power of targeted scripting. You can take advantage of composable and reuseable script functionality across blocks and items, while ensuring your scripts only run for the specific blocks and items they're intended to control. Custom components give you a more structured way to respond to block and item events within scripts.

> [!NOTE]
> Custom components are even more powerful in [Scripting Version 2.0.0](./v2-overview.md#custom-components-v2)! This tutorial describes Custom Components Version 2, introduced along with Scripting Version 2.

## Structure

This new feature is named _custom components_ because scripts are connected to a given block or item's JSON in a manner very similar to attaching to one of the built-in Minecraft components. As such, there is both a JSON aspect and a script aspect to the feature.

## Script API

The script API for custom components provides two interfaces for Blocks: `BlockComponentRegistry` and `BlockCustomComponent`.

### BlockCustomComponent

This interface should be implemented by your custom component to do something in response to one or more events. Here's the interface source code for `BlockCustomComponent`:

```typescript
/**
 * Contains a set of events that will be raised for a block.
 * This object must be bound using the BlockRegistry.
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * This function will be called when an entity steps onto the
     * block that this custom component is bound to.
     *
     */
    onStepOn?: (arg: BlockComponentStepOnEvent) => void;
}
```

A simple implementation of this in practice could look like this:

```typescript
export class GrownStrawberryCropComponent implements BlockCustomComponent {
  onTick(arg: BlockComponentTickEvent) {
    CropGrowthComponent.tryGrowBlock(arg.block);
  }
}
```

### BlockComponentRegistry

This interface method is used to register a new component by passing it a unique name that specifies the custom component's ID and an instance of a `BlockCustomComponent`. This is the commented interface source code:

```typescript
/**
 * Provides the functionality for registering custom components
 * for blocks.
 */
export class BlockComponentRegistry {
    /**
     * @remarks
     * Registers a block custom component that can be used in block
     * JSON configuration.
     *
     * @param name
     * The id that represents this custom component. Must have a
     * namespace. This id can be specified in a block's JSON
     * configuration under the 'minecraft:custom_components' block
     * component.
     * @param customComponent
     * The collection of event functions that will be called when
     * the event occurs on a block using this custom component id.
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}
```

In your Add-On's main script, you can register new components by subscribing to `system.beforeEvents.startup`. Within this event, you can register your custom components by giving them namespaced names and objects that implement the `BlockCustomComponent` interface. Once a component is registered, any block that uses this component will invoke the callbacks on your object for the relevant events.

Here's a small code sample showing this registration:

```typescript
system.beforeEvents.startup.subscribe((initEvent) => {
    initEvent.blockComponentRegistry.registerCustomComponent('content:turn_to_air', {
        onStepOn: e => {
            e.block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Air));
        },
    });
});
```

In the above example, a custom component is registered with the name `content:turn_to_air` that listens to the `onStepOn` event.

With more complex components, you may want to define them as classes that implement `BlockCustomComponent` instead, and pass an instance of the class to `registerCustomComponent`:

```typescript
class TurnToAirComponent implements BlockCustomComponent {
    constructor() {
        this.onStepOn = this.onStepOn.bind(this);
    }

    onStepOn(e: BlockComponentStepOnEvent): void {
        e.block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Air));
    }
}

system.beforeEvents.startup.subscribe((initEvent) => {
    initEvent.blockComponentRegistry.registerCustomComponent('content:turn_to_air', new TurnToAirComponent());
});
```

Both approaches are functionally the same, so choose whichever one makes sense for your script. An important note is that all the event notifications are stateless, and the event parameters will inform you which specific block they pertain to in the world.

To find out more about the Custom Component APIs, see the documentation for the [ItemCustomComponent](../../ScriptAPI/minecraft/server/ItemCustomComponent.md) and [BlockCustomComponent](../../ScriptAPI/minecraft/server/BlockCustomComponent.md) APIs.

## JSON

Now that your custom component is registered to a specific name, it becomes a question of how to attach it to a custom block. This is actually quite simple: just add it to the block's `components` key.

> [!TIP]
> This is one of the changes between Custom Components Version 1 and Version 2: in version 1, custom components were added by listing them in a `minecraft:custom_components` array; in version 2, they're registered the way any native Minecraft component is.

Here's an example of registering our `content:turn_to_air` custom component.

```JSON
"minecraft:block": {
  "description": {
    "identifier": "content:my_block"
  },
  // Base Components
  "components": {
    "content:turn_to_air": {},
    "minecraft:loot": "loot_tables/blocks/my_block.json"
  }
}
```

In the above example, the custom component is attached alongside other components, like the loot table. If multiple custom components were registered, then for each type of event, the event is sent to the custom components in the order they are listed.

The same custom component can be used across multiple files. This `content:turn_to_air` component, for example, can be reused across multiple custom blocks to have easily aligned and composable behavior. In addition, a custom component can be registered in one behavior pack, and then used from another.

## Workflow

As you author custom components and their corresponding scripting code, you have the full power of hot reload to iterate on your changes while in a world.

When making changes to JSON and/or the registration of new custom components, it will be necessary to exit out of a world and re-enter to see your changes reflected.

Once in script, your callbacks can use any API available in the scripting API just like any other script today with the same constraints.

## Get started in building custom components

If you'd like to get started in building Add-Ons with custom components, visit the [custom components tutorial](./components-tutorial.md).
