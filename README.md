# <h1 align="center" >Bem Vindo ao Reddito &#127881;</h1>

<div align="center">
<a href="https://reddito-server.herokuapp.com/"> <img width="300" src="https://raw.githubusercontent.com/habdig7oficial/Reddito/full-stack/src/assets/Images/RedditoLogo1.png" alt="Reddito Logo"> </a>
</div>



<div align="center">
<a href="https://github.com/habdig7oficial/Reddito/blob/main/LICENSE">
<img alt="Licença do Reddito" src="https://img.shields.io/github/license/habdig7oficial/Reddito?color=%237DAD61&amp;label=LICEN%C3%87A&amp;logo=Reddito&amp;logoColor=%233E5133&amp;style=for-the-badge">
</a> <a href="https://github.com/habdig7oficial/Reddito">

<img alt="Frequência de Commits" src="https://img.shields.io/github/commit-activity/y/habdig7oficial/Reddito?color=6B8A53&amp;label=Frequ%C3%AAncia%20de%20Commits&amp;logo=Frequ%C3%AAncia%20de%20Commits&amp;style=for-the-badge"> <img alt="Tamanho de Download" src="https://img.shields.io/github/languages/code-size/habdig7oficial/Reddito?color=%233E5133&amp;label=Tamanho%20de%20Download&amp;logo=Reddito&amp;style=for-the-badge"></a>
</div>

> **Um site de cadastro de receitas pessoais, possibilitando a acessibilidade dos usuários de forma simples e intuitiva. Também promovemos o compartilhamento delas e a opção de dar notas e observações para as receitas feitas.**

##### **Copyright &#169; 2022 Anne dos Santos Ribeiro, Carolina Barbosa Pacífico de Almeida, Heloísa Real, Julie Missae Sanday, Maria Clara Gomes Gonçalves, Mateus Felipe da Silveira Vieira**

###### O Reddito é [Open/Free Software](https://www.gnu.org/philosophy/open-source-misses-the-point.html.en) distribuido na licença leniente [MIT](https://github.com/habdig7oficial/Reddito/blob/main/LICENSE).

_Este documento contém os principais tópicos para se conhecer, utilizar e participar do projeto Reddito_



---

## &#10140; Prerequisitos:

Software | Versão | Descrição 
--------- | ------ | ---------
| [Node.js](https://nodejs.org/pt-br/) | >=16.17.0 | O intepretador JS que permite a execução do reddito 
|  Npm (incluido com o node)| >=8.15.0 | Gerenciador de pacotes para baixar as dependências do Reddito
| [MongoDB](https://www.mongodb.com/docs/manual/installation/) | >=5.0 | O Banco de dados NoSQL para armazenagem de dados
| [Git](https://git-scm.com/downloads) (opicional)| >=2.34.1 | Sistema de versionamento de código. Recomendamos o [git](https://git-scm.com/) que faciltita o processo de download, gestão de branches e repositórios.
| Browser de Internet | ? | Seu browser de internet favorito

 
---

## &#10140; Começe Agora! 

Simples, Rápido e Fácil!

```
git clone -b bazuca-backend++ https://github.com/habdig7oficial/Reddito.git ## branch instavel 
```

> Nota: Se não baixou o [Git](https://git-scm.com/) obtenha os source de outro modo.

Depois:

* Preencha as variáveis de ambiente no arquivo ```.env```;

```
## Crie um arquivo ".env" na raíz do diretório com as suas variáveis

PORT=sua_porta # Porta de Sua preferencia 

Node_env="dev" # escolha entre staging ou desenvolvimento, o padrão é desenvolvimento

CONEXAO_STRING="mongodb+srv://<username>:<password>@<cluster>.ccizs.mongodb.net/?retryWrites=true&w=majority" # String de conexão do banco de dados MongoDB, deixe em branco para utilizar um db local

```

* Instale as dependências necessárias;
```
npm install; 
```

* Suba o servidor e acesse-o na porta correspondente;
```
npm run ts-dev;
```
```
# o endereço deve ser algo como isto:

http://localhost:sua_porta
```

### *&#127882; Parabéns! Você já está rodando o Reddito Localmente!!!*




## &#10140; Documentação!

Acesse a documentação do Reddito de Forma online atrvés de nossa [Wiki no GitHub](https://github.com/habdig7oficial/Reddito/wiki) ou obtenha uma cópia física nas livrarias ou falando [conosco](mailto:habdig7@gmail.com)


## &#10140; Roadmap:

Toda a nossa organização e planejamento estão públicamente disponíveis no [Trello](https://trello.com/b/jWWfNBZU/reddito).


## &#10140; Autores:
- ***Anne dos Santos Ribeiro*** - Líder e Organizadora - rm13537 
- Carolina Barbosa Pacífico de Almeida - Designer Gráfico - rm13704
- Heloísa Real - Frontend - rm13299
- Julie Missae Sanday - Designer Gráfico - rm12152
- Maria Clara Gomes Gonçalves de Almeida - Designer Gráfico - rm11959
- Mateus Felipe da Silveira Vieira - Backend e Banco de Dados - rm14598

Quer ter seu nome aparecendo aqui um dia? Faça suas contribuições e faça um pull request


<div align="center">
<img width="40" src="https://raw.githubusercontent.com/habdig7oficial/Reddito/bazuca-backend%2B%2B/src/assets/Images/instagram.png" alt="Reddito Instagram">
<img width="40" src="https://raw.githubusercontent.com/habdig7oficial/Reddito/bazuca-backend%2B%2B/src/assets/Images/facebook.png" alt="Reddito Facebook">
<img width="40" src="https://raw.githubusercontent.com/habdig7oficial/Reddito/bazuca-backend%2B%2B/src/assets/Images/youtube.png" alt="Reddito Youtube">
</div>

---

# <h1 align="center"> Este documento é parte da documentação do Reddito </h1>

#### **Copyright &#169; 2022 Anne dos Santos Ribeiro, Carolina Barbosa Pacífico de Almeida, Heloísa Real, Julie Missae Sanday, Maria Clara Gomes Gonçalves, Mateus Felipe da Silveira Vieira**

[![GFDL logo ](https://www.gnu.org/graphics/gfdl-logo.svg)](https://www.gnu.org/licenses/fdl-1.3.html)

Permissão concedida para copiar, distribuir e/ou modificar este documento sob os termos da Licença de Documentação Livre GNU, Versão 1.3 ou qualquer versão mais recente publicada pela Free Software Foundation; sem Seções Invariantes, Textos de Capa Frontal, e sem Textos de Contracapa. Uma cópia da licença está incluída na seção intitulada [“GNU Free Documentation License”](https://github.com/habdig7oficial/Reddito/wiki/GNU-Free-Documentation-License) ou no site oficial do GNU [(https://www.gnu.org/licenses/fdl-1.3.pt-br.html)](https://www.gnu.org/licenses/fdl-1.3.pt-br.html)
