---
title: 'Code Signing Certificate'
date: 2022-08-12
draft: false
weight: 9
---

### Code Signing

Code signing is the digital signing of software, including executable files and source code, to identify the publisher. It also provides assurance that the software has not been modified or corrupted since it was signed. Hash values are used for verification. The security of this method of identifying and authenticating software depends on protecting the signing keys. The trustworthiness of the system depends on software publishers protecting their private keys. Therefore, storing keys in secure, tamper-resistant cryptographic hardware devices is considered a security best practice. These devices are called Hardware Security Modules (HSMs).

### Code Signing Certificate Types
<br>

#### Standard Code Signing Certificates
Microsoft SmartScreen warnings continue to appear for a publisher's code or applications until the publisher builds a reputation through high download counts and few error reports. This does not guarantee that the code is trustworthy. It confirms through public key infrastructure that the code was signed with a specific private key.

The public key or certificate used to validate the code signature must chain to a trusted root certificate authority. This can be verified through the chain of trust.

<img src="images/pki-ta/standard-cs-ta.png">

#### Extended Validation Code Signing Certificates

Extended Validation code signing certificates are issued after fully verifying the publisher's identity. When SmartScreen checks software or code signed with an Extended Validation certificate, the publisher can establish reputation immediately even without a prior reputation. This does not guarantee that the code is trustworthy. It confirms through public key infrastructure that the code was signed with a specific private key.

<img src="images/pki-ta/ev-cs-ta.png">   

### Code Signing / Verification

<img src="images/pki-ta/code-signing-verification-ta.svg">