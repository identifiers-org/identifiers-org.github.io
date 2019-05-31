# Metadata Service

Identifiers.org metadata service enables users to extract Schema.org from landing pages of the original providers by passing in Compact Identifiers.

``
http://metadata.api.identifiers.org/{Compact Identifier}
``

For example:
``
http://metadata.api.identifiers.org/reactome:R-HSA-446203
``

## Resources providing metadata

Following is a list of resources in the Identifiers.org registry providing metadata (last updated 2018-12-05)

| Prefix        | Resource Information                                                  | Example Dataset URL                                                 | Dataset Metadata | Home URL                           | DataCatalog Metadata | 
|---------------|-----------------------------------------------------------------------|---------------------------------------------------------------------|------------------|------------------------------------|----------------------| 
| ec-code       | Enzyme nomenclature database, ExPASy (Expert Protein Analysis System) | https://enzyme.expasy.org/EC/1.1.1.1                                | Yes              | https://enzyme.expasy.org/         | Yes                  | 
| reactome      | Reactome, a curated knowledgebase of biological pathways              | https://reactome.org/content/detail/R-HSA-201451                    | Yes              | https://www.reactome.org/          | Yes                  | 
| prosite       | ExPASy PROSITE                                                        | https://prosite.expasy.org/PS00001                                  | Yes              | https://www.expasy.org/prosite/    | Yes                  | 
| cath.domain   | CATH domain at UCL                                                    | http://www.cathdb.info/domain/1cukA01                               | Yes              | http://www.cathdb.info/            | Yes                  | 
| hamap         | HAPMAP at Swiss Institute of Bioinformatics                           | https://hamap.expasy.org/unirule/MF_01400                           | Yes              | https://hamap.expasy.org/          | Yes                  | 
| biosample     | BioSamples Database at EBI                                            | https://www.ebi.ac.uk/biosamples/sample/SAMEA2397676                | Yes              | https://www.ebi.ac.uk/biosamples/  | Yes                  | 
| fairsharing   | FAIRSharing at University of Oxford                                   | https://fairsharing.org/bsg-000052                                  | Yes              | https://fairsharing.org/           | Yes                  | 
| cellosaurus   | Cellosaurus through SIB                                               | http://web.expasy.org/cellosaurus/CVCL_0030                         | Yes              | http://web.expasy.org/cellosaurus/ | Yes                  | 
| cosmic        | COSMIC Gene at Sanger                                                 | http://cancer.sanger.ac.uk/cosmic/gene/overview?ln=BRAF             | Yes              | http://cancer.sanger.ac.uk/cosmic/ | Yes                  | 
| mobidb        | MobiDB                                                                | http://mobidb.bio.unipd.it/P10636                                   | Yes              | http://mobidb.bio.unipd.it         | Yes                  | 
| hpscreg       | Human Pluripotent Stem Cell Registry                                  | https://hpscreg.eu/cell-line/BCRTi001-A                             | Yes              | https://hpscreg.eu/                | Yes                  | 
| lei           | Global LEI Index                                                      | https://www.gleif.org/lei/HWUPKR0MPOU8FGXBT394                      | Yes              | https://www.gleif.org/             | Yes                  | 
| biomodels.db  | BioModels through OmicsDI                                             | https://www.omicsdi.org/dataset/biomodels/BIOMD0000000048           | Yes              | https://www.omicsdi.org/           | No                   | 
| pdb           | Protein Databank in Europe (PDBe)                                     | http://www.pdbe.org/2gc4                                            | Yes              | http://www.pdbe.org/               | No                   | 
| sgd           | SGD through the Alliance of Genome Resources                          | https://www.alliancegenome.org/gene/SGD:S000003909                  | Yes              | https://www.alliancegenome.org     | No                   | 
| wb            | WormBase through the Alliance of Genome Resources                     | https://www.alliancegenome.org/gene/WB:WBGene00000001               | Yes              | https://www.alliancegenome.org     | No                   | 
| fb            | FlyBase through the Alliance of Genome Resources                      | https://www.alliancegenome.org/gene/FB:FBgn0011293                  | Yes              | https://www.alliancegenome.org     | No                   | 
| arrayexpress  | ArrayExpress through OmicsDI                                          | https://www.omicsdi.org/dataset/arrayexpress-repository/E-MEXP-1712 | Yes              | https://www.omicsdi.org/           | No                   | 
| mgi           | MGI through the Alliance of Genome Resources                          | https://www.alliancegenome.org/gene/MGI:2442292                     | Yes              | https://www.alliancegenome.org     | No                   | 
| rgd           | RGD through the Alliance of Genome Resources                          | https://www.alliancegenome.org/gene/RGD:2018                        | Yes              | https://www.alliancegenome.org     | No                   | 
| zfin          | ZFIN through the Alliance of Genome Resources                         | https://test.alliancegenome.org/gene/ZFIN:ZDB-GENE-041118-11        | Yes              | https://www.alliancegenome.org     | No                   | 
| narcis        | NARCIS at The Hague                                                   | http://www.narcis.nl/publication/RecordID/oai:cwi.nl:4725           | Yes              | http://www.narcis.nl/?Language=en  | No                   | 
| gxa.expt      | GXA Expt through OmicsDI                                              | https://www.omicsdi.org/dataset/atlas-experiments/E-MTAB-2037       | Yes              | https://www.omicsdi.org/           | No                   | 
| metabolights  | MataboLights through OmicsDI                                          | https://www.omicsdi.org/dataset/metabolights_dataset/MTBLS1         | Yes              | https://www.omicsdi.org/           | No                   | 
| rgd.qtl       | Rat Genome Database qTL at Medical College of Wisconsin               | http://rgd.mcw.edu/rgdweb/report/qtl/main.html?id=1354581           | Yes              | http://rgd.mcw.edu/                | No                   | 
| rgd.strain    | Rat Genome Database strain at Medical College of Wisconsin            | http://rgd.mcw.edu/rgdweb/report/strain/main.html?id=5688061        | Yes              | http://rgd.mcw.edu/                | No                   | 
| ega.study     | EGA Study through OmicsDI                                             | https://www.omicsdi.org/dataset/ega/EGAS00000000001                 | Yes              | https://www.omicsdi.org/           | No                   | 
| ega.dataset   | EGA Dataset through OmicsDI                                           | https://www.omicsdi.org/dataset/ega/EGAD00000000001                 | Yes              | https://www.omicsdi.org/           | No                   | 
| pride.project | PRIDE Project through OmicsDI                                         | https://www.omicsdi.org/dataset/pride/PXD000440                     | Yes              | https://www.omicsdi.org/           | No                   | 
| lincs.data    | Lincs through OmicsDI                                                 | https://www.omicsdi.org/dataset/lincs/LDS-1110                      | Yes              | https://www.omicsdi.org/           | No                   | 
| mw.study      | Metabolomics Workbench Study through OmicsDI                          | https://www.omicsdi.org/dataset/metabolomics_workbench/ST000900     | Yes              | https://www.omicsdi.org/           | No                   | 
| mex           | Metabolome Express through OmicsDI                                    | https://www.omicsdi.org/dataset/metabolome_express/MEX36            | Yes              | https://www.omicsdi.org/           | No                   | 
| gpmdb         | GPMDB through OmicsDI                                                 | https://www.omicsdi.org/dataset/gpmdb/GPM32310002988                | Yes              | https://www.omicsdi.org/           | No                   | 
| kaggle        | Kaggle                                                                | https://www.kaggle.com/nasa/kepler-exoplanet-search-results         | Yes              | https://kaggle.com                 | No                   | 
