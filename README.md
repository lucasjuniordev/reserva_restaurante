Para rodar o arquivo "index.js", certifique-se que:

  	- 'node' esteja instalado e o 'npm'.
	  - de o comando no terminal: node index.js

URLs das telas:

 - http://localhost:3000/bem-vindo
 - http://localhost:3000/login
 - http://localhost:3000/cadastro
 - http://localhost:3000/esqueceu-senha
 - http://localhost:3000/inicio
 - http://localhost:3000/reserva

 
 Rotas de cada tela:
 
 1) http://localhost:3000/bem-vindo 

O arquivo bemVindoR contém as rotas para as telas que o usuário irá visualizar, de acordo com a ação selecionada. Esse arquivo gerencia as funcionalidades da tela de 'bem-vindo'. Ele conecta as URLs aos métodos do arquivo bemVindoC, que é responsável pela exibição das telas corretas e pela manipulação dos dados."



2) http://localhost:3000/login

O arquivo loginR contém rotas para a tela permitindo que os usuários façam a autenticação no sistema, validando as credenciais de e-mail e senha fornecidas pelo usuário e, em caso de sucesso, redireciona o usuário para a tela principal do sistema. Ele conecta a URL aos métodos do arquivo loginC , que é responsável pela exibição da tela de login do usuário."



3) http://localhost:3000/cadastro

O arquivo cadastroR contém rotas que permite que os novos usuários se registrem no sistema fornecendo informações pessoais. Após um cadastro bem-sucedido, o usuário será redirecionado para a tela de login. Ele conecta a URL aos métodos do arquivo cadastroC , que é responsável pela exibição da tela de cadastro do usuário."



4) http://localhost:3000/esqueceu-senha

O arquivo esqueceuSenhaR permite que os usuários redefinam suas senhas.Esse processo envolve o envio de um link de redefinição de senha para o e-mail do usuário registrado, onde ele poderá criar uma nova senha. Ele conecta a URL aos métodos do arquivo cadaesqueceuSenhaC, que é responsável pela exibição da tela de redefinição da senha do usuário."



5) http://localhost:3000/inicio

O arquivo inícioR permite que os usuários naveguem pelos restaurantes disponíveis para reserva. O usuário poderá visualizar fotos representando cada restaurante, ao clicar na foto do restaurante, os usuários serão redirecionados para tela de reserva correspondente. Ele conecta a URL aos métodos do arquivo inícioC , que é responsável pela exibição da tela de início dentro do sistema."



6) http://localhost:3000/reserva

O arquivo reservaR contém as rotas que a tela irá permitir que os usuários façam reservas em restaurantes de sua escolha. Através desta tela os usuários podem selecionar  restaurante, data, nome, e-mail e número de pessoas. conecta a URL aos métodos do arquivo reservaC , que é responsável pela exibição da tela de reserva dentro do sistema."






