---
title: 'திறந்த அடையாள இணைப்பு'
date: 2022-08-18
draft: false
weight: 15
---

### திறந்த அடையாள இணைப்பு (Open ID Connect / OIDC)
OIDC என்பது OAuth 2.0 கட்டமைப்பின் மேல் உருவாக்கப்பட்ட ஒரு புதிய ஒற்றை நுழைவு நெறிமுறையாகும். பாதுகாப்பு தரவை உருவாக்க JSON-அடிப்படையிலான இணைய குறிகளை (JSON-based Web Tokens) பயன்படுத்துகிறது. 
JWT என்பது அடையாள வழங்குநர் (IDP) & சார்ந்திருக்கும் சேவை (RP) ஆகிய இரு தரப்பினரிடையே உரிமைகோரல் (Claims) விதிகளை வகுப்பதற்கும் மற்றும் பாதுகாப்பாக பரிமாற்றுவதற்கும் பயன்படுத்தப்படும் ஒரு தரநிலையாகும். 
அடையாளச் சரிபார்ப்பை ஆதரிக்கப் பயன்படுத்தப்படும் மறையாக்கம் செய்யப்பட்ட, முக்கிய பயனர் தரவு, உரிமை கோரல்கள்
ஒரு பயன்பாடு அணுகக்கூடிய உரிமைகோரல்களை (பயனர் பண்புகள்) OIDC நோக்கங்கள் (Scopes) வரையறுக்கின்றன. அடையாள வழங்குநர் ஏற்றுக்கொள்ளக்கூடிய நோக்கங்களின் பட்டியலைபராமரிக்கிறது மற்றும் ஒரு பயனர் வெளிப்படையாக தங்கள் விவரங்களைப் பகிர சம்மதித்த பிறகு, சார்ந்திருக்கும் சேவைக்கு (பயன்பாடு) நோக்கங்களைக் கிடைக்கச் செய்கிறது.
தொடர்பு கொள்ளும் முன், சார்ந்திருக்கும் சேவை மற்றும் அடையாள வழங்குநர் மீத்தரவை பரிமாறிக் கொள்ளவேண்டும்.  இரு தரப்பினரும் சாத்தியமான நோக்கங்களில் உடன்பட வேண்டும். அடையாள வழங்குநர் சார்ந்திருக்கும் சேவைக்கு ஒரு இரகசியக் குறியீடு  மற்றும் சேவை அடையாளத்தை வழங்க வேண்டும். மேலும் சார்ந்திருக்கும் சேவை குறியீடுகள் மற்றும் குறிகளைப் பெற முடிவுபுள்ளி சீர் வள குறிப்பான் பகிர்ந்து கொள்ள வேண்டும்.

<img src="images/iam-ta/iam-oidc-auth-process-ta.svg" width=70%>