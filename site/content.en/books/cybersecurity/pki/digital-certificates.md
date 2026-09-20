---
title: 'Digital Certificate'
date: 2022-08-05
draft: false
weight: 2
---

### Digital Certificate

<img src="/images/shared/screenshots/digital-certificate-sample.png">

 A digital certificate can be considered an electronic identity document. It is also known as an X.509 certificate. A digital certificate establishes a relationship between a public key and its owner.

It is certified by a certificate authority and issued to the owner. The owner must keep the digital certificate secure. It is valid only for a specific period, and its lifecycle is managed by public key infrastructure.

### Digital Certificate Formats


<img src="/images/en/cybersecurity/pki/pki-digital-certificate-formats.png">

#### PEM Format (Privacy-Enhanced Mail)
This is the most common format for X.509 certificates, certificate signing requests, and cryptographic keys.
Most certificate authorities provide certificates encoded in Base64 ASCII format.
Certificate files in this format may use the .pem, .crt, .cer, or .key extensions.
A .pem file can store the end-entity certificate, the authority certificate, and the private key in a single file.
The end-entity and authority certificates can also be stored separately as .crt or .cer files, while the private key can be stored as a .key file.

#### PKCS #7 Format (Public-Key Cryptography Standard)
This format can store certificates and certificate chains, but it cannot store private keys.
Certificates in this format are encoded in Base64 ASCII format.
Certificate files in this format may use the .p7b or .p7c extensions.
Certificate authorities commonly use this format to provide certificate chains to users.

#### DER Format (Distinguished Encoding Rules)
This is a binary encoding format for X.509 certificates and private keys.
Certificate files in this format may use the .der or .cer extensions.
It is commonly used in Java environments.

#### PFX Format (PKCS #12, Personal Information Exchange)
Certificates in this format use binary encoding. The term PFX is used interchangeably with PKCS #12.
This format can store the end-entity certificate, the authority certificate, and the private key in a single password-protected file.
Certificate files in this format may use the .pfx or .p12 extensions.
This format is used primarily on the Windows platform.

