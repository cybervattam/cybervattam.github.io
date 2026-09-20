---
title: 'DNS Hierarchy'
date: 2022-08-12
draft: false
weight: 2
---

### DNS Hierarchy

#### Root Name Servers

There are currently 13 root name servers distributed globally using anycast routing and managed by ICANN. These root servers are the top of the DNS hierarchy and are queried when a recursive resolver needs to find the authoritative server for a requested domain.

The root zone contains the top-level DNS data and provides the starting point for name resolution across the internet. The operators of root servers, registry organizations, and ICANN coordinate to maintain the health and security of the root zone.

DNSSEC support and trust anchors are associated with the root zone. The root servers are critical to internet stability, even though client systems usually cache the address information of higher-level servers.

#### Top-Level Domain (TLD) Name Servers

A TLD name server maintains information for all domains that end with a specific top-level domain, such as .com, .net, .org, or a country code such as .in or .uk. These servers are operated by registry organizations responsible for the respective TLD.

Examples include:
- gTLDs: .com, .net, .org
- ccTLDs: .in, .uk, .au

<img src="images/dns-ta/dns-tld-ta.png">

#### Authoritative Name Servers

An authoritative name server stores the official records for a given domain. It provides the IP address for A records, the alias information for CNAME records, and other domain-related details associated with the zone.

#### Recursive Resolvers

A recursive resolver is the first stop in a DNS query from a client. It acts as an intermediary between the client and authoritative DNS servers. If the recursive resolver receives a referral, it starts a new recursive query for the referenced domain.

Recursive resolvers are commonly provided by ISPs or public DNS providers. Some organizations also run their own recursive resolvers.

| Provider | Resolver IP Addresses |
| -------- | -------------------- |
| Google | 8.8.8.8 & 8.8.4.4 |
| Cloudflare | 1.1.1.1 & 1.0.0.1 |
| OpenDNS | 208.67.222.222 & 208.67.220.220 |
