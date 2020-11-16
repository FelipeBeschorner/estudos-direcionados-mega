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
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **H**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **I**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **J**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **K**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **L**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **M**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **N**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **O**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **P**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Q**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **R**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **S**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **T**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***

## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***

## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **U**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **V**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **W**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Z**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***

## `Seletores`  

## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***

## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Mozila|         |
|Chrome|         |
|Safari|         |
|Opera|          |
***
## `Funções`  

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