---
layout: default
title: Automated registry validation is revamped and is back online
description: Issues with URLs and metadata is now automatically flagged with our curator team
categories: updates
---

# Improved automation of the registry data

Based on the [iaso validation and curaton tool](https://github.com/identifiers-org/cmd-iaso) we have created the validator component and curation warning system.

The curation warning system is a way for authorized actors to post warnings to our registry to be handled by our curators.
The system is able to track multiple types of warnings, repeated warnings for the same problem, and maintain a history of events on a warning.

With the curation warnings in place, our validator cloud hosted recurring process that runs modular validators on our registry dataset and generates multiple curation warnings. These are then posted to registry to be curated by our team.

Please have a look at [our source code](https://github.com/identifiers-org/monorepo/tree/810d600d2ead91649849e43a824d61b1d5730522/webservices/validator-registry) for the available validators and warning types.

If you wish to contribute with validators or wish to join by generating curation warnings. [Please get in touch with us](/pages/contact).
