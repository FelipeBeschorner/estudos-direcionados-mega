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
|Chrome|   28    |
|Mozila|   21    |
|Safari|       9 |
|Opera|      12.1|
***
## **align-items**
Especifica o alinhamento de itens flexíveis.

|Navegador|Versão|
|:--------|:----:|
|Edge|       11    |
|Chrome|       20  |
|Mozila|    21     |
|Safari|       9   |
|Opera|      12.1  |
***
## **align-self**
Especifica o alinhamento do item selecionado.

|Navegador|Versão|
|:--------|:----:|
|Edge|        11   |
|Chrome|     20    |
|Mozila|      12   |
|Safari|       9  |
|Opera|        12.1  |
***
## **all**
Redefine todas as propriedades para seu valor inicial.

|Navegador|Versão|
|:--------|:----:|
|Edge|     79      |
|Chrome|     27    |
|Mozila|   37      |
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
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|       30   |
***
## **animation-delay**
Especifica o tempo para início da animação.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-direction**
Define se a nimação deve ocorrer para frente, para tras ou em ciclos alternados.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-duration**
Define o tempo para a animação completar um ciclo.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-fill-mode**
Especifica o estilo do elemento quando a animação não está sendo reproduzida.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-iteration-count**
Especifica o número de vezes que a animação será reproduzida.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-name**
Especifica um nome para a animação de @keyframes.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-play-state**
Especifica se a animação está sendo reproduzida ou pausada.

|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **animation-timing-function**
Especifica o temo de mudanaça entre um conjunto de estilos CSS.
|Navegador|Versão|
|:--------|:----:|
|Edge|  10         |
|Chrome|  16       |
|Mozila|    43     |
|Safari|      9   |
|Opera|        30  |
***
## **B**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **C**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **D**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **E**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **F**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **G**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **H**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **I**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **J**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **K**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **L**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **M**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **N**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **O**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **P**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Q**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **R**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **S**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **T**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***

## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***

## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **U**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **V**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **W**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Z**  
## **Propriedade**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***

## `Seletores`  

## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***

## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Seletor**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## `Funções`  

## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***
## **Função**
Descrição e uso.

|Navegador|Versão|
|:--------|:----:|
|Edge|           |
|Chrome|         |
|Mozila|         |
|Safari|         |
|Opera|          |
***