# Horizon Prime

Site institucional e comercial da Horizon Prime para apresentar soluções de tecnologia e inteligência operacional. Reúne a landing publicada, um catálogo de softwares, serviços sob demanda e uma página de contato. A landing está traduzida para português, inglês e espanhol; os textos das páginas novas permanecem em português.

## Stack e estrutura

Next.js 16.2.0, React 19, TypeScript, next-intl, Tailwind CSS e componentes com Framer Motion/Lucide. O repositório também contém configuração OpenNext/Cloudflare, sem exigir publicação para desenvolver localmente.

| Caminho | O que editar |
|---|---|
| `src/app/[locale]/page.tsx` | Composição da landing |
| `src/app/[locale]/softwares/page.tsx` | Catálogo |
| `src/app/[locale]/sob-demanda/page.tsx` | Serviços sob demanda |
| `src/app/[locale]/contato/page.tsx` | Contato |
| `src/components/sections/` | Seções da landing |
| `src/components/layout/` | Header, footer e elementos compartilhados |
| `src/components/site/`, `src/content/site.ts` | Componentes e conteúdo das páginas novas |
| `messages/` | Mensagens da landing nos três idiomas |
| `src/i18n/` | Roteamento e carregamento de mensagens |
| `src/app/[locale]/globals.css` | Estilos globais |

## Instalar e rodar localmente

Com Node/npm compatíveis com o Next instalado, execute na raiz:

```powershell
npm ci
npm run dev
```

Abra `http://localhost:3000/pt-br`. Também existem os prefixos `/en` e `/es`; catálogo, contato e sob demanda ficam sob o mesmo prefixo do idioma. Siga o endereço mostrado pelo terminal se a porta estiver em uso.

## Compilar e verificar

```powershell
npm run build
npm run start
```

O build usa Webpack conforme `package.json`. `npm run lint` executa o ESLint separadamente. O script `postinstall` existente deve ser preservado ao atualizar dependências; não remova correções de instalação sem revisar `scripts/postinstall-fixes.mjs`.

Na integração de 11/11/2026, a compilação passou e as quatro páginas foram verificadas por HTTP local nos três idiomas. Essa verificação não representa deploy nem teste dos serviços externos de contato.

## Conteúdo e configuração

Mantenha as chaves equivalentes em `messages/pt-br.json`, `messages/en.json` e `messages/es.json` ao alterar a landing. O catálogo e os textos comerciais novos ficam em `src/content/site.ts`. Revise os links de WhatsApp/redes sociais e contatos antes de uma publicação. Nunca inclua segredos em código ou variáveis que sejam expostas ao navegador.

`wrangler.toml` e `open-next.config.ts` descrevem o destino Cloudflare. Os scripts `cf:build`, `cf:deploy` e `cf:deploy:dev` estão disponíveis, mas deploy exige conta, credenciais e revisão do ambiente correto. Não são etapas necessárias para ler o site localmente e não foram executados na integração.

## Versões preservadas e problemas comuns

- `main`: landing publicada preservada e novas páginas integradas, conforme decisão do proprietário.
- `archive/windows-multipage`: redesign completo da cópia Windows.
- `archive/windows-static-prototypes`: protótipos HTML anteriores.

Não copie uma branch inteira sobre a main para recuperar apenas uma página. Compare o trecho desejado e preserve a navegação e as traduções atuais.

Se houver falha ao baixar fontes durante build, confira acesso de rede e os usos de `next/font`. Em links/rotas com erro, confira o prefixo de idioma. O Next avisa sobre a convenção legada `middleware`; a mudança para `proxy` deve ser tratada e validada separadamente, sem renomear arquivos apenas para eliminar um aviso documental.


## Documentação e continuidade

- [Integração entre computadores e limitações verificadas](UNIFICATION-2026-11-11.md)

Antes de alterar o projeto, confira `git status`, faça `git fetch origin` e integre mudanças remotas preservando o trabalho local. Após validar, registre commits com a data real e envie ao remoto. Configurações reais, dados de clientes, logs e dependências restauráveis ficam fora do Git.
