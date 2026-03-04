# PokéVault

Uma Pokédex criada em **React Native** com **Expo**, permitindo explorar e visualizar informações sobre diferentes Pokémon.

## 🚀 Tecnologias utilizadas

- **React Native** + **Expo**
- **Styled Components** (`styled-components` e `@types/styled-components-react-native`)
- **Lottie** (`lottie-react-native`)
- **Axios**
- **React Navigation** (`@react-navigation/native` e `@react-navigation/native-stack`)
- **React Native Reanimated**
- **React Native Screens**
- **React Native Safe Area Context**
- **React Native Progress**
- **EAS CLI**
- API: [PokéAPI](https://pokeapi.co)

## 📚 Bibliotecas utilizadas

### 🔹 babel-preset-expo
Preset de Babel otimizado para projetos Expo, garantindo compatibilidade com React Native.

### 🔹 styled-components + @types/styled-components-react-native
Permite escrever estilos usando **CSS-in-JS**, deixando o código mais organizado e reutilizável.  
A versão `@types` adiciona suporte a TypeScript, com autocompletar e tipagem.

### 🔹 lottie-react-native
Biblioteca para animações vetoriais (arquivos `.json` do Lottie).  
Usada para criar animações fluidas e interativas, como loaders ou efeitos visuais.

### 🔹 axios
Cliente HTTP para fazer requisições à **PokéAPI**.  
Simples e poderoso para consumir APIs REST, com suporte a interceptores e tratamento de erros.

### 🔹 react-native-reanimated
Biblioteca para animações avançadas e de alto desempenho.  
Permite criar transições suaves, gestos e efeitos visuais complexos.

### 🔹 @react-navigation/native + @react-navigation/native-stack
Gerencia a navegação entre telas.  
O `native-stack` usa o **stack navigator** (pilha de telas), ideal para apps com múltiplas páginas.

### 🔹 react-native-screens
Otimiza a navegação, melhorando performance ao gerenciar telas nativas.  
Reduz consumo de memória e aumenta a fluidez.

### 🔹 react-native-safe-area-context
Garante que o conteúdo do app respeite áreas seguras (notch, barras de status).  
Evita que elementos fiquem cortados em dispositivos modernos.

### 🔹 react-native-progress
Biblioteca para exibir barras e indicadores de progresso.  
Útil para mostrar carregamento de dados ou status de tarefas.

### 🔹 EAS CLI
Ferramenta oficial da Expo para gerar builds (APK/IPA).  
Permite compilar e distribuir o app sem precisar configurar Android Studio ou Xcode manualmente.

---

## 📂 Estrutura do projeto

PokeVault
|.expo
|.vscode
|assets
|node modules
|src
  |@types
    |index.d.ts
  |assets
  |components 
    |Button
      |index.tsx
      |styles.ts
    |Card
      |index.tsx
      |styles.ts
    |FadeAnimation
      |index.tsx
      |styles.ts
    |routes
      |app.routes.tsx
      |index.tsx
  |global
      |styles
        |styled.d.ts
        |theme.ts
  |pages
      |About
        |index.tsx
        |styles.ts
      |Home
        |index.tsx
        |styles.ts
      |Welcome
        |index.tsx
        |pokeball.json
        |styles.ts
  |service
    |api.ts
|.gitignore
|app.json
|App.tsx
|babel.config.js
|eas.json
|index.ts
|metro.config.js
|package-lock.json
|package.json
|README.md
|tsconfig.json

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/anderson-schmidt/PokeVault.git
cd PokeVault