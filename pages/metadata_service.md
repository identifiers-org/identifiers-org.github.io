---
layout: default
title: metadata service
---

# <i class="icon icon-common icon-mapping"></i> Metadata Service


## Acquisition of provider page annotations 

Identifiers.org metadata service enables users to extract Schema.org from landing pages of the original providers by passing in Compact Identifiers.

``
http://metadata.api.identifiers.org/{Compact Identifier}
``

For example:
<http://metadata.api.identifiers.org/reactome:R-HSA-446203>


### How it works
1. Our backend resolves the compact identifier to find the URLs to query
2. For each URL, it loads its content and search for JSON-LD script tags
    - Xpath query used on the loaded HTML: `//script[@type='application/ld+json']`  
3. If multiple providers have this content available, the recommendation index from the resolver API is used to pick one.

The source code can be found [here](https://github.com/identifiers-org/cloud-ws-metadata/blob/aa70412bcded9d8888c633ba2ae672bb98d049f8/src/main/java/org/identifiers/cloud/ws/metadata/models/MetadataFetcherChromeEngineBased.java).

### Resources providing metadata
Following is a list of resources in the Identifiers.org registry providing metadata (last updated 2018-12-05).

[ec-code](http://identifiers.org/ec-code), [reactome](http://identifiers.org/reactome), 
[prosite](http://identifiers.org/prosite), [cath.domain](http://identifiers.org/cath.domain), 
[hamap](http://identifiers.org/hamap), [biosample](http://identifiers.org/biosample), 
[fairsharing](http://identifiers.org/fairsharing), [cellosaurus](http://identifiers.org/cellosaurus), 
[cosmic](http://identifiers.org/cosmic), [mobidb](http://identifiers.org/mobidb), 
[hpscreg](http://identifiers.org/hpscreg), [lei](http://identifiers.org/lei), 
[biomodels.db](http://identifiers.org/biomodels.db), [pdb](http://identifiers.org/pdb), 
[sgd](http://identifiers.org/sgd), [wb](http://identifiers.org/wb), [fb](http://identifiers.org/fb), 
[arrayexpress](http://identifiers.org/arrayexpress), [mgi](http://identifiers.org/mgi), 
[rgd](http://identifiers.org/rgd), [zfin](http://identifiers.org/zfin), [narcis](http://identifiers.org/narcis), 
[gxa.expt](http://identifiers.org/gxa.expt), [metabolights](http://identifiers.org/metabolights), 
[rgd.qtl](http://identifiers.org/rgd.qtl), [rgd.strain](http://identifiers.org/rgd.strain), 
[ega.study](http://identifiers.org/ega.study), [ega.dataset](http://identifiers.org/ega.dataset), 
[pride.project](http://identifiers.org/pride.project), [lincs.data](http://identifiers.org/lincs.data), 
[mw.study](http://identifiers.org/mw.study), [mex](http://identifiers.org/mex), 
[gpmdb](http://identifiers.org/gpmdb), and [kaggle](http://identifiers.org/kaggle) 


## Acquisition of metadata from other providers

Following [our recent participation on the 3rd German BioHackathon](https://www.denbi.de/de-nbi-events/1762-3rd-biohackathon-germany-identifiers-bridgedb-togoid),
we have expanded our metadata service to collect information from other metadata providing services. 
This is implemented by retriever components that use the APIs from these services to acquire information 
on compact identifiers. 
The retrievers enabled and the data collected differs based on the namespace of the compact identifier.

This is used in our resolution page to display metadata on resolved compact identifiers.

<div class="infobox mb-1">
   <i class="icon icon-common icon-beta text-warning size-300 mr-2"></i>
   <p class="mb-0">
      This feature is a work in progress. 
      It may be modified or removed as necessary without proper warning.
      If you are interested in it or already using it, <a href="/pages/contact">please let us know</a>.
   </p>
</div>

### Retriever endpoints

The main endpoint for the retriever API follows the pattern

``
https://metadata.api.identifiers.org/retrievers/{Compact Identifier}
``

This endpoint lists the available retriever endpoints for that compact identifier. It is expected to be queried first 
discover which retrievers can contain information on that compact identifier. The response will look similarly to:

```json
{
   "apiVersion": "1.0",
   "errorMessage": null,
   "payload": {
      "parsedCompactIdentifier": {
         // Same values from resolver API 
      },
      "ableRetrievers": [
         "https://metadata.api.identifiers.org/retrievers/{Retriever 1}/{Compact Identifier}",
         "https://metadata.api.identifiers.org/retrievers/{Retriever 2}/{Compact Identifier}",
         //...
      ]
   }
}
```

Then, each URL under `.payload.ableRetrivers` will query different metadata providers for information and answer with 
a set of `label -> list of values` pairs representing the parsed metadata from that provider. 
The response of each will look similar to:

```json
{
    "label1": [
        "value1",
        "value2",
        "value3"
    ],
    "label2": [
        "value4"
    ]
}
```

To acquire the raw data from providers, the user may use a URL in the format:

``
https://metadata.api.identifiers.org/retrievers/{Retriever 2}/raw/{Compact Identifier}
``

### Retriever implementation
At this time (Jan 23rd 2025), only two data retrievers are implemented:
- [EBI Search](https://www.ebi.ac.uk), the search engine that incorporates EBI resources in addition to collaborator resources.
- [TogoID](https://togoid.dbcls.jp), an ID conversion service implementing unique features with an intuitive web interface and an API for programmatic access.

If you are interested in contributing to this list, [please reach out to us](/pages/contact).
