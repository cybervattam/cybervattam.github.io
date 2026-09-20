---
title: 'ಬಿಟ್‌ಕಾಯಿನ್ ಬ್ಲಾಕ್‌ಚೈನ್ ಬ್ಲಾಕ್‌ನ ರಚನೆ'
date: 2022-08-15
draft: false
weight: 3
---

### <img src="images/shared/logos/bitcoin-logo.svg" width=10%> ಬ್ಲಾಕ್‌ಚೈನ್ ಬ್ಲಾಕ್‌ನ ರಚನೆ / Block Structure in Bitcoin blockchain

<br>

* ಬ್ಲಾಕ್ ಹೆಡರ್ (Block Header) (80 ಬೈಟ್ ಉದ್ದದ, ವ್ಯವಸ್ಥಿತ ರೂಪ)
    - ಸಂಸ್ಕರಣಾ ಆವೃತ್ತಿ – ಪ್ರಸ್ತುತ ಬ್ಲಾಕ್ ಫಾರ್ಮ್ಯಾಟ್ ಆವೃತ್ತಿ (4 ಬೈಟ್ಗಳು)
    - ಹಿಂದಿನ ಬ್ಲಾಕ್‌ನ ಹ್ಯಾಶ್ (32 ಬೈಟ್ಗಳು)
    - ಡೇಟಾ ಹ್ಯಾಶ್ (ಮೆರ್ಕೆಲ್ ಟ್ರೀ ರೂಟ್ ಹ್ಯಾಶ್) (32 ಬೈಟ್ಗಳು)
    - ಟೈಮ್ ಸ್ಟಾಂಪ್ (4 ಬೈಟ್ಗಳು)
    - ಪ್ರಸ್ತುತ ಡಿಫಿಕಲ್ಟ್ ಮಟ್ಟ (4 ಬೈಟ್ಗಳು)
    - ನೊನ್ಸ್ (4 ಬೈಟ್ಗಳು)
* ಬ್ಲಾಕ್ ಡೇಟಾ (Block Data)
    - ವಹಿವಾಟು ಎಣಿಕೆ (Transaction Counter)
    - ವಹಿವಾಟುಗಳು #1, #2, #3, ... ,#n

<img src="images/en/emergingtech/blockchain/blockchain-bitcoin-block-structure.png" width=50%>
<br>
<br>

### ಬಿಟ್‌ಕಾಯಿನ್ ಬ್ಲಾಕ್‌ಚೈನ್ ಉದಾಹರಣೆ / Sample Bitcoin blockchain

<br>
<br>
<img src="images/en/emergingtech/blockchain/blockchain-bitcoin-sample-blocks.png" width=50%>
