# Documentação HTML

# `HTML Básico`
## `<!DOCTYPE>` 
 
Define o tipo do arquivo. Especifica a versão do HTML.

```html
<!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>
</head>

<body>
The content of the document......
</body>

</html>
```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<html>` 
Define um arquivo como HTML. Todos os outros elementos devem ser descendentes dele.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Title of the document</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<head>`
 
Contem metadados e informações sobre o arquivo. Inclui o título e links para scipts.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Title of the document</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<title>`
 
Define o titulo do arquivo. Mostrado na aba do navegador. Contem somente texto.

```html
<!DOCTYPE html>
<html>
<head>
  <title>HTML Elements Reference</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<body>`
 
Contem todo o conteúdo do arquivo.

```html
<html>
<head>
  <title>Title of the document</title>
</head>

<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>

</html>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<h1> to <h6>`
 
Usados para definir cabeçalhos e títulos. Definem nivel de importância. Somente um h1 pode ser utilizado por arquivo.

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<p>`
 
Define um paragrafo que agrupa conteúdos relacionados, como imagens ou campos de formulários.

```html
<p>This is some text in a paragraph.</p>
```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<br>`
 
Quebra de linha.

```html
<p>To force<br> line breaks<br> in a text,<br> use the br<br> element.</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<hr>`
 
Quebra temática de elementos de nível parágrafo.

```html
<h1>The Main Languages of the Web</h1>

<p>HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content.</p>

<hr>

<p>CSS is a language that describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work, because it can control the layout of multiple web pages all at once.</p>

<hr>

<p>JavaScript is the programming language of HTML and the Web. JavaScript can change HTML content and attribute values. JavaScript can change CSS. JavaScript can hide and show HTML elements, and more.</p>
```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<! --...-->`
 
Usado para fazer comentários que não aparecem no navegador.

```html
<!--This is a comment. Comments are not displayed in the browser-->

<p>This is a paragraph.</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## Formatação
***
## `<abbr>`
 
Define uma abreviação e opcionalmente uma descrição completa.

```html
The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<address>`
 
Fornece informações de contato ao seu ancestral `<article>` ou `<body>` mais próximo. Pode ser um e-mail, URL, endereço físico, telefone, mídia social. 

```html
<address>
Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<b>`
 
Negrito. Apenas usado em último caso e sem qualquer importância extra.

```html
<p>This is normal text - <b>and this is bold text</b>.</p>
```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<bdi>`
 
Isolamento Bidirecional. Isola parte do texto que pode ser formatada de forma diferente do que está fora dela. Refere-se a diferentes linguas.

```html
<ul>
  <li>User <bdi>hrefs</bdi>: 60 points</li>
  <li>User <bdi>jdoe</bdi>: 80 points</li>
  <li>User <bdi>إيان</bdi>: 90 points</li>
</ul>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<bdo>`
 
Inverte a direção do texto atual. Escreve de trás pra frente. 

```html
<bdo dir="rtl">
This text will go right-to-left.
</bdo>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<blockquote>`
 
Define longas citações de outras fontes, criando margem recuada.

```html
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<cite>`
 
Usado para citar o nome de uma obra artística. Deve conter o nome da obra ou uma referência de URL

```html
<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<code>`
 
Apresenta de forma estilizada um trecho de código.

```html
<p>The HTML <code>button</code> tag defines a clickable button.</p>

<p>The CSS <code>background-color</code> property defines the background color of an element.</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<del>`
 
Define um texto que foi excluido do arquivo. Pode ser não renderizado ou riscado nos navegadores.

```html
<p>My favorite color is <del>blue</del> <ins>red</ins>!</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<dfn>`
 
Especifica um termo que será definido dentro do conteúdo.

```html
<p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
## `<em>`
 
Utilizado para dar ênfase. Normalmente exibido em itálico.

```html
<p>You <em>have</em> to hurry up!</p>

<p>We <em>cannot</em> live like this.</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
***
***
***
***
***
***
***
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Formas e Entradas`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Frames`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `imagens`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Áudio e Vídeo`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Links`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Listas`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Tabelas`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Etilos e Semântica`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Meta Info`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
# `Programação`
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***
<tag>
 
Descrição da tag.

``` ex codigo ```

|Atributo|Descrição|
|:------:|:-------:|
|exemplo| descrição do atributo|
***

