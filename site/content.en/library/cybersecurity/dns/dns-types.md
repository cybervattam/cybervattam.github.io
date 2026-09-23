---
title: 'DNS Types'
date: 2022-08-12
draft: false
weight: 6
---

### DNS Types

#### Internal DNS

Internal DNS is used within an organization to map private servers and services to internal IP addresses.

#### External DNS

External DNS is used for servers and services that are reachable from the public internet and maps them to public IP addresses.

#### Reverse DNS

Reverse DNS is a reverse lookup that resolves a given IP address back to its hostname. In DNS, the PTR record stores this mapping in reverse form, usually under the in-addr.arpa or ip6.arpa domain.

This is commonly used by security systems, email gateways, and network monitoring tools.

#### Dynamic DNS

Dynamic DNS is used when the IP address of a domain changes frequently and needs to be updated automatically. It is an important part of Microsoft Active Directory and similar environments.

The domain administrator updates the DNS records for that zone, and other systems use that information to find the relevant services automatically.
