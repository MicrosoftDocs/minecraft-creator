---
author: mammerla
ms.author: mikeam
title: 'Introducing Custom Components'
description: "An introduction to a new experimental concept of custom components."
ms.service: minecraft-bedrock-edition
---

# Introducing Custom Components

Custom components are a new way of connecting the configuration of Blocks and Items in JSON to the power of scripting in a very direct and targeted manner. This new concept allows for composability and reusability of script functionality across blocks and items, while also ensuring that the script only runs specifically for that specific block and item.

This new pattern combines a more structured way to listen to the block and item events while getting access to all the power within scripting and ensuring these events run with the same constraints as scripting events do today.

If you'd like to get started in building add-ons with custom components, see our [custom components tutorial](./CustomComponentsTutorial.md).

## Structure

This new feature is named _custom components_ because script is connected to a given Block or Item’s JSON in a manner very similar to attaching one of the built-in Minecraft components. As such, there is both a JSON aspect to the feature as well as a script aspect of the feature.

## Script API

Starting from the script API, we are introducing two new major interfaces for Blocks: `BlockTypeRegistry` and `BlockCustomComponent`. (NOTE: BlockTypeRegistry is known as BlockComponentRegistry in preview versions of Minecraft after 1.21.0) The `BlockTypeRegistry` contains a single method on it for registering a new custom component by name:

```typescript
/**
 * @beta
 * Provides the functionality for registering custom components
 * for blocks.
 */
export class BlockTypeRegistry {
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

A custom component in script is the association of name/id, with a set of functionality represented by events. The possible events to listen to are specified within the second interface `BlockCustomComponent`.

```typescript
/**
 * @beta
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

From script, you are able to access the `BlockTypeRegistry` by listening to the new, experimental `worldInitialize` _before_ event. All registration of custom components must happen during worldInitialize because this functionality is directly attached to block initialization from JSON. From within this event, you can then call `registerCustomComponent` with a unique namespaced name and an object that implements the `BlockCustomComponent` interface to register that component. Once a component is registered, any block that uses this component will invoke the callbacks on your object for the relevant events.

A small code sample showing this registration is as follows:

```typescript
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('content:turn_to_air', {
        onStepOn: e => {
            e.block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Air));
        },
    });
});
```

In the above example, a custom component is registered with the name `content:turn_to_air` that listens to the `onStepOn` event.
It is possible to register a JavaScript class as a custom component as well; the only thing that matters is that the `BlockCustomComponent` interface is adhered to. Here is an example that uses a class pattern instead.

```typescript
class TurnToAirComponent implements BlockCustomComponent {
    constructor() {
        this.onStepOn = this.onStepOn.bind(this);
    }

    onStepOn(e: BlockComponentStepOnEvent): void {
        e.block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Air));
    }
}

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('content:turn_to_air', new TurnToAirComponent());
});
```

It is up to you which pattern you prefer depending on the needs of your add-on or world! They are both functionally the same. An important note is that all the event notifications are stateless, and the event parameters will inform you which specific block they pertain to in the world.

## JSON

With a custom component registered to a specific name, then it becomes a question of how to attach it to a custom block.
Within a custom block JSON under the `components` key, there is a new `minecraft:custom_components` key where custom components can be registered. The custom components are listed here in an ordered array. This array lets you control the order in which registered custom components are notified of a specific event. The following is an example of registering our `content:turn_to_air` custom component.

```JSON
    "minecraft:block": {
        "description": {
            "identifier": "content:my_block"
        },
        // Base Components
        "components": {
            "minecraft:custom_components": ["content:turn_to_air"],
            "minecraft:loot": "loot_tables/blocks/my_block.json",
```

In the above example, the custom component is attached alongside other components, like the loot table. If there were multiple custom components registered, then for each type of event, the event will be sent to the custom components in the order they are listed in this array.

It is also possible to add custom components to each specific permutation under the components key as well. However, it is important to note that the custom components array in a permutation fully replaces that array in the base components list.
The same custom component can also be used across multiple files. This `content:turn_to_air` component for example can be reused across multiple custom blocks to have easily aligned and composable behavior. In addition, a custom component can be registered in one behavior pack, and then used from another.

## Workflow

As you author custom components and their corresponding scripting code, you have the full power of hot reload to iterate on your changes while in a world.

When making changes to JSON and/or the registration of new custom components, it will be necessary to exit out of a world and re-enter to see your changes reflected.

Once in script, your callbacks can use any API available in the scripting API just like any other script today with the same constraints. 

## Get started in building custom components

If you'd like to get started in building add-ons with custom components, visit the [custom components tutorial](./CustomComponentsTutorial.md). One important note: in preview versions of Minecraft after 1.21.0, BlockTypeRegistry is known as BlockComponentRegistry.
