/**
 * Simple EN / ESP language switcher.
 * Walks elements marked with data-i18n / data-i18n-placeholder / data-i18n-content
 * and swaps their text for the selected language. Preference is remembered
 * in localStorage; default language is English.
 */
(function () {
    "use strict";

    var STORAGE_KEY = "aat-hos-lang";
    var DEFAULT_LANG = "en";

    var translations = {
        en: {
            "meta.title": "AAT HOS | FMCSA-Certified ELD & Fleet Compliance",
            "meta.description": "AAT HOS delivers FMCSA-certified ELD compliance, automatic Hours-of-Service logging, digital DVIR inspections, and real-time fleet tracking built for trucking companies of every size.",

            "nav.home": "Home",
            "nav.about": "About",
            "nav.services": "Services",
            "nav.fleets": "Fleets We Serve",
            "nav.faq": "FAQ",
            "nav.contact": "Contact",
            "nav.getStarted": "Get Started",

            "hero.title1": "Simplify ELD",
            "hero.title2": "Compliance",
            "hero.desc": "AAT HOS pairs certified Hours-of-Service logging with real-time fleet visibility, so your drivers stay legal and dispatch stays ahead of the road.",
            "hero.cta": "Request A Demo",
            "hero.circleText": "SEE AAT HOS IN ACTION SEE AAT HOS IN ACTION",
            "hero.scroll": "Scroll Down",

            "marquee.onboarded": "Onboarded Trucks",

            "about.subtitle": "About AAT HOS",
            "about.title": "Purpose-Built ELD Software That Keeps Fleets Legal And Loaded.",
            "about.desc": "AAT HOS was built around one goal: take the guesswork out of Hours-of-Service compliance. From owner-operators to multi-terminal carriers, we keep logs accurate, inspections fast, and dispatchers in the loop.",
            "about.list1": "FMCSA-Certified Logging",
            "about.list2": "Automatic HOS Tracking",
            "about.list3": "Real-Time GPS Visibility",
            "about.list4": "Paperless DVIR Reports",
            "about.list5": "IFTA Mileage Tracking",
            "about.list6": "24/7 Driver Support",
            "about.cta": "See How It Works",

            "services.subtitle": "our solutions",
            "services.title": "Everything Your Fleet Needs To Stay Compliant.",
            "services.item1.title": "Hours Of Service Logging",
            "services.item1.desc": "Automatic driving detection synced to the engine keeps every log accurate, so drivers spend less time on paperwork and more time on the road.",
            "services.item2.title": "Driver Vehicle Inspections",
            "services.item2.desc": "Digital pre- and post-trip DVIR reports catch issues early, route defects straight to maintenance, and keep vehicles road-ready.",
            "services.item3.title": "IFTA & Fleet Reporting",
            "services.item3.desc": "Automated mileage tracking across every state turns quarterly IFTA filing into a five-minute task instead of a week-long headache.",

            "servicePopup.subtitle": "SERVICES",
            "servicePopup.title": "Our ELD Platform",
            "servicePopup.desc1": "AAT HOS combines automatic Hours-of-Service logging, digital DVIR inspections, and live GPS tracking into a single dashboard built for dispatchers, safety managers, and drivers alike.",
            "servicePopup.desc2": "Every device is FMCSA-certified and pairs with your truck's engine in minutes, so there's no rewiring, no guesswork, and no downtime getting your fleet compliant.",
            "servicePopup.desc3": "Whether you run one truck or three hundred, the same platform scales with you — with U.S.-based support answering calls day and night.",
            "servicePopup.howTitle": "How Onboarding Works",
            "servicePopup.howDesc": "Getting compliant with AAT HOS takes less time than your next pre-trip inspection.",
            "servicePopup.step1": "Order Your ELD Kit",
            "servicePopup.step2": "Plug Into the Engine Port",
            "servicePopup.step3": "Activate the Driver App",
            "servicePopup.step4": "Import Your Fleet Roster",
            "servicePopup.step5": "Run Your First Inspection",
            "servicePopup.step6": "Go Live in Under 10 Minutes",
            "servicePopup.allServices": "All Services",
            "servicePopup.list1": "Hours of Service Logging",
            "servicePopup.list2": "DVIR & Inspections",
            "servicePopup.list3": "IFTA Reporting",
            "servicePopup.list4": "Fleet GPS Tracking",
            "servicePopup.list5": "Driver Compliance Tools",
            "servicePopup.getInTouch": "Get in Touch",

            "form.name": "Name",
            "form.email": "Email",
            "form.message": "Your message",
            "form.send": "Send Message",

            "fleets.subtitle": "Who We Serve",
            "fleets.title": "Built To Fit Every Fleet",
            "fleets.item1.title": "Owner-Operators",
            "fleets.item1.desc": "One truck, zero paperwork headaches — AAT HOS keeps solo drivers compliant without a fleet-sized price tag or a learning curve.",
            "fleets.item2.title": "Regional Carriers",
            "fleets.item2.desc": "Coordinate dozens of trucks across multiple terminals with shared dashboards, driver scorecards, and real-time dispatch visibility.",
            "fleets.item3.title": "Enterprise Fleets",
            "fleets.item3.desc": "API access, custom reporting, and dedicated account managers give large carriers the control they need at scale.",

            "portfolioPopup.title": "Enterprise Fleet Rollout",
            "portfolioPopup.intro": "A 220-truck regional carrier needed to replace paper logs before a DOT audit deadline. Here's how the rollout went.",
            "portfolioPopup.readCaseStudy": "read case study",
            "portfolioPopup.fleetSizeLabel": "Fleet Size",
            "portfolioPopup.fleetSizeValue": "220 Trucks",
            "portfolioPopup.industryLabel": "Industry",
            "portfolioPopup.industryValue": "Regional Freight",
            "portfolioPopup.rolloutLabel": "Rollout Time",
            "portfolioPopup.rolloutValue": "3 Weeks",
            "portfolioPopup.managerLabel": "Account Manager",
            "portfolioPopup.managerValue": "AAT HOS Onboarding Team",
            "portfolioPopup.descTitle": "Project Description",
            "portfolioPopup.desc1": "The carrier's dispatch team was tracking Hours of Service by hand across four terminals, and drivers were losing time re-entering logs at every stop. AAT HOS's automatic engine sync and shared dashboard eliminated duplicate entry entirely.",
            "portfolioPopup.desc2": "Within the first month, HOS violations dropped and roadside inspections went from a stressful scramble to a two-minute log transfer, giving both drivers and safety managers room to breathe.",
            "portfolioPopup.storyTitle": "The story",
            "portfolioPopup.storyContent": "Before AAT HOS, the fleet's safety manager spent two full days each week reconciling paper logs against dispatch records. Missed entries and illegible handwriting made audits painful, and the carrier had already received two compliance warnings that year.",
            "portfolioPopup.approachTitle": "OUR APPROACH",
            "portfolioPopup.approachContent": "We started with a phased rollout — ten trucks in week one to validate the engine integration, then the remaining fleet over the following two weeks. Drivers were trained through the in-app tutorial, and dispatch got a live map view from day one.",
            "portfolioPopup.prevLabel": "Previous Project",
            "portfolioPopup.prevTitle": "Cold Chain Logistics",
            "portfolioPopup.nextLabel": "Next Project",
            "portfolioPopup.nextTitle": "Owner-Operator Rollout",

            "testimonials.subtitle": "Fleet Feedback",
            "testimonials.title": "What Fleets Are Saying.",
            "testimonials.desc": "AAT HOS pairs FMCSA-certified hardware with a support team that actually understands trucking — here's what dispatchers and drivers have to say.",
            "testimonials.cta": "Talk To Sales",
            "testimonials.t1.role": "Safety Manager, Whitfield Logistics",
            "testimonials.t1.quote": "“Roadside inspections used to take fifteen minutes of fumbling with paper logs. Now our drivers hand the officer a tablet and it's done before the coffee gets cold. AAT HOS paid for itself the first week we had it.”",
            "testimonials.t2.role": "Owner-Operator",
            "testimonials.t2.quote": "“I run one truck and I don't have time to babysit software. AAT HOS synced with my engine in under ten minutes and I haven't thought about my ELD since. It just works.”",
            "testimonials.t3.role": "Dispatch Lead, Ironclad Freight",
            "testimonials.t3.quote": "“Being able to see every truck's hours and location from one screen changed how we plan routes. We catch HOS issues before they become violations, not after.”",

            "faq.marquee": "FAQ'S",
            "faq.subtitle": "Got Questions?",
            "faq.title": "Frequently Asked Questions.",
            "faq.q1.q": "Is AAT HOS FMCSA-certified?",
            "faq.q1.a": "Yes. AAT HOS meets all FMCSA ELD technical specifications and is listed on the official registered device list, so your logs hold up at roadside inspections and DOT audits.",
            "faq.q2.q": "How long does installation take?",
            "faq.q2.a": "Most trucks are up and running in under ten minutes. The device plugs into your engine's diagnostic port, pairs with the driver app over Bluetooth, and starts logging automatically.",
            "faq.q3.q": "Does it work across multiple states?",
            "faq.q3.a": "Yes. Dispatchers get one dashboard for the whole fleet regardless of how many terminals or states you operate in, and IFTA mileage is tracked automatically across every jurisdiction.",
            "faq.q4.q": "What happens in dead zones?",
            "faq.q4.a": "The driver app keeps logging offline and syncs automatically once it reconnects, so a dead zone or dropped signal never turns into a missing log.",

            "cta2.subtitle": "Why Fleets Choose Us",
            "cta2.titlePart1": " Smarter",
            "cta2.titlePart2": "Compliance",
            "cta2.titlePart3": "For Stronger",
            "cta2.titlePart4": " Fleets.",
            "cta2.desc": "From the first mile to your next DOT audit, AAT HOS keeps hours-of-service, inspections, and fleet data working together — so compliance never slows your trucks down.",
            "cta2.button": "Talk To Our Team",

            "footer.desc": "AAT HOS keeps your fleet compliant with FMCSA-certified ELD logging, real-time tracking, and support that actually understands trucking.",
            "footer.legalTitle": "Legal Details",
            "footer.privacy": "Policy Privacy",
            "footer.tos": "Terms of Service",
            "footer.tac": "Terms and Conditions",
            "footer.contactTitle": "Contact",
            "footer.address": "6340 Joliet Rd, Countryside, IL 60525",
            "footer.newsletterTitle1": "Subscribe To Our",
            "footer.newsletterTitle2": "Newsletter!",
            "footer.firstName": "Enter First Name",
            "footer.support": "24/7 FLEET SUPPORT",
            "footer.navHome": "Home.",
            "footer.navAbout": "About.",
            "footer.navServices": "Services.",
            "footer.navFleets": "Fleets.",
            "footer.copyright": "© All rights reserved by",

            "legal.lastUpdated": "Last updated: September 2026",
            "legal.contactTitle": "Contact Us",
            "legal.emailLabel": "Email:",
            "legal.phoneLabel": "Phone:",
            "legal.mailLine": "Mail: 6340 Joliet Rd, Countryside, IL 60525",

            "legalPrivacy.metaTitle": "Privacy Policy | AAT HOS",
            "legalPrivacy.metaDesc": "Read how AAT HOS collects, uses, and protects your fleet's Hours-of-Service logs, driver data, and account information.",
            "legalPrivacy.pageTitle": "Privacy Policy",
            "legalPrivacy.intro": "AAT HOS provides FMCSA-certified ELD hardware and fleet compliance software to trucking companies, owner-operators, and dispatch teams. This policy explains what information we collect through our devices, driver app, and website, why we collect it, and the choices you have as a driver, fleet manager, or site visitor.",
            "legalPrivacy.h1": "Information We Collect",
            "legalPrivacy.h1Intro": "We collect only what's needed to keep your fleet compliant and your account running smoothly:",
            "legalPrivacy.h1List1": "Account details — name, company, email, phone number, and billing information when you sign up or manage your subscription.",
            "legalPrivacy.h1List2": "Vehicle and engine data — diagnostic information read from your truck's ECM, such as odometer, engine hours, and VIN, used to build accurate HOS records.",
            "legalPrivacy.h1List3": "Hours-of-Service and inspection logs — duty status changes, driver certifications, and DVIR entries created through the driver app.",
            "legalPrivacy.h1List4": "Location data — GPS coordinates recorded while a vehicle is in motion or on-duty, as required for ELD compliance.",
            "legalPrivacy.h1List5": "App and website usage — pages viewed, features used, and general device information, collected to keep the platform reliable and secure.",
            "legalPrivacy.h2": "How We Use Your Information",
            "legalPrivacy.h2Intro": "Your data helps us do the job you signed up for, and not much else. We use it to:",
            "legalPrivacy.h2List1": "Generate and store FMCSA-compliant Hours-of-Service and DVIR records.",
            "legalPrivacy.h2List2": "Give dispatchers and safety managers real-time visibility into trucks and drivers.",
            "legalPrivacy.h2List3": "Process billing, respond to support requests, and manage your account.",
            "legalPrivacy.h2List4": "Detect device issues early and improve the accuracy of our compliance tools.",
            "legalPrivacy.h2List5": "Send service notices, such as maintenance alerts or policy updates — we don't sell your inbox to advertisers.",
            "legalPrivacy.h3": "Location and Driving Data",
            "legalPrivacy.h3Body": "Location tracking exists to satisfy FMCSA visibility requirements while a vehicle is on-duty or driving, not to monitor drivers off the clock. Once a driver logs off-duty, AAT HOS reduces location detail to the level required for recordkeeping and does not track personal movement outside of a driver's working hours.",
            "legalPrivacy.h4": "How We Share Information",
            "legalPrivacy.h4Intro": "We do not sell driver or fleet data to third parties. Information is shared only in these situations:",
            "legalPrivacy.h4List1": "With your organization's authorized safety and compliance staff, as part of normal fleet management.",
            "legalPrivacy.h4List2": "With law enforcement or FMCSA officials during a roadside inspection or audit, initiated by the driver or an authorized user of the app.",
            "legalPrivacy.h4List3": "With trusted service providers — such as hosting, payment processing, and customer support tools — bound by confidentiality agreements.",
            "legalPrivacy.h4List4": "When required by law, such as in response to a valid subpoena or legal process.",
            "legalPrivacy.h5": "Data Retention",
            "legalPrivacy.h5Body": "Hours-of-Service and inspection records are retained in line with FMCSA recordkeeping requirements. Account and billing information is kept for as long as your subscription is active, plus a reasonable period afterward for legal and accounting purposes. You can request an export of your fleet's records at any time before an account is closed.",
            "legalPrivacy.h6": "Data Security",
            "legalPrivacy.h6Body": "Logs, location data, and account details are encrypted in transit and at rest. Access to fleet data is restricted to authorized personnel and audited regularly, and our infrastructure is monitored around the clock for unusual activity. No system is completely immune to risk, but we treat driver data with the same seriousness we'd want applied to our own.",
            "legalPrivacy.h7": "Your Rights and Choices",
            "legalPrivacy.h7List1": "Drivers can review and annotate their own logs at any time through the driver app, in line with FMCSA edit and certification rules.",
            "legalPrivacy.h7List2": "Fleet administrators can request an export of their company's compliance records.",
            "legalPrivacy.h7List3": "You can ask us to delete account information that is no longer required for legal or regulatory recordkeeping once your contract ends.",
            "legalPrivacy.h7List4": "You can opt out of non-essential email communications at any time.",
            "legalPrivacy.h8": "Cookies and Website Analytics",
            "legalPrivacy.h8Body": "Our marketing website uses basic cookies and analytics to understand how visitors find and use aathoc.com. This is separate from the ELD platform itself and never includes Hours-of-Service or vehicle data. You can disable cookies through your browser settings at any time.",
            "legalPrivacy.h9": "Children's Privacy",
            "legalPrivacy.h9Body": "AAT HOS is built for commercial drivers and fleet operators and is not directed at children. We do not knowingly collect information from anyone under the age of 18.",
            "legalPrivacy.h10": "Changes to This Policy",
            "legalPrivacy.h10Body": "As regulations and our platform evolve, we may update this policy from time to time. Material changes will be posted on this page with a new \"Last updated\" date, and active customers will be notified by email when a change affects how their data is handled.",
            "legalPrivacy.contactIntro": "Questions about this policy or how your fleet's data is handled? Reach our team any time:",

            "legalTos.metaTitle": "Terms of Service | AAT HOS",
            "legalTos.metaDesc": "Read the terms that govern your use of AAT HOS's ELD hardware, driver app, and fleet compliance platform.",
            "legalTos.pageTitle": "Terms of Service",
            "legalTos.intro": "These Terms of Service (\"Terms\") govern your access to and use of the AAT HOS ELD devices, driver app, dispatcher dashboard, and website (together, the \"Services\"). By activating a device, creating an account, or otherwise using the Services, you agree to these Terms on behalf of yourself and, if applicable, the carrier or fleet you represent. If you don't agree, please don't use the Services.",
            "legalTos.s1Title": "1. Definitions",
            "legalTos.s1List1": "\"AAT HOS,\" \"we,\" or \"us\" means AAT HOS and its affiliates providing the Services.",
            "legalTos.s1List2": "\"Customer\" or \"you\" means the carrier, fleet, or individual that registers for an account.",
            "legalTos.s1List3": "\"Authorized Users\" means drivers, dispatchers, and staff the Customer permits to access the Services.",
            "legalTos.s1List4": "\"Device\" means the ELD hardware issued or sold to the Customer.",
            "legalTos.s2Title": "2. Using AAT HOS",
            "legalTos.s2Intro": "You may use the Services only after completing device activation and account setup, and only in line with our onboarding instructions and applicable law. You agree not to:",
            "legalTos.s2List1": "Reverse-engineer, decompile, or tamper with the Device or software.",
            "legalTos.s2List2": "Falsify Hours-of-Service records, duty status, or vehicle data.",
            "legalTos.s2List3": "Resell, sublicense, or share account access outside your organization without our written consent.",
            "legalTos.s2List4": "Attempt to extract another customer's data or interfere with the platform's normal operation.",
            "legalTos.s2List5": "Use the Services for any purpose that violates federal, state, or local law.",
            "legalTos.s3Title": "3. Subscription, Billing & Fees",
            "legalTos.s3Body": "Subscription fees are billed in advance on a monthly or annual basis, depending on your selected plan, and are non-refundable except where required by law or stated otherwise in these Terms. Late payments may result in suspended access to the driver app or dashboard until the balance is settled. You're responsible for any applicable sales, use, or similar taxes on your subscription.",
            "legalTos.s4Title": "4. ELD Hardware & Warranty",
            "legalTos.s4Body": "Devices are provided for use with the vehicle they're installed in and should be handled, mounted, and maintained according to our installation guide. Devices carry a limited hardware warranty covering manufacturing defects for the period stated at purchase; damage from misuse, unauthorized repair, or normal wear is not covered. Unused devices may be returned within 30 days of purchase, subject to a restocking fee where applicable.",
            "legalTos.s5Title": "5. Intellectual Property",
            "legalTos.s5Body": "AAT HOS and its licensors retain all rights, title, and interest in the Services, including the software, driver app, dashboard, and Device firmware. We grant you a limited, non-exclusive, non-transferable license to use the Services for your fleet's internal operations during your subscription term. We may use de-identified, aggregated usage data to improve platform performance and compliance accuracy.",
            "legalTos.s6Title": "6. Confidentiality",
            "legalTos.s6Body": "Each party agrees to keep the other's confidential business information private and to use it only as needed to perform under these Terms. This obligation survives for a reasonable period after your account is closed, except for information that becomes public through no fault of either party.",
            "legalTos.s7Title": "7. Compliance Disclaimer",
            "legalTos.s7Body": "AAT HOS is built to help you meet FMCSA Hours-of-Service and DVIR requirements, and our Devices are registered on the FMCSA's list of certified ELDs. That said, compliance is a shared responsibility — the Customer and its drivers remain responsible for accurate log entries, timely certification of records, and compliance with all applicable federal, state, and local transportation regulations. AAT HOS is a compliance tool, not a substitute for your safety program.",
            "legalTos.s8Title": "8. Limitation of Liability",
            "legalTos.s8Body": "To the maximum extent permitted by law, AAT HOS's total liability arising from your use of the Services is limited to the fees you paid in the six months preceding the claim. We are not liable for indirect, incidental, or consequential damages, including lost revenue or missed deliveries, arising from the use or inability to use the Services.",
            "legalTos.s9Title": "9. Term, Renewal & Termination",
            "legalTos.s9Body": "Subscriptions renew automatically at the end of each term unless cancelled with at least 30 days' written notice before renewal. Either party may terminate for material breach that isn't fixed within 30 days of notice. Upon termination, you must stop using the Services, settle any outstanding fees, and return AAT HOS-owned hardware if requested.",
            "legalTos.s10Title": "10. Dispute Resolution",
            "legalTos.s10Body": "If a disagreement comes up, we'll first try to resolve it informally through good-faith discussion. If that doesn't work within 30 days, either party may pursue mediation, arbitration, or legal action as permitted under applicable law.",
            "legalTos.s11Title": "11. General Provisions",
            "legalTos.s11List1Term": "Force Majeure",
            "legalTos.s11List1Desc": "— neither party is liable for delays caused by events beyond reasonable control, such as natural disasters or network outages.",
            "legalTos.s11List2Term": "Assignment",
            "legalTos.s11List2Desc": "— you may not transfer your account without our written consent, except as part of a merger or sale of your business.",
            "legalTos.s11List3Term": "Severability",
            "legalTos.s11List3Desc": "— if any part of these Terms is found unenforceable, the rest remains in full effect.",
            "legalTos.s11List4Term": "Entire Agreement",
            "legalTos.s11List4Desc": "— these Terms, along with our Privacy Policy, make up the entire agreement between you and AAT HOS regarding the Services.",
            "legalTos.s12Title": "12. Acknowledgement",
            "legalTos.s12Body": "By activating a Device or using the Services, you confirm that you've read, understood, and agree to be bound by these Terms.",
            "legalTos.contactIntro": "Questions about these Terms? Reach our team any time:",

            "legalTac.metaTitle": "Terms and Conditions | AAT HOS",
            "legalTac.metaDesc": "The terms and conditions that govern your use of the AAT HOS website, including cookies, content ownership, and linking policy.",
            "legalTac.pageTitle": "Terms and Conditions",
            "legalTac.introPart1": "These Terms and Conditions govern your use of the aathoc.com website (the \"Site\"). They're separate from our",
            "legalTac.tosLinkText": "Terms of Service",
            "legalTac.introPart2": ", which cover your subscription to the AAT HOS platform and hardware — this page is about browsing and interacting with our website itself. By continuing to use the Site, you accept these terms in full.",
            "legalTac.cookiesTitle": "Cookies",
            "legalTac.cookiesBody": "The Site uses cookies to remember your preferences and to understand how visitors find and navigate aathoc.com. Some cookies are required for the Site to function properly, while others — such as analytics cookies — are optional and can be disabled in your browser settings. Disabling cookies may affect how parts of the Site display, but it won't stop you from browsing it.",
            "legalTac.licenseTitle": "License",
            "legalTac.licenseBody": "Unless otherwise stated, AAT HOS and/or its licensors own the intellectual property rights to all material published on this Site, including text, graphics, logos, and design. These rights are reserved. You may view and print pages from the Site for your own personal, non-commercial reference, subject to the restrictions below.",
            "legalTac.mustNotTitle": "You Must Not",
            "legalTac.mustNotIntro": "You must not, without our written permission:",
            "legalTac.mustNotList1": "Republish material from this Site on another website or platform.",
            "legalTac.mustNotList2": "Sell, rent, or sub-license material from the Site.",
            "legalTac.mustNotList3": "Reproduce, duplicate, or copy content from the Site for commercial purposes.",
            "legalTac.mustNotList4": "Redistribute Site content, including to a competing service.",
            "legalTac.commentsTitle": "Comments and User Submissions",
            "legalTac.commentsBody": "Where the Site allows comments, reviews, or other user submissions, those views are the submitter's own and don't represent AAT HOS's opinions. We don't pre-screen submissions, but we reserve the right to remove content that we consider inappropriate, offensive, or in breach of these terms. By submitting a comment, you confirm that you have the right to post it and that it doesn't infringe on anyone's rights or break the law.",
            "legalTac.hyperlinkTitle": "Hyperlinking to Our Site",
            "legalTac.hyperlinkBody": "Government agencies, search engines, news organizations, and businesses that aren't in competition with AAT HOS may link to our homepage without prior written approval, provided the link isn't misleading and doesn't imply endorsement where none exists. Any other organization wishing to link to the Site should contact us first for approval. Approved links must open in a way that doesn't frame our content as part of another site, and must not misrepresent AAT HOS's relationship with the linking party.",
            "legalTac.contentLiabilityTitle": "Content Liability",
            "legalTac.contentLiabilityBody": "We aren't responsible for content that appears on any website linking to ours, and we make no guarantees about the accuracy or availability of third-party sites we may link to from aathoc.com. If you believe a link on our Site is inappropriate, let us know and we'll review it.",
            "legalTac.reservationTitle": "Reservation of Rights",
            "legalTac.reservationBody": "We reserve the right to request removal of any link to our Site at any time, and to amend these Terms and Conditions and our linking policy as needed. By continuing to link to the Site after a change, you agree to be bound by the updated terms.",
            "legalTac.disclaimerTitle": "Disclaimer",
            "legalTac.disclaimerBody": "To the fullest extent permitted by law, we exclude all representations, warranties, and conditions relating to this Site and its use, except where such exclusion would be unlawful — including any liability for death or personal injury caused by negligence, or for fraud. Nothing in this disclaimer limits or excludes our liability in ways not permitted under applicable law.",
            "legalTac.contactIntro": "Questions about these Terms and Conditions? Reach our team any time:"
        },

        es: {
            "meta.title": "AAT HOS | ELD Certificado por la FMCSA y Cumplimiento de Flotas",
            "meta.description": "AAT HOS ofrece cumplimiento ELD certificado por la FMCSA, registro automático de Horas de Servicio, inspecciones digitales DVIR y rastreo de flotas en tiempo real para empresas de transporte de todos los tamaños.",

            "nav.home": "Inicio",
            "nav.about": "Nosotros",
            "nav.services": "Servicios",
            "nav.fleets": "Flotas Que Atendemos",
            "nav.faq": "Preguntas",
            "nav.contact": "Contacto",
            "nav.getStarted": "Comenzar",

            "hero.title1": "Simplifique El Cumplimiento",
            "hero.title2": "ELD",
            "hero.desc": "AAT HOS combina el registro certificado de Horas de Servicio con visibilidad de flota en tiempo real, para que sus conductores cumplan la ley y el despacho vaya siempre un paso adelante.",
            "hero.cta": "Solicitar Una Demo",
            "hero.circleText": "CONOZCA AAT HOS EN ACCIÓN CONOZCA AAT HOS EN ACCIÓN",
            "hero.scroll": "Desplácese Abajo",

            "marquee.onboarded": "Camiones Incorporados",

            "about.subtitle": "Sobre AAT HOS",
            "about.title": "Software ELD Diseñado Para Mantener Sus Flotas Legales Y Cargadas.",
            "about.desc": "AAT HOS se creó con un solo objetivo: eliminar la incertidumbre del cumplimiento de Horas de Servicio. Desde operadores independientes hasta transportistas con múltiples terminales, mantenemos los registros precisos, las inspecciones rápidas y a los despachadores informados.",
            "about.list1": "Registro Certificado Por La FMCSA",
            "about.list2": "Seguimiento Automático De HOS",
            "about.list3": "Visibilidad GPS En Tiempo Real",
            "about.list4": "Informes DVIR Sin Papel",
            "about.list5": "Seguimiento De Millas IFTA",
            "about.list6": "Soporte Al Conductor 24/7",
            "about.cta": "Vea Cómo Funciona",

            "services.subtitle": "nuestras soluciones",
            "services.title": "Todo Lo Que Su Flota Necesita Para Cumplir La Normativa.",
            "services.item1.title": "Registro De Horas De Servicio",
            "services.item1.desc": "La detección automática de conducción sincronizada con el motor mantiene cada registro preciso, para que los conductores dediquen menos tiempo al papeleo y más tiempo en la carretera.",
            "services.item2.title": "Inspecciones De Vehículos Del Conductor",
            "services.item2.desc": "Los informes digitales DVIR de antes y después del viaje detectan problemas a tiempo, envían los defectos directamente a mantenimiento y mantienen los vehículos listos para circular.",
            "services.item3.title": "Reportes De IFTA Y Flota",
            "services.item3.desc": "El seguimiento automático de millas en cada estado convierte la declaración trimestral de IFTA en una tarea de cinco minutos en lugar de un dolor de cabeza de toda una semana.",

            "servicePopup.subtitle": "SERVICIOS",
            "servicePopup.title": "Nuestra Plataforma ELD",
            "servicePopup.desc1": "AAT HOS combina el registro automático de Horas de Servicio, inspecciones digitales DVIR y rastreo GPS en vivo en un solo panel diseñado para despachadores, gerentes de seguridad y conductores por igual.",
            "servicePopup.desc2": "Cada dispositivo está certificado por la FMCSA y se conecta al motor de su camión en minutos, sin recableado, sin incertidumbre y sin tiempo de inactividad para poner su flota en regla.",
            "servicePopup.desc3": "Ya sea que opere un camión o trescientos, la misma plataforma crece con usted, con soporte con base en EE. UU. que atiende llamadas día y noche.",
            "servicePopup.howTitle": "Cómo Funciona La Incorporación",
            "servicePopup.howDesc": "Cumplir la normativa con AAT HOS toma menos tiempo que su próxima inspección previa al viaje.",
            "servicePopup.step1": "Solicite Su Kit ELD",
            "servicePopup.step2": "Conéctelo Al Puerto Del Motor",
            "servicePopup.step3": "Active La App Del Conductor",
            "servicePopup.step4": "Importe El Registro De Su Flota",
            "servicePopup.step5": "Realice Su Primera Inspección",
            "servicePopup.step6": "Póngase En Marcha En Menos De 10 Minutos",
            "servicePopup.allServices": "Todos Los Servicios",
            "servicePopup.list1": "Registro De Horas De Servicio",
            "servicePopup.list2": "DVIR E Inspecciones",
            "servicePopup.list3": "Reportes De IFTA",
            "servicePopup.list4": "Rastreo GPS De Flota",
            "servicePopup.list5": "Herramientas De Cumplimiento Del Conductor",
            "servicePopup.getInTouch": "Contáctenos",

            "form.name": "Nombre",
            "form.email": "Correo electrónico",
            "form.message": "Su mensaje",
            "form.send": "Enviar Mensaje",

            "fleets.subtitle": "A Quién Atendemos",
            "fleets.title": "Diseñado Para Cada Tipo De Flota",
            "fleets.item1.title": "Operadores Independientes",
            "fleets.item1.desc": "Un camión, cero dolores de cabeza con el papeleo: AAT HOS mantiene a los conductores independientes en regla sin un precio pensado para grandes flotas ni una curva de aprendizaje.",
            "fleets.item2.title": "Transportistas Regionales",
            "fleets.item2.desc": "Coordine decenas de camiones en múltiples terminales con paneles compartidos, calificaciones de conductores y visibilidad de despacho en tiempo real.",
            "fleets.item3.title": "Flotas Empresariales",
            "fleets.item3.desc": "El acceso a la API, los reportes personalizados y los gerentes de cuenta dedicados dan a los grandes transportistas el control que necesitan a gran escala.",

            "portfolioPopup.title": "Implementación En Flota Empresarial",
            "portfolioPopup.intro": "Un transportista regional de 220 camiones necesitaba reemplazar los registros en papel antes de una auditoría del DOT. Así fue como avanzó la implementación.",
            "portfolioPopup.readCaseStudy": "leer caso de estudio",
            "portfolioPopup.fleetSizeLabel": "Tamaño De La Flota",
            "portfolioPopup.fleetSizeValue": "220 Camiones",
            "portfolioPopup.industryLabel": "Industria",
            "portfolioPopup.industryValue": "Carga Regional",
            "portfolioPopup.rolloutLabel": "Tiempo De Implementación",
            "portfolioPopup.rolloutValue": "3 Semanas",
            "portfolioPopup.managerLabel": "Gerente De Cuenta",
            "portfolioPopup.managerValue": "Equipo De Incorporación De AAT HOS",
            "portfolioPopup.descTitle": "Descripción Del Proyecto",
            "portfolioPopup.desc1": "El equipo de despacho del transportista registraba las Horas de Servicio a mano en cuatro terminales, y los conductores perdían tiempo volviendo a ingresar registros en cada parada. La sincronización automática con el motor y el panel compartido de AAT HOS eliminaron por completo la doble captura de datos.",
            "portfolioPopup.desc2": "En el primer mes, las infracciones de HOS disminuyeron y las inspecciones en carretera pasaron de ser un momento estresante a una transferencia de registros de dos minutos, dando a conductores y gerentes de seguridad un respiro.",
            "portfolioPopup.storyTitle": "La historia",
            "portfolioPopup.storyContent": "Antes de AAT HOS, el gerente de seguridad de la flota dedicaba dos días completos por semana a conciliar los registros en papel con los registros de despacho. Las entradas faltantes y la letra ilegible hacían dolorosas las auditorías, y el transportista ya había recibido dos advertencias de cumplimiento ese año.",
            "portfolioPopup.approachTitle": "NUESTRO ENFOQUE",
            "portfolioPopup.approachContent": "Comenzamos con una implementación por fases: diez camiones en la primera semana para validar la integración con el motor, y luego el resto de la flota durante las dos semanas siguientes. Los conductores se capacitaron mediante el tutorial de la app, y el despacho tuvo una vista de mapa en vivo desde el primer día.",
            "portfolioPopup.prevLabel": "Proyecto Anterior",
            "portfolioPopup.prevTitle": "Logística De Cadena De Frío",
            "portfolioPopup.nextLabel": "Proyecto Siguiente",
            "portfolioPopup.nextTitle": "Implementación Para Operador Independiente",

            "testimonials.subtitle": "Opiniones De Flotas",
            "testimonials.title": "Lo Que Dicen Las Flotas.",
            "testimonials.desc": "AAT HOS combina hardware certificado por la FMCSA con un equipo de soporte que realmente entiende el transporte de carga — esto es lo que dicen despachadores y conductores.",
            "testimonials.cta": "Hable Con Ventas",
            "testimonials.t1.role": "Gerente De Seguridad, Whitfield Logistics",
            "testimonials.t1.quote": "“Las inspecciones en carretera solían tomar quince minutos batallando con registros en papel. Ahora nuestros conductores le entregan una tableta al oficial y todo termina antes de que se enfríe el café. AAT HOS se pagó solo en la primera semana que lo tuvimos.”",
            "testimonials.t2.role": "Operador Independiente",
            "testimonials.t2.quote": "“Manejo un solo camión y no tengo tiempo para estar pendiente del software. AAT HOS se sincronizó con mi motor en menos de diez minutos y no he vuelto a pensar en mi ELD desde entonces. Simplemente funciona.”",
            "testimonials.t3.role": "Jefe De Despacho, Ironclad Freight",
            "testimonials.t3.quote": "“Poder ver las horas y la ubicación de cada camión desde una sola pantalla cambió la forma en que planeamos las rutas. Detectamos los problemas de HOS antes de que se conviertan en infracciones, no después.”",

            "faq.marquee": "PREGUNTAS",
            "faq.subtitle": "¿Tiene Preguntas?",
            "faq.title": "Preguntas Frecuentes.",
            "faq.q1.q": "¿AAT HOS está certificado por la FMCSA?",
            "faq.q1.a": "Sí. AAT HOS cumple con todas las especificaciones técnicas ELD de la FMCSA y figura en la lista oficial de dispositivos registrados, por lo que sus registros son válidos en inspecciones en carretera y auditorías del DOT.",
            "faq.q2.q": "¿Cuánto tiempo toma la instalación?",
            "faq.q2.a": "La mayoría de los camiones quedan listos y funcionando en menos de diez minutos. El dispositivo se conecta al puerto de diagnóstico del motor, se empareja con la app del conductor por Bluetooth y comienza a registrar automáticamente.",
            "faq.q3.q": "¿Funciona en varios estados?",
            "faq.q3.a": "Sí. Los despachadores obtienen un solo panel para toda la flota sin importar en cuántas terminales o estados operen, y las millas de IFTA se registran automáticamente en cada jurisdicción.",
            "faq.q4.q": "¿Qué pasa en zonas sin señal?",
            "faq.q4.a": "La app del conductor sigue registrando sin conexión y se sincroniza automáticamente al reconectarse, para que una zona sin señal o una caída de conexión nunca se convierta en un registro faltante.",

            "cta2.subtitle": "Por Qué Las Flotas Nos Eligen",
            "cta2.titlePart1": " Cumplimiento",
            "cta2.titlePart2": "Más Inteligente",
            "cta2.titlePart3": "Para Flotas Más",
            "cta2.titlePart4": " Fuertes.",
            "cta2.desc": "Desde la primera milla hasta su próxima auditoría del DOT, AAT HOS mantiene las horas de servicio, las inspecciones y los datos de la flota trabajando juntos, para que el cumplimiento nunca frene sus camiones.",
            "cta2.button": "Hable Con Nuestro Equipo",

            "footer.desc": "AAT HOS mantiene su flota en regla con registro ELD certificado por la FMCSA, rastreo en tiempo real y soporte que realmente entiende el transporte de carga.",
            "footer.legalTitle": "Detalles Legales",
            "footer.privacy": "Política De Privacidad",
            "footer.tos": "Términos De Servicio",
            "footer.tac": "Términos Y Condiciones",
            "footer.contactTitle": "Contacto",
            "footer.address": "6340 Joliet Rd, Countryside, IL 60525",
            "footer.newsletterTitle1": "Suscríbase A Nuestro",
            "footer.newsletterTitle2": "¡Boletín!",
            "footer.firstName": "Ingrese Su Nombre",
            "footer.support": "SOPORTE DE FLOTA 24/7",
            "footer.navHome": "Inicio.",
            "footer.navAbout": "Nosotros.",
            "footer.navServices": "Servicios.",
            "footer.navFleets": "Flotas.",
            "footer.copyright": "© Todos los derechos reservados por",

            "legal.lastUpdated": "Última actualización: septiembre de 2026",
            "legal.contactTitle": "Contáctenos",
            "legal.emailLabel": "Correo electrónico:",
            "legal.phoneLabel": "Teléfono:",
            "legal.mailLine": "Dirección postal: 6340 Joliet Rd, Countryside, IL 60525",

            "legalPrivacy.metaTitle": "Política de Privacidad | AAT HOS",
            "legalPrivacy.metaDesc": "Conozca cómo AAT HOS recopila, utiliza y protege los registros de Horas de Servicio, los datos de conductores y la información de cuenta de su flota.",
            "legalPrivacy.pageTitle": "Política de Privacidad",
            "legalPrivacy.intro": "AAT HOS ofrece hardware ELD certificado por la FMCSA y software de cumplimiento de flotas para empresas de transporte, operadores independientes y equipos de despacho. Esta política explica qué información recopilamos a través de nuestros dispositivos, la app del conductor y el sitio web, por qué la recopilamos, y las opciones que usted tiene como conductor, gerente de flota o visitante del sitio.",
            "legalPrivacy.h1": "Información Que Recopilamos",
            "legalPrivacy.h1Intro": "Recopilamos solo lo necesario para mantener su flota en regla y su cuenta funcionando sin problemas:",
            "legalPrivacy.h1List1": "Datos de la cuenta — nombre, empresa, correo electrónico, número de teléfono e información de facturación al registrarse o administrar su suscripción.",
            "legalPrivacy.h1List2": "Datos del vehículo y del motor — información de diagnóstico leída del ECM de su camión, como odómetro, horas de motor y VIN, utilizada para generar registros HOS precisos.",
            "legalPrivacy.h1List3": "Registros de Horas de Servicio e inspección — cambios de estado de servicio, certificaciones del conductor y entradas DVIR creadas a través de la app del conductor.",
            "legalPrivacy.h1List4": "Datos de ubicación — coordenadas GPS registradas mientras un vehículo está en movimiento o en servicio, según lo exige el cumplimiento ELD.",
            "legalPrivacy.h1List5": "Uso de la app y el sitio web — páginas visitadas, funciones utilizadas e información general del dispositivo, recopilada para mantener la plataforma confiable y segura.",
            "legalPrivacy.h2": "Cómo Usamos Su Información",
            "legalPrivacy.h2Intro": "Sus datos nos ayudan a hacer el trabajo para el que usted se registró, y no mucho más. Los usamos para:",
            "legalPrivacy.h2List1": "Generar y almacenar registros de Horas de Servicio y DVIR conformes con la FMCSA.",
            "legalPrivacy.h2List2": "Dar a despachadores y gerentes de seguridad visibilidad en tiempo real de camiones y conductores.",
            "legalPrivacy.h2List3": "Procesar la facturación, responder solicitudes de soporte y administrar su cuenta.",
            "legalPrivacy.h2List4": "Detectar problemas del dispositivo a tiempo y mejorar la precisión de nuestras herramientas de cumplimiento.",
            "legalPrivacy.h2List5": "Enviar avisos de servicio, como alertas de mantenimiento o actualizaciones de políticas — no vendemos su bandeja de entrada a anunciantes.",
            "legalPrivacy.h3": "Ubicación Y Datos De Conducción",
            "legalPrivacy.h3Body": "El rastreo de ubicación existe para cumplir con los requisitos de visibilidad de la FMCSA mientras un vehículo está en servicio o en movimiento, no para monitorear a los conductores fuera de su horario. Una vez que un conductor marca fuera de servicio, AAT HOS reduce el detalle de ubicación al nivel requerido para el registro y no rastrea el movimiento personal fuera de las horas de trabajo del conductor.",
            "legalPrivacy.h4": "Cómo Compartimos Información",
            "legalPrivacy.h4Intro": "No vendemos datos de conductores o de la flota a terceros. La información se comparte solo en estas situaciones:",
            "legalPrivacy.h4List1": "Con el personal de seguridad y cumplimiento autorizado de su organización, como parte de la gestión normal de la flota.",
            "legalPrivacy.h4List2": "Con las fuerzas del orden o funcionarios de la FMCSA durante una inspección en carretera o auditoría, iniciada por el conductor o un usuario autorizado de la app.",
            "legalPrivacy.h4List3": "Con proveedores de servicios de confianza — como alojamiento, procesamiento de pagos y herramientas de soporte al cliente — sujetos a acuerdos de confidencialidad.",
            "legalPrivacy.h4List4": "Cuando lo exija la ley, como en respuesta a una citación válida o un proceso legal.",
            "legalPrivacy.h5": "Retención De Datos",
            "legalPrivacy.h5Body": "Los registros de Horas de Servicio e inspección se conservan conforme a los requisitos de registro de la FMCSA. La información de cuenta y facturación se conserva mientras su suscripción esté activa, más un período razonable después para fines legales y contables. Puede solicitar una exportación de los registros de su flota en cualquier momento antes de que se cierre una cuenta.",
            "legalPrivacy.h6": "Seguridad De Los Datos",
            "legalPrivacy.h6Body": "Los registros, datos de ubicación e información de cuenta están cifrados en tránsito y en reposo. El acceso a los datos de la flota está restringido al personal autorizado y se audita regularmente, y nuestra infraestructura se monitorea las 24 horas en busca de actividad inusual. Ningún sistema es completamente inmune al riesgo, pero tratamos los datos de los conductores con la misma seriedad que quisiéramos para los nuestros.",
            "legalPrivacy.h7": "Sus Derechos Y Opciones",
            "legalPrivacy.h7List1": "Los conductores pueden revisar y anotar sus propios registros en cualquier momento a través de la app del conductor, conforme a las reglas de edición y certificación de la FMCSA.",
            "legalPrivacy.h7List2": "Los administradores de flota pueden solicitar una exportación de los registros de cumplimiento de su empresa.",
            "legalPrivacy.h7List3": "Puede solicitarnos que eliminemos información de cuenta que ya no sea necesaria para el registro legal o regulatorio una vez finalizado su contrato.",
            "legalPrivacy.h7List4": "Puede darse de baja de las comunicaciones por correo electrónico no esenciales en cualquier momento.",
            "legalPrivacy.h8": "Cookies Y Analítica Del Sitio Web",
            "legalPrivacy.h8Body": "Nuestro sitio web utiliza cookies básicas y analítica para entender cómo los visitantes encuentran y usan aathoc.com. Esto es independiente de la plataforma ELD en sí y nunca incluye datos de Horas de Servicio o del vehículo. Puede deshabilitar las cookies en la configuración de su navegador en cualquier momento.",
            "legalPrivacy.h9": "Privacidad De Menores",
            "legalPrivacy.h9Body": "AAT HOS está diseñado para conductores comerciales y operadores de flotas, y no está dirigido a menores. No recopilamos conscientemente información de personas menores de 18 años.",
            "legalPrivacy.h10": "Cambios A Esta Política",
            "legalPrivacy.h10Body": "A medida que evolucionan las regulaciones y nuestra plataforma, podemos actualizar esta política ocasionalmente. Los cambios importantes se publicarán en esta página con una nueva fecha de \"Última actualización\", y los clientes activos serán notificados por correo electrónico cuando un cambio afecte el manejo de sus datos.",
            "legalPrivacy.contactIntro": "¿Tiene preguntas sobre esta política o sobre cómo se maneja la información de su flota? Comuníquese con nuestro equipo en cualquier momento:",

            "legalTos.metaTitle": "Términos de Servicio | AAT HOS",
            "legalTos.metaDesc": "Lea los términos que rigen el uso del hardware ELD, la app del conductor y la plataforma de cumplimiento de flotas de AAT HOS.",
            "legalTos.pageTitle": "Términos de Servicio",
            "legalTos.intro": "Estos Términos de Servicio (\"Términos\") rigen su acceso y uso de los dispositivos ELD, la app del conductor, el panel del despachador y el sitio web de AAT HOS (en conjunto, los \"Servicios\"). Al activar un dispositivo, crear una cuenta o utilizar los Servicios de cualquier otra forma, usted acepta estos Términos en su nombre y, si corresponde, en nombre del transportista o la flota que representa. Si no está de acuerdo, por favor no use los Servicios.",
            "legalTos.s1Title": "1. Definiciones",
            "legalTos.s1List1": "\"AAT HOS\", \"nosotros\" o \"nos\" significa AAT HOS y sus afiliados que prestan los Servicios.",
            "legalTos.s1List2": "\"Cliente\" o \"usted\" significa el transportista, la flota o la persona que se registra para obtener una cuenta.",
            "legalTos.s1List3": "\"Usuarios Autorizados\" significa los conductores, despachadores y personal a quienes el Cliente permite acceder a los Servicios.",
            "legalTos.s1List4": "\"Dispositivo\" significa el hardware ELD entregado o vendido al Cliente.",
            "legalTos.s2Title": "2. Uso De AAT HOS",
            "legalTos.s2Intro": "Usted puede usar los Servicios solo después de completar la activación del dispositivo y la configuración de la cuenta, y únicamente conforme a nuestras instrucciones de incorporación y la ley aplicable. Usted se compromete a no:",
            "legalTos.s2List1": "Aplicar ingeniería inversa, descompilar o alterar el Dispositivo o el software.",
            "legalTos.s2List2": "Falsificar registros de Horas de Servicio, estado de servicio o datos del vehículo.",
            "legalTos.s2List3": "Revender, sublicenciar o compartir el acceso a la cuenta fuera de su organización sin nuestro consentimiento por escrito.",
            "legalTos.s2List4": "Intentar extraer datos de otro cliente o interferir con el funcionamiento normal de la plataforma.",
            "legalTos.s2List5": "Usar los Servicios para cualquier propósito que viole la ley federal, estatal o local.",
            "legalTos.s3Title": "3. Suscripción, Facturación Y Tarifas",
            "legalTos.s3Body": "Las tarifas de suscripción se facturan por adelantado de forma mensual o anual, según el plan seleccionado, y no son reembolsables salvo que la ley lo exija o se indique lo contrario en estos Términos. Los pagos atrasados pueden resultar en la suspensión del acceso a la app del conductor o al panel hasta que se salde el saldo. Usted es responsable de los impuestos de venta, uso o similares aplicables a su suscripción.",
            "legalTos.s4Title": "4. Hardware ELD Y Garantía",
            "legalTos.s4Body": "Los dispositivos se proporcionan para su uso con el vehículo en el que están instalados y deben manipularse, montarse y mantenerse conforme a nuestra guía de instalación. Los dispositivos tienen una garantía de hardware limitada que cubre defectos de fabricación durante el período indicado al momento de la compra; los daños por mal uso, reparación no autorizada o desgaste normal no están cubiertos. Los dispositivos sin usar pueden devolverse dentro de los 30 días posteriores a la compra, sujeto a una tarifa de reposición cuando corresponda.",
            "legalTos.s5Title": "5. Propiedad Intelectual",
            "legalTos.s5Body": "AAT HOS y sus licenciantes conservan todos los derechos, títulos e intereses sobre los Servicios, incluyendo el software, la app del conductor, el panel y el firmware del Dispositivo. Le otorgamos una licencia limitada, no exclusiva e intransferible para usar los Servicios en las operaciones internas de su flota durante el plazo de su suscripción. Podemos usar datos de uso agregados y no identificables para mejorar el rendimiento de la plataforma y la precisión del cumplimiento.",
            "legalTos.s6Title": "6. Confidencialidad",
            "legalTos.s6Body": "Cada parte se compromete a mantener privada la información comercial confidencial de la otra y a utilizarla solo según sea necesario para cumplir con estos Términos. Esta obligación se mantiene vigente durante un período razonable después de que se cierre su cuenta, salvo información que se haga pública sin culpa de ninguna de las partes.",
            "legalTos.s7Title": "7. Aviso De Cumplimiento",
            "legalTos.s7Body": "AAT HOS está diseñado para ayudarle a cumplir con los requisitos de Horas de Servicio y DVIR de la FMCSA, y nuestros Dispositivos están registrados en la lista de ELD certificados de la FMCSA. Dicho esto, el cumplimiento es una responsabilidad compartida — el Cliente y sus conductores siguen siendo responsables de la exactitud de los registros, la certificación oportuna de los registros y el cumplimiento de todas las regulaciones de transporte federales, estatales y locales aplicables. AAT HOS es una herramienta de cumplimiento, no un sustituto de su programa de seguridad.",
            "legalTos.s8Title": "8. Limitación De Responsabilidad",
            "legalTos.s8Body": "En la máxima medida permitida por la ley, la responsabilidad total de AAT HOS derivada de su uso de los Servicios se limita a las tarifas pagadas en los seis meses anteriores al reclamo. No somos responsables por daños indirectos, incidentales o consecuentes, incluyendo pérdida de ingresos o entregas no realizadas, derivados del uso o la imposibilidad de usar los Servicios.",
            "legalTos.s9Title": "9. Plazo, Renovación Y Terminación",
            "legalTos.s9Body": "Las suscripciones se renuevan automáticamente al final de cada plazo, salvo que se cancelen con al menos 30 días de aviso por escrito antes de la renovación. Cualquiera de las partes puede terminar el contrato por incumplimiento material que no se corrija dentro de los 30 días posteriores al aviso. Al finalizar, usted debe dejar de usar los Servicios, saldar cualquier tarifa pendiente y devolver el hardware propiedad de AAT HOS si así se solicita.",
            "legalTos.s10Title": "10. Resolución De Disputas",
            "legalTos.s10Body": "Si surge un desacuerdo, primero intentaremos resolverlo de manera informal mediante una conversación de buena fe. Si eso no funciona en un plazo de 30 días, cualquiera de las partes puede recurrir a la mediación, el arbitraje o una acción legal según lo permita la ley aplicable.",
            "legalTos.s11Title": "11. Disposiciones Generales",
            "legalTos.s11List1Term": "Fuerza Mayor",
            "legalTos.s11List1Desc": "— ninguna de las partes es responsable por retrasos causados por eventos fuera de su control razonable, como desastres naturales o interrupciones de red.",
            "legalTos.s11List2Term": "Cesión",
            "legalTos.s11List2Desc": "— usted no puede transferir su cuenta sin nuestro consentimiento por escrito, salvo como parte de una fusión o venta de su empresa.",
            "legalTos.s11List3Term": "Divisibilidad",
            "legalTos.s11List3Desc": "— si alguna parte de estos Términos se considera inaplicable, el resto permanece en pleno vigor.",
            "legalTos.s11List4Term": "Acuerdo Completo",
            "legalTos.s11List4Desc": "— estos Términos, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre usted y AAT HOS respecto de los Servicios.",
            "legalTos.s12Title": "12. Reconocimiento",
            "legalTos.s12Body": "Al activar un Dispositivo o usar los Servicios, usted confirma que ha leído, entendido y aceptado quedar sujeto a estos Términos.",
            "legalTos.contactIntro": "¿Tiene preguntas sobre estos Términos? Comuníquese con nuestro equipo en cualquier momento:",

            "legalTac.metaTitle": "Términos y Condiciones | AAT HOS",
            "legalTac.metaDesc": "Los términos y condiciones que rigen el uso del sitio web de AAT HOS, incluyendo cookies, propiedad del contenido y política de enlaces.",
            "legalTac.pageTitle": "Términos y Condiciones",
            "legalTac.introPart1": "Estos Términos y Condiciones rigen su uso del sitio web aathoc.com (el \"Sitio\"). Son independientes de nuestros",
            "legalTac.tosLinkText": "Términos de Servicio",
            "legalTac.introPart2": ", que cubren su suscripción a la plataforma y el hardware de AAT HOS — esta página trata sobre la navegación e interacción con nuestro sitio web en sí. Al continuar usando el Sitio, usted acepta estos términos en su totalidad.",
            "legalTac.cookiesTitle": "Cookies",
            "legalTac.cookiesBody": "El Sitio utiliza cookies para recordar sus preferencias y entender cómo los visitantes encuentran y navegan por aathoc.com. Algunas cookies son necesarias para que el Sitio funcione correctamente, mientras que otras — como las cookies de analítica — son opcionales y pueden deshabilitarse en la configuración de su navegador. Deshabilitar las cookies puede afectar cómo se muestran algunas partes del Sitio, pero no le impedirá navegarlo.",
            "legalTac.licenseTitle": "Licencia",
            "legalTac.licenseBody": "Salvo que se indique lo contrario, AAT HOS y/o sus licenciantes son propietarios de los derechos de propiedad intelectual de todo el material publicado en este Sitio, incluyendo texto, gráficos, logotipos y diseño. Estos derechos están reservados. Usted puede ver e imprimir páginas del Sitio para su referencia personal y no comercial, sujeto a las restricciones siguientes.",
            "legalTac.mustNotTitle": "Usted No Debe",
            "legalTac.mustNotIntro": "Usted no debe, sin nuestro permiso por escrito:",
            "legalTac.mustNotList1": "Volver a publicar material de este Sitio en otro sitio web o plataforma.",
            "legalTac.mustNotList2": "Vender, alquilar o sublicenciar material del Sitio.",
            "legalTac.mustNotList3": "Reproducir, duplicar o copiar contenido del Sitio con fines comerciales.",
            "legalTac.mustNotList4": "Redistribuir el contenido del Sitio, incluso a un servicio competidor.",
            "legalTac.commentsTitle": "Comentarios Y Contenido De Usuarios",
            "legalTac.commentsBody": "Cuando el Sitio permite comentarios, reseñas u otro contenido enviado por usuarios, esas opiniones pertenecen a quien las publica y no representan la opinión de AAT HOS. No revisamos previamente el contenido enviado, pero nos reservamos el derecho de eliminar contenido que consideremos inapropiado, ofensivo o que incumpla estos términos. Al enviar un comentario, usted confirma que tiene derecho a publicarlo y que no infringe los derechos de nadie ni viola la ley.",
            "legalTac.hyperlinkTitle": "Enlaces Hacia Nuestro Sitio",
            "legalTac.hyperlinkBody": "Las agencias gubernamentales, los motores de búsqueda, las organizaciones de noticias y las empresas que no compiten con AAT HOS pueden enlazar a nuestra página principal sin aprobación previa por escrito, siempre que el enlace no sea engañoso ni implique un respaldo inexistente. Cualquier otra organización que desee enlazar al Sitio debe contactarnos primero para obtener aprobación. Los enlaces aprobados deben abrirse de forma que no presenten nuestro contenido como parte de otro sitio, y no deben tergiversar la relación de AAT HOS con la parte que enlaza.",
            "legalTac.contentLiabilityTitle": "Responsabilidad Por El Contenido",
            "legalTac.contentLiabilityBody": "No somos responsables por el contenido que aparece en ningún sitio web que enlace al nuestro, y no garantizamos la exactitud ni la disponibilidad de los sitios de terceros a los que podamos enlazar desde aathoc.com. Si considera que un enlace en nuestro Sitio es inapropiado, avísenos y lo revisaremos.",
            "legalTac.reservationTitle": "Reserva De Derechos",
            "legalTac.reservationBody": "Nos reservamos el derecho de solicitar la eliminación de cualquier enlace a nuestro Sitio en cualquier momento, y de modificar estos Términos y Condiciones y nuestra política de enlaces según sea necesario. Al continuar enlazando al Sitio después de un cambio, usted acepta quedar sujeto a los términos actualizados.",
            "legalTac.disclaimerTitle": "Descargo De Responsabilidad",
            "legalTac.disclaimerBody": "En la máxima medida permitida por la ley, excluimos todas las declaraciones, garantías y condiciones relacionadas con este Sitio y su uso, salvo cuando dicha exclusión sea ilegal — incluyendo cualquier responsabilidad por muerte o lesiones personales causadas por negligencia, o por fraude. Nada en este descargo de responsabilidad limita ni excluye nuestra responsabilidad de formas no permitidas por la ley aplicable.",
            "legalTac.contactIntro": "¿Tiene preguntas sobre estos Términos y Condiciones? Comuníquese con nuestro equipo en cualquier momento:"
        }
    };

    function applyLanguage(lang) {
        var dict = translations[lang] || translations[DEFAULT_LANG];

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-placeholder");
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-content");
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                el.setAttribute("content", dict[key]);
            }
        });

        document.documentElement.setAttribute("lang", lang === "es" ? "es" : "en");

        document.querySelectorAll(".lang-switcher").forEach(function (switcher) {
            var label = switcher.querySelector(".lang-switcher-current-label");
            if (label) {
                label.textContent = lang === "es" ? "ESP" : "EN";
            }
            switcher.querySelectorAll(".lang-option").forEach(function (btn) {
                var isActive = btn.getAttribute("data-lang") === lang;
                btn.classList.toggle("is-active", isActive);
                btn.setAttribute("aria-selected", isActive ? "true" : "false");
            });
        });

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            /* localStorage unavailable (private mode, etc.) — ignore */
        }
    }

    function closeAllSwitchers(except) {
        document.querySelectorAll(".lang-switcher.is-open").forEach(function (switcher) {
            if (switcher !== except) {
                switcher.classList.remove("is-open");
                var btn = switcher.querySelector(".lang-switcher-current");
                if (btn) btn.setAttribute("aria-expanded", "false");
            }
        });
    }

    function initSwitchers() {
        // Delegated on document (not attached per-element): the header nav
        // gets cloned into a mobile hamburger menu by a plugin some time
        // after page load, so switchers created later still need to work
        // without re-scanning the DOM for new elements.
        document.addEventListener("click", function (event) {
            var toggleBtn = event.target.closest(".lang-switcher-current");
            if (toggleBtn) {
                var switcher = toggleBtn.closest(".lang-switcher");
                if (!switcher) return;
                event.stopPropagation();
                var isOpen = switcher.classList.contains("is-open");
                closeAllSwitchers();
                switcher.classList.toggle("is-open", !isOpen);
                toggleBtn.setAttribute("aria-expanded", String(!isOpen));
                return;
            }

            var optionBtn = event.target.closest(".lang-option");
            if (optionBtn) {
                event.stopPropagation();
                applyLanguage(optionBtn.getAttribute("data-lang"));
                closeAllSwitchers();
                return;
            }

            closeAllSwitchers();
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") closeAllSwitchers();
        });
    }

    function getInitialLanguage() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "en" || saved === "es") return saved;
        } catch (e) {
            /* ignore */
        }
        return DEFAULT_LANG;
    }

    document.addEventListener("DOMContentLoaded", function () {
        initSwitchers();
        applyLanguage(getInitialLanguage());
    });
})();
