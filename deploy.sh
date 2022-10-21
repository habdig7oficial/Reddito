#!/bin/bash

## Script besta de automação

git add .;

echo "Insira as novidades adicionadas"

read msg

git commit -m "Mateus Felipe da Silveira Vieira (habdig7oficial) - $msg"

git push "https://github.com/habdig7oficial/Reddito.git"