# Rir & Brincar

MVP de uma página web estática para crianças: a cada acesso, uma adivinha aleatória é exibida. A criança pode pensar na resposta, revelá-la e escolher outra.

## Objetivo

Validar rapidamente se uma experiência simples de descoberta e compartilhamento de adivinhas gera interesse em crianças e famílias, sem backend, cadastro ou dependência de API.

## Fluxo principal

1. A página escolhe uma adivinha aleatória ao carregar.
2. A criança lê a pergunta e tenta responder.
3. O botão **Ver resposta** revela a solução.
4. O botão **Outra piada** escolhe uma nova adivinha.
5. **Compartilhar** usa o compartilhamento nativo do dispositivo ou copia o texto para a área de transferência.

## Decisões técnicas

* HTML, CSS e JavaScript puro, sem dependências externas.
* Dados locais em `jokes.js`, permitindo trocar ou ampliar o conjunto sem alterar a interface.
* `Math.random()` é usado para escolher a piada inicial e evitar repetir imediatamente a anterior na mesma sessão.
* Layout responsivo, com foco em telas pequenas, botões grandes e estados acessíveis para leitores de tela.
* `.nojekyll` permite que o repositório seja servido como site estático sem processamento do Jekyll.

## Conteúdo e direitos autorais

A implementação **não copia nem republica** as piadas do artigo da Seleções/iG informado no briefing. O arquivo `jokes.js` contém um conjunto inicial de adivinhas tradicionais, escolhidas como alternativa de domínio público/folclórico. Como a caracterização jurídica de conteúdos tradicionais pode variar conforme a jurisdição, revise o conteúdo antes de uma publicação comercial e substitua a lista por material com autorização ou licença clara quando necessário.

O arquivo também funciona como um ponto de extensão: inclua apenas textos que você tenha direito de publicar.

Referência editorial indicada no briefing: [Seleções — 73 piadas para criança](https://selecoes.ig.com.br/humor/piadas-de-crianca-para-contar-e-dar-boas-risadas/amp/).

## Referências consultadas

A página [ronanrodrigo.dev/notes/tags](https://ronanrodrigo.dev/notes/tags/) foi acessada antes da implementação. Ela reúne notas sobre agentes, automação, Claude e GitHub. Não havia um padrão visual diretamente aplicável ao produto; foi aproveitada apenas a orientação pertinente de manter a solução simples, estática, organizada e fácil de evoluir.

## Como executar localmente

Abra `index.html` diretamente no navegador. Para evitar restrições de alguns navegadores ao abrir arquivos locais, também é possível iniciar um servidor simples na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Como publicar no GitHub Pages

O repositório já contém o workflow `.github/workflows/pages.yml`. Antes da primeira execução, é necessário ativar o Pages no repositório:

1. Abra **Settings > Pages**.
2. Em **Build and deployment > Source**, selecione **GitHub Actions**.
3. Volte à aba **Actions** e execute novamente o workflow **Publicar no GitHub Pages** usando **Run workflow**, ou faça um novo push na branch `main`.
4. Aguarde as etapas **Configurar Pages**, **Preparar artefato** e **Publicar** terminarem com sucesso.

A URL esperada será `https://ronanrodrigo.github.io/piadas-infantis/`.

### Erro de configuração do Pages

Se a etapa **Configurar Pages** falhar com erro de configuração ou `Get Pages site failed`, o Pages ainda não foi ativado no menu **Settings > Pages** ou a fonte não está configurada como **GitHub Actions**. Esse é um requisito do GitHub e não pode ser habilitado pelo arquivo do projeto.

O aviso sobre descontinuação do Node.js 20 nas actions é apenas um aviso de compatibilidade e não é a causa principal dessa falha.

## Limitações e próximos passos

* Não há analytics, favoritos, histórico ou moderação, pois não são necessários para validar o fluxo central.
* A seleção inicial é pequena e pode ser ampliada com conteúdo autorizado.
* O compartilhamento depende do suporte do navegador.
* Para validar a ideia, observe se as crianças entendem o fluxo sem ajuda, meça quantas revelam a resposta e pergunte quais adivinhas gostariam de ver novamente.
