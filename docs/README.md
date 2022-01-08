
## Usuário
[ ] Deve ser possível cadastrar um usuário (nome, email, senha)
[X] Remover coluna "Admin"
[X] Criar campo de foto na tabela de usuário
[X] Criar campo "firstAccess" na tabela de usuário
[ ] Criar novo usuário como funcionário

## Empresa
[ ] Deve ser possivel cadastrar uma empresa (nome, user_id)
[ ] A empresa deve ser vinculada ao usuário admin
[X] Criar campo user_id na tabela de empresa

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
