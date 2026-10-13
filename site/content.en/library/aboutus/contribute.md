---
title: 'How to Contribute'
date: 2026-10-13
draft: false
weight: 1
tags: ["About Us", "Contribute"]
---

### Welcome to the Cybervattam Contributor Guide

**Cybervattam** is an open, community-driven knowledge library built to make cybersecurity, internet safety, and emerging technology accessible in Indian languages. Whether you want to write a new lesson, refine an existing translation, or propose better vernacular technical terms, this guide walks you through everything you need to get started.

---

### 1. Ways You Can Contribute

1. **Improve or Proofread a Translation**: Spot an awkward phrase, typo, or mistranslated technical term in Tamil, Hindi, Malayalam, Telugu, or Kannada? Submit a quick fix via GitHub.
2. **Translate an Existing Lesson**: Pick any English article in `site/content.en/` and localize it into your native language.
3. **Author a New Lesson or Diagram**: Write a new guide on cybersecurity, digital hygiene, or emerging technologies, or localize an SVG diagram into an Indian script.
4. **Suggest a "Term of the Week"**: Propose a clear vernacular equivalent and real-world analogy in `site/static/data/terms-of-the-week.json`.

---

### 2. Repository & Content Directory Structure

All lessons and pages are written in **Markdown (`.md`)** and organized by language inside the `site/` directory. Every language folder mirrors the exact same directory path and file names so Hugo can link translations together automatically:

```text
cybervattam.github.io/
└── site/
    ├── content.en/                  # English (Primary source content)
    │   ├── _index.md                # Homepage intro content
    │   ├── events/                  # Community events & workshops
    │   └── library/                 # Main knowledge library
    │       ├── cyberawareness/      # Pillar 1: Cyber Awareness
    │       │   ├── cyberhygine/     #   Device, password & internet safety
    │       │   ├── familysafety/    #   Safety guides by age group
    │       │   └── topscamsfrauds/  #   Phishing, OTP, UPI & AI scams
    │       ├── cybersecurity/       # Pillar 2: Cybersecurity Core
    │       │   ├── cloudsecurity/   #   Cloud security, CSPM, CNAPP, ZTNA
    │       │   ├── cryptography/    #   Encryption, hashing & digital signatures
    │       │   ├── dns/             #   DNS hierarchy, records, DNSSEC, DoH/DoT
    │       │   ├── iam/             #   Authentication, MFA, OAuth, SAML, OIDC
    │       │   ├── icann-iana/      #   Internet governance & numbering
    │       │   ├── pki/             #   Certificates, CAs & TLS
    │       │   └── zerotrust/       #   Zero Trust architecture & principles
    │       ├── emergingtech/        # Pillar 3: Emerging Technologies
    │       │   ├── blockchain/      #   Distributed ledgers & consensus
    │       │   ├── cloud/           #   Cloud service & deployment models
    │       │   ├── digitalassets/   #   Crypto wallets, custody & CBDCs
    │       │   └── ipv6/            #   IPv6 addressing & transition
    │       └── aboutus/             # About Us, Contribute, Contributors, Team
    │
    ├── content.ta/                  # Tamil (தமிழ்) — mirrors content.en/ paths
    ├── content.hi/                  # Hindi (हिन्दी) — mirrors content.en/ paths
    ├── content.ml/                  # Malayalam (മലയാളം) — mirrors content.en/ paths
    ├── content.te/                  # Telugu (తెలుగు) — mirrors content.en/ paths
    ├── content.kn/                  # Kannada (ಕನ್ನಡ) — mirrors content.en/ paths
    │
    ├── i18n/                        # UI strings (en.toml, ta.toml, hi.toml, etc.)
    └── static/
        ├── data/
        │   └── terms-of-the-week.json  # Rotating homepage terminology pairs
        └── images/                  # Diagrams & illustrations (en/, ta/, shared/)
```

#### Markdown Frontmatter Template

Every Markdown lesson starts with YAML frontmatter that controls its title, ordering (`weight`), and topic tags:

```yaml
---
title: 'Introduction to Cryptography'
date: 2026-10-13
draft: false
weight: 1
verified: true
tags: ["Cybersecurity", "Cryptography"]
---

### Introduction to Cryptography

Write your lesson content here using standard Markdown headings, bullet lists, tables, and images.
```

> **Important Rule**: Keep the **filename** (e.g., `cryptography-introduction.md`) in English across all `content.<lang>/` folders so the language switcher on every article can map directly between languages.

---

### 3. Translation Guidelines for Technical Jargon (Transliteration vs. Translation)

Translating technology into Indian languages requires balancing **conceptual clarity** with **real-world usability**. A purely literal word-for-word translation can confuse practitioners, while pure English transliteration fails to explain the underlying concept.

Follow this three-part rule when localizing technical terms:

#### A. Translate Core Concepts + Include the English Term on First Mention
When a technical concept has a meaningful, natural native equivalent, use the **vernacular term** first and place the **English term in parentheses on first mention**. This builds native vocabulary while keeping the industry-standard term searchable.

| English Concept | Recommended Approach | Example (Tamil) | Example (Hindi) |
| :--- | :--- | :--- | :--- |
| **Encryption** | Native concept + `(Encryption)` on 1st use | மறையாக்கம் (Encryption) | गूढ़लेखन / एन्क्रिप्शन (Encryption) |
| **Phishing** | Descriptive native term + `(Phishing)` | தூண்டில் மோசடி (Phishing) | जालसाज़ी संदेश (Phishing) |
| **Multi-Factor Authentication** | Native concept + `(MFA)` | பல்காரணி சான்றுறுதி (MFA) | बहु-कारक प्रमाणीकरण (MFA) |
| **Zero Trust** | Native concept + `(Zero Trust)` | பூஜ்ஜிய நம்பிக்கை (Zero Trust) | शून्य विश्वास (Zero Trust) |
| **Brute-Force Attack** | Meaning-based translation (never literal "rude attack") | தொடர் முயற்சித் தாக்குதல் (Brute-force attack) | ब्रूट-फ़ोर्स हमला (लगातार पासवर्ड आज़माना) |

#### B. Retain / Transliterate Universal Acronyms, Protocols & Proper Nouns
Do **not** invent artificial translations for protocol names, file formats, cryptographic algorithms, or hardware ports. Keep universally recognized acronyms in Latin script (or standard phonetic script) and attach native grammatical suffixes with a hyphen where needed (e.g., `OTP-ஐ`, `DNS-இன்`).

- **Keep as Acronyms**: `DNS`, `HTTPS`, `TLS`, `IPv6`, `OTP`, `UPI`, `SIM`, `USB`, `APK`, `SHA-256`, `AES`, `SAML`, `OIDC`.
- **Keep Proper Nouns & Standards**: `ICANN`, `IANA`, `NIST`, `WhatsApp`, `Authy`.

#### C. Prioritize Natural Idioms Over Literal Machine Translation
- **Avoid literal calques**: Words like *"mouse"* (computer pointer), *"worm"* (network worm), *"pipeline"* (DevOps pipeline), or *"patch"* (security update) must be translated by their **technical meaning** (e.g., *சுட்டி / माउस*, *பாதுகாப்புத் திருத்தம் / सुरक्षा पैच*), never as literal animals or plumbing pipes.
- **Check "Do's and Don'ts" carefully**: In safety checklists, verify that every bullet under **"Don'ts"** is phrased as a clear negative imperative (*"Do not share..."* / *"...பகிர வேண்டாம்"* / *"...साझा न करें"*).

---

### 4. Contributor License & Attribution (`CC-BY-NC-SA 4.0`)

All content on Cybervattam is published under the **[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)** license.

| License Pillar | What It Means for You |
| :--- | :--- |
| **Attribution (`BY`)** | **You get credit for your work.** Contributors are acknowledged in the Git commit history and listed on our [Contributors](/library/aboutus/contributors/contributors/) page. Anyone sharing or adapting Cybervattam material must credit Cybervattam and its contributors. |
| **NonCommercial (`NC`)** | **Free for education, never for sale.** Educators, students, nonprofits, and communities can freely copy, print, and teach from Cybervattam guides, but no one may sell the content for commercial profit. |
| **ShareAlike (`SA`)** | **Open knowledge stays open.** If anyone translates, remixes, or builds upon Cybervattam lessons, they must release their updated version under the same open `CC-BY-NC-SA 4.0` license. |

By submitting a Pull Request, translation, or issue to the [Cybervattam GitHub repository](https://github.com/cybervattam/cybervattam.github.io), you confirm that your contribution is your original work and agree to share it under **CC-BY-NC-SA 4.0**.

---

### 5. Ready to Start?

- **Browse open tasks or suggest an edit**: [Open an Issue on GitHub](https://github.com/cybervattam/cybervattam.github.io/issues/new)
- **Submit a translation or new lesson**: [Open a Pull Request on GitHub](https://github.com/cybervattam/cybervattam.github.io/pulls)
- **Have questions?**: Reach out via our [Contact Us](/library/aboutus/contactus/contactus/) page.

