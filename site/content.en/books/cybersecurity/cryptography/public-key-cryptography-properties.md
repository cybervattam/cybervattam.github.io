---
title: 'Properties of Public Key Cryptography'
date: 2018-11-14T19:02:50-07:00
draft: false
weight: 8
extensions:
    - katex
---

## Public Key Cryptography - Confidentiality

![Public Key Cryptography - Confidentiality](/images/en/cybersecurity/cryptography/pki-c.png "Public Key Cryptography - Confidentiality")

For example, suppose Gokul wants to send a message to Karthik. This message should remain visible only to them. Gokul encrypts the message using Karthik's public key and sends the ciphertext to him. Since only Karthik's private key can decrypt that ciphertext, the confidentiality of the message is preserved.

## Public Key Cryptography - Integrity

![Public Key Cryptography - Integrity](/images/en/cybersecurity/cryptography/pki-i.png "Public Key Cryptography - Integrity")

For example, suppose Gokul wants to send an official message to Karthik. Gokul signs the message with his private key and sends it to Karthik. Since only the sender's private key could have produced that signature, the recipient can verify the sender and the message integrity.

This is equivalent to digital signing.

## Public Key Cryptography - Confidentiality & Integrity

![Public Key Cryptography - Confidentiality & Integrity](/images/en/cybersecurity/cryptography/pki-ci.png "Public Key Cryptography - Confidentiality & Integrity")

For example, suppose Gokul wants to send an official message to Karthik. The message should be readable only by them. Gokul first signs the message with his private key, then encrypts it again using Karthik's public key. This creates a double-encrypted ciphertext. Karthik first decrypts with his private key and then decrypts again using Gokul's public key. In this way, both the sender's authenticity and the confidentiality of the message are preserved.
