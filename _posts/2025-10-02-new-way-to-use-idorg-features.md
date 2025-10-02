---
layout: default
title: New ways to use our resolution services!
description: New addon, widgets, and MCP functionality
categories: updates
---

# New ways to use our resolution services

Thanks to the recent [DBCLS BioHackathon 2025](https://2025.biohackathon.org/) we are able to offer a few ways to facilitate access to identifiers.org in many new ways.

### MCP server

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io) provides the definitions to facilitate the interaction of systems with AI agents. 
Now, our users can integrate identifiers.org into their AI-powered workloads by connecting to our resolver API using MCP.
With this, users may request AI models to resolve CURIEs and/or generate identifiers.org URIs for their data.

To access our MCP endpoints, set up an SSE connection to <http://resolver.api.identifiers.org/sse>. There you will find the tools and prompts specifications. To inspect the functionalities, use the [MCP inspector](https://modelcontextprotocol.io/docs/tools/inspector) or your favorite AI app or agent with support to MCP integration.


### Browser extension

If you use our services frequently, please consider installing our browser extension on Firefox (with a Chrome version being on the way).
With this you are able to quickly resolve CURIEs and convert provider URLs using the embedded search bars or the right click actions. Please find more information in the add on marketplace at <https://addons.mozilla.org/en-GB/firefox/addon/identifiers-org>.


### Widgets

Based on the [togostanza widget framework](http://togostanza.org/), we offer developers the opportunity to integrate identifiers.org into their websites. The widgets can be found at <https://docs.identifiers.org/togostanza-widgets/> in addition to examples and usage instructions.

Three widgets are available:
- One is the resolution bar from our front page in case you wish to help users input curies into their pages;
- Another is a button to convert URLs and copy the equivalent identifeirs.org URI into the users clipboard
- The last is a text wrapper to validate and resolve CURIE identifiers.


