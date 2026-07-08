import { DotWave } from '@/components/animations'
import ContactForm from '@/components/ContactForm'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'


export const metadata = { title: 'Contact — Acuv Strategy' }

export default function Page() {
  return (
    <>
<div data-screen-label="Contact Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.7} /></div>
  <SiteNav contactFilled />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>CONTACT</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.04', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Let's make things <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>happen</span></div>
  </div>
</div>


<div className="acv-pad acv-duo" data-screen-label="Form" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '80px' }}>
  <div>
    <ContactForm />
  </div>

  <div className="acv-contact-aside" style={{ position: 'relative', borderLeft: '1px solid rgba(18,42,36,.15)', paddingLeft: '56px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div style={{ position: 'absolute', left: '56px', right: '-40px', top: '-20px', bottom: '-20px', backgroundImage: 'radial-gradient(rgba(10,74,63,.09) 1px,transparent 1px)', backgroundSize: '14px 14px', WebkitMask: 'linear-gradient(to left,#000,transparent)', mask: 'linear-gradient(to left,#000,transparent)', animation: 'acv-drift 26s linear infinite', pointerEvents: 'none' }}></div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>OFFICE</div>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>Suite 405, 64 Bleecker St<br />New York City, NY 10012</div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>PHONE</div>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>New York — +1 (917) 695 4747<br />Europe — +351 (914) 842 008<br />Gulf Region — +971 50 656 3744<br />Lebanon — +961 3 100043</div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>EMAIL</div>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>info@acuvstrategy.com</div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>AROUND THE WEB</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '15px', lineHeight: '1.6' }}>
        <a href="https://www.linkedin.com/company/acuv/">LinkedIn ↗</a>
        <a href="https://www.instagram.com/acuvstrategy">Instagram ↗</a>
        <a href="https://www.facebook.com/share/1GQB2jJbSc/">Facebook ↗</a>
      </div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>REGIONS</div>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>Beirut · New York · MENA</div>
    </div>
  </div>
</div>


<div data-screen-label="Footer" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div className="acv-pad" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '72px 56px 96px' }}>
    <SiteFooter />
  </div>
</div>
    </>
  )
}
