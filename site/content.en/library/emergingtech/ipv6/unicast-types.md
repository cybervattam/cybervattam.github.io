---
title: 'Unicast Types'
date: 2026-09-21
draft: false
weight: 6
---

### IPv6 Unicast Types

IPv6 includes several types of unicast addresses, each serving a different networking purpose.

#### Global Unicast Address
These addresses are routable on the Internet and begin with a global routing prefix, such as 2001::/3.

Example:

2001:0:3238:DFE1:63::FEFB

#### Unique Local Address (ULA)
These are similar to private IPv4 addresses and are used for private networks.

Example:

FDC8:BF8B:E62C:ABCD:1111:2222:3333:4444

#### Link-Local Address
These addresses begin with FE80::/10. They are limited to a single link and are not routable beyond that network segment.

### Summary

- Global Unicast: public, Internet-routable
- Unique Local: private network use
- Link-Local: local segment only
