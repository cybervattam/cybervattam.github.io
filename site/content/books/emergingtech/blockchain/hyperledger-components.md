---
title: 'ஹைப்பர்லெட்ஜர் கட்டச்சங்கிலி பகுப்புகள்'
date: 2022-08-15
draft: false
weight: 6
---

### ஹைப்பர்லெட்ஜர் கட்டச்சங்கிலி பகுப்புகள் / Hyperledger blokchain components

__இணையர்/ கணு__ - இணையர் பிணையத்தில் இணைக்கப்பட்ட ஒவ்வொரு கணினியும் அவர்கள் பங்கேற்க விரும்பும் கட்டச்சங்கிலி அமைப்புக்கு ஏற்ற குறிப்பிட்ட கணு பயன்பாட்டை நிறுவி இயக்க வேண்டும். தொழில்நுட்ப ரீதியாக, கட்டச்சங்கிலி ஒரு சேவை மேலடுக்கு பிணையத்தை (Service Overlay Network - SON) உருவாக்குகிறது. இந்த பிணையத்தில் ஒரு கணுவாக இருக்க, கணினி பயன்பாடு குறித்த செய்திகளை செயல்முறை படுத்த இயல வேண்டும் மற்றும் சேவை மேலடுக்கு பிணையத்தின் SON பகிரப்பட்ட நிலையை மாற்ற வேண்டும்.

__கருத்து இணக்க நெறிமுறை__ - கணு பயன்பாட்டிற்குள் ஒரு பகுதியாக, கருத்து  இணக்க நெறிமுறை செயல்படுத்தப்படுகிறது. இந்த சூழல் அமைப்பில் பேரேட்டிலிருந்து ஒருமித்த பார்வை எவ்வாறு எட்ட வேண்டும் என்ற விதிகளையும் மற்றும் “உலக நிலையை” தீர்மானிக்கும் முறையை வழங்குகிறது. எ.கா., உழைப்புக்குச் சான்று (PoW), பங்குகளின் சான்று (PoS), பைசண்டைன் தவறு சகிப்புத்தன்மை (BFT), வாக்களிப்பு சான்று (PoV), பங்குகளின் பிரதிநிதித்துவ சான்று (Delegated PoS).

__திறன் ஒப்பந்தங்கள்__ - கணு பயன்பாட்டிற்குள் (மெய்நிகர் கணினி) இயங்கும் கணினி மூலக்குறியீடு. பரவலாக்கப்பட்ட பேரேட்டுக்கு வெளியில் இயங்கும்
அந்த ஒப்பந்தத்தின் தரப்பினர் ஒருவருக்கொருவர் தொடர்பு கொள்ள ஒப்புக் கொள்ளும் விதிகளின் தொகுப்பைக் கொண்டுள்ளது.


__மெய்நிகர் கணினி__ - மெய்நிகர் கணினி என்பது ஒரு கணு பயன்பாட்டில் இயங்கும் ஒரு கணினி நிரலாகும், இதனால் திறன் ஒப்பந்தங்களின் நிலையை நிர்வகிக்கக்கூடிய குறிப்பிட்ட வழிமுறைகளைப் புரிந்து கொள்ள முடியும். ஒப்பந்தத்தின் விதிமுறைகளைச் செயல்படுத்த சிறப்பு நிரலாக்க மொழியில் வழிமுறைகள் வழங்கப்படுகின்றன.

__பரவலாக்கப்பட்ட பேரேடு__ - கணு பயன்பாட்டிற்குள் நிர்வகிக்கப்படும் ஒரு தரவு அமைப்பு. இணையர் பிணையத்தில் உள்ள ஒவ்வொரு இணையர்/கணுவால் பராமரிக்கப்படும் இந்த பேரேடு, கட்டச்சங்கிலி மற்றும் நிலை தரவுத்தளத்தை கொண்டுள்ளது.

__நிகழ்வுகள்__ - கட்டச்சங்கிலியில் குறிப்பிடத்தக்க செயல்பாடுகளின் அறிவிப்புகளையும் (எ.கா. ஒரு புதிய கட்டம்), திறன் ஒப்பந்தங்கள் தொடர்பான அறிவிப்புகளையும் உருவாக்குகிறது. 

__உறுப்பினர்__ - அனுமதி கோரும் கட்டச்சங்கிலி பிணையத்தில், உறுப்பினர் சேவைகள் அடையாளங்களை சான்றுறுதியளிக்கிறது, அங்கீகரிக்கிறது மற்றும் நிர்வகிக்கிறது.


<img src="images/blockchain-ta/blockchain-hyperledger-components-ta.svg" width=50%>