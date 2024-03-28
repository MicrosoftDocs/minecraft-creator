---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: wsserver Command
description: Description and usage of the wsserver command
---
# `/wsserver` Command
Attempts to connect to the websocket server on the provided URL.

<table>
  <tr>
    <th>Aliases</th>
    <td>/connect</td>
  </tr>
  <tr>
    <th>Permission Level</th>
    <td>Admin</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### WSServer
`/wsserver <serverUri: text>`

`Connect` to a given `websocket server URI`.

## Arguments
- `serverUri`: text
A `URI` of the server to connect to. Or use an empty `string`  to disconnect.
