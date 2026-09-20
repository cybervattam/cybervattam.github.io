---
title: 'DNS64 & NAT64'
date: 2022-08-14
draft: false
weight: 11
---

### DNS64 & NAT64

DNS64 synthesizes IPv6 AAAA records from IPv4 A records when a domain has only IPv4 content. This is done by generating an IPv6 address that embeds the IPv4 address in the second portion of the address, while the first portion is a special IPv6 prefix used for NAT64 translation.

This NAT64 prefix is typically used by NAT64 gateways to translate IPv6 clients to IPv4 services when the destination only supports IPv4.

<img src="images/dns-ta/dns64-nat64-ta.svg">
