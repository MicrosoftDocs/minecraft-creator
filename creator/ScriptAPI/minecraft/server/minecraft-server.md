---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server Module
description: Contents of the @minecraft/server module
---
# `@minecraft/server` Module

Contains many types related to manipulating a Minecraft world, including entities, blocks, dimensions, and more.

## [Changelog](changelog.md)

#### Examples
##### ***applyDamageThenHeal.ts***
```typescript
// A function that applies damage and then heals the entity
import { Entity, EntityComponentTypes, system, world } from '@minecraft/server';

function applyDamageAndHeal(entity: Entity) {
    entity.applyDamage(19); // Many mobs have max damage of 20 so this is a near-death mob

    system.runTimeout(() => {
        const health = entity.getComponent(EntityComponentTypes.Health);
        if (health) {
            world.sendMessage(`Entity health before heal: ${health.currentValue}`);

            health.resetToMaxValue();

            world.sendMessage(`Entity after before heal: ${health.currentValue}`);
        } else {
            console.warn('Entity does not have health component');
        }
    }, 40); // Run in a few seconds (40 ticks)
}
```
##### ***bounceSkeletons.ts***
```typescript
import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function mobParty(targetLocation: DimensionLocation) {
    const mobs = ['creeper', 'skeleton', 'sheep'];

    // create some sample mob data
    for (let i = 0; i < 10; i++) {
        targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
    }

    const eqo: EntityQueryOptions = {
        type: 'skeleton',
    };

    for (const entity of targetLocation.dimension.getEntities(eqo)) {
        entity.applyKnockback(0, 0, 0, 1);
    }
}
```
##### ***buttonPushEvent.ts***
```typescript
import { world, ButtonPushAfterEvent, system } from '@minecraft/server';

world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
    const eventLoc = buttonPushEvent.block.location;

    world.sendMessage(
        `Button push event at tick ${system.currentTick} Power:${buttonPushEvent.block.getRedstonePower()}`,
    );
});
```
##### ***checkFeatherNearby.ts***
```typescript
import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";

// Returns true if a feather item entity is within 'distance' blocks of 'location'.
function isFeatherNear(location: DimensionLocation, distance: number): boolean {
    const items = location.dimension.getEntities({
        location: location,
        maxDistance: 20,
    });
    
    for (const item of items) {
        const itemComp = item.getComponent(EntityComponentTypes.Item);
    
        if (itemComp) {
            if (itemComp.itemStack.typeId.endsWith('feather')) {
                return true;
            }
        }
    }

    return false;
}
```
##### ***createExplosions.ts***
```typescript
// Creates an explosion of radius 15 that does not break blocks
import { DimensionLocation } from '@minecraft/server';

function createExplosions(location: DimensionLocation) {
    // Creates an explosion of radius 15 that does not break blocks
    location.dimension.createExplosion(location, 15, { breaksBlocks: false });

    // Creates an explosion of radius 15 that does not cause fire
    location.dimension.createExplosion(location, 15, { causesFire: true });

    // Creates an explosion of radius 10 that can go underwater
    location.dimension.createExplosion(location, 10, { allowUnderwater: true });
}
```
##### ***createTranslatedSign.ts***
```typescript
// A function the creates a sign at the specified location with the specified text
import { DimensionLocation, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function createSignAt(location: DimensionLocation) {
    const signBlock = location.dimension.getBlock(location);

    if (!signBlock) {
        console.warn('Could not find a block at specified location.');
        return;
    }

    const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
    signBlock.setPermutation(signPerm); // Update block to be a sign

    // Update the sign block's text
    // with "Steve's Head"
    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
    if (signComponent) {
        signComponent.setText({ translate: 'item.skull.player.name', with: ['Steve'] });
    }
}
```
##### ***givePlayerEquipment.ts***
```typescript
// Gives the player some equipment
import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveEquipment(player: Player) {
    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
    if (equipmentCompPlayer) {
        equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
    } else {
        console.warn('No equipment component found on player');
    }
}
```
##### ***givePlayerIronFireSword.ts***
```typescript
// Spawns a bunch of item stacks
import { ItemComponentTypes, ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes, MinecraftEnchantmentTypes } from '@minecraft/vanilla-data';

function giveFireSword(player: Player) {
    const ironFireSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);

    const enchantments = ironFireSword?.getComponent(ItemComponentTypes.Enchantable);
    if (enchantments) {
        enchantments.addEnchantment({ type: MinecraftEnchantmentTypes.FireAspect, level: 1 });
    }

    const inventory = player.getComponent('minecraft:inventory');
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }
    inventory.container.setItem(0, ironFireSword);
}
```
##### ***incrementDynamicProperty.ts***
```typescript
import * as mc from '@minecraft/server';

function incrementProperty(propertyName: string): boolean {
    let number = mc.world.getDynamicProperty(propertyName);

    console.warn('Current value is: ' + number);

    if (number === undefined) {
        number = 0;
    }

    if (typeof number !== 'number') {
        console.warn('Number is of an unexpected type.');
        return false;
    }

    mc.world.setDynamicProperty(propertyName, number + 1);
    return true;
}

incrementProperty('samplelibrary:number');
```
##### ***incrementDynamicPropertyInJsonBlob.ts***
```typescript
import * as mc from '@minecraft/server';

function updateWorldProperty(propertyName: string): boolean {
    let paintStr = mc.world.getDynamicProperty(propertyName);
    let paint: { color: string; intensity: number } | undefined = undefined;

    console.log('Current value is: ' + paintStr);

    if (paintStr === undefined) {
        paint = {
            color: 'purple',
            intensity: 0,
        };
    } else {
        if (typeof paintStr !== 'string') {
            console.warn('Paint is of an unexpected type.');
            return false;
        }

        try {
            paint = JSON.parse(paintStr);
        } catch (e) {
            console.warn('Error parsing serialized struct.');
            return false;
        }
    }

    if (!paint) {
        console.warn('Error parsing serialized struct.');
        return false;
    }

    paint.intensity++;
    paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
    mc.world.setDynamicProperty(propertyName, paintStr);

    return true;
}

updateWorldProperty('samplelibrary:longerjson');
```
##### ***itemStacks.ts***
```typescript
// Spawns a bunch of item stacks
import { ItemStack, DimensionLocation, world } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function spawnFeast(location: DimensionLocation) {
    const oneItemLoc = { x: location.x + location.y + 3, y: 2, z: location.z + 1 };
    const fiveItemsLoc = { x: location.x + 1, y: location.y + 2, z: location.z + 1 };
    const diamondPickaxeLoc = { x: location.x + 2, y: location.y + 2, z: location.z + 4 };

    const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
    const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
    const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);

    world.sendMessage(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
    location.dimension.spawnItem(oneEmerald, oneItemLoc);

    world.sendMessage(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
    location.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);

    world.sendMessage(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
    location.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
}
```
##### ***leverActionEvent.ts***
```typescript
import { world, system, LeverActionAfterEvent } from '@minecraft/server';

world.afterEvents.leverAction.subscribe((leverActivateEvent: LeverActionAfterEvent) => {
    console.warn(
        `Lever event at ${system.currentTick} with power: ${leverActivateEvent.block.getRedstonePower()}`,
    );
});

```
##### ***logEntitySpawnEvents.ts***
```typescript
// Register a new function that is called when a new entity is created.
import { world, EntitySpawnAfterEvent } from '@minecraft/server';

world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
    const spawnLocation = entityEvent.entity.location;
    world.sendMessage(
        `New entity of type '${entityEvent.entity.typeId}' spawned at ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}!`,
    );
});
```
##### ***pistonAfterEvent.ts***
```typescript
import { world, system, PistonActivateAfterEvent } from '@minecraft/server';

world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
    console.warn(
        `Piston event at ${system.currentTick} ${(pistonEvent.piston.isMoving ? ' Moving' : 'Not moving')} with state: ${pistonEvent.piston.state}`,
    );
});
```
##### ***playMusicAndSound.ts***
```typescript
import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, Vector3 } from '@minecraft/server';

const players = world.getPlayers();
const targetLocation: Vector3 = {
    x: 0,
    y: 0,
    z: 0,
};

const musicOptions: MusicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
};
world.playMusic('music.menu', musicOptions);

const worldSoundOptions: WorldSoundOptions = {
    pitch: 0.5,
    volume: 4.0,
};
world.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);

const playerSoundOptions: PlayerSoundOptions = {
    pitch: 1.0,
    volume: 1.0,
};

players[0].playSound('bucket.fill_water', playerSoundOptions);
```
##### ***quickFoxLazyDog.ts***
```typescript
// Spawns a fox over a dog
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function spawnAdultHorse(location: DimensionLocation) {
    // Create fox (our quick brown fox)
    const fox = location.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
        x: location.x,
        y: location.y + 2,
        z: location.z,
    });

    fox.addEffect('speed', 10, {
        amplifier: 2,
    });

    // Create wolf (our lazy dog)
    const wolf = location.dimension.spawnEntity(MinecraftEntityTypes.Wolf, location);
    wolf.addEffect('slowness', 10, {
        amplifier: 2,
    });
    wolf.isSneaking = true;
}
```
##### ***setEntityOnFire.ts***
```typescript
import { world, Entity, EntityComponentTypes, system } from "@minecraft/server";

function setAblaze(entity: Entity) {
    entity.setOnFire(20, true);

    system.runTimeout(() => {
        const onfire = entity.getComponent(EntityComponentTypes.OnFire);
        if (onfire) {
            world.sendMessage(`${onfire.onFireTicksRemaining} fire ticks remaining, extinguishing the entity.`);
        }
        // This will extinguish the entity
        entity.extinguishFire(true);
    }, 30); // Run in 30 ticks or ~1.5 seconds
    
}
```
##### ***setSignText.ts***
```typescript
import {
    BlockComponentTypes,
    DimensionLocation,
    RawMessage,
    RawText,
} from '@minecraft/server';

// Function which updates a sign blocks text to raw text
function updateSignText(signLocation: DimensionLocation) {
    const block = signLocation.dimension.getBlock(signLocation);
    if (!block) {
        console.warn('Could not find a block at specified location.');
        return;
    }

    const sign = block.getComponent(BlockComponentTypes.Sign);
    if (sign) {
        // RawMessage
        const helloWorldMessage: RawMessage = { text: 'Hello World' };
        sign.setText(helloWorldMessage);

        // RawText
        const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
        sign.setText(helloWorldText);

        // Regular string
        sign.setText('Hello World');
    } else {
        console.warn('Could not find a sign component on the block.');
    }
}
```
##### ***setTitle.ts***
```typescript
import { world } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((event) => {
    event.player.onScreenDisplay.setTitle('§o§6You respawned!§r');
});
```
##### ***setTitleAndSubtitle.ts***
```typescript
import { world } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((event) => {
    event.player.onScreenDisplay.setTitle('You respawned', {
        stayDuration: 100,
        fadeInDuration: 2,
        fadeOutDuration: 4,
        subtitle: 'Try not to die next time!',
    });
});
```
##### ***spawnFeatherItem.ts***
```typescript
// Spawns a feather at a location
import { ItemStack, DimensionLocation } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function spawnFeather(location: DimensionLocation) {
    const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
    location.dimension.spawnItem(featherItem, location);
}
```
##### ***tagsQuery.ts***
```typescript
import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function mobParty(targetLocation: DimensionLocation) {
    const mobs = ['creeper', 'skeleton', 'sheep'];

    // create some sample mob data
    for (let i = 0; i < 10; i++) {
        const mobTypeId = mobs[i % mobs.length];
        const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
        entity.addTag('mobparty.' + mobTypeId);
    }

    const eqo: EntityQueryOptions = {
        tags: ['mobparty.skeleton'],
    };

    for (const entity of targetLocation.dimension.getEntities(eqo)) {
        entity.kill();
    }
}
```
##### ***teleportMovement.ts***
```typescript
import { world, system } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const targetLocation = { x: 0, y: 0, z: 0 };

const pig = overworld.spawnEntity('minecraft:pig', targetLocation);

let inc = 1;
const runId = system.runInterval(() => {
    pig.teleport(
        { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
        {
            facingLocation: targetLocation,
        },
    );

    if (inc > 100) {
        system.clearRun(runId);
    }
    inc++;
}, 4);
```
##### ***titleCountdown.ts***
```typescript
import { world, system } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe(event => {
    event.player.onScreenDisplay.setTitle('Get ready!', {
        stayDuration: 220,
        fadeInDuration: 2,
        fadeOutDuration: 4,
        subtitle: '10',
    });

    let countdown = 10;

    const intervalId = system.runInterval(() => {
        countdown--;
        event.player.onScreenDisplay.updateSubtitle(countdown.toString());

        if (countdown == 0) {
            system.clearRun(intervalId);
        }
    }, 20);
});
```
##### ***tripWireTripEvent.ts***
```typescript
import { Vector3, world, BlockPermutation, TripWireTripAfterEvent, system } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const targetLocation: Vector3 = { x: 0, y: 0, z: 0 };

// set up a tripwire
const redstone = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y - 1, z: targetLocation.z });
const tripwire = overworld.getBlock(targetLocation);

if (redstone === undefined || tripwire === undefined) {
    console.warn('Could not find block at location.');
} else {

redstone.setPermutation(BlockPermutation.resolve('redstone_block'));
tripwire.setPermutation(BlockPermutation.resolve('tripwire'));

world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
    const eventLoc = tripWireTripEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
        console.warn(
            'Tripwire trip event at tick ' +
                system.currentTick +
                (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : ''),
        );
    }
});
}
```
##### ***yeetEntity.ts***
```typescript
// A function that throws entities up in the air
import { Entity } from '@minecraft/server';

function yeetEntity(entity: Entity) {

    // Zero out the entity's velocity before applying impulse
    entity.clearVelocity();

    // throw the zombie up in the air
    entity.applyImpulse({ x: 0, y: 15, z: 0 });
}
```

## Manifest Details
```json
{
    "module_name": "@minecraft/server",
    "version": "1.7.0"
}
```

## Available Versions
- `1.10.0-beta`
- `1.7.0`
- `1.6.0`
- `1.5.0`
- `1.4.0`
- `1.3.0`
- `1.2.0`
- `1.1.0`
- `1.0.0`
- `0.1.0`

## Enumerations
- [BlockComponentTypes](BlockComponentTypes.md)
- [BlockPistonState](BlockPistonState.md)
- [BlockVolumeIntersection](BlockVolumeIntersection.md)
- [CompoundBlockVolumeAction](CompoundBlockVolumeAction.md)
- [CompoundBlockVolumePositionRelativity](CompoundBlockVolumePositionRelativity.md)
- [Difficulty](Difficulty.md)
- [Direction](Direction.md)
- [DisplaySlotId](DisplaySlotId.md)
- [DyeColor](DyeColor.md)
- [EasingType](EasingType.md)
- [EntityComponentTypes](EntityComponentTypes.md)
- [EntityDamageCause](EntityDamageCause.md)
- [EntityInitializationCause](EntityInitializationCause.md)
- [EntityLifetimeState](EntityLifetimeState.md)
- [EquipmentSlot](EquipmentSlot.md)
- [FluidType](FluidType.md)
- [GameMode](GameMode.md)
- [HudElement](HudElement.md)
- [HudVisibility](HudVisibility.md)
- [ItemComponentTypes](ItemComponentTypes.md)
- [ItemLockMode](ItemLockMode.md)
- [MoonPhase](MoonPhase.md)
- [ObjectiveSortOrder](ObjectiveSortOrder.md)
- [ScoreboardIdentityType](ScoreboardIdentityType.md)
- [ScriptEventSource](ScriptEventSource.md)
- [SignSide](SignSide.md)
- [TimeOfDay](TimeOfDay.md)
- [WatchdogTerminateReason](WatchdogTerminateReason.md)
- [WeatherType](WeatherType.md)

# Type Aliases
- [BlockComponentTypeMap](BlockComponentTypeMap.md)
- [EntityComponentTypeMap](EntityComponentTypeMap.md)
- [ItemComponentTypeMap](ItemComponentTypeMap.md)

## Classes
- [BiomeType](BiomeType.md)
- [BiomeTypes](BiomeTypes.md)
- [Block](Block.md)
- [BlockAreaSize](BlockAreaSize.md)
- [BlockComponent](BlockComponent.md)
- [BlockEvent](BlockEvent.md)
- [BlockExplodeAfterEvent](BlockExplodeAfterEvent.md)
- [BlockExplodeAfterEventSignal](BlockExplodeAfterEventSignal.md)
- [BlockInventoryComponent](BlockInventoryComponent.md)
- [BlockLavaContainerComponent](BlockLavaContainerComponent.md)
- [BlockLiquidContainerComponent](BlockLiquidContainerComponent.md)
- [BlockLocationIterator](BlockLocationIterator.md)
- [BlockPermutation](BlockPermutation.md)
- [BlockPistonComponent](BlockPistonComponent.md)
- [BlockPotionContainerComponent](BlockPotionContainerComponent.md)
- [BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)
- [BlockSignComponent](BlockSignComponent.md)
- [BlockSnowContainerComponent](BlockSnowContainerComponent.md)
- [BlockStates](BlockStates.md)
- [BlockStateType](BlockStateType.md)
- [BlockType](BlockType.md)
- [BlockTypes](BlockTypes.md)
- [BlockVolume](BlockVolume.md)
- [BlockVolumeBase](BlockVolumeBase.md)
- [BlockWaterContainerComponent](BlockWaterContainerComponent.md)
- [BoundingBoxUtils](BoundingBoxUtils.md)
- [ButtonPushAfterEvent](ButtonPushAfterEvent.md)
- [ButtonPushAfterEventSignal](ButtonPushAfterEventSignal.md)
- [Camera](Camera.md)
- [ChatSendAfterEvent](ChatSendAfterEvent.md)
- [ChatSendAfterEventSignal](ChatSendAfterEventSignal.md)
- [ChatSendBeforeEvent](ChatSendBeforeEvent.md)
- [ChatSendBeforeEventSignal](ChatSendBeforeEventSignal.md)
- [CommandResult](CommandResult.md)
- [Component](Component.md)
- [CompoundBlockVolume](CompoundBlockVolume.md)
- [Container](Container.md)
- [ContainerSlot](ContainerSlot.md)
- [DataDrivenEntityTriggerAfterEvent](DataDrivenEntityTriggerAfterEvent.md)
- [DataDrivenEntityTriggerAfterEventSignal](DataDrivenEntityTriggerAfterEventSignal.md)
- [DataDrivenEntityTriggerBeforeEvent](DataDrivenEntityTriggerBeforeEvent.md)
- [DataDrivenEntityTriggerBeforeEventSignal](DataDrivenEntityTriggerBeforeEventSignal.md)
- [Dimension](Dimension.md)
- [DimensionType](DimensionType.md)
- [DimensionTypes](DimensionTypes.md)
- [Effect](Effect.md)
- [EffectAddAfterEvent](EffectAddAfterEvent.md)
- [EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)
- [EffectAddBeforeEvent](EffectAddBeforeEvent.md)
- [EffectAddBeforeEventSignal](EffectAddBeforeEventSignal.md)
- [EffectType](EffectType.md)
- [EffectTypes](EffectTypes.md)
- [EnchantmentType](EnchantmentType.md)
- [EnchantmentTypes](EnchantmentTypes.md)
- [Entity](Entity.md)
- [EntityAddRiderComponent](EntityAddRiderComponent.md)
- [EntityAgeableComponent](EntityAgeableComponent.md)
- [EntityAttributeComponent](EntityAttributeComponent.md)
- [EntityBaseMovementComponent](EntityBaseMovementComponent.md)
- [EntityBreathableComponent](EntityBreathableComponent.md)
- [EntityCanClimbComponent](EntityCanClimbComponent.md)
- [EntityCanFlyComponent](EntityCanFlyComponent.md)
- [EntityCanPowerJumpComponent](EntityCanPowerJumpComponent.md)
- [EntityColorComponent](EntityColorComponent.md)
- [EntityComponent](EntityComponent.md)
- [EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)
- [EntityDieAfterEvent](EntityDieAfterEvent.md)
- [EntityDieAfterEventSignal](EntityDieAfterEventSignal.md)
- [EntityEquippableComponent](EntityEquippableComponent.md)
- [EntityFireImmuneComponent](EntityFireImmuneComponent.md)
- [EntityFloatsInLiquidComponent](EntityFloatsInLiquidComponent.md)
- [EntityFlyingSpeedComponent](EntityFlyingSpeedComponent.md)
- [EntityFrictionModifierComponent](EntityFrictionModifierComponent.md)
- [EntityGroundOffsetComponent](EntityGroundOffsetComponent.md)
- [EntityHealableComponent](EntityHealableComponent.md)
- [EntityHealthChangedAfterEvent](EntityHealthChangedAfterEvent.md)
- [EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)
- [EntityHealthComponent](EntityHealthComponent.md)
- [EntityHitBlockAfterEvent](EntityHitBlockAfterEvent.md)
- [EntityHitBlockAfterEventSignal](EntityHitBlockAfterEventSignal.md)
- [EntityHitEntityAfterEvent](EntityHitEntityAfterEvent.md)
- [EntityHitEntityAfterEventSignal](EntityHitEntityAfterEventSignal.md)
- [EntityHurtAfterEvent](EntityHurtAfterEvent.md)
- [EntityHurtAfterEventSignal](EntityHurtAfterEventSignal.md)
- [EntityInventoryComponent](EntityInventoryComponent.md)
- [EntityIsBabyComponent](EntityIsBabyComponent.md)
- [EntityIsChargedComponent](EntityIsChargedComponent.md)
- [EntityIsChestedComponent](EntityIsChestedComponent.md)
- [EntityIsDyeableComponent](EntityIsDyeableComponent.md)
- [EntityIsHiddenWhenInvisibleComponent](EntityIsHiddenWhenInvisibleComponent.md)
- [EntityIsIgnitedComponent](EntityIsIgnitedComponent.md)
- [EntityIsIllagerCaptainComponent](EntityIsIllagerCaptainComponent.md)
- [EntityIsSaddledComponent](EntityIsSaddledComponent.md)
- [EntityIsShakingComponent](EntityIsShakingComponent.md)
- [EntityIsShearedComponent](EntityIsShearedComponent.md)
- [EntityIsStackableComponent](EntityIsStackableComponent.md)
- [EntityIsStunnedComponent](EntityIsStunnedComponent.md)
- [EntityIsTamedComponent](EntityIsTamedComponent.md)
- [EntityItemComponent](EntityItemComponent.md)
- [EntityIterator](EntityIterator.md)
- [EntityLavaMovementComponent](EntityLavaMovementComponent.md)
- [EntityLeashableComponent](EntityLeashableComponent.md)
- [EntityLoadAfterEvent](EntityLoadAfterEvent.md)
- [EntityLoadAfterEventSignal](EntityLoadAfterEventSignal.md)
- [EntityMarkVariantComponent](EntityMarkVariantComponent.md)
- [EntityMountTamingComponent](EntityMountTamingComponent.md)
- [EntityMovementAmphibiousComponent](EntityMovementAmphibiousComponent.md)
- [EntityMovementBasicComponent](EntityMovementBasicComponent.md)
- [EntityMovementComponent](EntityMovementComponent.md)
- [EntityMovementFlyComponent](EntityMovementFlyComponent.md)
- [EntityMovementGenericComponent](EntityMovementGenericComponent.md)
- [EntityMovementGlideComponent](EntityMovementGlideComponent.md)
- [EntityMovementHoverComponent](EntityMovementHoverComponent.md)
- [EntityMovementJumpComponent](EntityMovementJumpComponent.md)
- [EntityMovementSkipComponent](EntityMovementSkipComponent.md)
- [EntityMovementSwayComponent](EntityMovementSwayComponent.md)
- [EntityNavigationClimbComponent](EntityNavigationClimbComponent.md)
- [EntityNavigationComponent](EntityNavigationComponent.md)
- [EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)
- [EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)
- [EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)
- [EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)
- [EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)
- [EntityNpcComponent](EntityNpcComponent.md)
- [EntityOnFireComponent](EntityOnFireComponent.md)
- [EntityProjectileComponent](EntityProjectileComponent.md)
- [EntityPushThroughComponent](EntityPushThroughComponent.md)
- [EntityRemoveAfterEvent](EntityRemoveAfterEvent.md)
- [EntityRemoveAfterEventSignal](EntityRemoveAfterEventSignal.md)
- [EntityRemoveBeforeEvent](EntityRemoveBeforeEvent.md)
- [EntityRemoveBeforeEventSignal](EntityRemoveBeforeEventSignal.md)
- [EntityRideableComponent](EntityRideableComponent.md)
- [EntityRidingComponent](EntityRidingComponent.md)
- [EntityScaleComponent](EntityScaleComponent.md)
- [EntitySkinIdComponent](EntitySkinIdComponent.md)
- [EntitySpawnAfterEvent](EntitySpawnAfterEvent.md)
- [EntitySpawnAfterEventSignal](EntitySpawnAfterEventSignal.md)
- [EntityStrengthComponent](EntityStrengthComponent.md)
- [EntityTameableComponent](EntityTameableComponent.md)
- [EntityType](EntityType.md)
- [EntityTypeFamilyComponent](EntityTypeFamilyComponent.md)
- [EntityTypeIterator](EntityTypeIterator.md)
- [EntityTypes](EntityTypes.md)
- [EntityUnderwaterMovementComponent](EntityUnderwaterMovementComponent.md)
- [EntityVariantComponent](EntityVariantComponent.md)
- [EntityWantsJockeyComponent](EntityWantsJockeyComponent.md)
- [ExplosionAfterEvent](ExplosionAfterEvent.md)
- [ExplosionAfterEventSignal](ExplosionAfterEventSignal.md)
- [ExplosionBeforeEvent](ExplosionBeforeEvent.md)
- [ExplosionBeforeEventSignal](ExplosionBeforeEventSignal.md)
- [FeedItem](FeedItem.md)
- [FeedItemEffect](FeedItemEffect.md)
- [FilterGroup](FilterGroup.md)
- [FluidContainer](FluidContainer.md)
- [GameRules](GameRules.md)
- [IButtonPushAfterEventSignal](IButtonPushAfterEventSignal.md)
- [ILeverActionAfterEventSignal](ILeverActionAfterEventSignal.md)
- [IPlayerJoinAfterEventSignal](IPlayerJoinAfterEventSignal.md)
- [IPlayerLeaveAfterEventSignal](IPlayerLeaveAfterEventSignal.md)
- [IPlayerSpawnAfterEventSignal](IPlayerSpawnAfterEventSignal.md)
- [ItemCompleteUseAfterEvent](ItemCompleteUseAfterEvent.md)
- [ItemCompleteUseAfterEventSignal](ItemCompleteUseAfterEventSignal.md)
- [ItemComponent](ItemComponent.md)
- [ItemCooldownComponent](ItemCooldownComponent.md)
- [ItemDefinitionAfterEventSignal](ItemDefinitionAfterEventSignal.md)
- [ItemDefinitionBeforeEventSignal](ItemDefinitionBeforeEventSignal.md)
- [ItemDefinitionTriggeredAfterEvent](ItemDefinitionTriggeredAfterEvent.md)
- [ItemDefinitionTriggeredBeforeEvent](ItemDefinitionTriggeredBeforeEvent.md)
- [ItemDurabilityComponent](ItemDurabilityComponent.md)
- [ItemEnchantableComponent](ItemEnchantableComponent.md)
- [ItemFoodComponent](ItemFoodComponent.md)
- [ItemReleaseUseAfterEvent](ItemReleaseUseAfterEvent.md)
- [ItemReleaseUseAfterEventSignal](ItemReleaseUseAfterEventSignal.md)
- [ItemStack](ItemStack.md)
- [ItemStartUseAfterEvent](ItemStartUseAfterEvent.md)
- [ItemStartUseAfterEventSignal](ItemStartUseAfterEventSignal.md)
- [ItemStartUseOnAfterEvent](ItemStartUseOnAfterEvent.md)
- [ItemStartUseOnAfterEventSignal](ItemStartUseOnAfterEventSignal.md)
- [ItemStopUseAfterEvent](ItemStopUseAfterEvent.md)
- [ItemStopUseAfterEventSignal](ItemStopUseAfterEventSignal.md)
- [ItemStopUseOnAfterEvent](ItemStopUseOnAfterEvent.md)
- [ItemStopUseOnAfterEventSignal](ItemStopUseOnAfterEventSignal.md)
- [ItemType](ItemType.md)
- [ItemTypes](ItemTypes.md)
- [ItemUseAfterEvent](ItemUseAfterEvent.md)
- [ItemUseAfterEventSignal](ItemUseAfterEventSignal.md)
- [ItemUseBeforeEvent](ItemUseBeforeEvent.md)
- [ItemUseBeforeEventSignal](ItemUseBeforeEventSignal.md)
- [ItemUseOnAfterEvent](ItemUseOnAfterEvent.md)
- [ItemUseOnAfterEventSignal](ItemUseOnAfterEventSignal.md)
- [ItemUseOnBeforeEvent](ItemUseOnBeforeEvent.md)
- [ItemUseOnBeforeEventSignal](ItemUseOnBeforeEventSignal.md)
- [LeverActionAfterEvent](LeverActionAfterEvent.md)
- [LeverActionAfterEventSignal](LeverActionAfterEventSignal.md)
- [MessageReceiveAfterEvent](MessageReceiveAfterEvent.md)
- [MinecraftDimensionTypes](MinecraftDimensionTypes.md)
- [MolangVariableMap](MolangVariableMap.md)
- [PistonActivateAfterEvent](PistonActivateAfterEvent.md)
- [PistonActivateAfterEventSignal](PistonActivateAfterEventSignal.md)
- [Player](Player.md)
- [PlayerBreakBlockAfterEvent](PlayerBreakBlockAfterEvent.md)
- [PlayerBreakBlockAfterEventSignal](PlayerBreakBlockAfterEventSignal.md)
- [PlayerBreakBlockBeforeEvent](PlayerBreakBlockBeforeEvent.md)
- [PlayerBreakBlockBeforeEventSignal](PlayerBreakBlockBeforeEventSignal.md)
- [PlayerDimensionChangeAfterEvent](PlayerDimensionChangeAfterEvent.md)
- [PlayerDimensionChangeAfterEventSignal](PlayerDimensionChangeAfterEventSignal.md)
- [PlayerInteractWithBlockAfterEvent](PlayerInteractWithBlockAfterEvent.md)
- [PlayerInteractWithBlockAfterEventSignal](PlayerInteractWithBlockAfterEventSignal.md)
- [PlayerInteractWithBlockBeforeEvent](PlayerInteractWithBlockBeforeEvent.md)
- [PlayerInteractWithBlockBeforeEventSignal](PlayerInteractWithBlockBeforeEventSignal.md)
- [PlayerInteractWithEntityAfterEvent](PlayerInteractWithEntityAfterEvent.md)
- [PlayerInteractWithEntityAfterEventSignal](PlayerInteractWithEntityAfterEventSignal.md)
- [PlayerInteractWithEntityBeforeEvent](PlayerInteractWithEntityBeforeEvent.md)
- [PlayerInteractWithEntityBeforeEventSignal](PlayerInteractWithEntityBeforeEventSignal.md)
- [PlayerIterator](PlayerIterator.md)
- [PlayerJoinAfterEvent](PlayerJoinAfterEvent.md)
- [PlayerJoinAfterEventSignal](PlayerJoinAfterEventSignal.md)
- [PlayerLeaveAfterEvent](PlayerLeaveAfterEvent.md)
- [PlayerLeaveAfterEventSignal](PlayerLeaveAfterEventSignal.md)
- [PlayerLeaveBeforeEvent](PlayerLeaveBeforeEvent.md)
- [PlayerLeaveBeforeEventSignal](PlayerLeaveBeforeEventSignal.md)
- [PlayerPlaceBlockAfterEvent](PlayerPlaceBlockAfterEvent.md)
- [PlayerPlaceBlockAfterEventSignal](PlayerPlaceBlockAfterEventSignal.md)
- [PlayerPlaceBlockBeforeEvent](PlayerPlaceBlockBeforeEvent.md)
- [PlayerPlaceBlockBeforeEventSignal](PlayerPlaceBlockBeforeEventSignal.md)
- [PlayerSpawnAfterEvent](PlayerSpawnAfterEvent.md)
- [PlayerSpawnAfterEventSignal](PlayerSpawnAfterEventSignal.md)
- [PressurePlatePopAfterEvent](PressurePlatePopAfterEvent.md)
- [PressurePlatePopAfterEventSignal](PressurePlatePopAfterEventSignal.md)
- [PressurePlatePushAfterEvent](PressurePlatePushAfterEvent.md)
- [PressurePlatePushAfterEventSignal](PressurePlatePushAfterEventSignal.md)
- [ProjectileHitBlockAfterEvent](ProjectileHitBlockAfterEvent.md)
- [ProjectileHitBlockAfterEventSignal](ProjectileHitBlockAfterEventSignal.md)
- [ProjectileHitEntityAfterEvent](ProjectileHitEntityAfterEvent.md)
- [ProjectileHitEntityAfterEventSignal](ProjectileHitEntityAfterEventSignal.md)
- [Scoreboard](Scoreboard.md)
- [ScoreboardIdentity](ScoreboardIdentity.md)
- [ScoreboardObjective](ScoreboardObjective.md)
- [ScoreboardScoreInfo](ScoreboardScoreInfo.md)
- [ScreenDisplay](ScreenDisplay.md)
- [ScriptEventCommandMessageAfterEvent](ScriptEventCommandMessageAfterEvent.md)
- [ScriptEventCommandMessageAfterEventSignal](ScriptEventCommandMessageAfterEventSignal.md)
- [Seat](Seat.md)
- [ServerMessageAfterEventSignal](ServerMessageAfterEventSignal.md)
- [System](System.md)
- [SystemAfterEvents](SystemAfterEvents.md)
- [SystemBeforeEvents](SystemBeforeEvents.md)
- [TargetBlockHitAfterEvent](TargetBlockHitAfterEvent.md)
- [TargetBlockHitAfterEventSignal](TargetBlockHitAfterEventSignal.md)
- [Trigger](Trigger.md)
- [TripWireTripAfterEvent](TripWireTripAfterEvent.md)
- [TripWireTripAfterEventSignal](TripWireTripAfterEventSignal.md)
- [Vector](Vector.md)
- [WatchdogTerminateBeforeEvent](WatchdogTerminateBeforeEvent.md)
- [WatchdogTerminateBeforeEventSignal](WatchdogTerminateBeforeEventSignal.md)
- [WeatherChangeAfterEvent](WeatherChangeAfterEvent.md)
- [WeatherChangeAfterEventSignal](WeatherChangeAfterEventSignal.md)
- [WeatherChangeBeforeEvent](WeatherChangeBeforeEvent.md)
- [WeatherChangeBeforeEventSignal](WeatherChangeBeforeEventSignal.md)
- [World](World.md)
- [WorldAfterEvents](WorldAfterEvents.md)
- [WorldBeforeEvents](WorldBeforeEvents.md)
- [WorldInitializeAfterEvent](WorldInitializeAfterEvent.md)
- [WorldInitializeAfterEventSignal](WorldInitializeAfterEventSignal.md)

## Interfaces
- [BiomeSearchOptions](BiomeSearchOptions.md)
- [BlockEventOptions](BlockEventOptions.md)
- [BlockFillOptions](BlockFillOptions.md)
- [BlockFilter](BlockFilter.md)
- [BlockHitInformation](BlockHitInformation.md)
- [BlockRaycastHit](BlockRaycastHit.md)
- [BlockRaycastOptions](BlockRaycastOptions.md)
- [BoundingBox](BoundingBox.md)
- [CameraDefaultOptions](CameraDefaultOptions.md)
- [CameraEaseOptions](CameraEaseOptions.md)
- [CameraFadeOptions](CameraFadeOptions.md)
- [CameraFadeTimeOptions](CameraFadeTimeOptions.md)
- [CameraSetFacingOptions](CameraSetFacingOptions.md)
- [CameraSetLocationOptions](CameraSetLocationOptions.md)
- [CameraSetPosOptions](CameraSetPosOptions.md)
- [CameraSetRotOptions](CameraSetRotOptions.md)
- [CompoundBlockVolumeItem](CompoundBlockVolumeItem.md)
- [DefinitionModifier](DefinitionModifier.md)
- [DimensionLocation](DimensionLocation.md)
- [Enchantment](Enchantment.md)
- [EntityApplyDamageByProjectileOptions](EntityApplyDamageByProjectileOptions.md)
- [EntityApplyDamageOptions](EntityApplyDamageOptions.md)
- [EntityDamageSource](EntityDamageSource.md)
- [EntityDataDrivenTriggerEventOptions](EntityDataDrivenTriggerEventOptions.md)
- [EntityEffectOptions](EntityEffectOptions.md)
- [EntityEventOptions](EntityEventOptions.md)
- [EntityHitInformation](EntityHitInformation.md)
- [EntityQueryOptions](EntityQueryOptions.md)
- [EntityQueryScoreOptions](EntityQueryScoreOptions.md)
- [EntityRaycastHit](EntityRaycastHit.md)
- [EntityRaycastOptions](EntityRaycastOptions.md)
- [ExplosionOptions](ExplosionOptions.md)
- [MusicOptions](MusicOptions.md)
- [PlayAnimationOptions](PlayAnimationOptions.md)
- [PlayerSoundOptions](PlayerSoundOptions.md)
- [ProjectileShootOptions](ProjectileShootOptions.md)
- [RawMessage](RawMessage.md)
- [RawMessageScore](RawMessageScore.md)
- [RawText](RawText.md)
- [RGB](RGB.md)
- [RGBA](RGBA.md)
- [ScoreboardObjectiveDisplayOptions](ScoreboardObjectiveDisplayOptions.md)
- [ScriptEventMessageFilterOptions](ScriptEventMessageFilterOptions.md)
- [TeleportOptions](TeleportOptions.md)
- [TitleDisplayOptions](TitleDisplayOptions.md)
- [Vector2](Vector2.md)
- [Vector3](Vector3.md)
- [WorldSoundOptions](WorldSoundOptions.md)

## Errors
- [CommandError](CommandError.md)
- [EnchantmentLevelOutOfBoundsError](EnchantmentLevelOutOfBoundsError.md)
- [EnchantmentTypeNotCompatibleError](EnchantmentTypeNotCompatibleError.md)
- [EnchantmentTypeUnknownIdError](EnchantmentTypeUnknownIdError.md)
- [InvalidContainerSlotError](InvalidContainerSlotError.md)
- [LocationInUnloadedChunkError](LocationInUnloadedChunkError.md)
- [LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError.md)

## Constants

::: moniker range="=minecraft-bedrock-experimental"
### **HudElementsCount**
`static read-only HudElementsCount = 11;`

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **HudVisibilityCount**
`static read-only HudVisibilityCount = 2;`

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **MoonPhaseCount**
`static read-only MoonPhaseCount = 8;`

Holds the number of MoonPhases

Type: *number*

::: moniker range="=minecraft-bedrock-experimental"
### **TicksPerDay**
`static read-only TicksPerDay = 24000;`

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **TicksPerSecond**
`static read-only TicksPerSecond = 20;`

How many times the server ticks per second of real time.

Type: *number*

## Objects
  
### **system**
`static read-only system: System;`

A class that provides system-level events and functions.

Type: [*System*](System.md)
  
### **world**
`static read-only world: World;`

A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

Type: [*World*](World.md)
