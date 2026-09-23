---
title: 'Chain of Trust'
date: 2022-08-05
draft: false
weight: 4
---

### Chain of Trust

The chain of trust consists of several parts.

<img src="/images/en/cybersecurity/pki/pki-chain-of-trust.png">


First, there is a trust anchor, also called the root certifying authority.

Second, there is an intermediate certificate authority (Intermediate CA). It may have several subordinate certificate authorities (Sub CAs) under its control.

The intermediate certificate authority acts as a barrier between end entities and the root certificate authority.

Finally, there is an end-entity certificate issued to a website, organization, or individual.

<img src="/images/en/cybersecurity/pki/pki-digital-certificate-chain.png">

### Chain of Trust Verification

To prove its identity, a client presents its certificate. This certificate usually includes a chain of certificates leading to the root certificate authority. The verifier examines the certificate and verifies it using the issuer's public key. The issuer's public key is found in the issuer's certificate, which is next in the chain after the client's certificate. If the verifier trusts the higher certificate authority that signed the issuer's certificate, verification succeeds and stops at that level. Otherwise, the issuer's certificate is verified in the same way as the client's certificate. This process continues until a trusted certificate authority is found or the chain reaches the root certificate authority.

