# Arctic Defence Partners

Første forhåndsvisning av en enkel informasjonsside for foreningen. Dette er ikke
den endelige eller offisielle nettsiden.

- `app/page.tsx`: innhold og navigasjon
- `app/site.css`: responsiv utforming
- `next.config.ts`: statisk eksport med GitHub Pages-base path
- `.run/`: prosjektets Play-konfigurasjon for IntelliJ
- `.github/workflows/pages.yml`: bygger og publiserer den statiske eksporten

Krever Node.js 24 og npm. Kjør fra prosjektroten:

```powershell
npm ci
npm run dev
npm run lint
npm run build
npm run typecheck
```

Åpne prosjektroten i IntelliJ, velg **Start Arctic Defence Partners** i
kjøremenyen og trykk Play. Kjørekonfigurasjonen bruker samme `npm run dev`
som terminalen. Prosjektet bruker fast lokal port `3108`; stopp en eventuell
annen lokal prosess på denne porten før du starter skissen.

Lokal forhåndsvisning: `http://127.0.0.1:3108/`.
`npm run build` gir statiske filer i `out/`; utviklingskommandoene committer
eller pusher ingenting.

Planlagt repo: [ltj54/arctic-defence-partners](https://github.com/ltj54/arctic-defence-partners).
Måladresse: [GitHub Pages](https://ltj54.github.io/arctic-defence-partners/).
Pages bruker GitHub Actions. Første publisering krever en bevisst commit og push.
Ikke commit eller push senere endringer uten uttrykkelig bestilling.

Kravspesifikasjon, avtaleutkast og eventuelle private underlag i `.internt/` er
lokale og ignoreres av Git. Domene, permanent hosting, endelig logo og utvidet
innhold er ikke del av denne offentlige skissen. Kontaktskjemaet vises som
forhåndsvisning med innsending deaktivert.

Etter avtalt aktivering bygges siden med `ADP_ENABLE_CONTACT_FORM=true` i
miljøet til `npm run build`. Første testinnsending fra den avtalte nettsiden
utløser en bekreftelsesmail fra FormSubmit til `kg@arcticenergy.net`.
