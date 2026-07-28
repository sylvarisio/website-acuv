import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent } from '@/components/ui'

export const metadata = { title: 'Privacy Policy — Acuv Strategy' }

const h2: React.CSSProperties = { fontSize: '23px', fontWeight: '400', lineHeight: '1.3', margin: '44px 0 14px' }
const p: React.CSSProperties = { margin: '0 0 16px', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }
const ul: React.CSSProperties = { margin: '0 0 16px', paddingLeft: '22px', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }

export default function Page() {
  return (
    <>
<div data-screen-label="Privacy Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '88px var(--acv-pad-x) 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>PRIVACY POLICY</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Your trust, <Accent>protected</Accent></div>
  </div>
</div>


<div className="acv-pad" data-screen-label="Policy" style={{ maxWidth: '860px', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) var(--acv-section-pad)' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: 'rgba(18,42,36,.55)', marginBottom: '20px' }}>LAST UPDATED · JULY 28, 2026</div>
  <div style={{ borderTop: '1px solid var(--acv-rule)', paddingTop: '40px' }}>

    <p style={p}>acuvStrategy (&ldquo;acuv&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have. It applies to acuvstrategy.com and its subdomains.</p>

    <h2 style={h2}>Who we are</h2>
    <p style={p}>acuvStrategy is a strategy and corporate finance consultancy incorporated in New York, USA, with offices at 64 Bleecker St, Suite 405, New York, NY 10012, serving clients across the USA, Europe, and the MENA region. For anything in this policy, you can reach us at info@acuvstrategy.com.</p>

    <h2 style={h2}>Information we collect</h2>
    <p style={p}>We keep data collection to the minimum needed to run this website and respond to you:</p>
    <ul style={ul}>
      <li><strong>Contact form submissions.</strong> When you use our contact form, we collect the name, email address, topic, and message you provide.</li>
      <li><strong>Technical data.</strong> Our hosting provider records standard server logs (such as IP address, browser type, and pages requested) for security and operational purposes.</li>
    </ul>
    <p style={p}>We do not use advertising trackers or third-party analytics on this website, and we do not collect personal information from visitors who simply browse our pages or download our publications.</p>

    <h2 style={h2}>How we use your information</h2>
    <ul style={ul}>
      <li>To respond to your enquiry and correspond with you about our services.</li>
      <li>To operate, secure, and improve the website.</li>
      <li>To comply with legal obligations where applicable.</li>
    </ul>
    <p style={p}>Contact enquiries are stored in our website&rsquo;s content-management system and delivered by email to our team. We do not sell, rent, or trade personal information — ever.</p>

    <h2 style={h2}>Cookies</h2>
    <p style={p}>The public website does not set advertising or analytics cookies. Essential technical cookies are used only in the administrative area of the site, which is accessible solely to our team.</p>

    <h2 style={h2}>Sharing and service providers</h2>
    <p style={p}>We share personal information only with the service providers that make this website work — our hosting provider and our email service — and only to the extent needed to deliver those services. These providers process data on our behalf and are not permitted to use it for their own purposes.</p>

    <h2 style={h2}>Retention</h2>
    <p style={p}>We keep contact enquiries for as long as needed to handle our correspondence with you and to maintain a record of our business relationship, after which they are deleted.</p>

    <h2 style={h2}>Your rights</h2>
    <p style={p}>You may request access to, correction of, or deletion of the personal information we hold about you at any time by writing to info@acuvstrategy.com. Depending on where you live, local law may grant you additional rights, which we will honor.</p>

    <h2 style={h2}>Third-party links</h2>
    <p style={p}>Our website links to third-party platforms such as LinkedIn, Instagram, and Facebook. Those platforms have their own privacy policies, and we encourage you to review them.</p>

    <h2 style={h2}>Changes to this policy</h2>
    <p style={p}>We may update this policy from time to time. The date at the top of this page reflects the latest revision. Material changes will be posted here.</p>

    <h2 style={h2}>Contact</h2>
    <p style={{ ...p, margin: 0 }}>Questions about this policy or your data? Write to us at info@acuvstrategy.com or at 64 Bleecker St, Suite 405, New York, NY 10012, USA.</p>
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
