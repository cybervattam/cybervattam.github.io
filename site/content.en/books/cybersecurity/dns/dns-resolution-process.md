---
title: 'DNS Query Resolution Process'
date: 2022-08-12
draft: false
weight: 3
---

### DNS Query Resolution Process

<img src="images/dns-ta/dns-resolution-process-ta.svg">

When a client requests a domain name, the DNS query typically follows this process:

1. The client sends a recursive DNS query to a configured resolver.
2. The resolver checks its cache to see whether the answer is already known.
3. If not cached, the resolver queries the root server to locate the appropriate TLD server.
4. The resolver then queries the authoritative name server for the specific domain.
5. The authoritative server returns the corresponding DNS records.
6. The resolver sends the response back to the client and may cache the result for future requests.

This process allows the client to resolve a human-readable domain name into the correct IP address.
