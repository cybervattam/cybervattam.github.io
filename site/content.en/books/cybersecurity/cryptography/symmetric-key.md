---
title: 'Symmetric Key Encryption'
date: 2025-06-15
draft: false
weight: 4
extensions:
    - katex
---

Let us assume Sundar wants to send a secret message to Venkatesh. Before sharing the data, Sundar and Venkatesh agree on a random secret code. Let us call this a secret key. No one else knows this secret key.

![Symmetric Key Encryption](/images/en/cybersecurity/cryptography/symmetric-key.png "Symmetric Key Encryption")

Sundar encrypts the message using the chosen encryption algorithm and sends the ciphertext to Venkatesh. Venkatesh uses the same secret key to decrypt the ciphertext and recover the original message.

Because the same key is used for both encryption and decryption, this is called symmetric key encryption. It is also known as secret key cryptography.
