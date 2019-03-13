# Identification scheme

## Identification of data entities using Compact Identifiers

### Compact Identifiers syntax
A Compact Identifier is a unique string consisting of a **Prefix** (assigned by curator), a colon (‘:’), and a **Local identifier** (eg. accession number string). The **Prefix** is composed of an assigned **Namespace**, which may be preceded by a **Provider Code**, separated by a slash (‘/’). 

Compact identifier syntax, with and without provider codes:
* namespace:accession
* provider_code/namespace:accession

**We recommend using Compact Identifiers for annotation and citation linked using identifiers.org URLs.**

## Identification of data entities using canonical URI
The canonical URI for uniquely identifying data entities is of the form:

`https://identifiers.org/[collection]/[entity]`

In which one needs to replace [collection] with the namespace of a data collection and [entity] with the identifier of the entity created by the original data provider.

Examples of such URIs:
* https://identifiers.org/pubmed/22140103
* https://identifiers.org/taxonomy/9606
* https://identifiers.org/ec-code/1.1.1.1

## Identification of Registry's records
Identification and reference to Registry's record is done via URIs of the form:

`https://info.identifiers.org/[collection]/[entity]`

Example:
* https://info.identifiers.org/taxonomy/9606

Those should only be used to identify and retrieve metadata provided by the Registry or access information in RDF/XML. Those URIs should NOT be used for identifying data entries.
