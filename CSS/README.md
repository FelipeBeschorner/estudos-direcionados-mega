# Documentação CSS
# O que é CSS?
Descreve como os elementos de HTML devem ser exibidos, reduzindo muito o tempo enquanto controla o layout de várias páginas ao mesmo tempo. São armazenados em arquivos CSS e carregados no HTML.
# Como Referenciar?
Existem tres maneiras:
* CSS Externo
* CSS Interno
* CSS Inline

## CSS Externo
Com um arquivo CSS externo é possivel referenciar esse arquivo e alterar o padrão de todo o site. A referencia deve ser incluída dentro da tag `<link>` na seção `<head>`.

**Arquivo HTML**:
```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
**Arquivo CSS**:
```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```
***
## CSS Interno
O uso do CSS interno é exclusivo da página e é definido dentro da tag `<style>` na seção `<head>`.

**Arquivo HTML**:
```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
***
## CSS Inline
Usado para aplicar o estilo CSS à apenas um elemento com o atributo style dentro do mesmo.

**Arquivo HTML**:
```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
# Sintaxe

* O conjunto de regras para CSS consiste de um seletor e suas declarações.
* As declarações são separadas por ";"(ponto e vírgula).
* Cada declaração consiste da propriedade e um valor separados por ":"(dois pontos).
* Todas as declarações são cercadas por "{}"(chaves).

**Exemplo CSS**:
```css
p {
  color: red;
  text-align: center;
}
```
* p é o seletor;
* color e text-align são declarações;
* red e center são valor se declarações;
# Sintaxe

## `Propriedades`  
## **A**  

## **align-content**
Alinha linhas flexíveis. Modifica o comportamento da propriedade flex-wrap.

|Navegador|Versão|
|:--------|:----:|
|Edge|     11    |
|Mozila|   28    |
|Chrome|   21    |
|Safari|       9 |
|Opera|      12.1|
***
## **align-items**
Especifica o alinhamento de itens flexíveis.

|Navegador|Versão|
|:--------|:----:|
|Edge|       11    |
|Mozila|       20  |
|Chrome|    21     |
|Safari|       9   |
|Opera|      12.1  |
***
## **align-self**
Especifica o alinhamento do item selecionado.

|Navegador|Versão|
|:--------|:----:|
|Edge|        11   |
|Mozila|     20    |
|Chrome|      12   |
|Safari|       9  |
|Opera|        12.1  |
***
## **all**
Redefine todas as propriedades para seu valor inicial.

|Navegador|Versão|
|:--------|:----:|
|Edge|     79      |
|Mozila|     27    |
|Chrome|   37      |
|Safari|     9.1    |
|Opera|       24   |
***
## **animation**
Abreviação de: 
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-play-state

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|       30   |
***
## **animation-delay**
Especifica o tempo para início da animação.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-direction**
Define se a nimação deve ocorrer para frente, para tras ou em ciclos alternados.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-duration**
Define o tempo para a animação completar um ciclo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-fill-mode**
Especifica o estilo do elemento quando a animação não está sendo reproduzida.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-iteration-count**
Especifica o número de vezes que a animação será reproduzida.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-name**
Especifica um nome para a animação de @keyframes.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-play-state**
Especifica se a animação está sendo reproduzida ou pausada.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-timing-function**
Especifica o temo de mudanaça entre um conjunto de estilos CSS.
|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **B**  
## **backface-visibility**
Define se o verso da imagem pode ou não ser vista em imagens rotativas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    36     |
|Safari|      -webkit- 4   |
|Opera|         23 |
***
## **background**
Define diferentes propriedades de fundo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **background-attachment**
Uma imagem fixa de fundo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **background-blend-mode**
Deixa a imagem mais de fundo mais clara.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  30       |
|Chrome|    35     |
|Safari|      7.1   |
|Opera|          22|
***
## **background-clip**
Define até onde o fundo se estende.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  4       |
|Safari|   3      |
|Opera|     10.5     |
***
## **background-color**
Define a cor de fundo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **background-image**
Define uma ou mais imagens como background.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **background-origin**
Especifica o ponto de origem da imagem de fundo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  4       |
|Safari|   3      |
|Opera|     10.5     |
***
## **background-position**
Define onde sera colocado o background.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **background-repeat**
Repete a imagem de fundo sequencialmente verticalmente.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **background-size**
Define o tamanho da imagem de background em pixels.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  4       |
|Safari|   4.1      |
|Opera|       10   |
***
## **border**
Define o etilo das bordas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila|1         |
|Chrome| 1        |
|Safari|  1       |
|Opera|    3.5      |
***
## **border-bottom**
Define o estilo da borda inferior.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-bottom-color**
Define a cor da borda inferior.
|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-bottom-left-radius**
Define o arredondamento da borda inferior esquerda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  5       |
|Safari|   5      |
|Opera|     10.5     |
***
## **border-bottom-right-radius**
Define o arredondamento da borda inferior direita.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  5       |
|Safari|   5      |
|Opera|     10.5     |
***
## **border-bottom-style**
Define um estilo para a borda inferior.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    1     |
|Safari|     1    |
|Opera|       9.2   |
***
## **border-bottom-width**
Define a largura da borda inferior.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-collapse**
Define o modelo de bordas para duas tabelas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1.2      |
|Opera|       4   |
***
## **border-color**
Define uma cor para a borda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-image**
Define uma imagem como borda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  15       |
|Chrome|    16     |
|Safari|      6   |
|Opera|        15  |
***
## **border-image-outset**
Especifica a quantidade de pixels que uma imagem se estende além da borda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  15       |
|Chrome|    15     |
|Safari|      6   |
|Opera|        15  |
***
## **border-image-repeat**
Especifica se a imagem de borda deve ser repetida, esticada ou arredondada.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  15       |
|Chrome|    15     |
|Safari|      6   |
|Opera|        15  |
***
## **border-image-slice**
Espeifica onde dividir a imagem em caso de repetição.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  15       |
|Chrome|    15     |
|Safari|      6   |
|Opera|        15  |
***
## **border-image-source**
Especifica a imagem como borda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  15       |
|Chrome|    15     |
|Safari|      6   |
|Opera|        15  |
***
## **border-image-width**
Especifica a largura da imagem da borda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  1         |
|Mozila| 13        |
|Chrome|   15      |
|Safari|     6    |
|Opera|       15   |
***
## **border-left**
Define o estilo da borda esquerda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-left-color**
Define a cor da borda esquerda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-left-style**
Define um estilo para a borda esquerda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    1     |
|Safari|     1    |
|Opera|       9.2   |
***
## **border-left-width**
Define a largura da borda esquerda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-radius**
Arredonda os cantos da borda.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  5       |
|Safari|   5      |
|Opera|     10.5     |
***
## **border-right**
Define o estilo da borda direita.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-right-color**
Define a cor da borda direita.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila|   1      |
|Chrome| 1        |
|Safari|  1       |
|Opera|     3.5     |
***
## **border-right-style**
Define um estilo para a borda direita.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    1     |
|Safari|     1    |
|Opera|       9.2   |
***
## **border-right-width**
Define a largura da borda direita.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-spacing**
Define o espaçamento da borda de uma tabela.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     4     |
***
## **border-style**
Define um estilo para as bordas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila|   1      |
|Chrome| 1        |
|Safari|  1       |
|Opera|     3.5     |
***
## **border-top**
Define o estilo da borada superior.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-top-color**
Define a cor da borda superior.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-top-left-radius**
aredonda as bordas do canto superior esquerdo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  5       |
|Safari|   5      |
|Opera|     10.5     |
***
## **border-top-right-radius**
aredonda as bordas do canto superior direito.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  5       |
|Safari|   5      |
|Opera|     10.5     |
***
## **border-top-style**
Define o estilo da borda superior.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    1     |
|Safari|     1    |
|Opera|       9.2   |
***
## **border-top-width**
Define a largura da borda superior

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **border-width**
Define a largura das bordas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **bottom**
Define a posição da borda m relação a outros elementos.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     6     |
***
## **box-decoration-break**
Afeta todos os elementos da borda quando ela é fragmentada.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  32       |
|Chrome|    -webkit-22     |
|Safari|    -webkit-6.1     |
|Opera|     -webkit-11.5     |
***
## **box-shadow**
Adiciona sobra aos elementos.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 4        |
|Chrome|  10       |
|Safari|    5.1     |
|Opera|        10.5  |
***
## **box-sizing**
Define como a largura e a altura de um elemento são calculadas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 29        |
|Chrome|   10      |
|Safari|     5.1    |
|Opera|         9.5 |
***
## **break-after**
Especifica uma quebra de página, coluna ou região depois do elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  65       |
|Chrome|    50     |
|Safari|      10   |
|Opera|         37 |
***
## **break-before**
Especifica uma quebra de página, coluna ou região antes do elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  65       |
|Chrome|    50     |
|Safari|      10   |
|Opera|         37 |
***
## **break-inside**
Especifica uma quebra de página, coluna ou região dentro do elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  65       |
|Chrome|    50     |
|Safari|      10   |
|Opera|         37 |
***
## **C**  
## **caption-side**
Define o local da legenda de uma imagem.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     4     |
***
## **caret-color**
Define a cor do cursor nos elementos de entrada.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  53       |
|Chrome|    57     |
|Safari|      11.1   |
|Opera|          44|
***
## **@charset**
Especifica a condição de caracteres usada na folha de estilo.
|Navegador|Versão|
|:--------|:----:|
|Edge|  12         |
|Mozila|  1.5       |
|Chrome|     2    |
|Safari|      4   |
|Opera|        9  |
***
## **clear**
Especifica onde elementos flutuantes não podem ficar.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     6     |
***
## **clip**
Corta um retangulo em uma imagem.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **clip-path**
Cota uma imagem em uma forma geométrica.

|Navegador|Versão|
|:--------|:----:|
|Edge|  12         |
|Mozila|  54       |
|Chrome|    55     |
|Safari|      9.1   |
|Opera|          42|
***
## **color**
Define a cor do texto para diferentes elementos.

|Navegador|Versão|
|:--------|:----:|
|Edge|  3         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **column-count**
Define a quantidade de colunas que um elemento deve ter.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **column-fill**
Especifica como prenecher as colunas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      10   |
|Opera|         37 |
***
## **column-gap**
Especifica uma distância entre as colunas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **column-rule**
Define a largura, a cor e o estilo entre as colunas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **column-rule-color**
Define a cor entre as coluans.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **column-rule-style**
Define o estilo entre as colunas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **column-rule-width**
Define a distância entre as colunas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **column-span**
Especifica quantas colunas um elemento deve abranger.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  71       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **column-width**
Especifica a largura das colunas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **columns**
Define a largura e quantidade de colunas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    50     |
|Safari|      9   |
|Opera|        37  |
***
## **content**
Insere determinado conteúdo nas tags com a notação  :: before e :: after;

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     4     |
***
## **counter-increment**
Aumenta ou diminui o valor de um contador.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 2        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       9.6   |
***
## **counter-reset**
Cria ou reseta o valor de um contador.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 2        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       9.6   |
***
## **cursor**
Exibe diferentes estilos de cursor quando sobre o elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   4      |
|Chrome|    5     |
|Safari|     5    |
|Opera|       9.6   |
***
## **D**  
## **direction**
Especifica a direção do texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    2     |
|Safari|     1.3    |
|Opera|         9.2 |
***
## **display**
Especifica o comportamento de exibição.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 3        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       7   |
***
## **E**  
## **empty-cells**
Define se deve exibir bordas em celulas vazias.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1.2      |
|Opera|       4   |
***
## **F**  
## **filter**
Define efeitos visuais para um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  13         |
|Mozila|  35       |
|Chrome|    53     |
|Safari|      9.1   |
|Opera|          40|
***
## **flex**
Define o tamanho de itens flexíveis.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **flex-basis**
Define a largura inicial de um elemento flexível.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **flex-direction**
Define a direçaõ de itens flexíveis.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **flex-flow**
Resumo de flex-direction e flex-wrap.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **flex-grow**
Define o quanto o elemento vai crescer em relação aos do mesmo conteiner.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **flex-shrink**
Define o quanto o elemento vai encolher em relação aos do mesmo conteiner

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **flex-wrap**
Especifica se os itens flexíveis devm ser agrupados ou não.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **float**
Especifica onde um elemento deve ficar.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **font**
Define o tipo de fonte do texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **@font-face**
Não é mais necessário usar fontes seguras.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.6        |
|Chrome|    4     |
|Safari|     3    |
|Opera|       10   |
***
## **font-family**
Especifica a fonte de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **font-feature-settings**
Permite controle sobre recursos tipográficos avançados.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  34       |
|Chrome|    48     |
|Safari|      9.1   |
|Opera|          35|
***
## **@font-feature-values**
Permite que autores usem um nome comum em fonte variante alternativa para recurso ativado de forma diferente em OpenType.

|Navegador|Versão|
|:--------|:----:|
|Edge|       none    |
|Mozila|   34      |
|Chrome|      none   |
|Safari|        none |
|Opera|          none|
***
## **font-size**
Define o tamanho da fonte.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    1     |
|Safari|     1    |
|Opera|       7   |
***
## **font-size-adjust**
Oferece melhor controle de fonte quando a primária não está disponível.

|Navegador|Versão|
|:--------|:----:|
|Edge|       none    |
|Mozila|   3      |
|Chrome|      none   |
|Safari|        none |
|Opera|          none|
***
## **font-stretch**
Permite tornar o texto mais estreito ou mais largo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 9        |
|Chrome|  48       |
|Safari|    11     |
|Opera|       35   |
***
## **font-style**
Especifica o estilo da fonte de um texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **font-synthesis**
Quando itálico e negrito não estão disponíveis podem ser sintetizados pelo navegador.

|Navegador|Versão|
|:--------|:----:|
|Edge|       none    |
|Mozila|   34      |
|Chrome|      none   |
|Safari|        10 |
|Opera|          none|
***
## **font-variant**
Define se um texto deve ser exibido de forma variante.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **font-variant-alternates**
Controla o uso de glifos alternativos associados a nomes alternativos definidos em @font-feature-values

|Navegador|Versão|
|:--------|:----:|
|Edge|       none    |
|Mozila|   34      |
|Chrome|      none   |
|Safari|        9.1 |
|Opera|          none|
***
## **font-variant-caps**
Controla o uso de estilos alternativos para letras maiusculas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  34       |
|Chrome|    52     |
|Safari|        none |
|Opera|       39   |
***
## **font-variant-east-asian**
Controla estilos de escrita do leste asiático.

|Navegador|Versão|
|:--------|:----:|
|Edge|       none    |
|Mozila|   34      |
|Chrome|      none   |
|Safari|       none|
|Opera|          none|
***
## **font-variant-ligatures**
Controla quais ligaduras e formas contextuais são usadas no conteúdo textual dos elementos aos quais se aplica

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  34       |
|Chrome|    34     |
|Safari|      -webkit-7   |
|Opera|          -webkit-19|
***
## **font-variant-numeric**
Controla o uso de glifos alternativos para números, frações e marcadores ordinais

|Navegador|Versão|
|:--------|:----:|
|Edge|           none|
|Mozila|     34    |
|Chrome|       52  |
|Safari|         none|
|Opera|          39|
***
## **font-variant-position**
Controla o uso de glifos alternativos de tamanho menor posicionados como sobrescrito ou subscrito em relação à linha de base da fonte
|Navegador|Versão|
|:--------|:----:|
|Edge|       none    |
|Mozila|   34      |
|Chrome|      none   |
|Safari|       none|
|Opera|          none|
***
## **font-weight**
Especifica a espessura da fonte.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  2       |
|Safari|   1.3      |
|Opera|       3.5   |
***
## **G**  
## **grid**
Engloba todas as propriedades de grid.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-area**
Especifica o tamanho e a localização de um item de grade em um layout de grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-auto-columns**
Define o tamanho das colunas em um conteiner de grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-auto-flow**
Controla como os intens colocados automaticamente são inseridos na grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-auto-rows**
Define o tamanho das linhas de um conteiner de grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-column**
Especifica o tamanho e o local de um item de grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-column-end**
Define quantas colunas uma grade terá.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-column-gap**
Define o espaço entre as colunas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-column-start**
Define em que linha a coluna começará.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-gap**
Define a distância entre colunas e linhas de uma grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-row**
Especifica o tamanho e a localização de um item de grade em um layout de grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-row-end**
Define quantas linhas um item irá abranger ou em qual linha o item terminará.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-row-gap**
Define o tamanho da lacuna entre as linhas em um layout de grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-row-start**
Define qual linha o item começará.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-template**
Propriedade abreviada para grid-template-rows, grid-template-columns, grid-template-areas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-template-areas**
Especifica áreas dentro do layout da grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-template-columns**
Especifica o número e as larguras das colunas em um layout de grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **grid-template-rows**
Especifica o número e as alturas das linhas em um layout de grade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  52       |
|Chrome|    57     |
|Safari|      10   |
|Opera|         44 |
***
## **H**  
## **height**
Define a altura de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **hyphens**
Define se a hifenização é permitida para criar mais oportunidades de quebra automática em uma linha de texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  43       |
|Chrome|    55     |
|Safari|      -webkit-5.1   |
|Opera|          44|
***
## **I**  
## **image-rendering**
Dá uma dica ao navegador sobre quais aspectos de uma imagem são mais importantes para preservar quando a imagem é redimensionada.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  65       |
|Chrome|    41     |
|Safari|      10   |
|Opera|         26 |
***
## **@import**
Permite importar uma folha de estilo para outra folha de estilo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    1     |
|Safari|     1    |
|Opera|       3.5   |
***
## **isolation**
Define se um elemento deve criar um novo conteúdo de empilhamento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  36       |
|Chrome|    41     |
|Safari|      7.1   |
|Opera|          30|
***
## **J**  
## **justify-content**
Alinha os itens do contêiner flexível quando os itens não usam todo o espaço disponível no eixo principal.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **K**  
## **@keyframes**
Especifica o código da animação.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **L**  
## **left**
Afeta a posição horizontal de um elemento posicionado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    1     |
|Safari|     1    |
|Opera|       5   |
***
## **letter-spacing**
Aumenta ou diminui o espaço entre os caracteres em um texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **line-break**
Especifica como / se quebrar linhas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|    none     |
|Chrome|   1      |
|Safari|    none     |
|Opera|     none     |
***
## **line-height**
Especifica a altura de uma linha.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **list-style**
Resumo de list-style-type, list-style-position, list-style-image.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **list-style-image**
Substitui o marcador do item da lista por uma imagem.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **list-style-position**
Especifica a posição dos marcadores de item da lista.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **list-style-type**
Especifica o tipo de marcador de item de lista.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **M**  
## **margin**
Define as margens de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  6         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **margin-bottom**
Define a margem inferior de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  6         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **margin-left**
Define a margem esquerda de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  6         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **margin-right**
Define a margem direita de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  6         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **margin-top**
Define a margem superior de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  6         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **mask**
Oculta um elemento censurando ou recortando a imagem em lugares específicos.

|Navegador|Versão|
|:--------|:----:|
|Edge|  12         |
|Mozila|  53       |
|Chrome|    -webkit-4     |
|Safari|     -webkit-4    |
|Opera|       -webkit-15   |
***
## **mask-type**
Define o tipo de censura.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  53       |
|Chrome|    24     |
|Safari|      6.1   |
|Opera|          15|
***
## **max-height**
Define a altura máxima de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   2      |
|Opera|     7     |
***
## **max-width**
Define a largura máxima de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|    2     |
|Opera|      7    |
***
## **@media**
Usada em consultas de mídia para aplicar estilos diferentes para dispositivos / tipos de mídia diferentes.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    21     |
|Safari|      4   |
|Opera|        9  |
***
## **min-height**
Define a altura mínima de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   2      |
|Opera|     4     |
***
## **min-width**
Define a largura mínima de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   2      |
|Opera|     4     |
***
## **mix-blend-mode**
Especifica como o conteúdo de um elemento deve se mesclar com seu plano de fundo

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  32       |
|Chrome|    41     |
|Safari|      8   |
|Opera|        35  |
***
## **O**  
## **object-fit**
Usado para especificar como um ``<img>`` ou ``<video>`` deve ser redimensionado para caber em seu contêiner.

|Navegador|Versão|
|:--------|:----:|
|Edge|  16         |
|Mozila|  36       |
|Chrome|    31     |
|Safari|      7.1   |
|Opera|          19|
***
## **object-position**
É usada junto com o ajuste do objeto para especificar como um ``<img>`` ou ``<video>`` deve ser posicionado com as coordenadas x / y dentro de sua "própria caixa de conteúdo".

|Navegador|Versão|
|:--------|:----:|
|Edge|  16         |
|Mozila|  36       |
|Chrome|    31     |
|Safari|      7.1   |
|Opera|          19|
***
## **opacity**
Define o nível de opacidade de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 2        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       9   |
***
## **order**
Especifica a ordem de um item flexível em relação ao restante dos itens flexíveis dentro do mesmo contêiner.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  28       |
|Chrome|    29     |
|Safari|      9   |
|Opera|        17  |
***
## **orphans**
Define o número mínimo de linhas que devem ser deixadas no final de uma página quando ocorre uma quebra de página dentro de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|    none     |
|Chrome|  25       |
|Safari|    27     |
|Opera|       12.1   |
***
## **outline**
Linha desenhada ao redor dos elementos, fora das bordas, para fazer o elemento "se destacar".

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1.5        |
|Chrome|    1     |
|Safari|     1.2    |
|Opera|         7 |
***
## **outline-color**
Especifica a cor de um contorno.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1.5        |
|Chrome|    1     |
|Safari|     1.2    |
|Opera|         7 |
***
## **outline-offset**
Adiciona espaço entre um contorno e a borda ou borda de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  15         |
|Mozila|  3.5       |
|Chrome|     4    |
|Safari|      3   |
|Opera|        10.5  |
***
## **outline-style**
Especifica o estilo de um contorno.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1.5        |
|Chrome|    1     |
|Safari|     1.2    |
|Opera|         7 |
***
## **outline-width**
Especifica a largura de um contorno.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1.5        |
|Chrome|    1     |
|Safari|     1.2    |
|Opera|         7 |
***
## **overflow**
Especifica o que deve acontecer se o conteúdo estourar a caixa de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **overflow-wrap**
Especifica se o navegador pode ou não quebrar as linhas dentro das palavras para evitar o estouro. 

|Navegador|Versão|
|:--------|:----:|
|Edge|  18         |
|Mozila|  49       |
|Chrome|    23     |
|Safari|      6.1   |
|Opera|          12.1|
***
## **overflow-x**
Especifica se é necessário cortar o conteúdo, adicionar uma barra de rolagem ou exibir o conteúdo de estouro de um elemento de nível de bloco, quando ele estourar nas bordas esquerda e direita.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3    |
|Opera|       9.5   |
***
## **overflow-y**
Propriedade especifica se é necessário cortar o conteúdo, adicionar uma barra de rolagem ou exibir o conteúdo de estouro de um elemento de nível de bloco, quando ele estourar nas bordas superior e inferior.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 1.5        |
|Chrome|    4     |
|Safari|     3    |
|Opera|       9.5   |
***
## **P**  
## **padding**
Resume  padding-top, padding-right, padding-bottom, padding-left.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **padding-bottom**
Define o preenchimento inferior de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **padding-left**
Define o preenchimento esquerdo de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **padding-right**
Define o preenchimento correto de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1     |
|Opera|     3.5     |
***
## **padding-top**
Define o preenchimento superior de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **page-break-after**
Adiciona uma quebra de página após um elemento especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1.2      |
|Opera|       7   |
***
## **page-break-before**
Adiciona uma quebra de página antes de um elemento especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1.2      |
|Opera|       7   |
***
## **page-break-inside**
Define se uma quebra de página deve ser evitada dentro de um elemento especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 19        |
|Chrome|   1      |
|Safari|    1.3     |
|Opera|        7  |
***
## **perspective**
Usada para dar uma perspectiva a um elemento posicionado em 3D.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    36     |
|Safari|      9   |
|Opera|        23  |
***
## **perspective-origin**
Define de qual posição o usuário está olhando para o elemento posicionado em 3D.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    36     |
|Safari|      9   |
|Opera|        23  |
***
## **pointer-events**
Define se um elemento reage ou não a eventos de ponteiro.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  3.6       |
|Chrome|     2    |
|Safari|      4   |
|Opera|        9  |
***
## **position**
Especifica o tipo de método de posicionamento usado para um elemento

|Navegador|Versão|
|:--------|:----:|
|Edge|  7         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1.2      |
|Opera|       4   |
***
## **Q**  
## **quotes**
Define o tipo de aspas para aspas.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1.5        |
|Chrome|    11     |
|Safari|      5.1   |
|Opera|          4|
***
## **R**  
## **resize**
Define se como um elemento pode ser redimensionado pelo usuário.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  5       |
|Chrome|   4      |
|Safari|    4     |
|Opera|      15    |
***
## **right**
Afeta a posição horizontal de um elemento posicionado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   1      |
|Chrome|    1     |
|Safari|     1    |
|Opera|       5   |
***
## **S**  
## **scroll-behavior**
Especifica se anima suavemente a posição de rolagem, em vez de um salto direto, quando o usuário clica em um link dentro de uma caixa rolável.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  36       |
|Chrome|    61     |
|Safari|      14   |
|Opera|         48 |
***
## **T**  
## **tab-size**
Especifica a largura de um caractere de tabulação.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  -moz-4       |
|Chrome|   21      |
|Safari|     6.1    |
|Opera|         15 |
***
## **table-layout**
Define o algoritmo usado para organizar as células, linhas e colunas da tabela.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5         |
|Mozila| 1        |
|Chrome|  14       |
|Safari|    1     |
|Opera|      7    |
***
## **text-align**
Especifica o alinhamento horizontal do texto em um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  3         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **text-align-last**
Especifica como alinhar a última linha de um texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   49      |
|Chrome|     47    |
|Safari|      none   |
|Opera|        34  |
***
## **text-combine-upright**
Especifica a combinação de vários caracteres no espaço de um único caractere.

|Navegador|Versão|
|:--------|:----:|
|Edge|  -ms-11         |
|Mozila|  48       |
|Chrome|    -webkit-48     |
|Safari|     -webkit-    |
|Opera|       -webkit-34   |
***
## **text-decoration**
Especifica a decoração adicionada ao texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  3         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **text-decoration-color**
Especifica a cor da decoração do texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  36       |
|Chrome|    47     |
|Safari|        -webkit-7.1 |
|Opera|       44   |
***
## **text-decoration-line**
Define o tipo de decoração de texto a ser usada.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  36       |
|Chrome|    47     |
|Safari|        -webkit-7.1 |
|Opera|       44   |
***
## **text-decoration-style**
Define o estilo da decoração do texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  36       |
|Chrome|    57     |
|Safari|      12.1   |
|Opera|          44|
***
## **text-indent**
Especifica o recuo da primeira linha em um bloco de texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  3         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **text-justify**
Especifica o método de justificação do texto quando text-align é definido como "justify".

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   55      |
|Chrome|       none  |
|Safari|     10    |
|Opera|        none  |
***
## **text-orientation**
Define a orientação do texto em uma linha.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  41       |
|Chrome|    48     |
|Safari|      14   |
|Opera|         -webkit-35 |
***
## **text-overflow**
Especifica como o conteúdo transbordado que não é exibido deve ser sinalizado para o usuário.

|Navegador|Versão|
|:--------|:----:|
|Edge|  6         |
|Mozila| 7        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       11   |
***

## **text-shadow**
Adiciona sombra ao texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  3.5       |
|Chrome|     4    |
|Safari|      4   |
|Opera|        9.6  |
***
## **text-transform**
Controla a capitalização do texto.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **text-underline-position**
Especifica a posição do sublinhado que é definida usando a propriedade text-decoration

|Navegador|Versão|
|:--------|:----:|
|Edge|    none       |
|Mozila|   none      |
|Chrome|   33      |
|Safari|   none      |
|Opera|    none      |
***
## **top**
Afeta a posição vertical de um elemento posicionado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5         |
|Mozila|   1      |
|Chrome| 1        |
|Safari|  1       |
|Opera|     6     |
***
## **transform**
Aplica uma transformação 2D ou 3D a um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    36     |
|Safari|      9   |
|Opera|        23  |
***
## **transform-origin**
Permite que você altere a posição dos elementos transformados.

|Navegador|Versão|
|:--------|:----:|
|Edge|  0         |
|Mozila| 16        |
|Chrome|   36      |
|Safari|     9    |
|Opera|       23   |
***
## **transform-style**
Especifica como os elementos aninhados são renderizados no espaço 3D.

|Navegador|Versão|
|:--------|:----:|
|Edge|  11         |
|Mozila|  16       |
|Chrome|    36     |
|Safari|      9  |
|Opera|        23 |
***
## **transition**
Resume transition-property, transition-duration, transition-timing-function, transition-delay.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    26     |
|Safari|      6.1   |
|Opera|          12.1|
***
## **transition-delay**
Especifica quando o efeito de transição começará.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    26     |
|Safari|      6.1   |
|Opera|          12.1|
***
## **transition-duration**
Especifica quantos segundos (s) ou milissegundos (ms) um efeito de transição leva para ser concluído.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    26     |
|Safari|      6.1   |
|Opera|          12.1|
***

## **transition-property**
Especifica o nome da propriedade CSS ao qual o efeito de transição se destina.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    26     |
|Safari|      6.1   |
|Opera|          12.1|
***
## **transition-timing-function**
Especifica a curva de velocidade do efeito de transição.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    26     |
|Safari|      6.1   |
|Opera|          12.1|
***
## **U**  
## **unicode-bidi**
Usada junto com a propriedade direction para definir ou retornar se o texto deve ser substituído para oferecer suporte a vários idiomas no mesmo documento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila| 1        |
|Chrome|  2       |
|Safari|   1.3      |
|Opera|       9.2   |
***
## **user-select**
Especifica se o texto de um elemento pode ser selecionado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  79         |
|Mozila|  69       |
|Chrome|    54     |
|Safari|      -webkit-3.1   |
|Opera|          41|
***
## **V**  
## **vertical-align**
Define o alinhamento vertical de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     4     |
***
## **visibility**
Especifica se um elemento é ou não visível.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     4     |
***
## **W**  
## **white-space**
Especifica como o espaço em branco dentro de um elemento é tratado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 3.5        |
|Chrome|    1     |
|Safari|     3    |
|Opera|       9.5   |
***
## **widows**
Define o número mínimo de linhas que devem ser deixadas no topo de uma página quando ocorre uma quebra de página dentro de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|    none     |
|Chrome|  25       |
|Safari|    7     |
|Opera|      12.1    |
***
## **width**
Define a largura de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **word-break**
Especifica como as palavras devem ser interrompidas ao chegar ao final de uma linha.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   15      |
|Chrome|     4    |
|Safari|      3.1   |
|Opera|          15|
***
## **word-spacing**
Aumenta ou diminui o espaço em branco entre as palavras.

|Navegador|Versão|
|:--------|:----:|
|Edge|  6         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **word-wrap**
Permite que palavras longas possam ser quebradas e quebradas na próxima linha.

|Navegador|Versão|
|:--------|:----:|
|Edge|  5.5         |
|Mozila|   3.5      |
|Chrome|      4   |
|Safari|       3.1  |
|Opera|          10.5|
***
## **writing-mode**
Especifica se as linhas de texto são dispostas horizontal ou verticalmente.

|Navegador|Versão|
|:--------|:----:|
|Edge|  12         |
|Mozila|  41       |
|Chrome|    48     |
|Safari|      11   |
|Opera|         35 |
***
## **Z**  
## **z-index**
Especifica a ordem da pilha de um elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 3        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     4     |
***

## `Seletores`  

## **.class**
Seleciona elementos com um atributo de classe específico.

|Navegador|Versão|
|:--------|:----:|
|Edge|  Yes         |
|Mozila|Yes         |
|Chrome|Yes         |
|Safari|Yes         |
|Opera| Yes         |
***
## **#id**
Define o estilo do elemento com o ID especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  Yes         |
|Mozila|Yes         |
|Chrome|Yes         |
|Safari|Yes         |
|Opera| Yes         |
***
## **"*"**
Seleciona todos os elementos.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7         |
|Mozila| 2        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       9.6   |
***

## **element**
Seleciona todos os elementos com o nome de elemento especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  Yes         |
|Mozila|Yes         |
|Chrome|Yes         |
|Safari|Yes         |
|Opera| Yes         |
***
## **element.class**
Usado para selecionar o elemento especificado com a classe especificada.

|Navegador|Versão|
|:--------|:----:|
|Edge|  Yes         |
|Mozila|Yes         |
|Chrome|Yes         |
|Safari|Yes         |
|Opera| Yes         |
***
## **element,element**
Definir o estilo de vários elementos com o mesmo estilo, separe cada nome de elemento com uma vírgula.

|Navegador|Versão|
|:--------|:----:|
|Edge|  Yes         |
|Mozila|Yes         |
|Chrome|Yes         |
|Safari|Yes         |
|Opera| Yes         |
***
## **element element**
Usado para selecionar elementos dentro de elementos.

|Navegador|Versão|
|:--------|:----:|
|Edge|  Yes         |
|Mozila|Yes         |
|Chrome|Yes         |
|Safari|Yes         |
|Opera| Yes         |
***
## **element>element**
Usado para selecionar elementos com um pai específico.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7        |
|Mozila|Yes         |
|Chrome|Yes         |
|Safari|Yes         |
|Opera| Yes         |
***
## **element+element**
Usado para selecionar elementos que são colocados imediatamente após (não dentro) do primeiro elemento especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7        |
|Mozila|Yes         |
|Chrome|Yes         |
|Safari|Yes         |
|Opera| Yes         |
***
## **element1~element2**
Corresponde às ocorrências de element2 que são precedidas por element1.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|      3.2   |
|Opera|          9.6|
***
## **[attribute]**
Usado para selecionar elementos com o atributo especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   2      |
|Chrome| 4        |
|Safari|    3.1     |
|Opera|        9.6  |
***
## **[attribute=value]**
Usado para selecionar elementos com o atributo e valor especificados.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   2      |
|Chrome| 4        |
|Safari|    3.1     |
|Opera|        9.6  |
***
## **[attribute~=value]**
Usado para selecionar elementos com um valor de atributo contendo uma palavra especificada.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   2      |
|Chrome| 4        |
|Safari|    3.1     |
|Opera|        9.6  |
***
## **[attribute|=value]**
Usado para selecionar elementos com o atributo especificado começando com o valor especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   2      |
|Chrome| 4        |
|Safari|    3.1     |
|Opera|        9.6  |
***
## **[attribute^=value]**
Corresponde a cada elemento cujo valor de atributo começa com um valor especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.2     |
|Opera|        9.6  |
***
## **[attribute$=value]**
Corresponde a cada elemento cujo valor de atributo termina com um valor especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.2     |
|Opera|        9.6  |
***
## **[attribute*=value]**
Corresponde a cada elemento cujo valor de atributo contém um valor especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.2     |
|Opera|        9.6  |
***
## **:active**
Usado para selecionar e estilizar o link ativo.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   2      |
|Chrome| 4        |
|Safari|    3.1     |
|Opera|        9.6  |
***
## **::after**
Insere algo após o conteúdo de cada elemento selecionado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    9       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.1     |
|Opera|        7  |
***
## **::before**
Insere algo antes do conteúdo de cada elemento selecionado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    9       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.1     |
|Opera|        7  |
***
## **:checked**
corresponde a cada elemento ``<input>`` marcado e elemento ``<option>``.

|Navegador|Versão|
|:--------|:----:|
|Edge|    9       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.2     |
|Opera|        9.6  |
***
## **:default**
Seleciona o elemento de formulário padrão em um grupo de elementos relacionados.

|Navegador|Versão|
|:--------|:----:|
|Edge|    12       |
|Mozila|   4      |
|Chrome| 10        |
|Safari|    5     |
|Opera|        10  |
***
## **:disabled**
Corresponde a cada elemento desativado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    9       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.2     |
|Opera|        9.6  |
***
## **:empty**
Corresponde a todos os elementos que não possuem filhos.

|Navegador|Versão|
|:--------|:----:|
|Edge|    9       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.2     |
|Opera|        9.6  |
***
## **:enabled**
Corresponde a cada elemento ativado.

|Navegador|Versão|
|:--------|:----:|
|Edge|    9       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.2     |
|Opera|        9.6  |
***
## **:first-child**
Usado para selecionar o seletor especificado, apenas se for o primeiro filho de seu pai.

|Navegador|Versão|
|:--------|:----:|
|Edge|    7       |
|Mozila|   3      |
|Chrome| 4        |
|Safari|    3.1     |
|Opera|        9.6  |
***
## **::first-letter**
Usado para adicionar um estilo à primeira letra do seletor especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **::first-line**
Usado para adicionar um estilo à primeira linha do seletor especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     7     |
***
## **:first-of-type**
Corresponde a cada elemento que é o primeiro filho, de um tipo específico, de seu pai.

|Navegador|Versão|
|:--------|:----:|
|Edge|    9       |
|Mozila|   3.5      |
|Chrome| 4        |
|Safari|    3.2     |
|Opera|        9.6  |
***
## **:focus**
Usado para selecionar o elemento que está em foco.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 2        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       9.6   |
***
## **:fullscreen**
Usado para selecionar o (s) elemento (s) que estão no modo de tela inteira.

|Navegador|Versão|
|:--------|:----:|
|Edge|  -ms-12         |
|Mozila|  -moz-64       |
|Chrome|    -webkit-71     |
|Safari|      -webkit-3.1   |
|Opera|          -webkit-58|
***
## **:hover**
Usado para selecionar elementos quando você passa o mouse sobre eles.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7         |
|Mozila| 2        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       9.6   |
***
## **:in-range**
Seleciona todos os elementos com um valor que está dentro de um intervalo especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  13*         |
|Mozila|   50      |
|Chrome|     53    |
|Safari|       10.1  |
|Opera|          40|
***
## **:indeterminate**
Seleciona os elementos do formulário que estão em um estado indeterminado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  51         |
|Mozila|Yes         |
|Chrome|39         |
|Safari|Yes         |
|Opera| Yes         |
***
## **:invalid**
Seleciona os elementos do formulário com um valor que não é validado de acordo com as configurações do elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  4       |
|Chrome|   10      |
|Safari|     5    |
|Opera|       10   |
***
## **:lang(language)**
Usado para selecionar elementos com um atributo lang com o valor especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 2        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       9.6   |
***
## **:last-child**
Corresponde a cada elemento que é o último filho de seu pai.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:last-of-type**
Corresponde a cada elemento que é o último filho, de um tipo específico, de seu pai.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:link**
Usado para selecionar links não visitados.

|Navegador|Versão|
|:--------|:----:|
|Edge|  7         |
|Mozila| 2        |
|Chrome|  4       |
|Safari|   3.1      |
|Opera|       9.6   |
***
## **:not(selector)**
Corresponde a cada elemento que NÃO é o elemento / seletor especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:nth-child(n)**
Corresponde a cada elemento que é o n º criança, independentemente do tipo, de seu pai.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:nth-last-child(n)**
Corresponde a cada elemento que é o n º criança, independentemente do tipo, de seu pai, a contar do último filho.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:nth-last-of-type(n)**
Corresponde a cada elemento que é o n º criança, de um tipo particular, de seu pai, a contar do último filho.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:nth-of-type(n)**
Corresponde a cada elemento que é o n th criança, de um tipo particular, da sua mãe.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:only-of-type**
Corresponde a cada elemento que é o único filho de seu tipo, de seu pai.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:only-child**
Corresponde a cada elemento que é o único filho de seu pai.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:optional**
Seleciona os elementos do formulário que são opcionais.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  4       |
|Chrome|   10      |
|Safari|     5    |
|Opera|       10   |
***
## **:out-of-range**
Seleciona todos os elementos com um valor que está fora de um intervalo especificado.

|Navegador|Versão|
|:--------|:----:|
|Edge|      13*     |
|Mozila|       50  |
|Chrome|  53       |
|Safari|    10.1     |
|Opera|         40 |
***
## **::placeholder**
Seleciona elementos de formulário com texto de espaço reservado e permite definir o estilo do texto de espaço reservado.

|Navegador|Versão|
|:--------|:----:|
|Edge|  -ms-10         |
|Mozila|  51       |
|Chrome|    57     |
|Safari|      10.1   |
|Opera|          44|
***
## **:read-only**
Seleciona elementos que são "somente leitura".

|Navegador|Versão|
|:--------|:----:|
|Edge|  13         |
|Mozila|  78       |
|Chrome|    36     |
|Safari|      9   |
|Opera|        23  |
***
## **:read-write**
Seleciona os elementos do formulário que são "legíveis" e "graváveis".

|Navegador|Versão|
|:--------|:----:|
|Edge|  13         |
|Mozila|  78       |
|Chrome|    36     |
|Safari|      9   |
|Opera|        23  |
***
## **:required**
Seleciona os elementos do formulário que são necessários.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  4       |
|Chrome|   10      |
|Safari|     5    |
|Opera|       10   |
***
## **:root**
Corresponde ao elemento raiz do documento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **::selection**
Corresponde à parte de um elemento que é selecionado por um usuário.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 62        |
|Chrome|   4      |
|Safari|    3.1     |
|Opera|        10.1  |
***
## **:target**
Usado para definir o estilo do elemento de destino ativo atual.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3.5        |
|Chrome|    4     |
|Safari|     3.2    |
|Opera|         9.6 |
***
## **:valid**
Seleciona os elementos do formulário com um valor que valida de acordo com as configurações do elemento.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  4       |
|Chrome|   10      |
|Safari|     5    |
|Opera|       10   |
***
## **:visited**
Usado para selecionar links visitados.

|Navegador|Versão|
|:--------|:----:|
|Edge|   7        |
|Mozila|  2       |
|Chrome|   4      |
|Safari|    3.1     |
|Opera|        9.6  |
***
## `Funções`  

## **attr()**
Retorna o valor de um atributo dos elementos selecionados.

|Navegador|Versão|
|:--------|:----:|
|Edge|  8         |
|Mozila| 1        |
|Chrome|  2       |
|Safari|   3.1      |
|Opera|       9   |
***
## **calc()**
Executa um cálculo a ser usado como o valor da propriedade.

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 16        |
|Chrome|   26      |
|Safari|     7    |
|Opera|       15   |
***
## **cubic-bezier()**
Define uma curva Cúbica de Bezier.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  4       |
|Chrome|   4      |
|Safari|    3.1     |
|Opera|        10.5  |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **hsl()**
Define as cores usando o modelo Hue-saturation-lightness (HSL).

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   3.1      |
|Opera|       9.5   |
***
## **hsla()**
Define cores usando o modelo Hue-saturation-lightness-alpha (HSLA).

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3        |
|Chrome|  1       |
|Safari|   3.1      |
|Opera|       10   |
***
## **linear-gradient()**
Define um gradiente linear como imagem de fundo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    26     |
|Safari|      6.1   |
|Opera|          12.1|
***
## **repeating-linear-gradient()**
Usada para repetir gradientes lineares.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    26     |
|Safari|      6.1   |
|Opera|          12.1|
***
## **repeating-radial-gradient()**
Usada para repetir gradientes radiais.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Mozila|  16       |
|Chrome|    26     |
|Safari|      6.1   |
|Opera|          12.1|
***
## **rgb()**
Define as cores usando o modelo Red-green-blue (RGB).

|Navegador|Versão|
|:--------|:----:|
|Edge|  4         |
|Mozila| 1        |
|Chrome|  1       |
|Safari|   1      |
|Opera|     3.5     |
***
## **rgba()**
Define as cores usando o modelo Red-green-blue-alpha (RGBA).

|Navegador|Versão|
|:--------|:----:|
|Edge|  9         |
|Mozila| 3        |
|Chrome|  1       |
|Safari|   3.1      |
|Opera|       10   |
***
## **var()**
Usada para inserir o valor de uma variável CSS.

|Navegador|Versão|
|:--------|:----:|
|Edge|  15         |
|Mozila|  31       |
|Chrome|    49     |
|Safari|      9.1   |
|Opera|          36|
***