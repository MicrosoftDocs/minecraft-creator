---
author: chipotle
ms.author: mikeam
title: "Simulation Distance, Render Distance, and Ticking Areas"
description: "A guide to the interactions between simulation distance, render distance, and ticking areas in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
ms.date: 09/08/2025
---

# Simulation Distance, Render Distance, and Ticking Areas

Minecraft's performance&mdash;and the performance of Minecraft experiences you create&mdash;is affected by a number of factors, from the hardware the game's running on to the number of entities visible to the players on the server. The game offers three important "levers" for fine-tuning that performance: **Simulation Distance**, **Render Distance**, and **Ticking Areas**. This guide explains how these factors work together and provides some tips on how to use them all more effectively.

## Definitions

First, off, what do these terms even mean? You might have some idea already, but let's provide some more formal definitions here.

### Client vs. Server

You've probably run into these terms before, but the distinction between what runs on the client and what runs on the server is particularly important here. The _client_ is the part of the program that always runs on your computer, console, or phone; it's responsible for displaying all the visuals on your device. The _server_ is responsible for the actual gameplay mechanics: it manages mobs and other entities and runs everything that happens "on the clock," that is, game ticks. Client performance is important because it determines the frame rate and graphics quality of your Minecraft experience; server performance is important because it determines how fast everything else goes: how well the game keeps up with moving players and mobs, keeps crops growing and rivers flowing, and so on.

### Render Distance

**Render Distance** refers to the distance, measured in chunks, from the player (or camera) the game engine will draw blocks, entities, and other potentially visible items. Objects past the render distance won't be rendered. The higher the render distance, the more work your client's graphic engine needs to do, and the lower the performance will be. Lower performance is most visibly noticeable in frame rate.

> [!NOTE]
> **What's a chunk?** A chunk is a portion of a world that's 16 blocks wide and 16 blocks long, extending from the bottom to the top of the world. (In the vanilla Overworld, that's 384 blocks high; in the Nether and the End, it's 256 blocks high.) World maps are generated chunk by chunk.

The default render distance for Minecraft: Bedrock Edition depends on your device. On the PC, it's up to 96 chunks; on other devices, the default may be as low as 4. The render distance for Realms may be different than it is for other worlds on your device, with a typical maximum of 20 chunks. The allowable range for render distances is 4&ndash;96 chunks.

### Simulation Distance

**Simulation Distance** refers to the distance, again measured in chunks, from the player that the game engine will process game mechanics. This includes entity behavior, mob spawning (including summoning mobs), plant growth, fluid movement, and generally anything run by game ticks. This is distinct from render distance, and is always set to a lower or equal value than render distance: when something isn't rendered, it's not being simulated. (With some important exceptions, which we'll get to when we talk about Ticking Areas in a moment.) Redstone circuits will continue to function regardless of simulation distance, but anything they interact with that needs tick updates to function won't.

The default range for simulation distance is always 4 chunks. Depending on your device, it can be set to a higher value, up to 12. Simulation distance has a higher performance cost than render distance, because it affects both the client and the server: everything within the simulation distance is also being rendered, so the work the client-side game engine is doing is increased that much more.

### Ticking Areas

**Ticking Areas** are the exception to simulation distance. They're special zones that always remain active, whether or not any player is close by. They're important for specific areas like farms or Redstone-driven devices.

A world can have up to 10 separate ticking areas, each area containing up to 100 chunks. They're created with the `/tickingarea add` command. The more ticking areas you have, and the bigger the ticking areas are, the greater the performance cost.

> [!NOTE]
> Ticking areas have their own separate article that goes into substantially greater depth: [Introduction to Ticking Areas](./TickingAreaCommand.md).

There are certain limits to ticking areas: for instance, while mobs may despawn in ticking areas, they won't spawn in them unless a player is present within simulation distance. If something active inside a ticking area moves outside it&mdash;a mob, a mine cart, an automatically-fired projectile&mdash;it will stop moving until it's within simulation distance.

## Best practices

There's a relationship between simulation distance and render distance worth reviewing:

* Simulation distance is shorter than render distance
* Therefore, everything within the simulation distance is being rendered...
* ...but not everything within the render distance is being simulated.

Basically, _actions and updates_ are confined to simulation distance and to ticking areas.

### Tweaking render and simulation distance

In practice, render distance and simulation distance are set by players client-side, and by [server operators](./BedrockServer/getting-started.md). For any given client, it will be the lesser of those two values: if the server has a `view-distance` of 32 and the client's render distance is set to 24, then the client will only render out to 24 chunks; if the server's `view-distance` is 16, though, the client will only render out to 16 chunks.

Inside your add-ons, you can manipulate [fog distance](./FogInResourcePacks.md) to increase apparent render distance, but the engine won't render chunks in the world past the render distance no matter what values you've set fog to.

As a creator, the most important thing to think about is render and simulation distances on _low-end devices,_ not just your own development machine. This is particularly important when you're thinking about cut scenes or other animations that might be displayed on less powerful hardware.

### Getting better performance at higher render distances

* Particle effects are comparatively high-effort for the game engine; reducing the density of particles when the rendering distance is higher can help increase performance.
* As lovely as Vibrant Visuals are, they're also comparatively high-effort. If rendering distance is your absolute top priority in a specific situation, consider disabling them.
* Fog effects can be used to lower the amount of visible objects within a given rendering distance. While these lower the effective rendering distance, you can use them to help strike a balance between performance and visual fidelity.

### Using ticking areas wisely

You only have 10 ticking areas per world and the areas themselves are limited in scale&mdash;and you don't want to have bigger or more numerous ticking areas than you need for performance reasons. So, plan your ticking areas to have minimal performance hits:

* Create minimal ticking areas around redstone circuits as much as you can.
* Keep command block chains tight and centralized.
* Take advantage of preloading and scheduling options for ticking areas.
* Consider whether scripting can be used for a task instead of ticking areas.

### Entity persistence

To keep entities that move past simulation distance from despawning, your add-ons can define them as [persistent](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_persistent.md). For instance, in the [Gray Wave Add-On](../Casual/build-tower-defense.md), several of the entities are marked as persistent, such as the gray wave generator as defined in **entities/gray_wave_generator.json**. You can see `"minecraft:persistent"` appearing in the `"components"` block. (Its value is an empty  block; it's the presence of the key in the `"components"` section that enables persistence.)

```json
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "components": {
      "minecraft:persistent": {},
      // ... other components ...
    }
    // ... other definitions ...
  }
}
```

## Performance Optimization

### Ticking Area Best Practices

1. **Minimize count**: Use as few ticking areas as possible
2. **Optimize size**: Make them only as large as necessary
3. **Strategic placement**: Position them where they provide maximum benefit
4. **Regular cleanup**: Remove unused ticking areas

```mcfunction
# Check current ticking areas
/tickingarea list all-dimensions

# Remove unused areas
/tickingarea remove old_farm_system
```

### Render Distance Considerations

1. **Custom blocks**: Use appropriate render methods for optimal performance
2. **Particle effects**: Limit particle density in high-render-distance scenarios
3. **Entity limits**: Be aware that render distance affects visible entity counts

### Simulation Distance Effects

1. **Mob behavior**: AI only functions within simulation distance
2. **Block updates**: Crops, water flow, and redstone stop beyond this limit
3. **Spawning mechanics**: New entities only spawn within simulation distance

## Related documentation

* [Introduction to Ticking Areas](TickingAreaCommand.md) - Basic ticking area commands
* [Custom Block Render Distance](CustomBlockRenderDistance.md) - How custom block rendering interacts with render distance
* [Improving Performance and Resource Usage](Practices/ImprovingPerformanceAndResourceUsage.md) - General optimization
* [Entity Despawn Component](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_despawn.md) - Entity persistence options

## What's Next?

Now that you understand how simulation distance, render distance, and ticking areas work together, you can create more efficient and reliable Minecraft experiences. Consider exploring command functions and entity behavior components for more advanced systems.

> [!div class="nextstepaction"]
> [Introduction to Functions](FunctionsIntroduction.md)
> [Entity Behavior Introduction](EntityBehaviorIntroduction.md)
