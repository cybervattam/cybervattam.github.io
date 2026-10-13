## Summary of Changes

<!-- Briefly describe what this Pull Request adds, translates, or fixes. -->

## Target Language(s)

- [ ] English (`content.en` / `en.toml`)
- [ ] Tamil — தமிழ் (`content.ta` / `ta.toml`)
- [ ] Hindi — हिन्दी (`content.hi` / `hi.toml`)
- [ ] Malayalam — മലയാളം (`content.ml` / `ml.toml`)
- [ ] Telugu — తెలుగు (`content.te` / `te.toml`)
- [ ] Kannada — ಕನ್ನಡ (`content.kn` / `kn.toml`)
- [ ] Overall Site / UI / Term of the Week (`layouts/`, `src/`, `terms-of-the-week.json`)

## Type of Contribution

- [ ] Translation fix / Proofreading
- [ ] New lesson or localized article
- [ ] Term of the Week addition / update (`site/static/data/terms-of-the-week.json`)
- [ ] Diagram / SVG localization (`site/static/images/`)
- [ ] Site UI / Template / Styling improvement

## Contributor Checklist

- [ ] **File Structure & Naming**: Markdown files keep the exact same English filename and folder path as `site/content.en/` so language switching works automatically.
- [ ] **Frontmatter**: YAML frontmatter includes valid `title`, `date`, `draft: false`, `weight`, and localized `tags`.
- [ ] **Technical Terminology**:
  - Core concepts use natural vernacular terms with the English term in parentheses on first mention (e.g., `மறையாக்கம் (Encryption)`).
  - Universal acronyms and protocols (`DNS`, `HTTPS`, `TLS`, `IPv6`, `OTP`, `UPI`, `SHA-256`) are kept intact rather than literally translated.
  - No literal machine-translation errors (e.g., *mouse*, *worm*, *patch*, *pipeline* are translated in their technical sense).
- [ ] **Safety Checklists ("Do's & Don'ts")**: If this page includes a *"Don'ts"* section, every bullet point is phrased as a clear negative imperative (*"Do not..."*).
- [ ] **Internal Links**: Any internal Markdown links in localized files include the language prefix (e.g., `/ta/library/...`, `/hi/library/...`).
- [ ] **License Agreement (`CC-BY-NC-SA 4.0`)**: I confirm that this contribution is my original work and I agree to publish it under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.

