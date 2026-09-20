---
title: 'बिटकॉइन ब्लॉकचेन ब्लॉक की संरचना'
date: 2022-08-15
draft: false
weight: 3
---

### <img src="images/shared/logos/bitcoin-logo.svg" width=10%> बिटकॉइन ब्लॉकचेन ब्लॉक की संरचना / Block Structure in Bitcoin Blockchain

<br>

* ब्लॉक हेडर (Block Header), 80 बाइट का क्रमबद्ध प्रारूप
    - संस्करण: वर्तमान ब्लॉक प्रारूप का संस्करण (4 बाइट)
    - पिछले ब्लॉक का हैश (32 बाइट)
    - डेटा हैश (Merkle Tree root का हैश) (32 बाइट)
    - टाइम स्टैंप (4 बाइट)
    - वर्तमान कठिनाई स्तर (4 बाइट)
    - nonce (4 बाइट)
* ब्लॉक डेटा (Block Data)
    - लेनदेन काउंटर (Transaction Counter)
    - लेनदेन #1, #2, #3, ... ,#n

<img src="images/en/emergingtech/blockchain/blockchain-bitcoin-block-structure.png" width=50%>
<br>
<br>

### बिटकॉइन ब्लॉकचेन का उदाहरण / Sample Bitcoin Blockchain

<br>
<br>
<img src="images/en/emergingtech/blockchain/blockchain-bitcoin-sample-blocks.png" width=50%>