# Documentação Git
## Versionadores mais Populares
Entre os versionares mais populares estão:
* Git
* Subversion
* Mercurial

###### Obs: Se ater a Git.
***
## Objetos do Git
* Blob
  * Conteúdo de um arquivo.
  * Possui um SHA-1 único a cada alteração.
* Tree
  * Permite armazenamento de multiplos blobs.
  * Tambem possui SHA.
  * Semelhante a um diretório.
* Commit
  * Salva uma snapshot da tree para versionamento futuro.

## Alterações no Git
O git utiliza um sistema de codificação chamado SHA-1.
Ele transforma os dados em uma sequencia de 40 caracteres aleatórios.
A partir disso ele também é capaz de identificar a versão do objeto selecionado.

# Principais Comandos
* git init
  * inicia o GIT no diretório.
* git clone
  * clona um diretório.
* git status
  * mostra os objetos em modificação.
* git add -A
  * adiciona um novo aquivo na árvore de mudanças do GIT.
* git log
  * mostra o histrico de ações.
* git rm
  * remove um arquivo.
* echo "" > "file".
  * adiciona uma mensagem para a criação de um arquivo.
* dir
  * mostra o diretório atual.
* cd
  * navega entre os diretórios.
* git stash
  * salva as modificações nos staged.
* git diff
  * mostra as diferenças não staged.
* git commit -m "msgm"
  * salva uma snapshot do objeto selecionado com uma descrição.
* git help
  * mostra uma série de comandos possiveis.
*  code
   * abre o Markdown no VS Code.
* mkdir
  * cria um diretório.
* ls
  * lista os arquivos de um diretório.
* git fetch
  * baixa o conteudo de outras brachs.
* git checkout
  * cria uma nova brach.
* git merge
  * faz uma unção de dois códigos.
***