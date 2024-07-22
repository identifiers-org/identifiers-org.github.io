---
layout: default
title: FAQ
description: Frequently Asked Questions about identifiers.org services
toc: false # Set this to true and build locally to regenerate toc 
---

# <i class="icon icon-common icon-question-circle"></i> Frequently Asked Questions

-   [General questions and definitions](#general-questions-and-definitions)
    -   [What is the Identifiers.org Registry?](#what-is-the-identifiersorg-registry)
    -   [What is MIRIAM, and what does it stand for?](#what-is-miriam-and-what-does-it-stand-for)
    -   [Why can’t I find my favourite data collection in the Registry?](#why-cant-i-find-my-favourite-data-collection-in-the-registry)
    -   [Are there plans to include more data collections?](#are-there-plans-to-include-more-data-collections)
    -   [What is a resource?](#what-is-a-resource)
    -   [Which collections are suitable for the Registry?](#which-collections-are-suitable-for-the-registry-)
    -   [What information is stored in the Registry?](#what-information-is-stored-in-the-registry)
-   [Identifiers.org](#identifiersorg)
    -   [What is Identifiers.org?](#what-is-identifiersorg)
    -   [What are Identifiers.org URIs?](#what-are-identifiersorg-uris)
    -   [Why do we need Identifiers.org persistent URIs?](#why-do-we-need-identifiersorg-persistent-uris)
    -   [How to generate Identifiers.org URIs?](#how-to-generate-identifiersorg-uris)
    -   [What types of legacy URIs exist?](#what-types-of-legacy-uris-exist)
-   [Create, edit and update collections](#create-edit-and-update-collections)
    -   [How are new collections added to the Registry?](#how-are-new-collections-added-to-the-registry)
    -   [What is the best way to make a submission to the Registry?](#what-is-the-best-way-to-make-a-submission-to-the-registry)
    -   [What is the process by which submitted collections are made publicly available for use?](#what-is-the-process-by-which-submitted-collections-are-made-publicly-available-for-use)
    -   [Who maintains URIs and their associated data?](#who-maintains-uris-and-their-associated-data)
    -   [How do you modify an existing collection?](#how-do-you-modify-an-existing-collection)
    -   [Who can delete an Identifiers.org URI or collection?](#who-can-delete-an-identifiersorg-uri-or-collection)
-   [Services and availability](#services-and-availability)
    -   [How do I find a collection suitable for a particular kind of annotation?](#how-do-i-find-a-collection-suitable-for-a-particular-kind-of-annotation)
    -   [Is there any way to determine the reliability of a resource before I use it?](#is-there-any-way-to-determine-the-reliability-of-a-resource-before-i-use-it)
    -   [Why can I not find a health check for my resource?](#why-can-i-not-find-a-health-check-for-my-resource)
    -   [Which services are available?](#which-services-are-available)
    -   [Where can I get the source code?](#where-can-i-get-the-source-code)
-   [Questions about users and curators](#questions-about-users-and-curators)
    -   [Who are the Registry curators?](#who-are-the-registry-curators)
    -   [Which general features are available to Registry users?](#which-general-features-are-available-to-registry-users)

## General questions and definitions

### What is the Identifiers.org Registry?
The Registry provides the necessary information for the generation and resolution of unique and perennial identifiers for life science data. Those identifiers are of the URI form and make use of Identifiers.org to provide direct access to the identified data records on the Web. Examples of these identifiers:

- <https://identifiers.org/pubmed:22140103>
- <https://identifiers.org/taxonomy:9606>

In order to fulfil this task, the Registry lists data collections and is composed of several services and resources.
The registry only hosts the core information required to the resolving infrastructure Identifiers.org.

This website (and the underlying database): provides interactive access to the list of recorded data collections and the associated information.
Web Services: provide programmatic access to the data collections, via SOAP-based, and REST-based Web Services.
A Java library: allows easy query of the SOAP-based Web Services.
The Registry is available at: <https://registry.identifiers.org>.

### What is MIRIAM, and what does it stand for?
MIRIAM is an acronym for the Minimal Information Required In the Annotation of Models. It is important to distinguish between the MIRIAM Guidelines, and the Registry. Both are part of the wider BioModels.net initiative.

Whilst originally designed to meet the needs of the computational modelling community, the Registry has previously been referred to as the 'MIRIAM Resources' and 'MIRIAM Registry'. Since then, to reflect its increased scope and diverse utility, it is currently known as the 'Registry' or 'Identifiers.org Registry'.
What is a data collection?
A data collection is defined as a set of data of the same kind, which usually originates from a specific data provider or is associated with a particular database. This primary data set may be available from a number of different physical locations on the Web or 'resources', but the core or essential information content across all those resources should be identical. By referring to a 'collection', we are able to reference this data set independently of where it is located. For example, protein entities could be referred to using UniProt, while a book could use ISBN. These are both 'data collections'.

The Registry stores for each data collection the list of resource(s) (or physical locations) that provide access to the data. Additional information is recorded; for more details, see below.

The scope or domain of each collection must be strictly defined: where a data provider references many types of data (for example genes and proteins), the collection scope must be clearly demarcated. On way to achieve this is by 'sub-classing' the different collections which may be provided by a particular data provider.

Note: data collections were historically known as 'data types', but this nomenclature was changed as its meaning was ambiguous.

### Why can't I find my favourite data collection in the Registry?
We invite you to use our [resolution service](/pages/services.html#resolver) to find your favorite collection. Failure to locate a collection could be due to one of the following reasons:

1. The collection you are looking for may have already been submitted, but is in the curation pipeline and hence not yet publicly available. 
2. The collection does not exist in the Registry, as it has never been submitted. You may [make the request](https://registry.identifiers.org/prefixregistrationrequest) yourself.
3. The collection does exist, but our search features where not able to help you find it. Feel free to [contact us](/pages/contact), and we will help you find what you need.

### Are there plans to include more data collections?
The content of the Registry is always open to be expended, but efforts are based on users needs. 
Thus, new data collections are primarily submitted by individual users or projects. 
However, we do perform an internal curation: submitted data collections are retained in the curation pipeline until any issues preventing their publication are addressed. 

Additionally, we also collaborate with various projects, which leads to the submission of whole batches of collections in order to cover specific requirements. For example, in collaboration with the Bio2RDF effort, we have incorporated a large proportion of data collections from their listings into the Registry.

### What is a resource?
We refer to resources as online services which provide information on elements of a collection.  
For each collection there are potentially many resources which may exist to provide information regarding their constituent entities. 
Some directly mirror the main resource, while others may provide slightly different views on the same core information. 
For example, PubMed is a collection that has a primary resource, as well as others, through which the same information can be accessed.
Where possible, the Registry identifies the 'primary' resource, but this is not necessary.


### Which collections are suitable for the Registry? <a name="data_requirements"></a>
There are a number of requirements for a collection to be suitable for addition to the Registry. 
Collections which do not comply with these requirements can still potentially be incorporated after curation. 
Each rule and rationale for its necessity is listed below:

- Collections should ideally be freely accessible to both academic and commercial users, with no restrictions, as this is essential for collaborative working.

- Access to information from the provider's webpage or through other services should not require any form of registration, whether or not it is free to use subsequently.

- The collection and should be actively maintained and community recognised, with at least one associated resource providing the dataset for this collection. There are many instances where short-term projects are abandoned and fast become outdated. Inclusion of such collections in the Registry could generate unnecessary clutter, detract from the other more suitable collections, and potentially result in the referencing of outdated information.

- Individual entities from a data collection should have an identifier which is stable, perennial and unique when used within the context of this collection. Additionally, this identifier should be used by each resource when providing access to it.

- The granularity of the data provided by the associated resource(s) must reflect that described by the collection. For instance, a resource that claims to provide information on pathways should contain at least some pathway information, rather than purely individual reactions.

- The atomicity of the information provided by a collection must be of the appropriate level, referring to one particular type of data. KEGG provides a good example of this: the Registry classifies the data available from KEGG into its constituent collections, each of which possesses a different root URI. For example, http://identifiers.org/kegg.pathway and http://identifiers.org/kegg.drug describe different collections (domain areas).

<!--
### What are 'restrictions'?

Restrictions indicate the potential limitation(s) of (re)using the URIs identifying entities from some data collections. 

Collections with restrictions can be used (for example in cross-references), but the user must be aware that these will be limited in some way, and that it may be advisable to find a more suitable alternative collection. 

Collections with such restrictions are clearly indicated in the Registry. The current list of restrictions is as follows:


- **Access restriction**: the way this data collection is distributed prevents linking to one specific entity. For example, access may require user authentication or the data might be distributed as a whole set and preclude links to individual records.


- **Collection maintenance**: while this collection is included in the Registry, it is unclear whether records or resource(s) are actively maintained and up-to-date. Collections bearing this restriction are unlikely to have been updated in some time, and should be used with caution.


- **Collection subset**: this data collection reuses an identifier scheme associated with another collection, as well as potentially reusing a significant portion of the data from that collection. Users should be wary of associating the appropriate namespace when constructing URIs, since it is possible that individual entities may exist in both collections, or exclusively in one of them.


- **Data aggregation**: this restriction is associated with data collections which are an aggregated set of different types of data. For example, they could allow identification of protein, DNA and RNA within the same collection. One should therefore not expect each record within data collections with this restriction to refer to directly comparable entities.


- **Identifier independence**: this restriction is associated with identifiers that do not originate from any particular data collection. These collection-independent identifiers may potentially be used to both identify an entity, as well as provide some further information. Examples include InChi and InChiKey, which provide structural information for chemical entities, and can be used to access records in a variety of data collections.


- **Identifier instability**: records from this data collection use non-perennial identifiers. This may be the result of the reallocation of identifiers between subsequent data releases. Users are strongly advised to find an alternative data collection with which to identify information of interest.


- **Identifier multiplicity**: this restriction is associated with data collections which assign more than one identifier for a given record. This may be due to a revision of the identification scheme used by a data provider, who wishes to continue to allow historical identifiers to remain valid.


- **Identifier non-conformity**: this restriction is associated with data collections whose published identifier scheme does not follow the recommended requirements. For example, such identifiers may contain too much semantic information which could hinder their future stability (such as being composed of words, partial sentences, or in some cases even provide a full structural representation of substances). Users should consult the specific documentation given by the data provider.


- **License restriction**: this restriction is associated to data collections which are made available under restrictive licenses. For example, this may preclude their use by commercial organisations or for commercial purposes. Users should consult the specific terms and conditions given by the data provider. -->

### What information is stored in the Registry?
The Registry records for each data collection the following information:

|               Information | Description                                                                                         |
|--------------------------:|:----------------------------------------------------------------------------------------------------|
|                      Name | The name assigned to the collection.                                                                |
|               Description | A brief description of the type of information found in the collection.                             |
|  Local Identifier pattern | The most restrictive regular expression to match any valid local identifier used in the collection. |
|          Namespace prefix | Small string of character used to identify the collection in the generated URIs.                    |
|        Physical Locations | List of resources that provide access to record from the collection.                                |
|         Sample ID and URL | Example of an element which can be cross-referenced from the collection.                            |
|          Date of creation | When the collection was added to the Registry.                                                      |
| Date of last modification | Date of the last modification to this collection record in the Registry.                            |
|        Deprecation status | Whether the record is still active or not and the data that we marked it as inactive                |
{: .hover }

In addition, most of the elements recorded by the Registry (such as collections and resources) have unique identifiers associated to them. 
These are the namespace prefixes and provide codes which are used by our [resolution service](/pages/services.html#resolver) 

## Identifiers.org

### What is Identifiers.org?
Identifiers.org provides a complete identification infrastructure. 
This system relies on an identification scheme using resolvable (which can be used online) URIs.

The aim is to provide a community-agreed means to create stable, perennial and globally unique identifiers, which can be used to reference data. 
Additionally, the system decouples the identification of records from the physical locations on the web where they can be retrieved.

### What are Identifiers.org URIs?
They are stable, perennial and globally unique URIs which can be used to annotate a wide range of entities or concepts from a plethora of fields, including: proteins, diseases, publications and ontological terms. 
They can be used unchanged for a wide range of tasks, as they are both unique and directly usable online.

Identifiers.org URIs are persistent since they shield the user from changes in the underlying, resource specific, URLs.
Example: <http://identifiers.org/pubmed/23584831>, which is the URI that identifies the latest publication about this system in PubMed.

Identifiers.org URIs are composed of three main parts: <a name="url_structure"></a>

- **The root URI** _http://identifiers.org/_ which allows the resolving mechanism to work;
- **The namespace prefix** _pubmed_ defines the collection under consideration; and
- **the local identifier** _23584831_ which precisely identifies the record within this collection (assigned by the data provider).

Additional examples, showing the different types of URIs:

- EC-code collection: <http://identifiers.org/ec-code>
- EC-code record: <http://identifiers.org/ec-code/1.1.1.1>
- 4D Nucleome record: <https://identifiers.org/4dn:4DNES265ETYQ>

This URI scheme relies on a list of community agreed _'namespaces'_ which are recorded in the Registry. Please refer to the list of detailed examples for more information on how to use the URIs.

### Why do we need Identifiers.org persistent URIs?

The use of URIs allows one to:
- Uniquely and unambiguously identify an entity in a stable and perennial manner;
- Link an identified entity to one or more online resources which provides additional information or access to the identified data;
- Store cross-references in files or databases and at the same time display them to end users, as they are both stable and directly resolvable persistent URLs.

With the progress of Linked Data and Semantic Web initiatives, as well as feedback and suggestions from the community, it is necessary to provide identifiers in the form of resolvable URIs (URLs). 
These persistent URL are better suited to the Linked Data vision, and provide users the clickable links for which they expressed a need for.
The resolvable URL will itself be of a structured syntax.
The URL will resolve to one of the resources serving the information for that collection.

### How to generate Identifiers.org URIs?
The first step is to make sure the data you need to identify comes from a collection which is already recorded in the Registry. 
You can launch a search in our [resolution service](/pages/services.html#resolver) to find that out. 
If the collection is not present in the Registry, then you will need to [submit it](https://registry.identifiers.org/prefixregistrationrequest).

Once you know that the collection you wish to use is registered, and you have the prefix of the namespace, you simply have to assemble the URL.
Simply start with the base url "http://identifiers.org/", then append the namespace prefix and the local id desired separated by a colon(:) or a slash(/) character.
Please refer to [the structure of Identifiers.org](#url_structure) URIs for more details.

### What types of legacy URIs exist?
Initially, the Registry associated up to two official URIs with each collection: one URN and one URL. 
These URIs were based on some existing identifiers (for example LSIDs) and some domain names, whenever possible. 
This can still be observed in the list of deprecated URIs maintained for the collections. 
However, it became apparent that there were various issues with these inconsistent URIs.

During the Super-hackathon about Standards and ontologies for Systems Biology in Okinawa, Japan (January 2008), there was a consensus to provide only URNs. 
Those were of the form: _urn:miriam:pubmed:16333295_. 
For more information about the URN Namespace that was previously used by the Registry, please refer to its [RFC](https://www.rfc-editor.org/rfc/rfc8141.html).

Since 2011, these URNs have been superseded by Identifiers.org URIs. 
They are built in a very similar way (they share the same 'namespaces') with the benefit that Identifiers.org URIs do not require any encoding of the local identifier. 
Both forms, URNs and URLs, are interconvertible and the Registry's web services can perform this task.

## Create, edit and update collections

### How are new collections added to the Registry?
It is important to note that **the content of the Registry is based on users needs**. 
Curators may add new data collections from time to time as they encounter them, but generally the creation of new collections should be considered as being 'on demand' from the community. 
Therefore, new data collections are primarily submitted by individual users or projects as needed.

The main method by which the community requests the addition of a new collection is [prefix registration request form](https://registry.identifiers.org/prefixregistrationrequest). 
This submission process is open to absolutely everyone.

Community requests of course may entail the incorporation of large sets of collections. 
In this case, we suggest you to contact us, so that we can provide you a more convenient way to handle your submissions.

We perform an internal curation for each submission. 
Submitted data collections are retained in the curation pipeline until any issues preventing their publication are addressed.

### What is the best way to make a submission to the Registry?
There are a number of checks that can be done in advance to speed entry of a requested collection into the Registry:

- Check that the requested resource meets with [requirements](#data_requirements) for entry into the Database,
- Complete as many of the optional fields presented on the [submission page](https://registry.identifiers.org/prefixregistrationrequest),
- Provide a contact email - though optional, this enables discussion between requester and curator to clarify any requirements.

Once the form is completed, and the request submitted, an online confirmation of your request is displayed in the browser window. 
Please do not expect to receive an email confirmation of your request, particularly if you did not provide an email address with the submission form.

### What is the process by which submitted collections are made publicly available for use?
Once submitted, requested collections enter a curation pipeline. 
This is to ensure suitability for use in annotation, and to confirm that such use would not infringe copyright and license issues of the corresponding resource. 
In effect, the resource is evaluated against the principles for Registry inclusion. 
In some cases the curator may wish to contact the submitter to clarify some aspect of the submission. 
For example to determine which particular collection the user would like to be able to reference if the submission is ambiguous. 
Also, the curator may contact the provider of the resource to clarify any issues, for example with identifier range, or with copyright issues. 
Once this process is completed, the new collection is 'published' in the Registry, for use by the community.
It may take some minutes for a collection to be online after it is published.

### Who maintains URIs and their associated data?
As with submissions, it is important to note that collection entries are not updated automatically, should their associated resources change. 
We endeavour to regularly check the validity and access to the associated resources, and do our best to keep information it up to date. 
**However, if you are frequent user of a particular collection, and notice an issue with, for example, dereferencing an Identifiers.org URI, please let us know.** 
Similarly, if you are the maintainer of a resource, and you are aware of some upcoming change that would affect our systems, please [contact us](contact.html).
Thank you in advance for your assistance.

### How do you modify an existing collection?
Absolutely anyone can request the modification of an existing collection. 
Simply [contact us](contact) with the request.
Suggested modifications need to be confirmed by a curator prior to publication to the main site.

### Who can delete an Identifiers.org URI or collection?
Collections which entered the Registry also cannot be deleted completely, but can be deprecated if it is not maintained any more and the underlying data becomes unavailable.
In this case, collections are clearly marked as being deprecated, and users are recommended to find another collection with which to generate Identifiers.org URIs.

## Services and availability
### How do I find a collection suitable for a particular kind of annotation?
Since the number of collections listed in the Registry is continuously increasing, it can become difficult to find a suitable collection to annotate a particular kind of entity, for instance a 'protein'. 
In addition, there may be a substantial number of suitable collections with which one could generate an appropriate Identifiers.org URI. 
The search function can be used to retrieve collections, based on their name, definition and other associated information.

### Is there any way to determine the reliability of a resource before I use it?
Some resources are more reliable than others, for the same collection. 
Therefore, users may wish to make a choice as to which resource to use. 
For this reason, we have implemented a 'Health Check' status and history for the resources listed in the Registry. 
This allows one to differentiate the stability or reliability of the various resources recorded in the Registry. 
This feature is transparent to the user as the resolver will pick the best resource to resolve a URL to.

<!--
The features of this utility are listed below:

- **Resource summary table**:

the main information page for each collection lists the resources that can be used to access the information for that particular collection. 

This tabulated list of resources is arranged in descending order of uptime, where the first resource will be the most reliable site through which collection information can be accessed. 

Uptime records are initiated from the time the resource is entered into the Registry, or from the time that the Health Check system was implemented (for resources listed prior to this implementation).


- **Resource colour coding**:

each of the resources listed in the summary table is colour coded to signify its uptime. 

The range of colours scale from green (up and responsive), to red (resource down). 

More information on this scale can be found below.


- **Resource uptime**:

the precise uptime for each resource listed in the summary table is available as a mouse over display, when holding the cursor over the resource identifier in the left-most cell of each table row.


- **Resource history**:

each individual resource for a collection in the summary table is hyper-linked to more detailed information. 

This displays a summary of the checks that have been executed since the collection was introduced into the Registry. 

This includes information on the 'current state', time of the last check, and the URL used to execute the health check. 

In addition, there is a calendar view for each resource, colour-coded with the status of that resource since its introduction into the Registry.


The Health Check status is meant only to signify broadly the uptime of a particular resource, and is in no way to be perceived as an accurate depiction of true reliability.

For example, our system is unable to reliably detect uptime for pages whose content is loaded via JavaScript, and these will be listed as 'probably up'. 

In addition, some resources may be slow at the particular time of day when our checks are executed, and consequently may be listed as 'down', while they are actually 'up'.


The colour-coded display of uptime in the summary table follows this scheme:


90% or more 'uptime': dark green

65% to 89% 'uptime': pale green

21% to 64% 'uptime': pink

20% or less 'uptime': red

For Registry curators, this 'Health Check' also provides an early warning system for changes made to collections listed in the the Registry. This allows a rapid update of the information held, for example, where servers have moved to a new location, or where access URLs or identifiers have been modified. This minimises connectivity issues and other disruptions that would otherwise be the result for users of our systems.


We welcome feedback from users of this system, and on any further suggestions on how it could be improved. We also encourage data providers to contact us if they have any concerns on the information we display, and on ways this could be improved in the future. We can be contacted through the contact page. -->

### Why can I not find a health check for my resource?
Once a resource is registered against a particular data collection, there is a small delay before the newly incorporated information is used to perform routine health checks.
Since the health checks are performed daily at a particular time, it is usual for these newly registered resources to appear in the automated checks the subsequent day. 
Hence, there is potentially a 24-hour delay between the registering on a new resource, and its incorporation into the health check system.

### Which services are available?
The Registry provides an extensive [REST API](/pages/api.html), particularly for resolving URIs. Numerous queries are available and a [Java library](https://github.com/identifiers-org/cloud-libapi) is provided for a quick and easy usage.

### Where can I get the source code?
All source code related to identifiers.org is available, under the terms of the GNU General Public License, through our [GitHub page](https://github.com/identifiers-org).
Please [contact us](/pages/contact) if you have any enquiries about the software and its source code.

## Questions about users and curators
### Who are the Registry curators?
Curators are users who have been given curation rights on the Registry.
These rights are given to the team here at EBI that manages the system and to some community members.

### Which general features are available to Registry users?
All users can perform several actions through the web interface:

- Access the list of all available collections
- View all the information stored about a collection
- Submit new collections
- Suggest modifications to existing collections
- Use the Web Services
- Export the content of the database
- Registry citation and contact information
