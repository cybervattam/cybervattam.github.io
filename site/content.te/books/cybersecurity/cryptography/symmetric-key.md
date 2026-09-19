---
title: 'Symmetric Key Encryption​'
date: 2025-06-15
draft: false
weight: 4
extensions:
    - katex

---

Let us assume Sundar wants to send a secret message to Venkatesh​. Before sharing the data, Sundar & Venkatesh will choose a random secret code. Let us call this as a Secret Key. No one else knows this secret key.​

![Symmetric Key Encryption​](/images/cryptography-ta/symmetric-key-ta.svg "Symmetric Key Encryption​")

Sundar will encrypt the message with the encryption chosen and will send the cipher text to Venkatesh​. Venkatesh will use the same secret key to decrypt the ciphertext and retrieve the original message.​ As the same key is used for encryption & decryption, it is called Symmetric Key encryption. It is also known as Secret Key Cryptography.