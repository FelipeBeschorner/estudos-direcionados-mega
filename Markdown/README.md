# Documentação Markdown
>### Para a visualização utilizar ctrl+k e v.
***
Linguagens de marcação são utilizadas para definir formatos, exibições e padrões em documentos. Não possuem situações condicionais e repetição, então são normalmente utilizadas para exibição ou estruturação de dados. Algumas das mais populares são:
* HTML
* XHTML
* SGML
* XML
## 1. Tamanhos de Letra
1. O tamanho é definido pelo caracter **#**. 
2. Varia entre 1 e 6.
3. Quando a próxima linha é composta por **=** é comparavel a **#**.
4. Quando a próxima linha é composta por **-** é comparevle a **##**.
***   
## 2. Estética   
1. Itálico com "_" no começo e final do texto. 
> Ex: _Italico_.
2. Negrito com "**" no comeo e final do texto.
> Ex: **Negrito**.
3. Podem ser somados com "**" e "_" no começo e final do texto.
> Ex: **_Italico e Negrito_**.  
4. Podem ser riscados com **~~** no começo e final do texto.
> Ex: ~~Riscado~~.
***
## 3. Listas
* Podem ser feitas enumerando com **1. 2. 3. ...**. Ex:
>1. 1
>2. 2
>3. 3
* podem ser separadas com **1. 1. 1. ...**. Ex:
>1. 1 
>1. 1
>1. 1
* Podem ser feitas com **_*_** ou **+** ou **-** no começo da linha para lista desordenada e se adicionado um espaço antes é feita uma sublista. Ex:   
>*  *
>    *
***
## 4. Links
1. Frase entre colchetes seguido de link entre parenteses. Ex:
>[Link Google](https://www.google.com).
2. Link entre **<>** para exibir o link. Ex:
> <https://www.google.com>.
3. Texto entre colchetes e referencia do link entre colchetes. Ex:
>[Google][1]

[1]: https://www.google.com 
***
## 5. Imagens 
1. utilizar **![]** seguido do link entre parenteses. Ex:
>![a]().
***
## 6. Código
1. Palavras pode ser colocadas em blocos de codico com **``**. Ex:
>`codigo`.
1. Trechos inteiros podem ser colocados com **```** definindo ou não a linguagem Ex:
>```js
>Codigo
>Codigo
>Codigo
>```
***
## 7. Tabelas
1. As colonas são divididas com **|**.
2. Para inicial a tabela é necessario definir as coluna e separar com **-** na segunda linha.
3. O **:** entre os **-** define a centralização.
4. Ex:

>| Coluna 1 | Coluna 2 | Coluna 3 |
>|---|:---:|---:|
>|Linha 2|Linha 2|Linha 2|
***
## 8. Separação de exibição
1. É possivel dividir a exibição utilizando "***" para criar uma linha divisória Ex:
>***
***
## 9. Notas
1. Para criar uma nota coloca-se **>** no começo da frase. Ex:
> nota.
***
## 10. Tasklist
1. É possivel criar listas de taerefas. 
2. **- [ ]** para tearefas incompletas.
3. **- [x]** para tarefas completas.
4. Ex:
> - [x] Estudar mais um pouco.
> - [ ] Parar pra relaxar.
***
## Referencias
[Link 1](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
[Link 2](https://guides.github.com/features/mastering-markdown/)
***