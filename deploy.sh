#!/bin/bash

git add .;

echo "Insira as novidades adicionadas"

read msg

git commit -m "$msg"

git push "https://github.com/habdig7oficial/Reddito.git"