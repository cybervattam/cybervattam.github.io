---
title: 'DNS Records'
date: 2022-08-12
draft: false
weight: 4
---

### DNS Records

- __A Record__ – Stores the IPv4 address for a domain.
- __AAAA Record__ – Stores the IPv6 address for a domain.
- __CNAME Record__ – Stores an alias name. If a CNAME is present, an IP address is not directly returned.
- __MX Record__ – Redirects email for a domain to the appropriate mail server.
- __TXT Record__ – Stores textual information used by administrators or services.
- __NS Record__ – Stores the authoritative name server for a domain.
- __SOA Record__ – Stores administrative information about the zone.
- __SRV Record__ – Identifies the port and host for a specific service.
- __PTR Record__ – Used for reverse lookups. It maps an IP address back to a hostname.

DNSSEC-specific records:
- __RRSIG Record__ – Stores digital signatures for a set of DNS records.
- __DNSKEY Record__ – Stores the public key used in DNSSEC.
- __DS Record__ – Stores the hash of the DNSKEY record for delegation.
- __NSEC and NSEC3 Records__ – Explicitly show that a record does not exist.
- __CDNSKEY and CDS Records__ – Used to update DS records in a child zone from the parent zone.
