# API-Testing-Cypress
Projeto de estudo em automação de testes utilizando Cypress e Joi

Cenários:
    - Listar Id's das reservas
    - Garantir o contrato do retorno da lista de reservas
    - Alterar uma reserva usando token

    Suítes:
    - @acceptance
        - Listar Id's das reservas
        - Alterar uma reserva usando token

    - @contracts
        - Garantir o contrato do retorno da lista de reservas

DESAFIO:

Tag @healthcheck:
    /HEALTHCHECK
        Verificar se API está online (FEITO)


Tag @contract :
    /GET
        Garantir o contrato do retorno da lista de reservas (FEITO)
        Garantir o contrato do retorno de uma reserva específica (FEITO)


Tag @acceptance:
    /DELETE
        Excluir um reserva com sucesso
    /GET
        Listar IDs das reservas (FEITO)
        Listar uma reserva específica(FEITO)
        Listar IDs de reservas utilizando o filtro firstname
        Listar IDs de reservas utilizando o filtro lastname
        Listar IDs de reservas utilizando o filtro checkin
        Listar IDs de reservas utilizando o filtro checkout
        Listar IDs de reservas utilizando o filtro checkout and checkout
        Listar IDs de reservas utilizando o filtro name, checkin and checkout date
    /POST
        Criar uma nova reserva
    /PUT
        Alterar uma reserva usando o token (FEITO)
        Alterar uma reserva usando o Basic auth


Tag @e2e :
    /DELETE
        Tentar excluir um reserva que não existe
        Tentar excluir uma reserva sem autorização
    /GET
        Visualizar erro de servidor 500 quando enviar filtro mal formatado
    /POST
        Validar retorno 500 quando o payload da reserva estiver inválido
        Validar a criacao de mais de um livro em sequencia
        Criar uma reserva enviando mais parametros no payload da reserva
        Validar retorno 418 quando o header Accept for invalido
    /PUT
        Tentar alterar uma reserva quando o token não for enviado
        Tentar alterar uma reserva quando o token enviado for inválido
        Tentar alterar uma reserva que não existe