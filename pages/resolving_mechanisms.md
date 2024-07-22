---
layout: default
title: resolution mechanism
description: Documentation on how compact identifiers are resolved in identifiers.org
---

# <i class="icon icon-common icon-search"></i> Resolving mechanisms
A central, curated registry stores the information necessary to resolve either Compact Identifier or URI forms of identifier, which are sent as queries to the Identifiers.org resolving system.

## Compact Identifier resolution
Identifiers.org is able to handle queries presented as Compact Identifiers (prefix:accession). A Compact Identifier is a unique string consisting of a **Prefix** (assigned by curator), a colon (‘:’), and a **Local identifier** (eg. accession number string). The **Prefix** is composed of an assigned **Namespace**, which may be preceded by a **Provider Code**, separated by a slash (‘/’).

Namespace Compact Identifier pattern:
```[namespace prefix]:[accession]``` eg: [pdb:2gc4](https://identifiers.org/pdb:2gc4).

Provider Compact Identifier pattern:
```[provider code]/[namespace prefix]:[accession]``` eg: [pdbe/pdb:2gc4](https://identifiers.org/pdbe/pdb:2gc4).

**We recommend using Compact Identifiers for annotation and citation, linked using identifiers.org URLs.**

## URI resolution
Identifiers.org provides direct access to the identified data using one selected provider (or resource). When multiple providers are recorded in the registry, and no provider is specified in the Compact Identifier, the provider with the highest recommendation score is selected for resolution. This allows the location independent referencing (and resolution if required) of data records.

URI resolution pattern:
```http://identifiers.org/[namespace]/[entity]``` eg: http://identifiers.org/pdb/2gc4.

Recommendation scores are mainly based on two aspects, officiality and disponibility. Official resources take top priority when resolving compact identifiers. These are marked as "Primary" on our registry and are always used even if other resources are available. When an primary resource is not available, other resources are picked based on observed disponibility of links. We employ a periodic link checker service that verifies valid HTTP responses from known links and scores resources accordingly. These scores are part of the resolver API response.


