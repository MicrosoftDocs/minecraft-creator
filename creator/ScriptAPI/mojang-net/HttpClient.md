---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-net.HttpClient Class
description: Contents of the mojang-net.HttpClient class.
---
# HttpClient Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Methods
- [cancelAll](#cancelall)
- [get](#get)
- [request](#request)

### **cancelAll**
`
cancelAll(reason: string): void
`
Cancels all pending requests.

#### **Parameters**
- **reason**: *string*

### **get**
`
get(uri: string): Promise<HttpResponse>
`
Performs a simple HTTP get request.

#### **Parameters**
- **uri**: *string*
  
  URL to make an HTTP Request to.

#### **Returns** Promise&lt;[*HttpResponse*](HttpResponse.md)&gt; - An awaitable promise that contains the HTTP response.

### **request**
`
request(config: HttpRequest): Promise<HttpResponse>
`
Performs an HTTP request.

#### **Parameters**
- **config**: [*HttpRequest*](HttpRequest.md)
  
  Contains an HTTP Request object with configuration data on the HTTP request.

#### **Returns** Promise&lt;[*HttpResponse*](HttpResponse.md)&gt; - An awaitable promise that contains the HTTP response.
