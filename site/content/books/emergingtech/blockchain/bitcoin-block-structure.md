---
title: 'பிட்காயின் கட்டச்சங்கிலி கட்டத்தின் உறுப்புகள்'
date: 2022-08-15
draft: false
weight: 3
---

### <img src="images/logos/bitcoin-logo.svg" width=10%> கட்டச்சங்கிலி கட்டத்தின் உறுப்புகள் / Block Structure in Bitcoin blockchain

<br>

* கட்டத்தின் தலைப்பு (Block Header) (80 பைட் நீளம் கொண்ட வரிசைபடுத்தப்பட்ட வடிவம்)
    - பதிப்பு – தற்போதைய கட்ட உருவத்தின் பதிப்பு (4 பைட் நீளம்) 
    - முந்தைய கட்டத்தின் குறுக்க மதிப்பு (32 பைட் நீளம்)
    - தரவுக் குறுக்க மதிப்பு (மெர்கல் மர வேரின் குறுக்க மதிப்பு) (32 பைட் நீளம்)
    - நேர முத்திரை (4 பைட் நீளம்)
    - தற்போதைய கடின அளவு (4 பைட் நீளம்)
    - ஒரேமுறை எண் (4 பைட் நீளம்)
* கட்டத்தின் தரவு (Block Data)
    - பரிவர்த்தனை எண்ணி (Transaction Counter)
    - பரிவர்த்தனைகள் #1, #2, #3, ... ,#n

<img src="images/blockchain-ta/blockchain-bitcoin-block-structure-ta.svg" width=50%>
<br>
<br>

### பிட்காயின் கட்டச்சங்கிலி உதாரணம் / Sample Bitcoin blockchain

<br>
<br>
<img src="images/blockchain-ta/blockchain-bitcoin-chain-sample-ta.svg" width=50%>