---
author: JimSeaman42
ms.author: mikeam
title: Particle Documentation - Particle Effect Events
description: "A reference document introducing the concept of particle effect events to creators"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Particle Effect Events

Events can be triggered elsewhere in the **.json** file and fire off new particle and sound effects.

Particle effects have different types. If the type is "emitter", this will create an emitter of "effect" type at the event's world position, in a fire-and-forget way.

"emitter_bound" works similarly, except if the spawning emitter is bound to an actor/locator, the emitter will be bound to the same actor/locator.

If the type is "particle", the event manually emits a particle on an emitter of "effect" type at the event location, creating the emitter if it doesn't already exist (be sure to use `minecraft:emitter_rate_manual` for the spawned emitter effect).

`particle_with_velocity` does the same as **particle** except the new particle will inherit the spawning particle's velocity.

Sound effects specify the specific "level sound event" to be played when the event fires.

The events themselves consist of an optional node tree and/or an actual event.

When **sequence** is specified, that array will execute in order, with every element executing when the event fires.

When using **random**, one element will be picked from the array based on the weight.

## Example

```json
// events block:
"events": {
  "event_name1",
  "event_name2",
  ...
}

// structure of an event, note that nesting can be any combination of "sequence", or "randomize"
"event_name": {
  "sequence": [
    { /*this node executes first*/ },
    { /*this node executes second*/ },
    { /* etc */},
    {
      "sequence": [
        {
          // nested nodes
        },
        ...
      ]
    },
    {
      "randomize": [
        {
          "weight": <float>
          /* data for this option, including other sequences/randoms */
        },
        ...
      ]
    }
  ]
},

// Fields for a particular event. Note that any of the above nodes can have events inserted into their blocks.
"event_subpart": {
    "particle_effect": {
      // identifier of the effect
      "effect": <string>,
      // "emitter", "emitter_bound", "particle" or "particle_with_velocity"
      "type": <string>,
      // this Molang is run on the emitter for this event once this
      // event fires
      // NOTE: this will not have access to the event
      // triggering emitter's Molang data
      "pre_effect_expression": <string>,
    },
    "sound_effect": {
      // name of the level sound event
      "event_name": <string>
    },
    // Runs this Molang expression on the event-firing emitter
    "expression": <string>,
    // for debugging, this will log a message, along with the firing effect's name and event position
    // the log message will show up in the content logger
    "log": <string>
}

// simple example:
"events": {
    "event_name1": {
        "particle_effect": {
            "effect": "a_particle_effect",
            "type": "emitter"
        }
    }
}

```
