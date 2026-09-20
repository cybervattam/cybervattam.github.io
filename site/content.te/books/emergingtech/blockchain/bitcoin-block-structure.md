---
title: 'బిట్‌కాయిన్ బ్లాక్‌చైన్ బ్లాక్ నిర్మాణం'
date: 2022-08-15
draft: false
weight: 3
---

### <img src="images/logos/bitcoin-logo.svg" width=10%> బిట్‌కాయిన్ బ్లాక్‌చైన్ బ్లాక్ నిర్మాణం / Block Structure in Bitcoin blockchain

<br>

* బ్లాక్ హెడర్ (Block Header) (80 బైట్ పొడవు కలిగిన సారూప్య ఆకృతి)
    - వెర్షన్ – ప్రస్తుత బ్లాక్ ఫార్మాట్ వెర్షన్ (4 బైట్)
    - మునుపటి బ్లాక్‌ యొక్క హాష్ (32 బైట్)
    - డేటా హాష్ (మెర్కిల్ ట్రీ రూట్ హాష్) (32 బైట్)
    - టైమ్‌స్టాంప్ (4 బైట్)
    - ప్రస్తుత difícాల్టీ (4 బైట్)
    - నాన్‌స్ (4 బైట్)
* బ్లాక్ డేటా (Block Data)
    - ట్రాన్జాక్షన్ కౌంట్ (Transaction Counter)
    - ట్రాన్జాక్షన్‌లు #1, #2, #3, ... ,#n

<img src="images/blockchain-ta/blockchain-bitcoin-block-structure-ta.svg" width=50%>
<br>
<br>

### బిట్‌కాయిన్ బ్లాక్‌చైన్ ఉదాహరణ / Sample Bitcoin blockchain

<br>
<br>
<img src="images/blockchain-ta/blockchain-bitcoin-chain-sample-ta.svg" width=50%>