## Autenticação
[ ] Todas as rotas, com excessão do "session", devem ser autenticadas

## Usuário
[x] Deve ser possível cadastrar um usuário (nome, email, senha)
[x] Remover coluna "Admin"
[x] Criar campo de foto na tabela de usuário
[x] Criar campo "firstAccess" na tabela de usuário
[x] O valor padrão da coluna "firstAccess" deve ser "true" no cadastro
[x] Deve ser possível atualizar as informações do usuário
[x] Deve ser possível atualizar a senha do usuário
[x] Criar coluna "active" na tabela de usuário 
[ ] Ao criar um usuário, cria-lo também como funcionário

## Empresa
[ ] Deve ser possivel cadastrar uma empresa (nome, document, user_id, email)
[ ] A empresa deve ser vinculada ao usuário admin
[x] Criar campo user_id na tabela de empresa

## Funcionário
[ ] Deve ser possível cadastrar um funcionário (nome, company_id)
[ ] Adicionar campo user_id na tabela de Funcionário 
[ ] Ao cadastrar um funcionário, validar se não existe na tabela de usuário, caso
    não exista, criar Usuário e então criar Funcionário vinculando o id de usuário
[ ] Ao cadastrar um funcionário, validar se o mesmo já tem cadastro, caso
    tenha, vincular o user_id existente
[ ] Ao cadastrar um funcionário validar se o mesmo não possui cadastro com mesmo 
    email e company_id
[ ] Adicionar campo "admin" na tabela de funcionário (default: false)

## Serviço
[ ] Deve ser possível cadastrar um serviço (descrição, company_id)
[ ] Não pode ser removido, caso esteja em algum agendamento
