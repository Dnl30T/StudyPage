$(document).ready(function() {
    var data = {
        "LÍNGUA PORTUGUESA": [
          "1 Compreensão e interpretação de textos de gêneros variados.",
          "2 Reconhecimento de tipos e gêneros textuais.",
          "3 Domínio da ortografia oficial.",
          "4 Domínio dos mecanismos de coesão textual.",
          "4.1 Emprego de elementos de referenciação, substituição e repetição, de conectores e de outros elementos de sequenciação textual.",
          "4.2 Emprego de tempos e modos verbais.",
          "5 Domínio da estrutura morfossintática do período.",
          "5.1 Emprego das classes de palavras.",
          "5.2 Relações de coordenação entre orações e entre termos da oração.",
          "5.3 Relações de subordinação entre orações e entre termos da oração.",
          "5.4 Emprego dos sinais de 49 pontuação.",
          "5.5 Concordância verbal e nominal.",
          "5.6 Regência verbal e nominal.",
          "5.7 Emprego do sinal indicativo de crase.",
          "5.8 Colocação dos pronomes átonos.",
          "6 Reescrita de frases e parágrafos do texto.",
          "6.1 Significação das palavras.",
          "6.2 Substituição de palavras ou de trechos de texto.",
          "6.3 Reorganização da estrutura de orações e de períodos do texto.",
          "6.4 Reescrita de textos de diferentes gêneros e níveis de formalidade.",
          "7 Correspondência oficial (conforme Manual de Redação da Presidência da República).",
          "7.1 Aspectos gerais da redação oficial.",
          "7.2 Finalidade dos expedientes oficiais.",
          "7.3 Adequação da linguagem ao tipo de documento.",
          "7.4 Adequação do formato do texto ao gênero."
        ],
        "INFORMÁTICA": [
          "1 Conceito de internet e intranet.",
          "2 Conceitos e modos de utilização de tecnologias, ferramentas, aplicativos e procedimentos associados a internet/intranet.",
          "2.1 Ferramentas e aplicativos comerciais de navegação, de correio eletrônico, de grupos de discussão, de busca, de pesquisa e de redes sociais.",
          "2.2 Noções de sistema operacional (ambiente Linux e Windows).",
          "2.3 Acesso à distância a computadores, transferência de informação e arquivos, aplicativos de áudio, vídeo e multimídia.",
          "2.4 Edição de textos, planilhas e apresentações (ambientes Microsoft Office e BrOffice).",
          "3 Redes de computadores.",
          "4 Conceitos de proteção e segurança.",
          "4.1 Noções de vírus, worms e pragas virtuais.",
          "4.2 Aplicativos para segurança (antivírus, firewall, anti-spyware etc.).",
          "5 Computação na nuvem (cloud computing).",
          "6 Fundamentos da Teoria Geral de Sistemas.",
          "7 Sistemas de informação.",
          "7.1 Fases e etapas de sistema de informação.",
          "8 Teoria da informação.",
          "8.1 Conceitos de informação, dados, representação de dados, de conhecimentos, segurança e inteligência.",
          "9 Banco de dados.",
          "9.1 Base de dados, documentação e prototipação.",
          "9.2 Modelagem conceitual: abstração, modelo entidade-relacionamento, análise funcional e administração de dados.",
          "9.3 Dados estruturados e não estruturados.",
          "9.4 Banco de dados relacionais: conceitos básicos e características.",
          "9.5 Chaves e relacionamentos.",
          "9.6 Noções de mineração de dados: conceituação e características.",
          "9.7 Noções de aprendizado de máquina.",
          "9.8 Noções de bigdata: conceito, premissas e aplicação.",
          "10 Redes de comunicação.",
          "10.1 Introdução a redes (computação/telecomunicações).",
          "10.2 Camada física, de enlace de dados e subcamada de acesso ao meio.",
          "10.3 Noções básicas de transmissão de dados: tipos de enlace, códigos, modos e meios de transmissão.",
          "11 Redes de computadores: locais, metropolitanas e de longa distância.",
          "11.1 Terminologia e aplicações, topologias, modelos de arquitetura (OSI/ISO e TCP/IP) e protocolos.",
          "11.2 Interconexão de redes, nível de transporte.",
          "12 Noções de programação python e R.",
          "13 API (application programming interface).",
          "14 Metadados de arquivos."
        ],
        "NOÇÕES DE DIREITO ADMINISTRATIVO": [
          "1 Noções de organização administrativa.",
          "1.1 Centralização, descentralização, concentração e desconcentração.",
          "1.2 Administração direta e indireta.",
          "1.3 Autarquias, fundações, empresas públicas e sociedades de economia mista.",
          "2 Ato administrativo.",
          "2.1 Conceito, requisitos, atributos, classificação e espécies.",
          "3 Agentes públicos.",
          "3.1 Legislação pertinente.",
          "3.1.1 Lei nº 8.112/1990 e suas alterações.",
          "3.1.2 Disposições constitucionais aplicáveis.",
          "3.2 Disposições doutrinárias.",
          "3.2.1 Conceito.",
          "3.2.2 Espécies.",
          "3.2.3 Cargo, emprego e função pública.",
          "4 Poderes administrativos.",
          "4.1 Hierárquico, disciplinar, regulamentar e de polícia.",
          "4.2 Uso e abuso do poder.",
          "5 Licitação.",
          "5.1 Princípios.",
          "5.2 Contratação direta: dispensa e inexigibilidade.",
          "5.3 Modalidades.",
          "5.4 Tipos.",
          "5.5 Procedimento.",
          "6 Controle da Administração Pública.",
          "6.1 Controle exercido pela Administração Pública.",
          "6.2 Controle judicial.",
          "6.3 Controle legislativo.",
          "7 Responsabilidade civil do Estado.",
          "7.1 Responsabilidade civil do Estado no direito brasileiro.",
          "7.1.1 Responsabilidade por ato comissivo do Estado.",
          "7.1.2 Responsabilidade por omissão do Estado.",
          "7.2 Requisitos para a demonstração da responsabilidade do Estado.",
          "7.3 Causas excludentes e atenuantes da responsabilidade do Estado.",
          "8 Regime jurídico-administrativo.",
          "8.1 Conceito.",
          "8.2 Princípios expressos e implícitos da Administração Pública."
        ],
        "NOÇÕES DE DIREITO CONSTITUCIONAL": [
          "1 Direitos e garantias fundamentais: direitos e deveres individuais e coletivos; direito à vida, à liberdade, à igualdade, à segurança e à propriedade; direitos sociais; nacionalidade; cidadania e direitos políticos; partidos políticos; garantias constitucionais individuais; garantias dos direitos 50 coletivos, sociais e políticos.",
          "2 Poder Executivo: forma e sistema de governo; chefia de Estado e chefia de governo.",
          "3 Defesa do Estado e das instituições democráticas: segurança pública; organização da segurança pública. 4 Ordem social: base e objetivos da ordem social; seguridade social; meio ambiente; família, criança, adolescente, idoso, índio."
        ],
        "NOÇÕES DE DIREITO PENAL E DE DIREITO PROCESSUAL PENAL": [
          "1 Princípios básicos.",
          "2 Aplicação da lei penal.",
          "2.1 A lei penal no tempo e no espaço.",
          "2.2 Tempo e lugar do crime.",
          "2.3 Territorialidade e extraterritorialidade da lei penal.",
          "3 O fato típico e seus elementos.",
          "3.1 Crime consumado e tentado.",
          "3.2 Ilicitude e causas de exclusão.",
          "3.3 Excesso punível.",
          "4 Crimes contra a pessoa.",
          "5 Crimes contra o patrimônio.",
          "6 Crimes contra a fé pública.",
          "7 Crimes contra a Administração Pública.",
          "8 Inquérito policial.",
          "8.1 Histórico, natureza, conceito, finalidade, características, fundamento, titularidade, grau de cognição, valor probatório, formas de instauração, notitia criminis, delatio criminis, procedimentos investigativos, indiciamento, garantias do investigado; conclusão.",
          "9 Prova.",
          "9.1 Exame do corpo de delito e perícias em geral.",
          "9.2 Preservação de local de crime.",
          "9.3 Requisitos e ônus da prova.",
          "9.4 Nulidade da prova.",
          "9.5 Documentos de prova.",
          "9.6 Reconhecimento de pessoas e coisas.",
          "9.7 Acareação.",
          "9.8 Indícios.",
          "9.9 Busca e apreensão.",
          "10 Restrição de liberdade.",
          "10.1 Prisão em flagrante."
        ],
        "LEGISLAÇÃO ESPECIAL": [
          "1 Lei nº 10.357/2001.",
          "2 Lei nº 11.343/2006 e suas alterações (aspectos penais e processuais penais).",
          "3 Lei nº 4.898/1965 e suas alterações (aspectos penais e processuais penais).",
          "4 Lei nº 9.455/1997 e suas alterações (aspectos penais e processuais penais).",
          "5 Lei nº 12.030/2009.",
          "6 Lei nº 12.037/2009 e suas alterações.",
          "7 Lei nº 8.069/1990 e suas alterações (aspectos penais e processuais penais).",
          "8 Lei nº 10.826/2003 e suas alterações (aspectos penais e processuais penais).",
          "9 Lei nº 9.605/1998 e suas alterações (aspectos penais e processuais penais).",
          "10 Lei nº 10.446/2002 e suas alterações."
        ],
        "RACIOCÍNIO LÓGICO": [
          "1 Estruturas lógicas.",
          "2 Lógica de argumentação: analogias, inferências, deduções e conclusões.",
          "3 Lógica sentencial (ou proposicional).",
          "3.1 Proposições simples e compostas.",
          "3.2 Tabelas verdade.",
          "3.3 Equivalências.",
          "3.4 Leis de Morgan.",
          "3.5 Diagramas lógicos.",
          "4 Lógica de primeira ordem.",
          "5 Princípios de contagem e probabilidade.",
          "6 Operações com conjuntos.",
          "7 Raciocínio lógico envolvendo problemas aritméticos, geométricos e matriciais"
        ],
        "PERITO CRIMINAL FEDERAL/ÁREA 3 INFORMÁTICA": [
          "1 Fundamentos de computação.",
          "1.1 Organização e arquitetura de computadores.",
          "1.2 Componentes de um computador (hardware e software).",
          "1.3 Sistemas de entrada, saída e armazenamento.",
          "1.4 Princípios de sistemas operacionais.",
          "1.5 Características dos principais processadores do mercado.",
          "1.6 Processadores de múltiplos núcleos.",
          "1.7 Tecnologias de virtualização de plataformas: emuladores, máquinas virtuais, paravirtualização.",
          "1.8 RAID: tipos, características e aplicações.",
          "1.9 Sistemas de arquivos NTFS, FAT12, FAT16, FAT32, EXT2, EXT3: características, metadados e organização física.",
          "1.10 Técnicas de recuperação de arquivos apagados.",
          "2 Bancos de dados.",
          "2.1 Arquitetura, modelos lógicos e representação física.",
          "2.2 Implementação de SGBDs relacionais.",
          "2.3 Linguagem de consulta estruturada (SQL).",
          "2.4 Transações: características e análise de logs.",
          "3 Engenharia reversa.",
          "3.1 Técnicas e ferramentas de descompilação de programas.",
          "3.2 Debuggers.",
          "3.3 Análise de código malicioso: vírus, backdoors, keyloggers, worms e outros.",
          "3.4 Ofuscação de código.",
          "3.5 Compactadores de código executável.",
          "4 Linguagens de programação.",
          "4.1 Noções de linguagens procedurais: tipos de dados elementares e estruturados, funções e procedimentos.",
          "4.2 Noções de linguagens de programação orientadas a objetos: objetos, classes, herança, polimorfismo, sobrecarga de métodos.",
          "4.3 Estruturas de controle de fluxo de execução.",
          "4.4 Montadores, compiladores, ligadores e interpretadores.",
          "4.5 Desenvolvimento web: Servlets, JSP, Ajax, PHP, ASP.",
          "5 Estruturas de dados e algoritmos.",
          "5.1 Estruturas de dados: listas, filas, pilhas e árvores.",
          "5.2 Métodos de acesso, busca, inserção e ordenação em estruturas de dados.",
          "5.3 Complexidade de algoritmos.",
          "5.4 Autômatos determinísticos e não-determinísticos.",
          "6 Redes de computadores.",
          "6.1 Técnicas básicas de comunicação.",
          "6.2 Técnicas de comutação de circuitos, pacotes e células.",
          "6.3 Topologias de redes de computadores.",
          "6.4 Elementos de interconexão de redes de computadores (gateways, hubs, repetidores, bridges, switches, roteadores).",
          "6.5 Arquitetura e protocolos de redes de comunicação.",
          "6.5.1 Arquitetura TCP/IP.",
          "6.5.2 Arquitetura cliente-servidor.",
          "6.5.3 Redes peer-to-peer (P2P).",
          "6.5.4 Comunicação sem fio: padrões 802.11; protocolos 802.1x; bluetooth.",
          "6.6 Computação em nuvem.",
          "7 Segurança da informação.",
          "7.1 Normas NBR ISO/IEC nº 27001:2013 e nº 27002:2013.",
          "7.2 Biometria.",
          "7.3 Engenharia social.",
          "7.4 Esteganografia.",
          "7.5 Desenvolvimento seguro de aplicações: SDL, CLASP.",
          "8 Segurança de redes de computadores.",
          "8.1 Firewall, sistemas de detecção de intrusão (IDS), antivírus, NAT, VPN.",
          "8.2 Monitoramento e análise de tráfego; uso de sniffers; traffic shaping.",
          "8.3 Tráfego de dados de serviços e programas usados na Internet.",
          "8.4 Segurança de redes sem fio: EAP, WEP, WPA, WPA2.",
          "8.5 Ataques a redes de computadores.",
          "9 Criptografia.",
          "9.1 Noções de criptografia.",
          "9.2 Sistemas criptográficos simétricos e de chave pública.",
          "9.3 Certificação digital.",
          "9.4 Modos de operação de cifras.",
          "9.5 Algoritmos RSA, AES e RC4.",
          "9.6 Hashes criptográficos: algoritmos MD-5 e SHA-1, colisões.",
          "10 Sistema Operacional Windows.",
          "10.1 Sistemas Windows: 2000, XP, 2003, Vista e Windows 7.",
          "10.2 Gerenciamento de usuários em uma rede Microsoft.",
          "10.3 Log de eventos do Windows.",
          "10.4 Registro do Windows.",
          "11 Sistema Operacional Linux.",
          "11.1 Características do sistema operacional Linux.",
          "11.2 Gerenciamento de usuários.",
          "11.3 Configuração, administração e logs de serviços: proxy, correio eletrônico, HTTP.",
          "12 Sistemas operacionais móveis.",
          "12.1 Sistema iOS.",
          "12.2 Sistema Android.",
          "13 Governança de TI.",
          "13.1 Modelo COBIT 4.1.",
          "13.2 ITIL v3.",
          "13.3 Gerenciamento de projetos com PMBOK.",
          "13.4 Análise de pontos de função.",
          "13.5 Atos normativos do MPOG/SLTI: Instrução Normativa nº 5/2017; Instrução Normativa nº 4/2010 e suas alterações"
        ]
      };      

    // Função para renderizar os dados no HTML
    function renderData(data) {
        var content = $('#content');

        $.each(data, function(section, topics) {
            var sectionTitle = $('<h2>').text(section).addClass('mt-4');
            var list = $('<ul>').addClass('list-group');

            $.each(topics, function(index, topic) {
                var listItem = $('<li>').addClass('list-group-item').text(topic);
                list.append(listItem);
            });

            var topicDiv = $('<div>').addClass('topic');
            topicDiv.append(sectionTitle).append(list);

            content.append(topicDiv);
        });
    }

    // Renderizar os dados no carregamento da página
    renderData(data);
});
