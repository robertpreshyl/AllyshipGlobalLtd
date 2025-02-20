'use client'

import CookieConsent from 'react-cookie-consent'

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="allyship-consent"
      style={{ background: '#2B373B' }}
      buttonStyle={{ background: '#4CAF50', color: 'white', fontSize: '13px' }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  )
} 