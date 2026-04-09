# tema de Login com Controle de Tentativas

Descrição
--

Este projeto é um sistema de login simples desenvolvido com HTML, CSS e JavaScript. Ele simula um mecanismo de autenticação de usuários com limitação de tentativas, utilizando lógica de programação baseada em estrutura de repetição.

O sistema valida credenciais a partir de uma lista fixa de usuários e controla o acesso com base nas tentativas realizadas.

Funcionalidades
--

 - Autenticação de usuário por login e senha
- Lista pré-definida de usuários válidos
- Controle de até 3 tentativas de login
- Exibição de mensagem de erro para credenciais inválidas
- Bloqueio do sistema após exceder o número de tentativas
- Exibição de tela de sucesso ao realizar login corretamente
- Opção de resetar o sistema após login bem-sucedido
- Lógica do Sistema

O sistema utiliza:
--

Um array de objetos contendo usuários e senhas
Busca de usuário com find para validar credenciais
Estrutura do...while para representar a lógica de tentativa de acesso
Variáveis de controle para tentativas restantes e estado de acesso
Fluxo de funcionamento
O usuário insere login e senha
O sistema verifica se as credenciais existem na lista
Se estiver correto:
O acesso é liberado
A interface de login é ocultada
Se estiver incorreto:
O número de tentativas é reduzido
Uma mensagem de erro é exibida
Após 3 tentativas inválidas:
O sistema é bloqueado
Uma mensagem de bloqueio é exibida
Interface

A interface possui:
--

Um formulário de login com campos de usuário e senha
Mensagens dinâmicas de erro
Tela de acesso liberado com identificação do usuário
Tela de sistema bloqueado

Imagem:
--

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/bd94e08d-e4ba-4069-b130-ffb358aaff84" />
*Interface de login*

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/35b35adc-fca3-494e-906e-b6e069c13d29" />
*Interface de usuario liberado*

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/486c54ab-564f-4f50-8af8-245c22c093f8" />
*Interface de usuario bloqueado*

Objetivo
--

Este projeto tem como objetivo demonstrar:

- Manipulação de DOM com JavaScript
- Controle de fluxo com estruturas condicionais e de repetição
- Simulação básica de autenticação
- Interação entre HTML, CSS e JavaScript
  
--
Autoria
-
Por: Isabella Radael
