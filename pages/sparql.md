---
layout: default
title: SPARQL
description: SPARQL endpoint documentation
---

# SPARQL Endpoint
The Identifiers.org SPARQL endpoint allows for [URL resolution](#resolving-urls-with-sparql) and [querying registry data](#registry-data-model).

<div class="infobox mb-1"> <i class="icon icon-common icon-info text-primary size-300 mr-2"></i>
    <p class="mb-0"> 
        <strong> 
            The Identifiers.org SPARQL endpoint is running at <a href="https://sparql.api.identifiers.org/sparql">https://sparql.api.identifiers.org/sparql</a>.
        </strong> <br>
        A web interface is also available with some examples. The code for this interface is powered by <a href="https://www.npmjs.com/package/@sib-swiss/sparql-editor">sparql-editor</a>.
    </p>
</div>



## Registry data model
Querying registry information via SPARQL allows users to connect the metadata available on these collections to their own knowledge graphs. Information such as descriptions, home pages, providing institution, and url patterns are available through this service.

All registry data was modeled using the [VoID](https://www.w3.org/TR/void/) and [DCAT](https://www.w3.org/TR/vocab-dcat-3/) schemes. New terms were created for attributes that couldn't be mapped for these schemes. You will find the ontology for these terms [here](https://github.com/identifiers-org/ontop/blob/main/idorg-ontology/idorg-ontology.ttl).

This has been implemented using [R2RML](https://www.w3.org/TR/r2rml/) and [ontop](https://ontop-vkg.org/). You can find the mappings employed [here](https://github.com/identifiers-org/ontop/blob/main/idorg-ontology/idorg-ontology.obda). Ontop generates triples based on these mappings and the contents of the database. You can find the code for this at our [ontop git repository](https://github.com/identifiers-org/ontop).

#### VoID mappings
The registry itself is available as a `void:Dataset` with notations such as `void:sparqlEndpoint` and `void:exampleResource`. These can be found [here](https://github.com/identifiers-org/ontop/blob/main/idorg-ontology/idorg-ontology.ttl#L232-L249).

#### DCAT mappings
The registry itself is available as a `dcat:Catalog`, while namespaces are `dcat:Dataset` and resources are mapped to `dcat:DataService`. Namespaces are associated with the catalog via the `dcat:dataset` property and resources are associated with their namespace via the `dcat:servesDataset` property.

#### New terms employed
Terms for some attributes had to be created. See the table bellow for a list of them and their respective new term. These terms are using the `idot` namespace which is expanded to the `http://identifiers.org/idot/` prefix. Formal definitions for these can be found [here](https://github.com/identifiers-org/ontop/blob/main/idorg-ontology/idorg-ontology.ttl).

| Class of attribute | Registry attribute                  | idot term                   |
|--------------------|-------------------------------------|-----------------------------|
| Both               | Date of deactivation                | idot:deprecationDate        |
| Both               | Approximated expiration date        | idot:deprecationOfflineDate |
| Both               | Deactivation statement              | idot:deprecationStatement   |
| Both               | Deactivation flag                   | idot:isDeprecated           |
| Both               | Legacy registry identifier (MIR ID) | idot:mirid                  |
| Both               | Sample local unique identifier      | idot:sampleID               |
| Namespace          | Type                                | idot:Namespace              |
| Namespace          | Local unique identifier pattern     | idot:luiPattern             |
| Namespace          | Prefix                              | idot:prefix                 |
| Namespace          | Successor                           | idot:sucessor               |
| Namespace          | Associated resource                 | idot:isNamespaceOf          |
| Resource           | Type                                | idot:Resource               |
| Resource           | Authentication details URL          | idot:authHelpUrl            |
| Resource           | Authentication description          | idot:authHelpDescription    |
| Resource           | Country code                        | idot:countryCode            |
| Resource           | Protected URLs flag                 | idot:hasProtectedUrls       |
| Resource           | Home URL                            | idot:homepage               |
| Resource           | primary flag                        | idot:isOfficial             |
| Resource           | Provider code                       | idot:providerCode           |
| Resource           | URL pattern                         | idot:urlPattern             |
| Resource           | Associated namespace                | idot:isResourceOf           |



## Resolving URLs with SPARQL
Similarly to our resolver service, our SPARQL endpoint is capable of converting identifier.org URIs into provider URLs and vice versa. For example: `http://identifiers.org/uniprot:P12345` resolves to `http://purl.uniprot.org/uniprot/P12345` and vice versa. This was specially developed with semantic data integration in mind, where one often needs to consume heterogeneous datasets which use different types of URIs. This service relies on URI schemes recorded in the Registry. If you find a URI which is not yet listed directly or incorrectly, [contact us](/pages/contact).

#### Implementation
URL Resolution is implemented as a virtual triple store using the [RDF4J SAIL API](https://rdf4j.org/documentation/reference/sail/). This means that query results are generated on the fly using the Registry's database content, and we don't actually have these triples in our dataset.

Queries must match URIs and URLs through the `owl:sameAs` property. It is meant to be used in [federated queries](https://www.w3.org/TR/sparql11-federated-query/) from other endpoints. See [the examples below](#sparql-query-examples) for more details.

The source code for this can be found at <https://github.com/identifiers-org/sparql-identifiers>. Special thanks to [Jerven Bolleman](https://orcid.org/0000-0002-7449-1266) for the contributions to this service.





### SPARQL query examples
Run the examples marked with [1] directly on our web frontend at <https://sparql.api.identifiers.org>. More examples are available there directly.

Run the examples marked with [2] on the Uniprot SPARQL endpoint at <https://sparql.uniprot.org/sparql>. Beware that these may take a while to respond.

#### List identifiers.org URIs equivalent to uniprot URL [1].
{: .mt-2}
[See in web interface](https://sparql.api.identifiers.org?query=PREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0ASELECT%20%2A%20WHERE%20%7B%0A%20%20%3Chttp%3A%2F%2Fpurl.uniprot.org%2Funiprot%2FP12345%3E%20owl%3AsameAs%20%3Furis%20.%0A%7D)

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
SELECT * WHERE {
  <http://purl.uniprot.org/uniprot/P12345> owl:sameAs ?uris .
}
```

#### List uniprot URLs equivalent to identifiers.org URI [1].
{: .mt-2}
[See in web interface](https://sparql.api.identifiers.org?query=PREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0ASELECT%20%2A%20WHERE%20%7B%0A%20%20%3Chttp%3A%2F%2Fidentifiers.org%2Funiprot%3AP12345%3E%20owl%3AsameAs%20%3Furis%20.%0A%7D)

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
SELECT * WHERE {
  <http://identifiers.org/uniprot:P12345> owl:sameAs ?uris .
}
```

#### List active rhea URLs using the `id:active` named graph [1].
{: .mt-2}
[See in web interface](https://sparql.api.identifiers.org?query=PREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0ASELECT%20%2A%0AWHERE%20%7B%0A%20%20GRAPH%20%3Cid%3Aactive%3E%20%7B%0A%20%20%20%20%3Chttps%3A%2F%2Fidentifiers.org%2Frhea%3A12345%3E%20owl%3AsameAs%20%3Fobj%20.%0A%20%20%7D%0A%7D%20LIMIT%2010)

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
SELECT *
WHERE {
  GRAPH <id:active> {
    <https://identifiers.org/rhea:12345> owl:sameAs ?obj .
  }
} LIMIT 10
```

#### Get protein metadata from uniprot based on identifiers.org URI [1].
{: .mt-2}
[See in web interface](https://sparql.api.identifiers.org?query=PREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX%20skos%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0APREFIX%20up%3A%20%3Chttp%3A%2F%2Fpurl.uniprot.org%2Fcore%2F%3E%0A%0ASELECT%20%2A%20WHERE%20%7B%0A%20%20%3Chttp%3A%2F%2Fidentifiers.org%2Funiprot%3AP12345%3E%20owl%3AsameAs%20%3Fprotein%20.%0A%20%20SERVICE%20%3Chttps%3A%2F%2Fsparql.uniprot.org%2Fsparql%3E%20%7B%0A%20%20%20%20%3Fprotein%20a%20up%3AProtein%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20up%3AencodedBy%20%5B%20skos%3AprefLabel%20%3Fname%20%5D%20.%0A%20%20%7D%0A%7D%0ALIMIT%201)

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT * WHERE {
  <http://identifiers.org/uniprot:P12345> owl:sameAs ?protein .
  SERVICE <https://sparql.uniprot.org/sparql> {
    ?protein a up:Protein ;
             up:encodedBy [ skos:prefLabel ?name ] .
  }
}
LIMIT 1
```



#### List homo-sapiens proteins with their uniprot URI and alternative URI [2].
{: .mt-2}

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX taxon: <http://purl.uniprot.org/taxonomy/>
PREFIX up: <http://purl.uniprot.org/core/>
SELECT DISTINCT * WHERE {
  ?protein a up:Protein ;
               up:organism taxon:9606 .
  SERVICE <http://sparql.api.identifiers.org/sparql> {
      ?protein owl:sameAs ?proteinAlt .
  }
}
LIMIT 1
```

#### Find proteins that have annotations to human entries that are known to be involved in a disease with alternative URIs [2].
{: .mt-2}

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX taxon: <http://purl.uniprot.org/taxonomy/>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT * WHERE {
  ?protein a up:Protein ;
           up:organism taxon:9606 ;
           up:encodedBy [ skos:prefLabel ?name ] ;
           up:annotation ?annotation .

  ?annotation a up:Disease_Annotation ;
              rdfs:comment ?text .

  SERVICE <http://sparql.api.identifiers.org/sparql> {
      ?protein owl:sameAs ?proteinAlt .
  }
}
LIMIT 1
```
