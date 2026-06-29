# Kingdom Hearts Lorebook

An interactive **fan-made** lorebook for the **Kingdom Hearts** saga — from the
Age of Fairy Tales and Birth by Sleep through the numbered games to the Quadratum.

🌐 **Live:** https://nicholaslie90.github.io/kh-lore/

## ⚖️ Copyright

**All copyrights belong to Disney and Square Enix.** *Kingdom Hearts*, its story,
characters, music, artwork, and all related properties are © **Disney** and
© **SQUARE ENIX CO., LTD.** Disney characters are © Disney.

This is a **non-commercial, fan-made website** created out of love for the series.
It is **not affiliated with, endorsed by, or sponsored by Disney or Square Enix**.
No copyrighted assets are redistributed here:

- All **character portraits** and **event illustrations** are original vector
  graphics drawn in code — no official art or screenshots are used.

If you are a rights holder and have any concerns, please open an issue.

## Features

- **Timeline** — a chronological spine from the Keyblade War of the Age of Fairy
  Tales to Sora's vanishing into the Quadratum. **Click any incident** to expand a
  deeper account and an original illustration, color-coded by game.
- **Characters** — a force-directed **web of linked hearts** (~38 characters drawn
  as vector portraits) and an alphabetical **Grid** roster. Search by name/role,
  then open a **dossier** with the character's temperament, story role, expanded
  background, a die-hard "Did you know?", and clickable connections. **Hover a tie**
  for a tooltip or select a character to see its links labelled inline. Tie types:
  ♥ love · ✦ bond · ➜ master · ◈ linked hearts (Nobody/Heartless/replica/split) · ⚔ enmity.
- **Compendium** — cards organized into *Hearts & Their Shadows*, *Keyblades &
  Power*, and *Worlds & Forces* (the Heart, Heartless, Nobodies, the Keyblade,
  the χ-blade, Kingdom Hearts, Organization XIII, and more).
- **Secret Report spoiler toggle** — an "Encrypted / Decrypted" switch (default off)
  seals the big twists behind redaction; decrypting also reveals hidden "linked
  heart" ties, so the web visibly grows as you unlock it.
- **Light / dark theme** — a deep-indigo "night sky" theme, or a bright
  Destiny-Islands light theme. Remembered across visits.

## Run it

Static site, no build step. Open the live link, or serve the folder locally:

```bash
python3 -m http.server   # then visit http://localhost:8000
```

## Project structure

```
index.html          markup + script/style includes
css/styles.css       all styling (dark + light themes)
js/data.js           lore data: characters, relationships, events, compendium
js/portraits.js      parametric vector character portraits (+ Disney/hood specials)
js/scenes.js         vector illustrations for timeline incidents
js/app.js            timeline, graph, search, dossier, view + spoiler + theme logic
```

Content is data-driven — add or correct characters, ties, and events by editing
`js/data.js`.

Built as a companion to the same author's [FFVII lorebook](https://github.com/nicholaslie90/ffvii-lore),
sharing its engine.
