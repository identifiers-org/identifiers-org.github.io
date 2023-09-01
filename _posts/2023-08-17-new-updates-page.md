---
layout: default
title: New updates page
description: We are adding this page to better disclose information on updates to identifiers.org.
categories: updates
---
 
# The updates list is the newest way to keep up to dates with identifiers.org

You can expect updates to include new entries to the registry, bug fixes, and new features. 
Here are some of the small changes we have made recently.

### Renewed requests forms to operate better

After plenty of issues with the request forms, we have remade these forms in the hope of giving an easier user experience. 

### Deployed new error page for the satellite frontend

We have changed the behaviour of our redirection endpoint to display a better error page when a link to an invalid compact identifier is accessed.

Examples:
- <http://identifiers.org/not-a-namespace>
- <http://identifiers.org/uniprot:invalid-id>

This replaces a text-only old white page that used to be show.

### Usage data endpoint

We recently deployed a usage analytics tool to better understand our users. 
This also allowed us to provide usage information to our users. 
These can be seen on our registry pages.

![usage data](/static/img/usage_stats.jpg){:.horizontal-image}

This section shows the info for the user on how many resolutions occurred for the previous month.

<i class="icon icon-common icon-info text-primary"></i>
This feature is still in trial and may be removed in the future.

An API endpoint was also added to collect this information. Please visit the [API page](/pages/api) for more information

### Faster resolution responses for single resource namespaces

With our usage analytics data, we collected that around 50% of resolutions are for namespaces with single resources. 
Thus, we decided to skip calculating recommendation indexes for such namespaces. 
That results in fewer database queries and inter-service communication, which would calculate metrics such as availability.

### Institution data curation

We recently went through institution information in our registry to include missing descriptions and home page URLs. 
There is still some missing information, and we will continue our efforts to fill these in, 
but we also count on our community to fill these in.

### Other ways to collect information
Aside from our update posts, you can also follow the [GitHub repositories](//github.com/identifiers-org) commits and issues. 
 
The main issue board can be found in the [documentation repository](//github.com/identifiers-org/identifiers-org.github.io/issues). The other repositories of interest are:

1. [identifiers-org/cloud-devops-hq](//github.com/identifiers-org/cloud-devops-hq)
2. [identifiers-org/cloud-devops-satellite](//github.com/identifiers-org/cloud-devops-satellite)
3. [identifiers-org/cloud-ws-resolver](//github.com/identifiers-org/cloud-ws-resolver)
4. [identifiers-org/cloud-hq-web-frontend](//github.com/identifiers-org/cloud-hq-web-frontend)
5. [identifiers-org/cloud-libapi](//github.com/identifiers-org/cloud-libapi)
6. [identifiers-org/cloud-hq-ws-registry](//github.com/identifiers-org/cloud-hq-ws-registry)
7. [identifiers-org/cloud-satellite-web-spa](//github.com/identifiers-org/cloud-satellite-web-spa)
8. [identifiers-org/cloud-ws-resource-recommender](//github.com/identifiers-org/cloud-ws-resource-recommender)
9. [identifiers-org/cloud-ws-link-checker](//github.com/identifiers-org/cloud-ws-link-checker)
