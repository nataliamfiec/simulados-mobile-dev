# Desafio: Sistema de Navegação Multi-paradigma para Aplicativo Mobile

## Contexto do Projeto

Você foi contratado para desenvolver um protótipo de aplicativo mobile que demonstre domínio completo sobre os diferentes padrões de navegação em React Native. O cliente precisa de uma aplicação que sirva como referência para futuros projetos, incorporando as melhores práticas do mercado e os padrões de navegação mais utilizados na indústria.

## Requisitos Técnicos

### 1. Arquitetura de Navegação Híbrida

Desenvolva um aplicativo que implemente **quatro sistemas de navegação distintos**, cada um em seu próprio módulo, mas integrados através de uma tela inicial de seleção. A aplicação deve utilizar:

- **React Navigation**
- **Hooks** do React para gerenciamento de estado



### 2. Módulos de Navegação Requeridos



#### Módulo A: Navegação por Abas Inferiores (Bottom Tabs)
- Implemente um sistema de abas inferiores com no mínimo 2 telas
- Cada aba deve possuir **ícones dinâmicos** que alterem visualmente quando ativos
- Utilize controle de estado para demonstrar persistência de dados entre trocas de abas
- Implemente pelo menos um **contador de interações** que mantenha seu estado ao navegar entre abas

- **1** HomeScreen e SettingsScreen

#### Módulo B: Navegação em Pilha (Stack Navigation)
- Crie um fluxo de autenticação simulado com 3 telas: Login → Dashboard → Perfil
- Implemente **passagem de parâmetros** entre as telas do stack
- Utilize estado local para gerenciar credenciais de usuário (simuladas)
- Demonstre a capacidade de **navegação hierárquica** com possibilidade de retorno

- **2** LoginScreen, DashboardScreen e ProfileScreen

#### Módulo C: Navegação por Gaveta (Drawer Navigation)
- Desenvolva um menu lateral deslizante com pelo menos 3 seções
- Cada seção deve gerenciar seu **próprio estado interno**
- Implemente funcionalidades que demonstrem **isolamento de estado** entre telas do drawer
- Inclua operações de "limpeza" ou "reset" de estado específicas de cada tela

- **3** InboxScreen, SentScreen e TrashScreen

#### Módulo D: Navegação por Abas Superiores de Material Design
- Implemente abas superiores usando o padrão Material Design com createMaterialTopTabNavigator
- Configure customização visual das abas (cores, indicador, tipografia)
- Demonstre persistência de estado entre trocas de abas
- Implemente operações de lista dinâmica com adição e remoção de itens

- **4** FeedScreen, ExploreScreen e ProfileScreen

### 3. Requisitos de Estado e Dados

Cada módulo deve implementar seu próprio gerenciamento de estado utilizando **useState**, demonstrando:

- Persistência de estado durante a navegação
- Operações de atualização de estado baseadas em interação do usuário
- Estados independentes entre diferentes fluxos de navegação
- Valores iniciais e transições de estado claramente definidas

### 4. Padrões de Qualidade

- **4** FeedScreen, ExploreScreen e ProfileScreen

- **Consistência Visual**: Mantenha padrões visuais uniformes entre os módulos
- **Feedback de Interação**: Todas as ações do usuário devem ter feedback visual
- **Gestão de Parâmetros**: Uso adequado de parâmetros de rota e props
- **Otimização de Performance**: Evite re-renderizações desnecessárias

### 5. Estrutura do Projeto

Organize o projeto de forma modular, onde:
- Cada tipo de navegação seja um componente independente
- A tela inicial sirva como hub de navegação entre os módulos
- Recursos compartilhados (estilos, componentes) sejam centralizados
- A configuração de navegação principal integre todos os subsistemas

### 6. Entregáveis Esperados

- Aplicativo funcional que permite navegar entre os 4 sistemas
- Código bem estruturado seguindo convenções modernas do React Native
- Uso apropriado de hooks para gerenciamento de estado local
- Implementação correta de todas as variantes do React Navigation
- Documentação interna via comentários sobre decisões arquiteturais

## Critérios de Avaliação

- **Corretude Funcional**: Todos os tipos de navegação funcionam conforme especificado
- **Qualidade do Código**: Organização, legibilidade e uso de padrões modernos
- **Gestão de Estado**: Implementação adequada e eficiente do gerenciamento de estado
- **Experiência do Usuário**: Transições suaves e feedback visual adequado
- **Integração de Módulos**: Coesão entre os diferentes sistemas de navegação


## Sugestões para cada exercício

- **1** HomeScreen e SettingsScreen
- **2** LoginScreen, DashboardScreen e ProfileScreen
- **4** FeedScreen, ExploreScreen e ProfileScreen

https://reactnavigation.org/docs/material-top-tab-navigator