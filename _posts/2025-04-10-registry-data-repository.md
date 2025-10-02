---
layout: default
title: Registry data is now also available in a GitHub Repository
description: Find the registry data via git in our new public repository
categories: updates
---

# Registry data on GitHub

In an effort to provide an additional backup and a versioned version our registry data, we have set up a self updating GitHub repository which checks, downloads, and versions itself based on our live resolver dataset endpoint.

The repository can be found at <https://github.com/identifiers-org/registry-data>.

### Data files
All the data is available in the [registry-data](https://github.com/identifiers-org/registry-data/tree/0397a5cfccf98019103da625d171caf9d02faf8e/registry-data/) folder. 
They are stored in the same JSON schema available at our live endpoint.
The file [full.js](https://github.com/identifiers-org/registry-data/tree/0397a5cfccf98019103da625d171caf9d02faf8e//registry-data/full.json) contains the full dump of the registry. 
The dump is also available split by namespace under the [registry-data/namespaces](https://github.com/identifiers-org/registry-data/tree/0397a5cfccf98019103da625d171caf9d02faf8e/registry-data/namespaces/) folder.

### Versioning
The current version of the repository is found at the file called [VERSION](https://github.com/identifiers-org/registry-data/tree/0397a5cfccf98019103da625d171caf9d02faf8e//VERSION) at the root of the repository.
The commit history can be used to check recent changes to the identifiers.org registry.

#### Checking history via Github.com UI

Recent changes to the dataset can be seen in the [commit history of full.json](https://github.com/identifiers-org/registry-data/commits/0397a5cfccf98019103da625d171caf9d02faf8e/registry-data/full.json). 
You will have to click on individual commits to see its changes.

Alternatively, recent changes to an individual namespace can be seen in the commit history of the specific namespace file, for example, [the commit history for 3dmet can be found here](https://github.com/identifiers-org/registry-data/commits/0397a5cfccf98019103da625d171caf9d02faf8e/registry-data/namespaces/3dmet.json). 
Again, You will have to click on individual commits to see its changes.

#### Checking history via git command line

After cloning the repository and opening a terminal there, you can list recent changes to the dataset using the following command:
```shell
git log --patch -10 registry-data/ 
```

The similar command below can be used to see changes on a specific namespace file:
```shell
git log --patch -10 registry-data/namespaces/3dmet.json 
```