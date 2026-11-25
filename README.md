# Arctic Defence Partners

Første forhåndsvisning av en enkel informasjonsside for foreningen. Dette er ikke
den endelige eller offisielle nettsiden.

- `app/page.tsx`: innhold og navigasjon
- `app/site.css`: responsiv utforming
- `next.config.ts`: statisk eksport med GitHub Pages-base path
- `.github/workflows/pages.yml`: bygger og publiserer den statiske eksporten

Krever Node.js 24 og npm. Kjør fra prosjektroten:

```powershell
npm ci
npm run dev -- --port 3108
npm run lint
npm run build
npm run typecheck
```

Lokal forhåndsvisning: `http://127.0.0.1:3108/arctic-defence-partners/`.
`npm run build` gir statiske filer i `out/`; utviklingskommandoene committer
eller pusher ingenting. Åpne denne prosjektroten i IntelliJ.

Planlagt repo: [ltj54/arctic-defence-partners](https://github.com/ltj54/arctic-defence-partners).
Måladresse: [GitHub Pages](https://ltj54.github.io/arctic-defence-partners/).
Pages bruker GitHub Actions. Første publisering krever en bevisst commit og push.
Ikke commit eller push senere endringer uten uttrykkelig bestilling.

Kravspesifikasjon, avtaleutkast og eventuelle private underlag i `.internt/` er
lokale og ignoreres av Git. Domene, permanent hosting, endelig logo og utvidet
innhold er ikke del av denne offentlige skissen. Ingen skjema, sporing eller
innsendingstjeneste er aktivert.
