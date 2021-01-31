Projeto da semana 5
Primeiro desafio
Nesta semana você prestará serviços para uma empresa multinacional do setor de manufatura, com a melhora na situação econômica do país, essa empresa está aumentando o seu quadro de funcionários semanalmente, e para isso, precisa de um sistema de cadastro de funcionários mais robusto e eficiente. Você trabalhará em conjunto com outros desenvolvedores neste projeto, e para isso deverá utilizar o GIT para colaborar com estes desenvolvedores. O seu projeto deverá ser atualizado diariamente no GIT.

Para o primeiro dia, vamos começar com a estruturação do formulário de cadastro, que deverá conter os seguintes campos:

Nome do funcionário;
CPF;
RG;
Data de nascimento;
Tipo da CNH (A ou B);
Estado civil;
CEP;
Rua;
Bairro;
Cidade;
Estado;
Número;
Complemento;
Organize o formulário de maneira eficiente, a maioria dos formulários online são escritos de forma a dar seguimento no preenchimento de cima para baixo. Favoreça campos com letras grandes e medidas relativas para facilitar o preenchimento também por dispositivos móveis.

Esse desafio, ao finalizar, não é necessário anexar nenhum arquivo, apenas informar o endereço web do repositório (público) no GitHub.

Segundo desafio
Nesta etapa você prestará serviços para uma empresa multinacional do setor de manufatura, com a melhora na situação econômica do país, essa empresa está aumentando o seu quadro de funcionários semanalmente, e para isso, precisa de um sistema de cadastro de funcionários mais robusto e eficiente. Você trabalhará em conjunto com outros desenvolvedores neste projeto, e para isso deverá utilizar o GIT para colaborar com estes desenvolvedores. O seu projeto deverá ser atualizado diariamente no GIT.

Para o dia de hoje, você precisará realizar todas as validações do lado do cliente necessárias para que o formulário seja preenchido corretamente, verifique se todos os campos foram preenchidos, todos são obrigatórios, verifique também se os campos numéricos (RG e CPF) possuem a quantidade de caracteres certas. Valide campo a campo e implemente alertas customizados para indicar quais campos não foram preenchidos corretamente. Caso o usuário tente enviar o formulário clicando no botão de salvar, deve-se alertar o usuário indicando quais campos ele não preencheu corretamente.

Terceiro desafio
Para esse desafio, você irá incrementar o nosso formulário de cadastro implementando uma ferramenta que auxilia o preenchimento do endereço da pessoa pelo CEP digitado. A ideia é que o usuário preencha o campo CEP, e automaticamente sejam preenchidos todos os outros campos relacionados ao endereço. Para isso você deverá consumir a API do ViaCEP, disponível em: https://viacep.com.br/. O fluxo de trabalho pode ser resumido da seguinte forma:

Usuário preenche o CEP;
Você configura uma chamada XMLHttpRequest() para buscar as informações relacionadas aquele CEP;
A requisição HTTP retorna para você o nome da rua, bairro, cidade, estado e etc;
Você, via document.getElementById() faz o preenchimento dos campos;
O consumo é simples, utilize os exemplos da aula para construir uma chamada GET aos endereços passando o número do CEP. Suponha que queremos consultar o endereço do CEP 13211-970, para isso o endereço que será consultado é o https://viacep.com.br/ws/13211970/json/, que como o próprio nome sugere, irá retornar como resposta, um JSON. Não esqueça de converter o JSON em objeto antes de começar a preencher programaticamente os campos.
