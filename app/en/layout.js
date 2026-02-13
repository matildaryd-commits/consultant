import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Script from 'next/script'

export default function EnLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#FDF9F3" />

        {/* Silktide Cookie Consent Manager */}
        <link rel="stylesheet" id="silktide-consent-manager-css" href="/cookie-banner/silktide-consent-manager.css" />

        {/* Preconnect to fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6FCPZJH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header lang="en" />
        <main className="page-content">
          {children}
        </main>
        <Footer lang="en" />

        {/* Cookie Consent Script */}
        <Script src="/cookie-banner/silktide-consent-manager.js" strategy="beforeInteractive" />

        {/* Google Consent Mode - Default denied */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W6FCPZJH');
          `}
        </Script>

        {/* Cookie Consent Configuration - English */}
        <Script id="cookie-config" strategy="afterInteractive">
          {`
            if (typeof silktideConsentManager !== 'undefined') {
              silktideConsentManager.init({
                background: { showBackground: true },
                cookieIcon: { position: "bottomRight" },
                consentTypes: [
                  {
                    id: "necessary",
                    name: "Necessary",
                    description: "<p>These cookies are necessary for the website to function properly and cannot be disabled.</p>",
                    required: true,
                    onAccept: function() {}
                  },
                  {
                    id: "analytics",
                    name: "Analytics",
                    description: "<p>These cookies help us improve the website by tracking which pages are most popular and how visitors navigate.</p>",
                    defaultValue: false,
                    onAccept: function() {
                      gtag('consent', 'update', { analytics_storage: 'granted' });
                      dataLayer.push({ 'event': 'consent_accepted_analytics' });
                    },
                    onReject: function() {
                      gtag('consent', 'update', { analytics_storage: 'denied' });
                    }
                  },
                  {
                    id: "advertising",
                    name: "Marketing",
                    description: "<p>These cookies provide extra functionality and personalization to improve your experience.</p>",
                    defaultValue: false,
                    onAccept: function() {
                      gtag('consent', 'update', {
                        ad_storage: 'granted',
                        ad_user_data: 'granted',
                        ad_personalization: 'granted'
                      });
                      dataLayer.push({ 'event': 'consent_accepted_advertising' });
                    },
                    onReject: function() {
                      gtag('consent', 'update', {
                        ad_storage: 'denied',
                        ad_user_data: 'denied',
                        ad_personalization: 'denied'
                      });
                    }
                  }
                ],
                text: {
                  banner: {
                    description: "<p>We use cookies to improve your experience and analyze traffic. <a href='https://matildarydow.com/cookies' target='_blank'>Read our cookie policy.</a></p>",
                    acceptAllButtonText: "Accept all",
                    acceptAllButtonAccessibleLabel: "Accept all cookies",
                    rejectNonEssentialButtonText: "Reject",
                    rejectNonEssentialButtonAccessibleLabel: "Reject non-essential cookies",
                    preferencesButtonText: "Settings",
                    preferencesButtonAccessibleLabel: "View cookie settings"
                  },
                  preferences: {
                    title: "Cookie settings",
                    description: "<p>You can choose which types of cookies to allow.</p>",
                    acceptSelectedButtonText: "Save",
                    acceptSelectedButtonAccessibleLabel: "Save cookie settings"
                  }
                }
              });
            }
          `}
        </Script>

        {/* Load fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </body>
    </html>
  )
}
