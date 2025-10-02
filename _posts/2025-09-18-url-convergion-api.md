---
layout: default
title: "New feature: Provider URL conversion API"
description: We are now able to help users convert provider URLs into identifiers.org URIs
categories: updates
---

# New URL convertion UI

Due to the difficulty a lot of users have when first trying to use identifiers.org, we have developer a new way to convert providers URLs into identifiers.org URIs. A new search bar is available on our front page where users can input provider URLs and get our stable identifiers.org URIs.

![](/static/img/convert-url-screenshot.png)
{:.border}

Exact matches will display immediately, as shown above. When one is not available, a link will take you to a page like show below where we offer a search by similarity which tries to find the best results for the URL given.

![](/static/img/convert-url-screenshot2.png)
{:.border}


### New API endpoints

This UI is powered by our resolver API backend which can also be used directly. Please find documentation on the methods at our [API documentation page]({% link pages/api.md %}).

### Improvements and suggestions

If you think of any improvements or have any suggestions to this feature, please [get in touch with us](/pages/contact).
