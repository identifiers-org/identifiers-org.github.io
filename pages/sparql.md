---
layout: default
title: Identifiers.org documentation
---

# SPARQL Endpoint
The Identifiers.org SPARQL endpoint allows the conversion of URIs from one given scheme to the alternative equivalent ones. This was specially developed with semantic data integration in mind, where one often needs to consume heterogeneous datasets which use different types of URIs. This service relies on URI schemes recorded in the Registry. If you find a URI which is not yet listed directly by emailing us at <a href="mailto:identifiers-org@ebi.ac.uk">identifiers-org@ebi.ac.uk</a> or at our issues page at <https://github.com/identifiers-org/identifiers-org.github.io/issues>.

**Please note the Identifiers.org SPARQL endpoint is running at <http://sparql.api.identifiers.org/sparql>**

<div class="infobox mb-1"> <i class="icon icon-common icon-info text-primary size-300 mr-2"></i>
    <p class="mb-0"> 
        If you use this service, please let us know how it is being used through the aforementioned email or issue tracker. 
        We are very interested in how this is being used by the community and plan to improve the service in the <a href="https://github.com/elixir-europe/biohackathon-projects-2024/blob/main/13.md">2024 ELIXIR European BioHackathon</a>. Your input will be very important to ensure that this service is still useful for the community.
    </p>
</div>

## Implementation
This SPARQL Endpoint is implemented using Sesame openRDF platform. SPARQL query results are generated on the fly using the Registry's database content. Queries must match URIs and URLs through the `owl:sameAs` property and other types of queries are ignored. Therefore, this SPARQL Endpoint will not allow you to list all content in the database. It is meant to be used in [federated queries](https://www.w3.org/TR/sparql11-federated-query/) from other endpoints. See the examples below for more details.

The source code for this can be found at <https://github.com/identifiers-org/sparql-identifiers>. Special thanks to [Jerven Bolleman](https://orcid.org/0000-0002-7449-1266) for the contributions to this service.

## SPARQL query examples
Run the examples marked with [1] directly on our endpoint via some SPARQL client (example <https://yasgui.org/>).

Run the examples marked with [2] on the Uniprot SPARQL endpoint at <https://sparql.uniprot.org/sparql>. Beware that these may take a while to respond.



#### List identifiers.org URIs equivalent to uniprot URL [1].
{: .mt-2}

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
SELECT * WHERE {
  <http://purl.uniprot.org/uniprot/P12345> owl:sameAs ?uris .
}
```

#### List uniprot URLs equivalent to identifiers.org URI [1].
{: .mt-2}

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
SELECT * WHERE {
  <http://identifiers.org/uniprot:P12345> owl:sameAs ?uris .
}
```

#### List active rhea URLs using the `id:active` named graph [1].
{: .mt-2}

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
SELECT *
WHERE {
  GRAPH <id:active> {
    <https://identifiers.org/rhea:12345> owl:sameAs ?obj .
  }
} LIMIT 10
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
