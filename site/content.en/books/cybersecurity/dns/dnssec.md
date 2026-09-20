---
title: 'DNS Security Extensions (DNSSEC)'
date: 2022-08-14
draft: false
weight: 7
---

### DNS Security / DNSSEC

The goal of DNS security is to create a trusted DNS system by combining DNS data with cryptographic signatures.

A zone owner signs the data in the zone using a private key. Consumers can verify the authenticity of the DNS data using the corresponding public key.

To support signing and verification, DNSSEC adds several record types:
- __RRSIG Record__ – Stores digital signatures for a set of DNS records.
- __DNSKEY Record__ – Stores the public key used for verification.
- __DS Record__ – Stores the hash of the DNSKEY record for delegation.
- __NSEC and NSEC3 Records__ – Explicitly prove that a DNS record does not exist.
- __CDNSKEY and CDS Records__ – Used by a child zone to update its DS record in the parent zone.

Each DNS zone typically has two key pairs:
- Zone Signing Key (ZSK)
- Key Signing Key (KSK)

<img src="images/dns-ta/dns-sec-ta.svg">

The zone owner signs a set of resource records using the zone signing private key. The public part of the zone signing key is published in the DNSKEY record so resolvers can retrieve it and validate the authenticity of the DNS data.
