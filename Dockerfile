## Arquivo para docker não é necessário se não for utilizar-lo

# docker kill $(docker ps -q); docker build . -t habdig7oficial/reddito; docker run -p 7777:7777 -d habdig7oficial/reddito; docker ps --size

# npm run format; docker kill $(docker ps -q); docker compose build --no-cache; docker compose up;


# Dependencias:
FROM node:16


# Copia o package.json
COPY package*.json ./

# Copia o resto do diretório
COPY . . 

# Instala dependencias
RUN npm install

# copia o bootstrap
#RUN cp ./node_modules/bootstrap/scss ./src/assets/SCSS/bootstrap -r
#RUN cp ./node_modules/bootstrap/dist/js/ ./src/assets/JS/bootstrap/ -r


#RUN ls ./src/assets/SCSS/bootstrap
#RUN ls ./node_modules/bootstrap/scss
#RUN ls ./src/assets/JS/bootstrap/

# Trasnpila arquivos sass em css
#RUN npm run sass

# Remove arquivos desnecessários para produção

#RUN find . -name "*.ts" -delete
RUN find . -name "*.scss" -delete
RUN rmdir ./src/* --ignore-fail-on-non-empty


EXPOSE 7777
CMD [ "npm", "start" ]