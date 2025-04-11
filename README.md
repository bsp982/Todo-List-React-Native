# 📱 Lista de Tarefas - React Native com Expo

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

Um aplicativo moderno de lista de tarefas desenvolvido com React Native, Expo e Firebase, oferecendo uma experiência fluida e responsiva para gerenciar suas atividades diárias.

## ✨ Funcionalidades

- ✅ Adicionar novas tarefas com título e descrição
- ✅ Marcar tarefas como concluídas
- ✅ Excluir tarefas individualmente
- ✅ Sincronização em tempo real com Firebase
- ✅ Backup local com Async Storage
- ✅ Interface moderna e intuitiva
- ✅ Suporte a temas claro/escuro
- ✅ Animações suaves
- ✅ Validação de formulários

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **Firebase/Firestore** - Backend e banco de dados em tempo real
- **TypeScript** - Tipagem estática para maior segurança
- **React Hooks** - Gerenciamento de estado e efeitos
- **Async Storage** - Armazenamento local
- **React Navigation** - Navegação entre telas
- **Styled Components** - Estilização de componentes
- **ESLint & Prettier** - Padronização de código

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI
- Conta no Firebase

### Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITÓRIO]
cd TodoList
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Copie as credenciais do seu projeto
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   FIREBASE_API_KEY=seu_api_key
   FIREBASE_AUTH_DOMAIN=seu_auth_domain
   FIREBASE_PROJECT_ID=seu_project_id
   FIREBASE_STORAGE_BUCKET=seu_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
   FIREBASE_APP_ID=seu_app_id
   ```

4. Execute o projeto:
```bash
# Para desenvolvimento web
npm run web

# Para desenvolvimento mobile
npm run android
# ou
npm run ios
```

## 📁 Estrutura do Projeto

```
src/
  ├── assets/        # Imagens, ícones e fontes
  ├── components/    # Componentes React reutilizáveis
  ├── hooks/         # Custom Hooks
  ├── navigation/    # Configuração de navegação
  ├── screens/       # Telas do aplicativo
  ├── services/      # Configuração de serviços (Firebase)
  ├── styles/        # Estilos globais e temas
  ├── types/         # Definições de tipos TypeScript
  └── utils/         # Funções utilitárias
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## �� Contato

Bruno - [bruno.pereira.desenv@gmail.com](mailto:bruno.pereira.desenv@gmail.com)
