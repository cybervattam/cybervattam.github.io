---
title: 'Asymmetric Key Encryption'
date: 2018-11-14T19:02:50-07:00
draft: false
weight: 5
extensions:
    - katex
---

![Asymmetric Key Encryption](/images/en/cybersecurity/cryptography/asymmetric-key-1.png "Asymmetric Key Encryption")

Each person has two keys: a public key and a private key. This pair is called a key pair.

A key pair is mathematically linked. You cannot guess or derive one key from the other. One key is used for encryption, and only the matching key from that pair can be used for decryption.

The public key is shared in public spaces such as the internet, social media, or email. The private key is confidential and therefore kept extremely securely.

![Asymmetric Key Encryption](/images/en/cybersecurity/cryptography/asymmetric-key-2.png "Asymmetric Key Encryption")

Let us assume Sundar wants to send a secret message to Venkatesh. Sundar will encrypt the message using Venkatesh's public key and send the ciphertext to Venkatesh. Because the key pair is mathematically linked, only Venkatesh's private key can decrypt the message. No other key can decrypt it.

Venkatesh decrypts the message using his private key to retrieve the original information. Because two different keys are used in the encryption and decryption process, this is called asymmetric key encryption. It is also known as public key cryptography, since the public key is shared to ensure secure communication.
