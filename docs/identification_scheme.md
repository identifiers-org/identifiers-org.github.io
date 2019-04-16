# Identification scheme

## Identification of data entities using Compact Identifiers

### Compact Identifiers syntax
A Compact Identifier is a unique string consisting of a **Prefix** (assigned by curator), a colon (‘:’), and an **Accession** (e.g. local identifier string). The **Prefix** is composed of an optional **Provider Code**, and an assigned **Namespace**, separated by a slash (‘/’).

### Examples

Compact identifier syntax, with and without provider codes:
* namespace:accession
  * [pubmed:22140103](https://identifiers.org/pubmed:22140103)
  * [https://identifiers.org/ec-code:1.1.1.1](https://identifiers.org/ec-code:1.1.1.1)
  * [taxonomy:9606](https://identifiers.org/taxonomy:9606)
* provider_code/namespace:accession
  * [epmc/pubmed:22140103](https://identifiers.org/epmc/pubmed:22140103)
  * [expasy/ec-code:1.1.1.1](https://identifiers.org/expasy/ec-code:1.1.1.1)
  * [ols/taxonomy:9606](https://identifiers.org/ols/taxonomy/9606)

**To use Compact Identifiers in annotation and citation, link them using identifiers.org URLs.**

## Linking of data entities using identifiers.org URLs

### identifiers.org URL syntax

The URL for uniquely linking to data entities is written in the following form:

`https://identifiers.org/[provider_code/]namespace:accession`

The optional parameter `provider_code` denotes the **Provider Code** part of the **Prefix**. It is trailed by a slash, to separate it from the required `namespace` , which is followed by a colon and the `accession`.

### Examples

* [https://identifiers.org/pubmed:22140103](https://identifiers.org/pubmed:22140103)
* [https://identifiers.org/ec-code:1.1.1.1](https://identifiers.org/ec-code:1.1.1.1)
* [https://identifiers.org/ols/taxonomy:9606](https://identifiers.org/ols/taxonomy:9606)

