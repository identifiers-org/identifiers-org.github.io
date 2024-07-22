---
layout: default
title: "New feature: Optional rewrite on resolver dataset for namespaces with embedded prefixes"
description: Rewrite URL patterns on the resolution dataset to solve issues with namespaces such as GO and MGI.
categories: updates
---
 
# New feature to rewrite resolver dataset for namespaces with embedded prefixes

To solve the issues of some users have with namespaces such as [GO](https://registry.identifiers.org/registry/go) and [MGI](https://registry.identifiers.org/registry/mgi), we have introduced an optional rewrite on the resolution dataset. With this enabled, the URL patterns of the registry are rewritten at request time to not have the namespace prefix right before the `{$id}` variable.

This is needed because systems normally store references to these namespaces as full compact identifiers which can't be directly inserted into our patterns because these are created to receive only the local ID (without the prefix). By default, users have to split the compact identifiers into prefix and local ID before replacing the template variable with only the local ID part. This is inconsistent with other namespaces that can directly replace their stored IDs into the URL patterns since they are already not stored as full compact identifiers. 

For example, consider the Gene Ontology entry for "apoptotic process" which is identified by GO:0006915. One URL pattern for the go namespace is `https://amigo.geneontology.org/amigo/term/GO:{$id}`. If a system has the full compact identifier stored (perhaps as a RDF cross-reference) and wishes to resolve a valid URL for it using the resolver dataset, it has to split it into prefix and local ID 

`GO:0006915` &#8658; `GO` + `0006915` 

and then replace the local ID into the URL pattern to have a valid URL. 

`https://amigo.geneontology.org/amigo/term/GO:{$id}` &#8658; `https://amigo.geneontology.org/amigo/term/GO:0006915`

With the rewrite feature enabled, the user will get the URL pattern as `https://amigo.geneontology.org/amigo/term/{$id}` directly from the resolution dataset endpoint, and won't have to split the compact identifier anymore.

This feature only acts on namespaces that have the `Prefix embedded in LUI` set and won't rewrite any URL pattern from other namespaces. Please have a look at our [API documentation](/pages/api.html#getdataset) for more details.