---
title: 'Asymmetric Key Encryption​'
date: 2018-11-14T19:02:50-07:00
draft: false
weight: 5
extensions:
    - katex
---

![Asymmetric Key Encryption​](/images/cryptography-ta/asymmetric-key-ta-1.svg "Asymmetric Key Encryption​")

Each person will have two keys each​. Public Key​ & Private Key​. This is called a ‘Key Pair’.
​

Key Pair is mathematically linked to each other​
    You cannot guess or derive one key from the other key​. One key is used for encryption and only the other key from that key pair can be used for decryption.​ Public Key is shared in public space like internet, social media or email​. Private Key is confidential and hence kept very securely

![Asymmetric Key Encryption​](/images/cryptography-ta/asymmetric-key-ta-2.svg "Asymmetric Key Encryption​")

Let us assume Sundar wants to send a secret message to Venkatesh​. Sundar will encrypt the message with Venkatesh’s Public Key and send the ciphertext to Venkatesh​. As the key pair is mathematically linked, only Venkatesh’s private key can decrypt the message. No other key can decrypt this message. Venkatesh will decrypt the message using his private key to retrieve the original information​. As two keys are used for encryption/decryption process, it is called asymmetric key encryption. It is also known as Public Key cryptography as the public key is shared to ensure secure communication.​