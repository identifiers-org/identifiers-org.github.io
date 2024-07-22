---
layout: default
title: REST API documentation
description: Details of identifiers.org REST API endpoints
---

<a id="top-of-page-button" href="#"><i class="icon icon-common icon-caret-square-up"></i></a>

## <i class="icon icon-common icon-code mr-2"></i>API documentation 
{: .blurb} 

<div class="infobox">
<i class="icon icon-common icon-info text-primary size-300 mr-2"></i>
<p class="mb-0">
    The main service in Identifiers.org is Compact Identifier resolution. Appending a Compact Identifier to the
    URL, as explained in the <a href="/pages/identification_scheme">identification scheme</a>, will
    redirect the requester to the relevant item in the specified resource.
</p> 
</div>

	
The rest of the API service infrastructure is divided in two different areas: [Resolution
API](#resolution) and [Registry API](#registry).
	







### Resolution API 
{: #resolution .mt-5 }

The Identifiers.org Resolution API is located at: <https://resolver.api.identifiers.org>. 
It provides the resolver endpoint. This is a new feature, not present in the old platform. 
This endpoint will return a list of the available providers for a resource, along with some information about them. 
Refer to the example for more details.

#### Resolution API services
{: .mt-2 }

##### <i class="icon icon-common icon-external-link-alt mw-2"></i>Compact Identifier resolution

- **Endpoint:** `https://resolver.api.identifiers.org/{COMPACT_ID}`
- **Description:** Resolves a Compact Identifier and returns a list of resolved resources, sorted by its recommended usage index.
- **Example:**
  - <http://resolver.api.identifiers.org/taxonomy:9606>
  - &#8618; Finds all resources for compact identifier `taxonomy:9606`
  {: .list-none}
{: .list-none}






### Registry API 
{: #registry .mt-5 }

The Identifiers.org registry API is located at: <https://registry.api.identifiers.org>.
It provides a RESTful API which allows users to navigate the whole registry using the <a href="https://restfulapi.net/hateoas/" target="_blank">HATEOAS standard</a>. 
Outside the REST API, a series of endpoints are provided for special actions, like requesting the registration of a prefix, or downloading the whole dataset. 
Details are provided below.
	

#### Registry API services
{: .mt-2 }

##### Data model
- [Namespaces](#namespaces)
- [Resources](#resources)
- [Institutions](#institutions)
- [Locations](#locations)

##### Mass retrieval
- [Resolver dataset](#getdataset)

##### Prefix registration request
- [Prefix request](#prefixrequest)
- [Validate resource name](#validatename)
- [Validate resource description](#validatedescription)
- [Validate resource references](#validatereferences)
- [Validate resource additional information](#validateadditionainformation)
- [Validate resource Sample ID](#validatesampleid)
- [Validate resource Regex pattern](#validateregexpattern)
- [Validate institution name](#validateinstitutionname)
- [Validate institution description](#validateinstitutiondescription)
- [Validate institution home URL](#validateinstitutionhomeurl)
- [Validate institution location](#validateinstitutionlocation)
- [Validate institution provider name](#validateprovidername)
- [Validate provider description](#validateproviderdescription)
- [Validate provider location](#validateproviderlocation)
- [Validate provider code](#validateprovidercode)
- [Validate provider home URL](#validateproviderhomeurl)
- [Validate provider URL pattern](#validateproviderurlpattern)
- [Validate requester](#validaterequester)
- [Validate requester's email](#validaterequesteremail)
- [Validate requester's name](#validaterequestername)

##### Usage statistics
- [Namespace usage](#statisticsnamespaceusage)







<!-- ----------------------------------------------------------------------------------------------------------------- -->
<!-- NAMESPACES -->
#### <i class="icon icon-common icon-leaf mw-2"></i> Namespaces 
{: #namespaces .mt-2 }

##### Browse namespaces
- **Endpoint:** `https://registry.api.identifiers.org/restApi/namespaces`
- **Method:** GET
- **Description:** Returns a portion of the namespace list in the registry.
- **Parameters:**
  - `page` Specifies the page number requested
  - `size` Specifies the number of elements per page
  - `sort` Sorting parameter in the form field,order (eg: name,asc)
- **Example**: 
  - <https://registry.api.identifiers.org/restApi/namespaces?sort=name,asc>
  - &#8618; Gets the first 20-element page of the namespace list, sorted by name.
  {: .list-none}
{: .list-none}

<!-- FIND NAMESPACES BY PREFIX -->
##### Find namespace by prefix
- **Endpoint:** `https://registry.api.identifiers.org/restApi/namespaces/search/findByPrefix`
- **Method:** GET
- **Description:** Returns one namespace from the registry with a given prefix.
- **Parameters:**
  - `prefix` **Required** Specifies the exact string to search
- **Example:** 
  - <https://registry.api.identifiers.org/restApi/namespaces/search/findByPrefix?prefix=taxonomy>
  - &#8618; Finds a namespace with the prefix 'taxonomy'.
  {: .list-none}
{: .list-none}


<!-- FIND NAMESPACES BY PREFIX STARTS WITH -->
##### Find namespace by prefix starting with
- **Endpoint:** `https://registry.api.identifiers.org/restApi/namespaces/search/findByPrefixStartsWith`
- **Method:** GET
- **Description:** Returns all namespaces in the registry which prefix start with a given string.
- **Parameters:**
  - `prefixStart` **Required** Specifies the starting string.
  - `page` Specifies the page number requested.
  - `size` Specifies the number of elements per page.
  - `sort` Sorting parameter in the form field,order (eg: name,asc).
- **Example:**
  - <https://registry.api.identifiers.org/restApi/namespaces/search/findByPrefixStartsWith?prefixStart=tax>
  - &#8618; Finds all namespaces with a prefix starting with 'tax'.
  {: .list-none}
{: .list-none}

<!-- FIND NAMESPACES BY PREFIX CONTAINS -->
##### Find namespace by prefix containing
- **Endpoint:** `https://registry.api.identifiers.org/restApi/namespaces/search/findByPrefixContaining`
- **Method:** GET
- **Description:** Returns all namespaces in the registry which prefix contains a given string.
- **Parameters:**
  - `content` **Required** Specifies the containing string.
  - `page` Specifies the page number requested.
  - `size` Specifies the number of elements per page.
  - `sort` Sorting parameter in the form field,order (eg: name,asc).
- **Example:**
  - <https://registry.api.identifiers.org/restApi/namespaces/search/findByPrefixContaining?content=onomy>
  - &#8618; Finds all namespaces with a prefix containing the string 'onomy'.
  {: .list-none}
{: .list-none}




<!-- ----------------------------------------------------------------------------------------------------------------- -->
<!-- RESOURCES -->
#### <i class="icon icon-common icon-cubes mw-2"></i> Resources 
{: #resources .mt-2}

##### Browse resources
- Endpoint: `https://registry.api.identifiers.org/restApi/resources`
- **Method:** GET
- **Description:** Returns a portion of the resources list in the registry.
- **Parameters:**
  - `page` Specifies the page number requested.
  - `size` Specifies the number of elements per page.
  - `sort` Sorting parameter in the form field,order (eg: name,asc).
- **Example:**
  - https://registry.api.identifiers.org/restApi/resources?page=8&size=10
  - &#8618; Gets the eighth 10-element page of the resources list.
  {: .list-none}
{: .list-none}


<!-- FIND RESOURCES BY PROVIDER CODE -->
##### Find resources by provider code
- **Endpoint:** `https://registry.api.identifiers.org/restApi/resources/search/findByProviderCode`
- **Method:** GET
- **Description:** Returns all resources in the registry with a given provider code.
- **Parameters:**
  - `providerCode` **Required** Specifies the provider code.
- **Example:**
  - <https://registry.api.identifiers.org/restApi/resources/search/findByProviderCode?providerCode=ols>
  - &#8618; Finds all resources with provider code 'ols'.
  {: .list-none}
{: .list-none}


<!-- FIND RESOURCES BY NAMESPACE ID -->
##### Find resources by namespace id
- **Endpoint:** `https://registry.api.identifiers.org/restApi/resources/search/findAllByNamespaceId`
- **Description:** Returns all namespaces in the registry which are related to a given namespace ID.
- **Parameters:**
  - `id` **Required** Specifies the namespace ID. 
- **Example:**
  - <https://registry.api.identifiers.org/restApi/resources/search/findAllByNamespaceId?id=28>
  - &#8618; Finds all resources with namespace ID 28 (taxonomy).
  {: .list-none}
{: .list-none}

<!-- FIND RESOURCES BY NAMESPACE ID AND PROVIDER CODE -->
##### Find resources by namespace id and provider code
- **Endpoint:** `https://registry.api.identifiers.org/restApi/resources/search/findByNamespaceIdAndProviderCode` 
- **Method:** GET 
- **Description:** Returns all namespaces in the registry which are related to a given namespace ID and a provider code. 
- **Parameters:**
  - `id` **Required** Specifies the namespace ID.</li>
  - `providerCode` **Required** Specifies the provider code.</li>
- **Example:**
  - <https://registry.api.identifiers.org/restApi/resources/search/findByNamespaceIdAndProviderCode?namespaceId=28&providerCode=ols>
  - &#8618; Finds all resources with namespace ID 28 (taxonomy) and provider code 'ols'.
  {: .list-none}
{: .list-none}




<!-- ----------------------------------------------------------------------------------------------------------------- -->
<!-- INSTITUTIONS -->
#### <i class="icon icon-common icon-sitemap mw-2"></i> Institutions 
{: #institutions .mt-2}

##### Browse institutions
- **Endpoint:** `https://registry.api.identifiers.org/restApi/institutions`
- **Method:** GET 
- **Description:** Returns a portion of the institutions list in the registry. 
- **Parameters:**
  - `page` Specifies the page number requested.
  - `size` Specifies the number of elements per page.
  - `sort` Sorting parameter in the form field,order (eg: name,asc).
- **Example:**
  - <https://registry.api.identifiers.org/restApi/institutions?size=1000>
  - &#8618; Gets at most 1000 institutions from the registry. This is a hard limit, and it is still recommended to paginate and launch multiple smaller requests.
  {: .list-none}
{: .list-none}

<!-- FIND INSTITUTIONS BY NAME -->
##### Find institutions by name
- **Endpoint:** `https://registry.api.identifiers.org/restApi/institutions/search/findByName`
- **Method:** GET
- **Description:** Returns all institutions with the given name from the registry.
- **Parameters:**
  - `name` **Required** Specifies the exact name to find.
- **Example:**
  - <https://registry.api.identifiers.org/restApi/institutions/search/findByName?name=EBI>
  - &#8618; Finds all institutions with name 'EBI'.
  {: .list-none}
{: .list-none}


<!-- FIND INSTITUTIONS BY NAME CONTAINING -->
##### Find institutions by name containing
- **Endpoint:** `https://registry.api.identifiers.org/restApi/institutions/search/findByNameContaining`
- **Method:** GET
- **Description:** Returns all institutions which name contains a given string.
- **Parameters:**
  - `name` **Required** Specifies the string the name must contain.
- **Example:**
  - <https://registry.api.identifiers.org/restApi/institutions/search/findByNameContaining?nameContent=EMBL>
  - &#8618; Finds all institutions with name containing 'EMBL'.
  {: .list-none}
{: .list-none}


<!-- FIND INSTITUTIONS BY LOCATION COUNTRY CODE -->
##### Find institutions by location country code
- **Endpoint:** `https://registry.api.identifiers.org/restApi/institutions/search/findByLocationCountryCode`
- **Method:** GET
- **Description:** Returns all institutions which location has a given country code.
- **Parameters:**
  - `countryCode` **Required** Specifies the country code for the institution's location.
- **Example:**
  - <https://registry.api.identifiers.org/restApi/institutions/search/findByLocationCountryCode?countryCode=GB>
  - &#8618; Finds all institutions based in Great Britain.
  {: .list-none}
{: .list-none}





<!-- ----------------------------------------------------------------------------------------------------------------- -->
<!-- LOCATIONS -->
#### <i class="icon icon-common icon-globe mw-2"></i> Locations 
{: #locations .mt-2}

##### Browse locations
- **Endpoint:** `https://registry.api.identifiers.org/restApi/locations`
- **Method:** GET
- **Description:** Returns a portion of the locations list in the registry.
- **Parameters:**
  - `page` Specifies the page number requested.</li>
  - `size` Specifies the number of elements per page.</li>
  - `sort` Sorting parameter in the form field,order (eg: name,asc).</li>
- **Example:**
  - <https://registry.api.identifiers.org/restApi/locations?sort=countryName,asc>
  - &#8618; Gets the first 20-element page of locations, sorted by ascending country name.
  {: .list-none}
{: .list-none}


<!-- FIND LOCATIONS BY COUNTRY CODE -->
##### Find locations by country code
- **Endpoint:** `https://registry.api.identifiers.org/restApi/locations/search/findByCountryCode`
- **Method:** GET
- **Description:** Returns a location with a given country code. Country codes adhere to the [ISO-3166 Country Codes Standard](https://www.iso.org/iso-3166-country-codes.html)
- **Parameters:**
  - `countryCode` **Required** Specifies the exact country code to find.
- **Example:**
  - <https://registry.api.identifiers.org/restApi/locations/search/findByCountryCode?countryCode=GB>
  - &#8618; Finds the location with country code 'GB' (Great Britain).
  {: .list-none}
{: .list-none}




<!-- ----------------------------------------------------------------------------------------------------------------- -->
<!-- GETRESOLVERDATASET -->
#### <i class="icon icon-common icon-cloud-download-alt mw-2"></i> Resolver dataset 
{: #getdataset .mt-2}

- **Endpoint:** [`https://registry.api.identifiers.org/resolutionApi/getResolverDataset`](https://registry.api.identifiers.org/resolutionApi/getResolverDataset)
- **Method:** GET
- **Description:** Returns a copy of the whole registry.
- **Parameters:**
  - `rewriteForEmbeddedPrefixes` **<u>Currently in testing.</u>** This flag removes prefixes from the URL patterns of namespaces that have the "Prefix embedded in LUI" flag set. This aims to solve the issue that some users have to namespaces like [GO](https://registry.identifiers.org/registry/go) and [MGI](https://registry.identifiers.org/registry/mgi) that commonly have references stored as full compact identifiers. Now users can directly plug the full compact identifier into URL patterns instead of having to split it themselves. This is an optional feature to not affect current users of the dataset. Please let us know if this is not working as intended. [Example](https://registry.api.identifiers.org/resolutionApi/getResolverDataset?rewriteForEmbeddedPrefixes=true).
  {: .list-none}
- **Example:**
  - <https://registry.api.identifiers.org/resolutionApi/getResolverDataset>
  - &#8618; List of namespaces and resources as they are on the registry.
  - <https://registry.api.identifiers.org/resolutionApi/getResolverDataset?rewriteForEmbeddedPrefixes=true>
  - &#8618; List of namespaces and resources with rewritten URL patterns.
  {: .list-none}




<!-- ----------------------------------------------------------------------------------------------------------------- -->
<!-- PREFIXREQUEST -->
#### <i class="icon icon-common icon-tasks mw-2"></i> Prefix request 
{: #prefixrequest .mt-2}

<!-- SUBMIT PREFIX REGISTRATION REQUEST -->
##### Submit prefix registration request
- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/registerPrefix`
- **Method:** POST
- **Description:** Submits a Prefix registration request.
- **Body example:**
    ```json 
    {
        "apiVersion": "1.0",
        "payload": {
            "name": "A new resource",
            "description": "A description with more than 50 characters for the new resource!",
            "requestedPrefix": "newres",
            "sampleId": "200",
            "idRegexPattern": "[0-9]{3}",
            "references": [
                "Reference 1",
                "Reference 2"
            ],
            "additionalInformation": ["Additional information for our new resource."],
            "institutionName": "New Resources inc.",
            "institutionHomeUrl": "https://www.example.com",
            "institutionDescription": "A description with more than 50 characters for the institution.",
            "institutionLocation": "GB",
            "providerName": "New Resources inc.",
            "providerCode": "nri",
            "providerDescription": "A description with more than 50 characters for the institution.",
            "providerHomeUrl": "https://www.example.com",
            "providerUrlPattern": "https://httpstat.us/{$id}",
            "protectedUrls": false,
            "authHelpUrl": null,
            "authHelpDescription": null,
            "providerLocation": "GB",
            "requester": {
                "name": "John Doe",
                "email": "johndoe@example.com"
            }
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": "INVALID Prefix registration request due to ''https://www.example.com'' is not a valid URL",
        "payload": {
            "comment": "No comments on your prefix registration request",
            "token": ""
        }
    }
    ```
{: .list-none}


<i class="icon icon-common icon-info text-primary"></i>
This request will intentionally fail due to the field `institutionHomeUrl: "https://www.example.com"` containing a malformed URL.

<i class="icon icon-common icon-exclamation-triangle text-warning"></i>
Please keep in mind **this is a live endpoint** creating Prefix registration request entries. 
We would kindly request not to use it to test your application or spam it in any other way.
Preferentially, use our [request form](https://registry.identifiers.org/prefixregistrationrequest).





#### <i class="icon icon-common icon-tasks mw-2"></i> Prefix request validation
{: .mt-2 }

The following endpoints provide the validation services for all the fields in a Prefix registration request.
	

<!-- VALIDATE NAME -->
##### Validate resource name
{:#validatename}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateName`
- **Method:** POST
- **Description:** Validates a resource name. 
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "name": "resource name"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE DESCRIPTION -->
##### Validate resource description 
{:#validatedescription}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateDescription`
- **Method:** POST
- **Description:** Validates a resource description.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "description": "Too short"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": "Prefix request description must be longer than 50 characters",
        "payload": {
            "comment": "VALIDATION FAILED",
            "token": ""
        }
    }
    ```
{: .list-none}



<!-- VALIDATE REFERENCES -->
##### Validate resource references 
{:#validatereferences}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateReferences`
- **Method:** POST
- **Description:** Validates resource references.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "references": [
                "1",
                "2"
            ]
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}

<i class="icon icon-common icon-info text-primary"></i> 
References are optional, so this endpoint will always return OK.


<!-- VALIDATE ADDITIONAL INFORMATION -->
##### Validate resource additional information 
{:#validateadditionainformation}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateAdditionalInformation`
- **Method:** POST
- **Description:** Validates the additional information field of a resource.
- **Body example:**
    ```json
    {
            "apiVersion": "1.0",
            "payload": {
                "additionalInformation": "My grandma's name is ..."
            }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}

<i class="icon icon-common icon-info text-primary"></i>
Additional information field is optional, so this endpoint will always return OK.


<!-- VALIDATE SAMPLE ID -->
##### Validate resource Sample ID 
{:#validatesampleid}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateSampleId`
- **Method:** POST
- **Description:** Validates a Sample ID using a provider URL.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "sampleId": "200",
            "providerUrlPattern": "https://httpstat.us/{$id}"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}

<i class="icon icon-common icon-info text-primary"></i>
To validate a Sample ID, the Provide URL pattern where that ID must be substituted must also be provided, 
and the final URL must point to a working document.



<!-- VALIDATE REGEX PATTERN -->
##### Validate resource Regex pattern 
{:#validateregexpattern}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateIdRegexPattern`
- **Method:** POST
- **Description:** Validates a Regex pattern against a Sample ID.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "idRegexPattern": "[a-z]*",
            "sampleId": "testpattern"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}

<i class="icon icon-common icon-info text-primary"></i>
To validate a Regex pattern, the Sample ID must also be provided, so the Regex can be tested against it.


<!-- VALIDATE INSTITUTION NAME -->
##### Validate institution name 
{:#validateinstitutionname}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateInstitutionName`
- **Method:** POST
- **Description:** Validates a institution name.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "institutionName": "ebi"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE INSTITUTION DESCRIPTION -->
##### Validate institution description 
{:#validateinstitutiondescription}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateInstitutionDescription`
- **Method:** POST
- **Description:** Validates a institution description.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "institutionDescription": "Lorem ipsum dolor sit amet."
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE INSTITUTION HOME URL -->
##### Validate institution home URL 
{:#validateinstitutionhomeurl}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateInstitutionHomeUrl`
- **Method:** POST
- **Description:** Validates an institution home URL.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "institutionHomeUrl": "https://www.example.com"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE INSTITUTION LOCATION -->
##### Validate institution location 
{:#validateinstitutionlocation}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateInstitutionLocation`
- **Method:** POST
- **Description:** Validates an institution location. Locations follow the [ISO-3166 Country Codes Standard](https://www.iso.org/iso-3166-country-codes.html)
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "institutionLocation": "GB"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE PROVIDER NAME -->
##### Validate institution provider name 
{:#validateprovidername}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateProviderName`
- **Method:** POST
- **Description:** Validates a provider name.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "providerName": "EMBL-EBI"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE PROVIDER DESCRIPTION -->
##### Validate provider description 
{:#validateproviderdescription}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateProviderDescription`
- **Method:** POST
- **Description:** Validates a provider description.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "providerCode": "Lorem ipsum dolor sit amet."
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE PROVIDER LOCATION -->
##### Validate provider location 
{:#validateproviderlocation}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateProviderLocation`
- **Method:** POST
- **Description:** Validates a provider location. Locations follow the [ISO-3166 Country Codes Standard](https://www.iso.org/iso-3166-country-codes.html)
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "providerLocation": "GB"
        }
    }
    ```
**Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE PROVIDER CODE -->
##### Validate provider code 
{:#validateprovidercode}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateProviderCode`
- **Method:** POST
- **Description:** Validates a provider code.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "providerCode": "ebi"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE PROVIDER HOME URL -->
##### Validate provider home URL 
{:#validateproviderhomeurl}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateProviderHomeUrl`
- **Method:** POST
- **Description:** Validates a provider home URL.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "providerHomeUrl": "https://www.example.com"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}

<!-- VALIDATE PROVIDER URL PATTERN -->
##### Validate provider URL pattern 
{:#validateproviderurlpattern}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateProviderHomeUrl`
- **Method:** POST
- **Description:** Validates a provider home URL. A URL pattern where the LUI of the Compact Identifier will be substituted, using the tag `{$id}`. An example is provided below.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "providerUrlPattern": "https://www.example.com/{$id}"
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE REQUESTER -->
##### Validate requester 
{:#validaterequester}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateRequester`
- **Method:** POST
- **Description:** Validates a Prefix registration request requester's information.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "requester": {
                "name": "John Doe",
                "email": "johndoe@example.com"
            }
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}


<!-- VALIDATE REQUESTER EMAIL -->
##### Validate requester's email 
{:#validaterequesteremail}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateRequesterEmail`
- **Method:** POST
- **Description:** Validates a Prefix registration request requester's email.
- **Body example:**
    ```json
    {
        "apiVersion": "1.0",
        "payload": {
            "requester": {
                "email": "johndoe@example.com"
            }
        }
    }
    ```
- **Output:**
    ```json
    {
        "apiVersion": "1.0",
        "errorMessage": null,
        "payload": {
            "comment": "VALIDATION OK",
            "token": ""
        }
    }
    ```
{: .list-none}

<!-- VALIDATE REQUESTER NAME -->
##### Validate requester's name 
{:#validaterequestername}

- **Endpoint:** `https://registry.api.identifiers.org/prefixRegistrationApi/validateRequesterName`
- **Method:** POST
- **Description:** Validates a Prefix registration request requester's name.
- **Body example:**
    ```json 
    {
        "apiVersion": "1.0",
        "payload": {
            "requester": {
                "name": "John Doe"
            }
        }
    }
    ```
- **Output:**
```json
{
    "apiVersion": "1.0",
    "errorMessage": null,
    "payload": {
        "comment": "VALIDATION OK",
        "token": ""
    }
}
```
{: .list-none}


#### Usage statistics

##### Namespace data
{: #statisticsnamespaceusage }

- **Endpoint:** `https://registry.api.identifiers.org/statistics/namespace/:namespacePrefix`
- **Method:** GET
- **Description:** Retrieves usage data for namespace by prefix
- **Parameters:**
    - `namespacePrefix` **Required** **PathVariable** Prefix of namespace data to retrieve
- **Output**
```json
{
    "apiVersion": "1.0",
    "errorMessage": null,
    "payload": {
        "nb_uniq_visitors": 3,
        "nb_visits": 4
    }
}
```
- **Example:**
    - <https://registry.api.identifiers.org/statistics/namespace/4dn>
    - &#8618; Retrieve usage data for the 4dn namespace
    {: .list-none} 
{: .list-none}

<i class="icon icon-common icon-info text-primary"></i>
This feature is still in trial and may be removed in the future.