import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent } from '@/components/ui'

export const metadata = { title: 'Terms of Use — Acuv Strategy' }

const h2: React.CSSProperties = { fontSize: '23px', fontWeight: '400', lineHeight: '1.3', margin: '44px 0 14px' }
const p: React.CSSProperties = { margin: '0 0 16px', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }
const ul: React.CSSProperties = { margin: '0 0 16px', paddingLeft: '22px', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }

export default function Page() {
  return (
    <>
<div data-screen-label="Terms Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '88px var(--acv-pad-x) 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>TERMS OF USE</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Clear terms, <Accent>clear minds</Accent></div>
  </div>
</div>


<div className="acv-pad" data-screen-label="Terms" style={{ maxWidth: '860px', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) var(--acv-section-pad)' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: 'rgba(18,42,36,.55)', marginBottom: '20px' }}>LAST UPDATED · JULY 28, 2026</div>
  <div style={{ borderTop: '1px solid var(--acv-rule)', paddingTop: '40px' }}>

    <p style={p}>These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the acuvStrategy website. By using this website, you agree to these Terms. If you do not agree, please do not use the site.</p>

    <h2 style={h2}>About us</h2>
    <p style={p}>This website is operated by acuvStrategy (&ldquo;acuv&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a strategy and corporate finance consultancy incorporated in New York, USA, with offices at 64 Bleecker St, Suite 405, New York, NY 10012. You can contact us at info@acuvstrategy.com.</p>

    <h2 style={h2}>Use of the website</h2>
    <p style={p}>You may browse this website and download our publications for your personal and internal business use. You agree not to misuse the site — including attempting to gain unauthorized access, interfering with its operation, submitting false or automated enquiries, or using it in any way that violates applicable law.</p>

    <h2 style={h2}>Intellectual property</h2>
    <p style={p}>All content on this website — including text, publications, reports, graphics, logos, and design — is the property of acuvStrategy or its licensors and is protected by copyright and other intellectual-property laws. You may share our publications in their original, unmodified form with attribution. Any other reproduction, modification, or commercial use requires our prior written consent.</p>

    <h2 style={h2}>Not professional advice</h2>
    <p style={p}>The content on this website, including our thought-leadership publications and reports, is provided for general information only. It does not constitute strategic, financial, investment, accounting, tax, or legal advice, and it should not be relied upon as a substitute for advice tailored to your specific circumstances. Any engagement of our services is governed exclusively by a separate written agreement between you and acuvStrategy.</p>

    <h2 style={h2}>Publications and forward-looking statements</h2>
    <p style={p}>Our publications may contain analysis, scenarios, and forward-looking statements based on information available at the time of writing. Markets and circumstances change; we make no commitment to update published material and accept no responsibility for decisions made in reliance on it.</p>

    <h2 style={h2}>Disclaimer and limitation of liability</h2>
    <p style={p}>This website and its content are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. To the fullest extent permitted by law, acuvStrategy shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its content.</p>

    <h2 style={h2}>Third-party links</h2>
    <p style={p}>Links to third-party websites and platforms are provided for convenience. We do not control and are not responsible for their content or practices, and a link does not imply our endorsement.</p>

    <h2 style={h2}>Privacy</h2>
    <p style={p}>Our handling of personal information is described in our <a href="/privacy" style={{ color: '#0A4A3F', textDecoration: 'underline' }}>Privacy Policy</a>, which forms part of these Terms.</p>

    <h2 style={h2}>Governing law</h2>
    <p style={p}>These Terms are governed by the laws of the State of New York, USA, without regard to conflict-of-law principles. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts located in New York County, New York.</p>

    <h2 style={h2}>Changes</h2>
    <p style={p}>We may revise these Terms from time to time. The date at the top of this page reflects the latest revision, and continued use of the website after changes are posted constitutes acceptance of the revised Terms.</p>

    <h2 style={h2}>Contact</h2>
    <p style={{ ...p, margin: 0 }}>Questions about these Terms? Write to us at info@acuvstrategy.com.</p>
  </div>
</div>


<div data-screen-label="Footer" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '64px var(--acv-pad-x) var(--acv-section-pad)' }}>
    <SiteFooter standalone />
  </div>
</div>
    </>
  )
}
