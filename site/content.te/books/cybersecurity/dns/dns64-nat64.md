---
title: 'DNS 64 & NAT 64'
date: 2022-08-14
draft: false
weight: 11
---


### DNS 64 & NAT 64

DNS64 అనేది డొమైన్ నేమ్ సర్వర్‌కి ఒక నిర్దిష్ట డొమైన్ కోసం AAAA రికార్డ్‌ను అభ్యర్థిస్తే, అక్కడ A రికార్డు మాత్రమే ఉంటే, A రికార్డ్ డేటాను AAAA రికార్డ్ డేటాగా సంశ్లేషణ చేస్తుంది (synthesizes the AAAA records from the A records).

సంశ్లేషణ చెందిన చిరునామాలో మొదటి భాగం IPv6/IPv4 రూపాంతర మార్పిడి (translation) రూపాన్ని సూచిస్తుంది. రెండవ భాగం IPv4 చిరునామాను కలిగి ఉంటుంది. ఈ రూపాంతర మార్పిడి సాధారణంగా NAT64 సర్వర్‌గా పిలువబడుతుంది.

<img src="/images/en/cybersecurity/dns/dns64-nat64.png">