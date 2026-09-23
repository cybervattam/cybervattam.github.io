---
title: 'Address Modes'
date: 2026-09-21
draft: false
weight: 5
---

### IPv6 Address Modes

IPv6 supports several communication modes depending on how traffic is delivered.

#### Unicast
A packet is sent to a single destination identified by a unique IPv6 address.

#### Multicast
A packet is sent to a group of devices simultaneously in a single transmission from the source.

#### Anycast
A packet is delivered to the nearest or best destination among a group of potential recipients.

### Summary

- Unicast: one-to-one
- Multicast: one-to-many
- Anycast: one-to-nearest

Anycast is commonly used in routing and content delivery scenarios where a sender communicates with the closest available server.
