ls -al ~/.ssh - verifica se tem alguma chave ssh 
ssh-keygen -t ed25519 -C "email" - adiciona a chave ssh
val "$(ssh-agent -s)" - inicializa o agente-ssh
ssh-add ~/.ssh-agent -s - adiciona a chave no agente
clip < ~/.ssh/id_ed25519.pub - ctrl c da chave
ssh -T git@github.com - testa a conexão
git init - inicializa um repo
git status - exibe o estado atual do repo
git add - adiciona os arquivos a staging area
git branch - lista as branchs
git checkout <branchname - muda o nome da branch
git checkout -b <branchname - cria uma branch nova
git commit -m "message" - commita 
git merge <branch - mergeia a branch atual com a escolhida
git push - sobe os commits do local para o remoto
git branch -D <branchname - exclui a branch
git fetch - baixa referencias e objetos do repo remoto
git pull - mesma coisa do fetch só que mescla com a branch atual

