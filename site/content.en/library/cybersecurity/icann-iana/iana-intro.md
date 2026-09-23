---
title: 'Internet Assigned Numbers Authority (IANA)'
date: 2022-08-19
draft: false
weight: 2
---


### Internet Assigned Numbers Authority (IANA)

<img src="images/shared/logos/iana-logo.svg" width=20%>

The Internet Assigned Numbers Authority is the organization responsible for coordinating global domain names, number resources, and protocol assignments.

The authority was originally administered under the control of the United States government. As the internet became widely adopted around the world, it was decided that these functions should not be managed by a single country.

Today, these functions are managed by the Internet Corporation for Assigned Names and Numbers (ICANN), an international nonprofit public-benefit organization. The authority's functions include:

#### * 1. __Domain Name Services__

<br>

   - __1.1 DNS Root Zone Management and Key Signing Ceremony__
      - IANA manages the root zone data, which is at the top of the DNS hierarchy.
      - This work involves coordinating with top-level domain registries, root server operator organizations, and ICANN's policy-making bodies.
      - IANA also conducts the key signing ceremony used to operate DNSSEC for the root zone.
      - The root service is provided by 13 root server identities using anycast IP addressing.
      - Root servers are not queried frequently because computers cache the addresses of top-level domain servers, but they remain a critical part of the internet infrastructure.
      - Root server operators are largely independent, but they must coordinate with one another and with ICANN: https://root-servers.org/

<br>

   - __1.2 Database of Top-Level Domains__
      - The root zone database contains delegation details for top-level domains, including generic top-level domains (gTLDs) such as .com and country-code top-level domains (ccTLDs) such as .uk.
      - As the manager of the DNS root zone, IANA coordinates these delegations according to established policies and procedures.

<br>

   - __1.3 .int Registry__
      - The .int top-level domain is intended for international organizations that do not naturally fit within a country-code top-level domain. For example, the World Health Organization uses the domain who.int.

<br>

   - __1.4 .arpa Registry__
      - The .arpa domain is used for internet infrastructure functions such as reverse mapping of IP addresses and ENUM telephone number mapping.
      - IANA manages this domain in close coordination with the Internet Architecture Board, which has policy responsibility for .arpa.

<br>

#### * 2. __Number Resources__
   - IP addresses
   - Autonomous System Numbers

<br>

#### * 3. __Protocol Assignments__

<br>

   - __3.1 Protocol Registry__
      - IANA maintains many of the codes and numbers used by internet protocols in coordination with the Internet Engineering Task Force (IETF).
      - The protocols managed by IANA are listed at https://www.iana.org/protocols.
      - As part of the protocol registry, IANA manages port numbers and maintains the official list of well-known and registered port ranges:
         - Well-known port numbers (0 to 1023)
         - Registered port numbers (1024 to 49151)
         - Dynamic or private port numbers (49152 to 65535)

<br>

   - __3.2 Time Zone Database__
      - The time zone database, commonly called tz or zoneinfo, contains code and data describing local time histories for representative locations around the world.
      - It is updated periodically to reflect changes made by political authorities to time zone boundaries, UTC offsets, and daylight saving time rules.
      - The official list of time zones is published at https://www.iana.org/time-zones.