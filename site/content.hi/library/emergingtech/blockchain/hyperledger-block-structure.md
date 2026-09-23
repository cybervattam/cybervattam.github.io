---
title: 'हाइपरलेजर ब्लॉक की संरचना'
date: 2022-08-15
draft: false
weight: 5
---

### हाइपरलेजर ब्लॉकचेन ब्लॉक की संरचना / Hyperledger Blockchain Block Structure

* ब्लॉक हेडर (Block Header)
    - ब्लॉक संख्या
    - डेटा हैश
    - पिछले ब्लॉक का हैश

<br>

* ब्लॉक डेटा (Block Data)
    - हेडर
    - सिग्नेचर
    - प्रस्ताव
    - प्रतिक्रिया
    - संदर्भ

<br>

* मेटाडेटा (Metadata)
    - ब्लॉक बनाने वाले व्यक्ति का प्रमाणपत्र और सिग्नेचर
    - ब्लॉक सत्यापनकर्ता द्वारा प्रत्येक लेनदेन की जाँच के बाद जोड़ा गया सही/गलत लेनदेन संकेतक
    - इस ब्लॉक सहित समग्र स्थिति अपडेट का हैश

 <br>

<img src="images/en/emergingtech/blockchain/blockchain-hyperledger-block-structure.png" width=50%>

