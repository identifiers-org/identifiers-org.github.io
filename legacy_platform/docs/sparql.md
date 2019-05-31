# SPARQL Endpoint
The Identifiers.org SPARQL endpoint allows the conversion of URIs from one given scheme to the alternative equivalent ones. This was specially developed with semantic data integration in mind, where one often needs to consume heterogeneous datasets which use different types of URIs. This service relies on URI schemes recorded in the Registry. If you find a URI which is not yet listed, please report them to us, either via the 'suggest modifications' link from the proper data collection page on the Registry, or directly by emailing us.

## Implementation
This SPARQL Endpoint is implemented using Sesame openRDF platform. SPARQL query results are generated on the fly using the Registry's database content. Therefore this SPARQL Endpoint will not allow you to list all content in the database.

##SPARQL query examples
1. All the protein references associated to elements of the type SBML species in the model Tolic2000 Insulin Glucose Feedback, retrieve the relevant human proteins from UniProt and their domains from Bio2RDF InterPro.

Run this query at BioModels SPARQL end point
```
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX sbmlrdf: <http://identifiers.org/biomodels.vocabulary#>
    PREFIX bqbio: <http://biomodels.net/biology-qualifiers#>
    PREFIX biomodel: <http://identifiers.org/biomodels.db/>
    PREFIX up:<http://purl.uniprot.org/core/>
    PREFIX taxon:<http://purl.uniprot.org/taxonomy/>

    SELECT DISTINCT ?protein ?protein_domain ?domain_label WHERE {
       ?model sbmlrdf:species ?s .
       ?s sbmlrdf:name ?species .
       ?s bqbio:isVersionOf ?protein_term
       FILTER (?model = biomodel:BIOMD0000000372)

       SERVICE <http://identifiers.org/services/sparql>{
          ?protein_term owl:sameAs ?protein .
       }

       SERVICE <http://beta.sparql.uniprot.org/sparql>{
          ?protein a up:Protein ;
          up:organism taxon:9606 ;
          rdfs:seeAlso ?protein_domain
          FILTER regex(?protein_domain,"IPR0","i").
       }

       SERVICE <http://identifiers.org/services/sparql>{
          ?protein_domain owl:sameAs ?uris .
       }

       SERVICE <http://interpro.bio2rdf.org/sparql>{
          ?uris dcterms:title ?domain_label.
       }
    }LIMIT 10
```

2. All the cross-references associated to elements of the type SBML species in the model Edelstein1996 - EPSP ACh event, retrieve the relevant descriptions from Bio2RDF BioPortal.

Run this query at BioModels SPARQL end point
```
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX sbmlrdf: <http://identifiers.org/biomodels.vocabulary#>
    PREFIX bqbio: <http://biomodels.net/biology-qualifiers#>
    PREFIX biomodel: <http://identifiers.org/biomodels.db/>

    SELECT DISTINCT ?species ?go_term ?go_description WHERE {
        ?model sbmlrdf:species ?s .
    	?s sbmlrdf:name ?species .
        ?s bqbio:isVersionOf ?go_term
    	FILTER (?model = biomodel:BIOMD0000000001)

        SERVICE <http://identifiers.org/services/sparql>{
        	?go_term owl:sameAs ?go .
    	}

    	SERVICE <http://bioportal.bio2rdf.org/sparql>{
         	?go dcterms:description ?go_description .
    	}


    }LIMIT 10
```

3. Find all models that have annotations to human UniProt entries that are known to be involved in a disease.

Run this query at BioModels SPARQL end point
```
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#v
    PREFIX sbmlrdf: <http://identifiers.org/biomodels.vocabulary#>
    PREFIX up: <http://purl.uniprot.org/core/>
    PREFIX taxon: <http://purl.uniprot.org/taxonomy/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

    SELECT DISTINCT ?model ?protein ?name ?text WHERE {

    	SERVICE <http://beta.sparql.uniprot.org/>{
          	?protein a up:Protein .
          	?protein up:organism taxon:9606 .
          	?protein up:encodedBy ?gene .
          	?gene skos:prefLabel ?name .
         	?protein up:annotation ?annotation .
          	?annotation a up:Disease_Annotation .
          	?annotation rdfs:comment ?text
      	}

        SERVICE <http://identifiers.org/services/sparql>{
        	?protein owl:sameAs ?proteinAlt .
    	}

    	?model sbmlrdf:species ?modelElement .
    	?modelElement ?qualifier ?proteinAlt .
    	?qualifier rdfs:subPropertyOf sbmlrdf:sbmlAnnotation .

    }
```