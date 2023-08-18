---
layout: default
title: New feature&#58; protected resources
description: Data that requires authentication now can be part of the registry with correct metadata.
categories: updates
---

# New feature: Protected resources

In an effort to make our registry more inclusive and follow recent FAIR practices, we now support protected resources.

These are online resources that require authentication to be accessed due to privacy limitations or to limit access. 
For example, if data contains personal data and users must pass some process to determine how much access they may possess.
Or data access is costly to provider and only authenticated users may access it to reduce traffic.

Resources now may be flagged as protected and include a short description of how to acquire authentication and a link to a page with further information.
The corresponding fields have also been added to the request forms for new entries. Our libapi was also updated accordingly. 
Resolution behaviour remains unchanged, but resources marked as protected can have extra metadata on API responses.
Although, our links to protected resources may be redirected to our protected resources landing page depending on weather the resource provides one or not.

Please have a look at our [API documentation](/pages/api) for changes to requests, registry, and resolver calls.