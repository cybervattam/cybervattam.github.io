---
title: 'Cryptography Comparison'
date: 2018-11-14T19:02:50-07:00
draft: false
weight: 9
extensions:
    - katex
---

# Symmetric Key Cryptography

- Also known as secret key cryptography.
- A single key is used for both encryption and decryption.
- Provides confidentiality only.
- Usually faster for encryption and decryption.
- Key management is relatively difficult.
- If the secret key is exposed, anyone who gets it can decrypt the data.
- Therefore, the secret key must be protected carefully by all users.

# Asymmetric Key Cryptography

- Also known as public key cryptography.
- Two keys are used: one key for encryption and a different key for decryption.
- Provides confidentiality and authenticity.
- Encryption and decryption are usually slower.
- Key management is more complex.
- A message encrypted with one key can only be decrypted by its matching key pair.
- If the private key is exposed, anyone with it may decrypt the protected data.
- The private key owner must keep the private key extremely secure.
