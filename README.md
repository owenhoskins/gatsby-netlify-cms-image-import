# Freie Schule Bergmeilen

## To install deps

    yarn install
    
    
## To develop

    yarn develop
    
    
    
## Data markdown

Markdown pages intended to keep data only should have a field `dataKind`: 

    - {name: dataKind, widget: hidden, default: "team-member"}
    
Pages for them will not be generated.

Also they need to have a field named `body` for the markdown 
and either `path` or `title` to be used as an identifier.    