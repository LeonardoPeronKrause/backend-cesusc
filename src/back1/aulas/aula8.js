/*

    - API'S

Uma API (Interface de Programação de Aplicações) é um conjunto de definições e protocolos que permite que diferentes sistemas ou aplicativos sejam comunicados entre si. Elas funcionam como competitivas, permitindo que um software "converse" com outro, trocando dados de forma padronizada

APIs facilitam a integração entre sistemas, como aplicativos de terceiros com bancos de dados ou serviços online. Por exemplo, quando você usa um aplicativo de clima, ele pode usar uma API para buscar dados meteorológicos de um serviço

As APIs podem ser RESTful (mais comuns atualmente), que seguem princípios simples, como comunicação por HTTP usando verbos como GET, POST, PUT, DELETE, ou SOAP, que são mais complexos

Eles ajudam a modularizar sistemas, tornar o desenvolvimento mais rápido e eficiente, e promover a interoperabilidade entre diversas tecnologias.

API PRIVADA:
A API é usada apenas internamente. Isso oferece às empresas um maior controle.

Elas são restritas a um determinado conjunto de pessoas que possuem
credenciais de autenticação ou autorização para acessar a API.

Uma API privada é geralmente usada para proteger dados confidenciais ou
restringir o acesso a recursos específicos

API PUBLICA:
A API é disponibilizada para todos, sem restrições de acesso ou autenticação.

Terceiros podem desenvolver aplicações que interajam com a sua API e isso pode
se tornar uma fonte de inovação.

As APIs públicas geralmente são protegidas por limites de uso, como cotas de
solicitação de API ou autenticação de chave de API para evitar o uso excessivo
ou indevido da API.


    ENDPOINTS

Endpoints

Um endpoint de uma API é um ponto final, ou seja, um endereço de URL específico
que representa um recurso ou serviço disponibilizado por essa API.

Quando um cliente (por exemplo, um aplicativo, site ou sistema) faz uma solicitação
HTTP para um endpoint de API, ele recebe uma resposta do servidor contendo as
informações solicitadas.

    ● Em outras palavras, um endpoint é um canal de comunicação que permite que
    um cliente se conecte a um serviço ou recurso específico fornecido por uma API.

Cada endpoint é projetado para executar uma ação específica, como recuperar dados
de um banco de dados, executar uma operação de negócios ou retornar informações
de um sistema externo.

Os endpoints de API geralmente são especificados em uma documentação da
API, que detalha a sintaxe da solicitação HTTP necessária para acessar cada
endpoint, bem como os parâmetros e opções de resposta que a API suporta.

Alguns exemplos de endpoints podem incluir
● /clientes para recuperar informações do cliente
● /produtos para retornar informações sobre um produto específico
● /pedidos para obter informações sobre pedidos em um sistema de comércio
eletrônico.

Em resumo, os endpoints de uma API são URLs que representam os recursos ou
serviços disponibilizados por essa API, e são usados pelos clientes para acessar
e interagir com esses recursos ou serviços.


    API WEB

As APIs web normalmente usam o protocolo HTTP para mensagens de
solicitação e fornecem uma definição da estrutura das mensagens de resposta.

Essas mensagens de resposta geralmente têm o formato de arquivo XML ou
JSON.
    ● Tanto XML quanto JSON são formatos de preferência porque apresentam os
    dados de forma simplificada, facilitando a manipulação por outras aplicações.


    EXEMPLO DE APLICAÇÃO (CRUD) - ecommerce

    Exemplos de Solicitações e Respostas

● Digamos que temos um aplicativo que permite visualizar, criar, editar e excluir clientes e pedidos de uma pequena loja de roupas hospedada em fashionboutique.com

● Poderíamos criar uma API HTTP que permite que um cliente execute estas funções:

    ○ Se quiséssemos visualizar todos os clientes, a solicitação ficaria assim:

        GET http://fashionboutique.com/customers
        Accept: application/json

    ○ Um possível cabeçalho de resposta seria:

        Status Code: 200 (OK)
        Content-type: application/json
        Seguido dos dados dos clientes solicitados no formato application/json.

    ○ Criar um novo cliente postando os dados:
        POST http://fashionboutique.com/customers
        Body:
        {
        “name” : “Fulano Ciclano”,
        “email” : “fulano.ciclano@catolicasc.org.br”
        }

    ○ O servidor então gera um id para aquele objeto e o retorna para o cliente, com o seguinte cabeçalho:
        201 (CREATED)
        Content-type: application/json

    ○ Para visualizar um único cliente, recuperamos ele especificando o ID desse cliente:

        GET http://fashionboutique.com/customers/123
        Accept: application/json

    ○ Um possível cabeçalho de resposta seria:

        Status Code: 200 (OK)
        Content-type: application/json

    ○ Seguido pelos dados do recurso do cliente com id 23 no formato application/json.

    ○ Podemos atualizar esse cliente colocando os novos dados:

        PUT http://fashionboutique.com/customers/123
        Body:
        {
        “name” : “Fulano Ciclano da Silva”,
        “email” : “fulano.ciclano@catolicasc.org.br”
        }

    ○ Um possível cabeçalho de resposta teria o Código de Status: 200 (OK), para notificar o cliente que o item com id 123 foi modificado.

    ○ Também podemos excluir esse cliente especificando seu id:

        DELETE http://fashionboutique.com/customers/123

    ○ A resposta teria um cabeçalho contendo o Código de Status: 204 (SEM CONTEÚDO), notificando o cliente que o item com id 123 foi deletado, e nada no corpo da resposta.

        API SOAP

    Com a proliferação das APIs web, uma especificação de protocolo foi
    desenvolvida para ajudar a padronizar a troca de informações:
    
        ● Simple Object Access Protocol, mais conhecido como SOAP.

    As APIs projetadas com SOAP usam o XML como formato de mensagem e recebem solicitações por HTTP ou SMTP.

    O SOAP facilita o compartilhamento de informações por aplicações executadas em ambientes diferentes ou escritos em linguagens diferentes.
        
    
        API REST

    Outra especificação é a
    ● Representational State Transfer (REST).

    APIs web que adotam as restrições de arquitetura da REST são chamadas de
    APIs RESTful.

    A REST é fundamentalmente diferente do SOAP: o SOAP é um protocolo e a
    REST é um estilo de arquitetura.

    Isso significa que não há um padrão oficial para APIs RESTful web.

    Conforme definido na dissertação de Roy Fielding "Architectural Styles and the Design of Network-based Software Architectures", as APIs serão consideradas RESTful se estiverem em conformidade com seis restrições de arquitetura:

        1. Arquitetura cliente-servidor: a arquitetura REST é composta por clientes,
        servidores e recursos. Ela lida com as solicitações via HTTP.

        2. Sem monitoração de estado: nenhum conteúdo do cliente é armazenado no
        servidor entre as solicitações. Em vez disso, as informações sobre o estado
        da sessão são mantidas com o cliente.

        3. Capacidade de cache: o armazenamento em cache pode eliminar a
        necessidade de algumas interações entre o cliente e o servidor.

        4. Sistema em camadas: as interações entre cliente e servidor podem ser mediadas por camadas adicionais. Essas camadas podem oferecer recursos extras, como balanceamento de carga, caches compartilhados ou segurança.

        5. Código sob demanda (opcional): os servidores podem ampliar a
        funcionalidade de um cliente por meio da transferência de códigos
        executáveis.

        6. Interface uniforme: essa restrição é essencial para o design de APIs RESTful e inclui quatro vertentes:

            ○ Identificação de recursos nas solicitações: os recursos são identificados nas solicitações e separados das representações retornadas para o cliente.

            ○ Manipulação de recursos por meio de representações: os clientes recebem arquivos que representam recursos. Essas representações precisam ter informações suficientes para permitir a modificação ou exclusão.

            ○ Mensagens autodescritivas: cada mensagem retornada para um cliente contém informações suficientes para descrever como ele deve processá-las.

            ○ Hipermídia como plataforma do estado das aplicações: depois de acessar um recurso, o cliente REST pode descobrir todas as outras ações disponíveis no momento por meio de hiperlinks.

    Essas restrições podem parecer excessivas, mas são muito mais simples do que um protocolo prescrito.

    Por isso, as APIs RESTful estão se tornando mais comuns do que as APIs SOAP.

    Nos últimos anos, as especificações da OpenAPI se tornaram o padrão na hora de definir APIs REST.

    A OpenAPI permite que desenvolvedores de todas as linguagens criem interfaces de API REST compreensíveis com o mínimo de suposições.

        GraphQL

    Outro padrão de API emergente é o GraphQL, uma linguagem de consulta e ambiente de execução voltado a servidores alternativa ao REST.

    A prioridade do GraphQL é fornecer exatamente os dados que os clientes solicitam e nada além.

    Como alternativa à arquitetura REST, o GraphQL permite aos desenvolvedores construir solicitações que extraem os dados de várias fontes em uma única chamada de API.
    */