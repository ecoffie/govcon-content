import { Nav, Hero, QuickAnswer, Section, LeadMagnet, OpnGovIQCallout, FHCCallout, CTASection, Footer } from '../../components/PageLayout'

export const metadata = {
  title: 'How to Get a CAGE Code: 5 Easy Steps (2025 Guide)',
  description: 'Step-by-step guide to getting your CAGE Code for federal government contracting. Free process through SAM.gov - complete in 5 simple steps.',
}

export default function HowToGetCageCodePage() {
  return (
    <>
      <Nav />
      
      <Hero 
        title="How to Get a CAGE Code in 5 Simple Steps"
        subtitle="Your step-by-step guide to obtaining your Commercial and Government Entity Code"
        ctaText="Download Checklist"
        ctaUrl="#lead-magnet"
      />

      <QuickAnswer 
        definition="Getting a CAGE Code is free and takes 3-10 business days. You'll get it automatically when you complete your SAM.gov registration - no separate application needed."
        keyPoints={[
          "100% free - never pay anyone",
          "Takes 3-10 business days",
          "Obtained through SAM.gov registration",
          "No separate application required"
        ]}
      />

      <Section heading="Step 1: Gather Your Documents">
        <p>Before starting, make sure you have:</p>
        <ul>
          <li><strong>EIN (Employer Identification Number)</strong> - Get one free from IRS.gov if needed</li>
          <li><strong>Business registration documents</strong> - LLC, Corporation, or Sole Prop papers</li>
          <li><strong>Bank account info</strong> - For receiving payments</li>
          <li><strong>Physical address</strong> - P.O. boxes not accepted</li>
        </ul>
        <p><strong>Time needed:</strong> 15-30 minutes to gather documents</p>
      </Section>

      <Section heading="Step 2: Create a Login.gov Account">
        <p>Login.gov is the government's secure sign-in service.</p>
        <ol>
          <li>Go to <a href="https://login.gov" target="_blank" rel="noopener">login.gov</a></li>
          <li>Click "Create an account"</li>
          <li>Enter your email address</li>
          <li>Create a strong password</li>
          <li>Set up two-factor authentication (phone or app)</li>
          <li>Verify your email</li>
        </ol>
        <p><strong>Time needed:</strong> 5-10 minutes</p>
      </Section>

      <Section heading="Step 3: Go to SAM.gov">
        <ol>
          <li>Visit <a href="https://sam.gov" target="_blank" rel="noopener">sam.gov</a></li>
          <li>Click "Sign In" (top right)</li>
          <li>Use your Login.gov credentials</li>
          <li>Once logged in, click "Entity Registration" → "Get Started"</li>
        </ol>
        <p><strong>Time needed:</strong> 2-3 minutes</p>
      </Section>

      <div id="lead-magnet">
        <LeadMagnet 
          title="Download: Complete SAM.gov Registration Checklist"
          description="Never miss a step. Get our detailed checklist with every field and document you'll need to complete your registration correctly the first time."
        />
      </div>

      <Section heading="Step 4: Complete Your Entity Registration">
        <p>This is the main part. You'll fill out several sections:</p>
        
        <p><strong>Core Data:</strong></p>
        <ul>
          <li>Legal business name (exactly as on tax documents)</li>
          <li>Physical and mailing address</li>
          <li>TIN/EIN</li>
          <li>Business start date</li>
        </ul>
        
        <p><strong>Assertions:</strong></p>
        <ul>
          <li>NAICS codes (what type of work you do)</li>
          <li>Goods and services</li>
          <li>Size determination</li>
        </ul>
        
        <p><strong>Representations & Certifications:</strong></p>
        <ul>
          <li>FAR representations</li>
          <li>Ownership information</li>
          <li>Various certifications</li>
        </ul>
        
        <p><strong>Points of Contact:</strong></p>
        <ul>
          <li>Government business POC</li>
          <li>Electronic business POC</li>
        </ul>
        
        <p><strong>Time needed:</strong> 45-90 minutes (take your time!)</p>
      </Section>

      <OpnGovIQCallout />

      <Section heading="Step 5: Submit and Wait">
        <ol>
          <li>Review all information carefully</li>
          <li>Fix any validation errors</li>
          <li>Click "Submit"</li>
          <li>Wait for IRS validation (1-2 days)</li>
          <li>CAGE Code is assigned automatically (3-10 days total)</li>
        </ol>
        <p>You'll receive an email when your registration is active and your CAGE Code is ready.</p>
        <p><strong>Where to find your CAGE Code:</strong> Log into SAM.gov → Entity Management → View your registration</p>
      </Section>

      <Section heading="Tips for Faster Approval">
        <ul>
          <li><strong>Match your info exactly</strong> - Business name and EIN must match IRS records</li>
          <li><strong>Use a real address</strong> - Virtual offices and P.O. boxes cause delays</li>
          <li><strong>Complete all sections</strong> - Incomplete registrations get stuck</li>
          <li><strong>Check your email</strong> - SAM.gov sends validation requests</li>
          <li><strong>Be patient</strong> - Processing times vary; don't submit duplicate registrations</li>
        </ul>
      </Section>

      <FHCCallout />

      <CTASection />

      <Footer />
    </>
  )
}

