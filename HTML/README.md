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
|onafterprint| Dispara quando uma página começa a ser impressa ou se a caixa de diálogo de impressão foi fechada|
|onbeforeprint| Dispara quando uma página está prestes a ser impressa|
|onbeforeunload| Disparado quando o documento está prestes a ser descarregado|
|onerror| Ocorre quando ocorre um erro durante o carregamento de um arquivo de mídia|
|onhashchange| Acionado quando há mudanças na parte da âncora da URL atual|
|onload| Dispara quando um objeto é carregado|
|onoffline| Disparado quando o navegador começa a trabalhar offline|
|ononline| Disparado quando o navegador começa a funcionar online|
|onpagehide| Ocorre quando um usuário navega em outra página da web|
|onpageshow| Ocorre quando um usuário navega na página da web|
|onpopstate| Ocorre quando o histórico da janela muda|
|onresize| Disparado quando a janela do navegador é redimensionada|
|onstorage| Disparado quando o aramzenamento web é atualizado|
|onunload| Dispara quando uma página é descarregada|
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

***
## `<p>`
 
Define um paragrafo que agrupa conteúdos relacionados, como imagens ou campos de formulários.

```html
<p>This is some text in a paragraph.</p>
```

***
## `<br>`
 
Quebra de linha.

```html
<p>To force<br> line breaks<br> in a text,<br> use the br<br> element.</p>
 ```

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

***
## `<!--...-->`
 
Usado para fazer comentários que não aparecem no navegador.

```html
<!--This is a comment. Comments are not displayed in the browser-->

<p>This is a paragraph.</p>
 ```

***
## Formatação
***
## `<abbr>`
 
Define uma abreviação e opcionalmente uma descrição completa.

```html
The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
```

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

***
## `<b>`
 
Negrito. Apenas usado em último caso e sem qualquer importância extra.

```html
<p>This is normal text - <b>and this is bold text</b>.</p>
```

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

***
## `<bdo>`
 
Inverte a direção do texto atual. Escreve de trás pra frente. 

```html
<bdo dir="rtl">
This text will go right-to-left.
</bdo>
 ```

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
|cite| Especifica uma URL para um documento que explica a citação|
***
## `<cite>`
 
Usado para citar o nome de uma obra artística. Deve conter o nome da obra ou uma referência de URL

```html
<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
 ```

***
## `<code>`
 
Apresenta de forma estilizada um trecho de código.

```html
<p>The HTML <code>button</code> tag defines a clickable button.</p>

<p>The CSS <code>background-color</code> property defines the background color of an element.</p>
 ```

***
## `<del>`
 
Define um texto que foi excluido do arquivo. Pode ser não renderizado ou riscado nos navegadores.

```html
<p>My favorite color is <del>blue</del> <ins>red</ins>!</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|cite| Especifica uma URL para um documento que explica a citação|
|datetime| Especifica a data e hora em que o texto foi excluído / inserido|
***
## `<dfn>`
 
Especifica um termo que será definido dentro do conteúdo.

```html
<p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>
 ```

***
## `<em>`
 
Utilizado para dar ênfase. Normalmente exibido em itálico.

```html
<p>You <em>have</em> to hurry up!</p>

<p>We <em>cannot</em> live like this.</p>
 ```

***
## `<i>`
 
Coloca o texto em itálico. Destaca o texto por algum motivo, como: termos técnicos, outros idiomas ou pensamentos de personagens fictícios.

```html
<p><i>Lorem ipsum</i> is the most popular filler text in history.</p>

<p>The <i>RMS Titanic</i>, a luxury steamship, sank on April 15, 1912 after striking an iceberg.</p>
 ```

***
## `<ins>`
 
Sublinha o texto. Define o texto que foi inserido no arquivo.

```html
<p>My favorite color is <del>blue</del> <ins>red</ins>!</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|cite| Especifica uma URL para um documento que explica a citação|
|datetime| Especifica a data e hora em que o texto foi excluído / inserido|
***
## `<kbd>`
 
Entrada por teclado. O texto é exibino de forma menos espaçada.

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text (Windows).</p>

<p>Press <kbd>Cmd</kbd> + <kbd>C</kbd> to copy text (Mac OS).</p>
 ```

***
## `<mark>`
 
Representa o trecho como destacado. O texto é exibido com marca-texto.

```html
<p>Do not forget to buy <mark>milk</mark> today.</p>
 ```

***
## `<meter>`
 
Representa um valor escalar em um intervalo conhecido ou fracionário. Também conhecido como medidor.

```html
<label for="disk_c">Disk usage C:</label>
<meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter><br>

<label for="disk_d">Disk usage D:</label>
<meter id="disk_d" value="0.6">60%</meter>
```

|Atributo|Descrição|
|:------:|:-------:|
|form| Especifica o formulário ao qual o elemento pertence|
|high| Especifica o intervalo em que o valor do medidor é considerado um valor alto|
|low| Especifica o intervalo em que o valor do medidor é considerado um valor baixo|
|max| Especifica o valor máximo do elemento|
|min| Especifica o valor mínimo de um elemento do elemento|
|optimum| Especifica o intervalo em que o valor do medidor é considerado um valor ótimo|
|value| Especifica o valor atual do medidor|
***
## `<pre>`
 
Representa um texto pré-formatado. O texto é exibido da mesma forma que no HTML.

```html
<pre>
Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks
</pre>
 ```

***
## `<progress>`
 
Representa o andamento ou progresso de uma tarefa.

```html
<label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|max| Especifica o valor máximo do elemento|
|value| Especifica quanto da tarefa foi concluída|
***
## `<q>`
 
Define um pequena citação. Inclui atributos globais. Normalmente representado enrte aspas.

```html
<p>WWF's goal is to:
<q>Build a future where people live in harmony with nature.</q>
We hope they succeed.</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|cite| Especifica uma URL para um documento que explica a citação|
***
## `<rp>`
 
Fornece perenteses ao redor de textos ruby.

```html
<ruby>
漢 <rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt>
</ruby>
```

***
## `<rt>`
 
Define uma explicação ou pronuncia de caracteres diferentes em uma anotação ruby.

```html
<ruby>
漢 <rt> ㄏㄢˋ </rt>
</ruby>
 ```

***
## `<ruby>`
 
Representa uma anotação ruby, que mostram a prunucia de caracteres do Leste Asiático.

```html
<ruby>
漢 <rt> ㄏㄢˋ </rt>
</ruby>
 ```

***
## `<s>`
 
Especifica um texto que não possui mais conteudo relevante. É exibido com uma linha atravessada.

```html
<p><s>Only 50 tickets left!</s></p>
<p>SOLD OUT!</p>
 ```

***
## `<samp>`
 
Define a saida de uma amostra de computador. O texto é menoespaçado.

```html
<p>Message from my computer:</p>

<p><samp>File not found.<br>Press F1 to continue</samp></p>
 ```

***
## `<small>`
 
Define um texto com fonte menor.

```html
<p>This is some normal text.</p>
<p><small>This is some smaller text.</small></p>
 ```

***
## `<strong>`
 
Define um texto como importante. Normalmente exibido em negrito.

```html
<strong>This text is important!</strong>
 ```

***
## `<sub>`
 
Escreve o texto meia linha baixo e em fonte menor. Normalmente utilizado em formulas quimicas.

```html
<p>This text contains <sub>subscript</sub> text.</p>
 ```

***
## `<sup>`
 
Escreve o texto meia linha acima e em fonte menor. Utilizados como nota de rodapé.

```html
<p>This text contains <sup>superscript</sup> text.</p>
```

***
## `<template>`
 
O conteúdo dentro esta encapsulado em um conteiner que não é renderizado para o cliente, mas pode ser instanciado posteriormente com JavaScript.

```html
<button onclick="showContent()">Show hidden content</button>

<template>
  <h2>Flower</h2>
  <img src="img_white_flower.jpg" width="214" height="204">
</template>

<script>
function showContent() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}
</script>
 ```

***
## `<time>`
 
Define uma hora específica. É utilizado para traduzir a hora para a maquina permitindo resultados mais inteligentes.

```html
<p>Open from <time>10:00</time> to <time>21:00</time> every weekday.</p>

<p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|datetime| Especifica a data e hora em que o texto foi excluído / inserido|
***
## `<u>`
 
Representa um texto não articulado e com estilo diferente do normal. O texto é exibido sublinhado.

```html
<p>This is some <u>mispeled</u> text.</p>
 ```

***
## `<var>`
 
Representa um elemento matemático ou contexto de programação. conteúdo exibido em itálico.

```html
<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>
 ```

***
## `<wbr>`
 
Define uma possivel quebra de linha.

```html
<p>To learn AJAX, you must be familiar with the XML<wbr>Http<wbr>Request Object.</p>
 ```

***
# `Formas e Entradas`
## `<form>`
 
Representa uma seção que contem controles interativos que permitem que o cliente interagir com um servido web. Cria um formulario HTML para a entrada do Usuário.

```html
<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|accept-charset| Especifica as condições de caracteres que devem ser usados|
|action| Especifica para onde deve ser enviado os dados do formulário|
|autocomplete| O preenchimento automático permite que o navegador preveja o próximo valor|
|enctype| Especifica como os dados do formulário devem ser codificados ao enviá-los ao servidor|
|method| Especifica como enviar dados de formulário|
|name| Especifica um nome para o elemento,  também é usado como uma referência quando os dados são enviados|
|novalidate|  Especifica que os dados do formulário não devem ser validados ao serem enviados|
|onreset| Acionado quando um formulário é redefinido|
|onsubmit| Disparado quando um formulário é enviado|
|rel| Especifica a relação entre o documento atual e o documento / recurso vinculado|
|target|  Especifica um nome ou uma palavra-chave que indica onde exibir a resposta recebida após o envio do formulário|
***
## `<input>`
 
Especifica um campo que o Usuário pode entrar com dados. Pode ser exibido de diferentes maneiras dependendo do atributo.

```html
<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|accept| Especifica os tipos de arquivos que o servidor aceita|
|alt| Fornece informações alternativas para uma imagem|
|autocomplete| O preenchimento automático permite que o navegador preveja o próximo valor|
|autofocus| Especifica que o elemento deve obter o foco automaticamente quando a página é carregada|
|checked| Especifica que um elemento input deve ser pré-selecionado quando a página carrega|
|dirname| Permite o envio da direção do texto do campo de entrada|
|disabled| Especifica que o elemento deve ser desativado|
|form| Especifica o formulário ao qual o elemento pertence|
|formaction| Especifica para onde enviar os dados do formulário|
|height| Especifica a altura do elemento, em pixels|
|list| Se refere a um elemento datalist que contém opções predefinidas para um elemento input|
|max| Especifica o valor máximo do elemento|
|maxlength| Especifica o número máximo de caracteres permitidos no elemento|
|min| Especifica o valor mínimo de um elemento do elemento|
|multiple| Especifica que o usuário tem permissão para inserir / selecionar mais de um valor|
|name| Especifica um nome para o elemento|
|onload| Dispara quando um objeto é carregado|
|onsearch| Acionado quando um usuário pressiona a tecla "ENTER" ou clica no botão "x" em um elemento input com type = "search"|
|pattern| Especifica uma expressão regular com a qual o valor do elemento input é verificado|
|placeholder| Especifica uma pequena dica que descreve o valor esperado de um campo de entrada|
|readonly| Especifica que um campo de entrada ou textarea é somente leitura|
|required| Especifica que o elemento deve ser preenchido antes de enviar o formulário|
|size| Especifica a largura visível, em caracteres, de um elemento input|
|src|  Especifica a localização do recurso externo|
|step|  Especifica os intervalos de números legais para um elemento input|
|type| Especifica o tipo de elemento input a ser exibido|
|value| Especifica o valor inicial do elemento|
|width|  Especifica a largura do elemento, em pixels|
***
## `<textarea>`
 
Define o controle de entrada de várias linhas. Normalmente utilizado para análises ou observações.

```html
<label for="w3review">Review of W3Schools:</label>

<textarea id="w3review" name="w3review" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
```

|Atributo|Descrição|
|:------:|:-------:|
|autofocus| Especifica que o elemento deve obter o foco automaticamente quando a página é carregada|
|	cols| Especifica a largura visível de uma área de texto|
|dirname| Permite o envio da direção do texto do campo de entrada|
|disabled| Especifica que o elemento deve ser desativado|
|form| Especifica o formulário ao qual o elemento pertence|
|maxlength| Especifica o número máximo de caracteres permitidos no elemento|
|name| Especifica um nome para o elemento|
|placeholder| Especifica uma pequena dica que descreve o valor esperado de um campo de entrada|
|readonly| Especifica que um campo de entrada ou textarea é somente leitura|
|required| Especifica que o elemento deve ser preenchido antes de enviar o formulário|
|rows| Especifica a altura visível de uma área de texto, em linhas|
|wrap| Especifica como o texto em uma área de texto deve ser quebrado quando enviado em um formulário|
***
## `<button>`
 
Representa um botão clicável, que pode ser adicionado texto.

```html
<button type="button">Click Me!</button>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|autofocus| Especifica que o elemento deve obter o foco automaticamente quando a página é carregada|
|disabled| Especifica que o elemento deve ser desativado|
|form| Especifica o formulário ao qual o elemento pertence|
|formaction| Especifica para onde enviar os dados do formulário|
|name| Especifica um nome para o elemento|
|type| Especifica o tipo de botão|
|value| Especifica o valor inicial do elemento|
***
## `<select>`
 
Usado para criar listas suspensas e formulários para coletar entradas do usuário.

```html
<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|autofocus| Especifica que o elemento deve obter o foco automaticamente quando a página é carregada|
|disabled| Especifica que o elemento deve ser desativado|
|form| Especifica o formulário ao qual o elemento pertence|
|multiple| Especifica que o usuário tem permissão para inserir / selecionar mais de um valor|
|name| Especifica um nome para o elemento|
|required| Especifica que o elemento deve ser preenchido antes de enviar o formulário|
|size| Especifica o número de opções visíveis em uma lista suspensa|
***
## `<optgroup>`
 
Cria um agrupamento de opcções dentro de uma tag select.

```html
<label for="cars">Choose a car:</label>
<select  name="cars" id="cars">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|disabled| Especifica que o elemento deve ser desativado|
|label| Especifica o título da trilha de texto|
***
## `<option>`
 
Usado para criar um controle que representa um item dentro de um elemento HTML5. Define os elementos de uma lista.

```html
<label for="cars">Choose a car:</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|disabled| Especifica que o elemento deve ser desativado|
|label| Especifica o título da trilha de texto|
|selected| Especifica que uma opção deve ser pré-selecionada quando a página carrega|
|value| Especifica o valor inicial do elemento|
***
## `<label>`
 
Define um rotulo para vários elementos.

```html
<form action="/action_page.php">
  <label for="male">Male</label>
  <input type="radio" name="gender" id="male" value="male"><br>
  <label for="female">Female</label>
  <input type="radio" name="gender" id="female" value="female"><br>
  <label for="other">Other</label>
  <input type="radio" name="gender" id="other" value="other"><br><br>
  <input type="submit" value="Submit">
</form>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|for| Especifica a qual elemento de formulário um rótulo está vinculado|
|form| Especifica o formulário ao qual o elemento pertence|
***
## `<fieldset>`
 
Usado para relacionar elementos semelhantes em uma tag label e desenha uma caixa ao redor dos elementos relacionados.

```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|disabled| Especifica que o elemento deve ser desativado|
|form| Especifica o formulário ao qual o elemento pertence|
|name| Especifica um nome para o elemento|
***
## `<legend>`
 
Define uma legenda para a tag fieldset.

```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
 ```

***
## `<datalist>`
 
Apresenta uma lista de opções para a tag input ou outras tags.

```html
<label for="browser">Choose your browser from the list:</label>
<input list="browsers" name="browser" id="browser">

<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
 ```

***
## `<output>`
 
Usado para apresentar ao Usuário o resultado de um calculo ou ação.

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50">
  +<input type="number" id="b" value="25">
  =<output name="x" for="a b"></output>
</form>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|for| Especifica a relação entre o resultado do cálculo e os elementos usados ​​no cálculo|
|form| Especifica o formulário ao qual o elemento pertence|
|name| Especifica um nome para o elemento|
***
# `Frames`
## `<iframe>`
 
Especifica um quadro embutido, que carrega outros arquivos HTML.

```html
<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|height| Especifica a altura do elemento, em pixels|
|name| Especifica um nome para o elemento, pode ser usado para direcionar o envio de um formulário|
|onload| Dispara quando um objeto é carregado|
|sandbox| Permite um conjunto extra de restrições para o conteúdo no iframe|
|src|  Especifica a localização do recurso externo|
|srcdoc|  Especifica o conteúdo HTML da página a ser mostrado no quadro embutido|
|width|  Especifica a largura do elemento, em pixels|
***
# `imagens`
## `<img>`
 
Representa a inserção de uma imagem no arquivo HTML5.

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
 ```

|Atributo|Descrição|
|:------:|:-------:|
|alt| Fornece informações alternativas para uma imagem|
|height| Especifica a altura do elemento, em pixels|
|ismap| Especifica que a imagem faz parte de um mapa de imagem do lado do servidor|
|onabort| Define um script a ser executado se o carregamento do arquivo de mídia for interrompido|
|onerror| Ocorre quando ocorre um erro durante o carregamento de um arquivo de mídia|
|onload| Dispara quando um objeto é carregado|
|sizes| Especifica os tamanhos dos ícones para mídia visual|
|src|  Especifica a localização do recurso externo|
|srcset|  Especifica a URL da imagem a ser usada em diferentes situações|
|usemap|  Especifica uma imagem como um mapa de imagem|
|width|  Especifica a largura do elemento, em pixels|
***
## `<map>`
 
Usado para definir uma área clicavel em uma imagem.

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|name| Associado ao atributo usemap de img e cria um relacionamento entre a imagem e o mapa|
***
## `<area>`
 
Define a região dentro da tag map.

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|alt| Fornece informações alternativas para uma imagem|
|coords| Especifica as coordenadas de uma área em um mapa de imagem|
|download| Especifica que o destino será baixado quando um usuário clicar no hiperlink|
|href| Especifica a URL da página para a qual o link vai|
|hreflang| Especifica o idioma do documento vinculado|
|media| Especifica para qual mídia / dispositivo o documento vinculado é otimizado|
|rel| Especifica a relação entre o documento atual e o documento / recurso vinculado|
|shape| Especifica a forma de uma área|
|target| Especifica onde abrir o documento vinculado|
***
## `<canvas>`
 
Usada para desenhar gráficos, em tempo real, por meio de scripts.

```html
<canvas id="myCanvas">
Your browser does not support the canvas tag.
</canvas>

<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 80);
</script>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|height| Especifica a altura do elemento, em pixels|
|width|  Especifica a largura do elemento, em pixels|
***
## `figcaption>`
 
Define uma legenda para a tag figure.

```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
 ```

***
## `<figure>`
 
Especifica conteúdo independente, como ilustrações, diagramas, fotos, listagens de código.

```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
 ```

***
## `<picture>`
 
Conteiner utilizado para definir vários elementos source para um elemento img especifico contido nele.

```html
<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```

***
## `<svg>`
 
Cria um conteiner para gráficos svg.

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
 ```

***
# `Áudio e Vídeo`
## `<audio>`
 
Usado para imcorporar elementos de áudio.

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|autoplay| O vídeo/áudio começa automaticamente|
|controls| Especifica que os controles de áudio / vídeo devem ser exibidos|
|loop| Especifica que o áudio será reiniciado sempre que for finalizado|
|muted| Especifica que a saída de áudio do vídeo deve ser silenciada|
|onabort| Define um script a ser executado se o carregamento do arquivo de mídia for interrompido|
|oncanplay| Define um script a ser executado quando o navegador puder iniciar a reprodução da mídia especificada|
|oncanplaythrough| Ocorre quando o navegador estima que pode reproduzir o áudio / vídeo especificado sem ter que parar para armazenamento em buffer|
|ondurationchange| Ocorre quando os dados de duração do áudio / vídeo especificado são alterados|
|onemptied| Dispara quando algo ruim acontece e o arquivo está indisponível|
|onended| Ocorre quando o áudio / vídeo chega ao fim|
|onloadeddata| Ocorre quando os dados do quadro atual são carregados, mas não há dados suficientes para reproduzir o próximo quadro do áudio / vídeo especificado|
|onloadedmetadata| Ocorre quando metadados para o áudio / vídeo especificado foram carregados|
|onloadstart| Ocorre quando o navegador começa a procurar o áudio / vídeo especificado|
|onpause| Define um script a ser executado quando o áudio / vídeo é pausado pelo usuário ou programaticamente|
|onplay| Define um script a ser executado quando o áudio / vídeo for iniciado ou não estiver mais pausado|
|onplaying| Definem um script a ser executado quando o áudio / vídeo começar a ser reproduzido|
|onprogress| Define um script a ser executado quando o navegador está baixando o áudio / vídeo especificado|
|onratechange| Define um script a ser executado quando a velocidade de reprodução do áudio / vídeo é alterada|
|onseeked| Define um script a ser executado quando o usuário terminar de mover / pular para uma nova posição no áudio / vídeo|
|onseeking| Define um script a ser executado quando o usuário começa a se mover / pular para uma nova posição no áudio / vídeo|
|onstalled| Define um script a ser executado quando o navegador está tentando obter dados de mídia, mas os dados não estão disponíveis|
|onsuspend| Define um script a ser executado quando o navegador intencionalmente não está obtendo dados de mídia|
|ontimeupdate| Define um script a ser executado quando a posição de reprodução de um áudio / vídeo for alterada|
|onvolumechange|  Define um script a ser executado sempre que o volume de um vídeo / áudio for alterado|
|onwaiting|  Define um script a ser executado quando o vídeo for interrompido, pois ele precisa armazenar em buffer o próximo quadro|
|preload|  Especifica se e como o autor pensa que o arquivo de mídia deve ser carregado quando a página é carregada|
|src|  Especifica a localização do recurso externo|
***
## `<source>`
 
É usado para especifica vários elementos de mídia, como áudio, video e picture.

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|media| Especifica para qual mídia / dispositivo o documento vinculado é otimizado|
|sizes| Especifica os tamanhos dos ícones para mídia visual|
|src|  Especifica a localização do recurso externo|
|srcset|  Especifica a URL da imagem a ser usada em diferentes situações|
|type| Especifica o tipo de mídia da Internet|
***
## `<track>`
 
Especifica faixas de texto para audio e video. Usado para especificar legendas.

```html
<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
</video>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|default| Especifica que a faixa deve ser ativada se as preferências do usuário não indicarem que outra faixa seria mais apropriada|
|kind| Especifica o tipo de trilha de texto|
|label| Especifica o título da trilha de texto|
|oncuechange| Define um script a ser executado quando o ecue muda em um elemento track|
|src|  Especifica a localização do recurso externo|
|srclang|  Especifica o idioma dos dados do texto da trilha|
***
## `<video>`
 
Usado para incorporar vídeo ao arquivo. Contem uma ou mais tags source.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|autoplay| O vídeo/áudio começa automaticamente|
|controls| Especifica que os controles de áudio / vídeo devem ser exibidos|
|height| Especifica a altura do elemento, em pixels|
|loop| Especifica que o áudio será reiniciado sempre que for finalizado|
|muted| Especifica que a saída de áudio do vídeo deve ser silenciada|
|onabort| Define um script a ser executado se o carregamento do arquivo de mídia for interrompido|
|oncanplay| Define um script a ser executado quando o navegador puder iniciar a reprodução da mídia especificada|
|oncanplaythrough| Ocorre quando o navegador estima que pode reproduzir o áudio / vídeo especificado sem ter que parar para armazenamento em buffer|
|ondurationchange| Ocorre quando os dados de duração do áudio / vídeo especificado são alterados|
|onemptied| Dispara quando algo ruim acontece e o arquivo está indisponível|
|onended| Ocorre quando o áudio / vídeo chega ao fim|
|onerror| Ocorre quando ocorre um erro durante o carregamento de um arquivo de mídia|
|onerror| Ocorre quando ocorre um erro durante o carregamento de um arquivo de mídia|
|onloadeddata| Ocorre quando os dados do quadro atual são carregados, mas não há dados suficientes para reproduzir o próximo quadro do áudio / vídeo especificado|
|onloadedmetadata| Ocorre quando metadados para o áudio / vídeo especificado foram carregados|
|onloadstart| Ocorre quando o navegador começa a procurar o áudio / vídeo especificado|
|onpause| Define um script a ser executado quando o áudio / vídeo é pausado pelo usuário ou programaticamente|
|onplay| Define um script a ser executado quando o áudio / vídeo for iniciado ou não estiver mais pausado|
|onprogress| Define um script a ser executado quando o navegador está baixando o áudio / vídeo especificado|
|onratechange| Define um script a ser executado quando a velocidade de reprodução do áudio / vídeo é alterada|
|onseeked| Define um script a ser executado quando o usuário terminar de mover / pular para uma nova posição no áudio / vídeo|
|onseeking| Define um script a ser executado quando o usuário começa a se mover / pular para uma nova posição no áudio / vídeo|
|onstalled| Define um script a ser executado quando o navegador está tentando obter dados de mídia, mas os dados não estão disponíveis|
|onsuspend| Define um script a ser executado quando o navegador intencionalmente não está obtendo dados de mídia|
|ontimeupdate| Define um script a ser executado quando a posição de reprodução de um áudio / vídeo for alterada|
|onvolumechange|  Define um script a ser executado sempre que o volume de um vídeo / áudio for alterado|
|onwaiting|  Define um script a ser executado quando o vídeo for interrompido, pois ele precisa armazenar em buffer o próximo quadro|]
|poster|  Especifica uma imagem a ser exibida durante o download do vídeo ou até que o usuário pressione o botão de reprodução|
|preload|  Especifica se e como o autor pensa que o arquivo de mídia deve ser carregado quando a página é carregada|
|src|  Especifica a localização do recurso externo|
|width|  Especifica a largura do elemento, em pixels|
***
# `Links`
## `<a>`
 
A tag a define um hiperlink. O atributo mais importante da tag a é o atributo href, que indica o destino do link.

```html
<a href="https://www.w3schools.com">Visit W3Schools.com!</a>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|download| Especifica que o destino será baixado quando um usuário clicar no hiperlink|
|href| Especifica a URL da página para a qual o link vai|
|hreflang| Especifica o idioma do documento vinculado|
|media| Especifica para qual mídia / dispositivo o documento vinculado é otimizado|
|rel| Especifica a relação entre o documento atual e o documento / recurso vinculado|
|target| Especifica onde abrir o documento vinculado|
|type| Especifica o tipo de elemento input a ser exibido|
***
## `<link>`
 
Especifica a relação entre o arquivo atual e o elemento externo.

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|href| Especifica a localização do recurso externo|
|hreflang| Especifica o idioma do documento vinculado|
|media| Especifica para qual mídia / dispositivo o documento vinculado é otimizado|
|onerror| Ocorre quando ocorre um erro durante o carregamento de um arquivo de mídia|
|onload| Dispara quando um objeto é carregado|
|rel| Especifica a relação entre o documento atual e o documento / recurso vinculado|
|sizes| Especifica os tamanhos dos ícones para mídia visual|
|type| Especifica o tipo de mídia da Internet|
***
## `<nav>`
 
Representa uma seção que aponta para outras páginas ou áreas da página.

```html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
</nav>
 ```

***
# `Listas`
## `<ul>`
 
Define uma lista não ordenada.

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
 ```

***
## `<ol>`
 
Define uma lista ordenada numéricamente.

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|reversed| Especifica que a ordem da lista deve ser decrescente em vez de crescente|
|start| Especifica o valor inicial do primeiro item da lista em uma lista ordenada|
***
## `<li>`
 
Usado para definir um elemento que faz parte da lista.

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

|Atributo|Descrição|
|:------:|:-------:|
|value| Define o valor do item da lista|
***
## `<dl>`
 
Cria uma lista com descrição nos elementos.

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
 ```

***
## `<dt>`
 
Define um termo ou nome de uma lista com descrição.

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
 ```

***
## `<dd>`
 
Define a descrição do elementos em uma lista de descrição.

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
 ```

***
# `Tabelas`
## `<table>`
 
Cria uma tabela com duas dimensões ou mais.

```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
 ```

***
## `<caption>`
 
Define o título ou legenda da tabela.

```html
<table>
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
 ```

***
## `<th>`
 
Define o cabeçalho da tabela.

```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|colspan| Define o número de colunas que uma célula da tabela deve abranger|
|headers| Especifica uma ou mais células de cabeçalho às quais uma célula da tabela está relacionada|
|rowspan| Especifica o número de linhas que uma célula deve abranger|
|scope| Especifica se uma célula de cabeçalho é um cabeçalho de uma coluna, linha ou grupo de colunas ou linhas|
***
## `<tr>`
 
Define a linha da tabela.

```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>
 ```

***
## `<td>`
 
Contem dados padrão de uma tabela.

```html
<table>
  <tr>
    <td>Cell A</td>
    <td>Cell B</td>
  </tr>
  <tr>
    <td>Cell C</td>
    <td>Cell D</td>
  </tr>
</table>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|colspan| Define o número de colunas que uma célula da tabela deve abranger|
|headers| Especifica uma ou mais células de cabeçalho às quais uma célula da tabela está relacionada|
|rowspan| Especifica o número de linhas que uma célula deve abranger|
***
## `<thead>`
 
Agrupar o conteúdo do cabeçalho em uma tabela.

```html
<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
 ```

***
## `<tbody>`
 
Agrupa o conteúdo do corpo princial em uma tabela.

```html
<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
 ```

***
## `<tfoot>`
 
Usado para agrupar o contúdo do rodapé um uma tabela.

```html
<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
 ```

***
## `<col>`
 
Especifica as propriedades da coluna para cada coluna de uma tag colgroup.
```html
<table>
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|span| Define o número de colunas que um elemento col / colgroup deve abranger|
***
## `<colgroup>`
 
Define um grupo de uma ou mais colunas para formatação.

```html
<table>
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|span| Define o número de colunas que um elemento col / colgroup deve abranger|
***
# `Etilos e Semântica`
## `<style>`
 
Usada para definir estilos de CSS para o arquivo.

```html
<html>
<head>
<style>
  h1 {color:red;}
  p {color:blue;}
</style>
</head>
<body>

<h1>A heading</h1>
<p>A paragraph.</p>

</body>
</html>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|media| Especifica para qual mídia / dispositivo o documento vinculado é otimizado|
|onload| Dispara quando um objeto é carregado|
|type| Especifica o tipo de mídia da Internet|
***
## `<div>`
 
Define uma divisão ou seção para elementos HTML que são estilizados com CSS ou manipulados por JavaScript.

```html
<html>
<head>
<style>
.myDiv {
  border: 5px outset red;
  background-color: lightblue;
  text-align: center;
}
</style>
</head>
<body>

<div class="myDiv">
  <h2>This is a heading in a div element</h2>
  <p>This is some text in a div element.</p>
</div>

</body>
</html>
 ```

***
## `<span>`
 
Usado para marcar parte do texto que será estilizada ou manipulada.

```html
<p>My mother has <span style="color:blue">blue</span> eyes.</p>
 ```

***
## `<header>`
 
Representa um conteiner para conteúdo introdutório.

```html
<article>
  <header>
    <h1>A heading here</h1>
    <p>Posted by John Doe</p>
    <p>Some additional information here</p>
  </header>
  <p>Lorem Ipsum dolor set amet....</p>
</article>
 ```

***
## `<footer>`
 
Define uma seção para rodapé.

```html
<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
```

***
## `<main>`
 
Define o conteúdo principal dentro da tag body.

```html
<main>
  <h1>Most Popular Browsers</h1>
  <p>Chrome, Firefox, and Edge are the most used browsers today.</p>

  <article>
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
  </article>

  <article>
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
  </article>

  <article>
    <h2>Microsoft Edge</h2>
    <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
  </article>
</main>
 ```

***
## `<section>`
 
Representa uma seção genérica contida em um documento HTML.

```html
<section>
<h2>WWF History</h2>
<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>

<section>
<h2>WWF's Symbol</h2>
<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
</section>
 ```

***
## `<article>`
 
Representa uma seção independente, que mesmo se separado do arquivo não perde o sentido.

```html
<article>
<h2>Google Chrome</h2>
<p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
</article>

<article>
<h2>Mozilla Firefox</h2>
<p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
</article>

<article>
<h2>Microsoft Edge</h2>
<p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
</article>
 ```

***
## `<aside>`
 
São informações extras. Que estão separadas do conteúdo principal, mas direciona para ele.

```html
<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

<aside>
<h4>Epcot Center</h4>
<p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</aside>
 ```

***
## `<details>`
 
É uma seção onde são colocados detalhes e podem ser abertos conforme a preferencia.

```html
<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|ontoggle| Eisparado quando o usuário abre ou fecha o elemento details|
|open| Especifica que os detalhes devem estar visíveis (abertos) por padrão|
***
## `<dialog>`
 
Define uma caixa de diálogo.

```html
<dialog open>This is an open dialog window</dialog>
 ```

***
## `<summary>`
 
Usado como sumário ou legenda para a tag details.

```html
<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
 ```

***
## `<data>`
 
Usada para adicinar uma tradução legivel por maquina.

```html
<ul>
  <li><data value="21053">Cherry Tomato</data></li>
  <li><data value="21054">Beef Tomato</data></li>
  <li><data value="21055">Snack Tomato</data></li>
</ul>
 ```

***
# `Meta Info`
## `<head>`
 
Fica entra as tags html e body. Definem o título do documento, conjunto de caracteres, estilos, scripts e outras meta informações.

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

***
## `<meta>`
 
Dentro da tag head define qualquer informação de metadados que não podem ser definidos por outros elementos HTML.

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|charset| Especifica a codificação de caracteres para o documento HTML|
|content| Fornece o valor associado ao http-equiv ou ao atributo name|
|http-equiv| Fornece um cabeçalho HTTP para a informação / valor do atributo content|
|name| Especifica um nome para a informação / valor do atributo content|
***
## `<base>`
 
Especifica o URL base e destino para todos os URL relevantes ao arquivo.

```html
<head>
  <base href="https://www.w3schools.com/" target="_blank">
</head>

<body>
<img src="images/stickman.gif" width="24" height="39" alt="Stickman">
<a href="tags/tag_base.asp">HTML base Tag</a>
</body>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|href| Especifica o URL base para todos os URLs relativos em uma página|
|target|  Especifica o destino padrão para todos os hyperlinks e formulários na página|
***
# `Programação`
## `<script>`
 
Usado para incorporar um script do lado do cliente

```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|async| Especifica que o script será executado de forma assíncrona|
|	charset| Especifica a codificação de caracteres usada em um arquivo de script externo|
|	defer| Especifica que o script é executado quando a página termina de analisar|
|onerror| Ocorre quando ocorre um erro durante o carregamento de um arquivo de mídia|
|onload| Dispara quando um objeto é carregado|
|src|  Especifica a localização do recurso externo|
|type| Especifica o tipo de mídia da Internet|
***
## `<noscript>`
 
Define uma versão alternativa para usuários que desativaram os scripts do navegador. 

```html
<script>
document.write("Hello World!")
</script>
<noscript>Your browser does not support JavaScript!</noscript>
 ```

***
## `<embed>`
 
Incorpora conteúdo esterno no ponto especificado. É fornecido por um aplicativo externo ou plug-in.

```html
<embed type="image/jpg" src="pic_trulli.jpg" width="300" height="200">
<embed type="text/html" src="snippet.html" width="500" height="200">
<embed type="video/webm" src="video.mp4" width="400" height="300">
 ```

|Atributo|Descrição|
|:------:|:-------:|
|height| Especifica a altura do elemento, em pixels|
|onabort| Define um script a ser executado se o carregamento do arquivo de mídia for interrompido|
|oncanplay| Define um script a ser executado quando o navegador puder iniciar a reprodução da mídia especificada|
|onerror| Ocorre quando ocorre um erro durante o carregamento de um arquivo de mídia|
|src|  Especifica a localização do recurso externo|
|type| Especifica o tipo de mídia da Internet|
|width|  Especifica a largura do elemento, em pixels|
***
## `<object>`
 
Define um contêiner para um recurso externo. Pode ser uma página da web, uma imagem, um reprodutor de mídia ou um aplicativo de plug-in.

```html
<object data="pic_trulli.jpg" width="300" height="200"></object>
<object data="snippet.html" width="500" height="200"></object>
<object data="video.mp4" width="400" height="300"></object>
 ```

|Atributo|Descrição|
|:------:|:-------:|
|data| Especifica a URL do recurso a ser usado pelo objeto|
|form| Especifica o formulário ao qual o elemento pertence|
|height| Especifica a altura do elemento, em pixels|
|name| Especifica um nome para o elemento|
|onabort| Define um script a ser executado se o carregamento do arquivo de mídia for interrompido|
|oncanplay| Define um script a ser executado quando o navegador puder iniciar a reprodução da mídia especificada|
|onerror| Ocorre quando ocorre um erro durante o carregamento de um arquivo de mídia|
|type| Especifica o tipo de mídia da Internet|
|usemap|  Especifica uma imagem como um mapa de imagem|
|width|  Especifica a largura do elemento, em pixels|
***
## `<param>`
 
Usada pra definir parâmetros para a tag object.

```html
<object data="horse.wav">
  <param name="autoplay" value="true">
</object>
```

|Atributo|Descrição|
|:------:|:-------:|
|name| Usado junto com o atributo value para especificar parâmetros para o plugin especificado com a tag object|
|value| Especifica o valor do parâmetro|
***
# `Atributos Globais`
|Atributo|Descrição|
|:------:|:-------:|
|accesskey| Especifica uma tecla de atalho para ativar / focar um elemento|
|class| Especifica um ou mais nomes de classe para um elemento|
|contenteditable| Especifica se o conteúdo de um elemento é editável ou não|
|data-*| Usado para armazenar dados personalizados privados para a página ou aplicativo|
|dir| Especifica a direção do texto do conteúdo do elemento|
|draggable| Especifica se um elemento é arrastável ou não|
|hidden| Especifica que um elemento ainda não é, ou não é mais, relevante|
|id| Especifica um id único para um elemento HTML |
|lang| Especifica o idioma do conteúdo do elemento |
|spellcheck| Especifica se o elemento deve ter sua ortografia e gramática verificadas ou não |
|style| Especifica um estilo embutido para um elemento |
|tabindex| Especifica a ordem de tabulação de um elemento |
|title| Especifica informações extras sobre um elemento |
|translate| Especifica se o conteúdo de um elemento deve ser traduzido ou não |

# `All Visible Elements`
## `Form Events`
|Atributo|Descrição|
|:------:|:-------:|
|onblur| Dispara no momento em que o elemento perde o foco|
|onchange| Dispara no momento em que o valor do elemento é alterado|
|oncontextmenu| Disparado quando o usuário clica com o botão direito em um elemento para abrir o menu de contexto|
|onfocus| Dispara no momento em que o elemento obtém o foco|
|oninput| Disparado quando um elemento obtém a entrada do usuário|
|oninvalid| Ocorre quando um elemento submittable input é inválido|
|onselect| Acionado após algum texto ter sido selecionado em um elemento|

## `Keyboard Events`
|Atributo|Descrição|
|:------:|:-------:|
|onkeydown| Disparado quando o usuário pressiona uma tecla|
|onkeypress| Disparado quando o usuário pressiona uma tecla|
|onkeyup| Disparado quando o usuário libera uma tecla|

## `Mouse Events`
|Atributo|Descrição|
|:------:|:-------:|
|onclick| Dispara com um clique do mouse no elemento|
|ondblclick| Acionado com um clique duplo do mouse no elemento|
|onmousedown| Disparado quando um botão do mouse é pressionado no elemento|
|onmousemove| Disparado quando o ponteiro está se movendo enquanto está sobre um elemento|
|onmouseout| Disparado quando o ponteiro do mouse sai de um elemento|
|onmouseover| Disparado quando o ponteiro do mouse se move sobre um elemento|
|onmouseup| Disparado quando um botão do mouse é liberado sobre o elemento|
|onwheel| Acionado quando a roda de um dispositivo apontador é rolada para cima ou para baixo sobre um elemento|
## `Drag Events`
|Atributo|Descrição|
|:------:|:-------:|
|ondrag| Acionado quando um elemento ou seleção de texto está sendo arrastado|
|ondragend| Disparado quando o usuário termina de arrastar um elemento ou seleção de texto|
|ondragenter| Acionado quando um elemento arrastável ou seleção de texto entra em um destino válido|
|ondragleave| Acionado quando um elemento arrastável ou seleção de texto deixa um destino válido|
|ondragover| Acionado quando um elemento arrastável ou seleção de texto está sendo arrastado sobre um destino válido|
|ondragstart| Disparado quando o usuário começa a arrastar um elemento ou seleção de texto|
|ondrop| Acionado quando um elemento arrastável ou seleção de texto é solto em um destino válido|
|onscroll| Acionado quando a barra de rolagem de um elemento está sendo rolada|
## `Clipboard Events`
|Atributo|Descrição|
|:------:|:-------:|
|oncopy| Disparado quando o usuário copia o conteúdo de um elemento|
|oncut| Disparado quando o usuário corta o conteúdo de um elemento|
|onpaste| Disparado quando o usuário cola algum conteúdo em um elemento|