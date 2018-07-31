# Identification scheme
## Identification of data entities
The canonical URI for uniquely identifying data entities is of the form:

https://identifiers.org/[collection]/[entity]

In which one needs to replace [collection] with the namespace of a data collection and [entity] with the identifier of the entity created by the original data provider.

Examples of such URIs:
* https://identifiers.org/pubmed/22140103
* https://identifiers.org/taxonomy/9606
* https://identifiers.org/ec-code/1.1.1.1

** Those URIs should be used in most cases, as they directly identify the data.**

## Identification of Registry's records
Identification and reference to Registry's record is done via URIs of the form: http://info.identifiers.org/[collection]/[entity].

http://info.identifiers.org/taxonomy/9606
Those should only be used to identify and retrieve metadata provided by the Registry or access information in RDF/XML. Those URIs should NOT be used for identifying data entries.