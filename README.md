# 🥊 Quiz Hajime no Ippo

Esse projeto é um prototipo de um quiz que eu estou fazendo sobre o anime Hajime no Ippo, feito para testar seus conhecimentos sobre personagens, golpes e curiosidades do anime. O visual foi inspirado em sites como o Onepiecedle, com um layout moderno, responsivo e fácil de usar.

---

## Dados do Projeto

- **Autor:** André Luiz Lopes Furtado   
- **GitHub:** [Andre-Luiz-lopes](https://github.com/Andre-Luiz-lopes)

---

## Como foi pensado o projeto

**1. Modelo básico:**  
Escolhi um layout centralizado, com uma única coluna, porque o foco é o quiz e isso deixa tudo mais limpo e fácil de usar tanto no PC quanto no celular. O conteúdo principal fica dentro de um container com fundo escuro e bordas arredondadas, centralizado na tela.

**2. Paleta de cores:**  
Usei tons escuros (preto, azul escuro) para o fundo, e amarelo/laranja para os botões e destaques, inspirado nas cores do anime e para dar contraste. O texto é branco para facilitar a leitura.

**3. Fontes:**  
A fonte principal é 'Segoe UI', que é moderna e fácil de ler. Se não tiver, cai para Arial ou sans-serif. Os títulos são maiores e em negrito para chamar atenção.

**4. Framework CSS:**  
Não usei Bootstrap nem outro framework, fiz tudo no CSS puro mesmo, porque o projeto é simples e assim tenho mais controle do visual.

**5. HTML base:**  
Montei um HTML com um container centralizado, logo do anime no topo, título, botões grandes e estilizados, e o fundo com imagem e degradê. O CSS deixa tudo responsivo e bonito.

**6. Diagrama das rotas:**  
Aqui está o diagrama das rotas do site:
```
/
├── quiz
│   └── api/perguntas
├── personagem
│   └── api/personagens
```
Ou seja, tem a página inicial, a do quiz normal, a de adivinhar personagem, e as APIs que servem os dados.

**7. Projeto na IDE:**  
Usei o Visual Studio Code para organizar tudo, com as pastas separadas para imagens, CSS, views e o backend em Node.js.

**8. Infraestrutura:**  
O backend é Node.js com Express. Configurei as rotas para servir as páginas e as APIs de perguntas/personagens. O Express serve os arquivos estáticos da pasta `public`.

**9. Templates:**  
Por enquanto, usei HTML puro nas views, mas poderia migrar para EJS ou Pug para facilitar a manutenção se o projeto crescer.

**10. Partials:**  
Se fosse usar EJS, criaria partials para o header e footer, assim não preciso repetir código em todas as páginas.

---

<div align="center">
  <b>🥊 Bom jogo! 🥊</b>
</div>
