/**
 * GovCon Giants - Framer CMS Content Component
 * 
 * Copy this entire file into Framer:
 * 1. In Framer, go to Assets panel (left sidebar)
 * 2. Click "Code" tab
 * 3. Click "+" to create new file
 * 4. Name it "CageCodeContent.tsx"
 * 5. Paste this code
 */

import { useEffect, useState, createContext, useContext } from "react"
import { addPropertyControls, ControlType } from "framer"

// ============================================
// CONFIGURATION - Your GitHub Pages URL
// ============================================
const CONTENT_URL = "https://ecoffie.github.io/govcon-content/framer-content/cage-code-pages.json"

// ============================================
// TYPES
// ============================================
interface Section {
    heading: string
    content: string
}

interface LeadMagnet {
    title: string
    description: string
    pdfUrl: string
}

interface PageContent {
    id: string
    slug: string
    pageType: string
    status: string
    title: string
    subtitle: string
    metaTitle: string
    metaDescription: string
    focusKeyword: string
    primaryCtaText: string
    primaryCtaUrl: string
    quickDefinition: string
    keyPoints: string[]
    sections: Section[]
    leadMagnet?: LeadMagnet
    showOpnGovIQCallout: boolean
    showFHCCallout: boolean
}

interface ContentData {
    collection: string
    lastUpdated: string
    itemCount: number
    items: PageContent[]
}

// ============================================
// CONTENT CONTEXT
// ============================================
const ContentContext = createContext<ContentData | null>(null)

// ============================================
// CONTENT PROVIDER - Wrap your page with this
// ============================================
export function ContentProvider({ children }) {
    const [content, setContent] = useState<ContentData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch(CONTENT_URL)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch content")
                return res.json()
            })
            .then(data => {
                setContent(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div style={{ padding: 20 }}>Loading content...</div>
    }

    if (error) {
        return <div style={{ padding: 20, color: "red" }}>Error: {error}</div>
    }

    return (
        <ContentContext.Provider value={content}>
            {children}
        </ContentContext.Provider>
    )
}

// ============================================
// HOOK - Use in any component to get content
// ============================================
export function usePageContent(slug: string): PageContent | null {
    const content = useContext(ContentContext)
    if (!content) return null
    return content.items.find(page => page.slug === slug) || null
}

// ============================================
// HERO COMPONENT
// ============================================
export function HeroSection({ slug = "cage-code" }) {
    const [page, setPage] = useState<PageContent | null>(null)

    useEffect(() => {
        fetch(CONTENT_URL)
            .then(res => res.json())
            .then(data => {
                const found = data.items.find(p => p.slug === slug)
                setPage(found || null)
            })
    }, [slug])

    if (!page) return <div>Loading...</div>

    return (
        <div style={{
            background: "linear-gradient(135deg, #1A3A2E 0%, #2d5a47 100%)",
            padding: "80px 40px",
            color: "white",
            textAlign: "center"
        }}>
            <h1 style={{
                fontSize: 48,
                fontWeight: 700,
                marginBottom: 16,
                maxWidth: 800,
                margin: "0 auto 16px"
            }}>
                {page.title}
            </h1>
            <p style={{
                fontSize: 20,
                opacity: 0.9,
                marginBottom: 32,
                maxWidth: 600,
                margin: "0 auto 32px"
            }}>
                {page.subtitle}
            </p>
            <a
                href={page.primaryCtaUrl}
                style={{
                    background: "white",
                    color: "#1A3A2E",
                    padding: "16px 32px",
                    borderRadius: 8,
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-block"
                }}
            >
                {page.primaryCtaText}
            </a>
        </div>
    )
}

addPropertyControls(HeroSection, {
    slug: {
        type: ControlType.String,
        title: "Page Slug",
        defaultValue: "cage-code"
    }
})

// ============================================
// QUICK ANSWER BOX
// ============================================
export function QuickAnswerBox({ slug = "cage-code" }) {
    const [page, setPage] = useState<PageContent | null>(null)

    useEffect(() => {
        fetch(CONTENT_URL)
            .then(res => res.json())
            .then(data => {
                const found = data.items.find(p => p.slug === slug)
                setPage(found || null)
            })
    }, [slug])

    if (!page) return <div>Loading...</div>

    return (
        <div style={{
            background: "#F5F5F5",
            border: "2px solid #1A3A2E",
            borderRadius: 8,
            padding: 30,
            maxWidth: 800,
            margin: "40px auto"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16
            }}>
                <span style={{ fontSize: 24 }}>💡</span>
                <strong style={{ fontSize: 18 }}>Quick Answer</strong>
            </div>
            <p style={{
                fontSize: 18,
                lineHeight: 1.6,
                marginBottom: 20,
                color: "#333"
            }}>
                {page.quickDefinition}
            </p>
            <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
            }}>
                {page.keyPoints.map((point, i) => (
                    <li key={i} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                        fontSize: 16
                    }}>
                        <span style={{ color: "#1A3A2E" }}>✓</span>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    )
}

addPropertyControls(QuickAnswerBox, {
    slug: {
        type: ControlType.String,
        title: "Page Slug",
        defaultValue: "cage-code"
    }
})

// ============================================
// CONTENT SECTION
// ============================================
export function ContentSection({ slug = "cage-code", sectionIndex = 0 }) {
    const [page, setPage] = useState<PageContent | null>(null)

    useEffect(() => {
        fetch(CONTENT_URL)
            .then(res => res.json())
            .then(data => {
                const found = data.items.find(p => p.slug === slug)
                setPage(found || null)
            })
    }, [slug])

    if (!page || !page.sections[sectionIndex]) return null

    const section = page.sections[sectionIndex]

    return (
        <div style={{
            maxWidth: 800,
            margin: "40px auto",
            padding: "0 20px"
        }}>
            <h2 style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#1A3A2E",
                marginBottom: 20
            }}>
                {section.heading}
            </h2>
            <div style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "#333",
                whiteSpace: "pre-wrap"
            }}>
                {section.content}
            </div>
        </div>
    )
}

addPropertyControls(ContentSection, {
    slug: {
        type: ControlType.String,
        title: "Page Slug",
        defaultValue: "cage-code"
    },
    sectionIndex: {
        type: ControlType.Number,
        title: "Section Index",
        defaultValue: 0,
        min: 0,
        max: 10,
        step: 1
    }
})

// ============================================
// LEAD MAGNET BOX
// ============================================
export function LeadMagnetBox({ slug = "cage-code" }) {
    const [page, setPage] = useState<PageContent | null>(null)
    const [email, setEmail] = useState("")

    useEffect(() => {
        fetch(CONTENT_URL)
            .then(res => res.json())
            .then(data => {
                const found = data.items.find(p => p.slug === slug)
                setPage(found || null)
            })
    }, [slug])

    if (!page || !page.leadMagnet) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add your form submission logic here
        console.log("Email submitted:", email)
        alert("Thanks! Check your email for the download link.")
    }

    return (
        <div style={{
            background: "white",
            border: "1px solid #e0e0e0",
            borderRadius: 8,
            padding: 30,
            maxWidth: 600,
            margin: "40px auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16
            }}>
                <span style={{ fontSize: 24 }}>📥</span>
                <strong style={{ fontSize: 20 }}>{page.leadMagnet.title}</strong>
            </div>
            <p style={{
                fontSize: 16,
                color: "#666",
                marginBottom: 20
            }}>
                {page.leadMagnet.description}
            </p>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                gap: 10
            }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{
                        flex: 1,
                        padding: "12px 16px",
                        border: "1px solid #ddd",
                        borderRadius: 6,
                        fontSize: 16
                    }}
                />
                <button
                    type="submit"
                    style={{
                        background: "#1A3A2E",
                        color: "white",
                        padding: "12px 24px",
                        border: "none",
                        borderRadius: 6,
                        fontWeight: 600,
                        cursor: "pointer"
                    }}
                >
                    Download
                </button>
            </form>
        </div>
    )
}

addPropertyControls(LeadMagnetBox, {
    slug: {
        type: ControlType.String,
        title: "Page Slug",
        defaultValue: "cage-code"
    }
})

// ============================================
// OPNGOVIQ CALLOUT
// ============================================
export function OpnGovIQCallout() {
    return (
        <div style={{
            background: "#E8F5E9",
            borderLeft: "4px solid #1A3A2E",
            padding: 40,
            maxWidth: 800,
            margin: "40px auto"
        }}>
            <h3 style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#1A3A2E",
                marginBottom: 16
            }}>
                🚀 Track CAGE Code Status in OpnGovIQ
            </h3>
            <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 20px 0"
            }}>
                <li style={{ marginBottom: 8 }}>✓ Research federal opportunities with AI</li>
                <li style={{ marginBottom: 8 }}>✓ Track your registration status</li>
                <li style={{ marginBottom: 8 }}>✓ Get alerts on new contracts</li>
            </ul>
            <a
                href="https://opngoviq.com"
                style={{
                    background: "#1A3A2E",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: 6,
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-block"
                }}
            >
                Start Free Trial
            </a>
        </div>
    )
}

// ============================================
// FHC CALLOUT
// ============================================
export function FHCCallout() {
    return (
        <div style={{
            background: "#FFF8E1",
            borderLeft: "4px solid #FF9800",
            padding: 40,
            maxWidth: 800,
            margin: "40px auto"
        }}>
            <h3 style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#333",
                marginBottom: 16
            }}>
                🤝 Get Expert Help with CAGE Code Questions
            </h3>
            <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 20px 0"
            }}>
                <li style={{ marginBottom: 8 }}>✓ 24/7 access to GovCon experts</li>
                <li style={{ marginBottom: 8 }}>✓ Templates and checklists</li>
                <li style={{ marginBottom: 8 }}>✓ Community of federal contractors</li>
            </ul>
            <a
                href="https://govcongiants.org/fhc"
                style={{
                    background: "#FF9800",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: 6,
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-block"
                }}
            >
                Join Federal Help Center
            </a>
        </div>
    )
}

// ============================================
// FULL PAGE COMPONENT - Renders everything
// ============================================
export function CageCodePage({ slug = "cage-code" }) {
    const [page, setPage] = useState<PageContent | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(CONTENT_URL)
            .then(res => res.json())
            .then(data => {
                const found = data.items.find(p => p.slug === slug)
                setPage(found || null)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [slug])

    if (loading) return <div style={{ padding: 40, textAlign: "center" }}>Loading...</div>
    if (!page) return <div style={{ padding: 40, textAlign: "center" }}>Page not found</div>

    return (
        <div>
            {/* Hero */}
            <HeroSection slug={slug} />
            
            {/* Quick Answer */}
            <QuickAnswerBox slug={slug} />
            
            {/* Content Sections */}
            {page.sections.map((section, i) => (
                <ContentSection key={i} slug={slug} sectionIndex={i} />
            ))}
            
            {/* Lead Magnet */}
            {page.leadMagnet && <LeadMagnetBox slug={slug} />}
            
            {/* Callouts */}
            {page.showOpnGovIQCallout && <OpnGovIQCallout />}
            {page.showFHCCallout && <FHCCallout />}
        </div>
    )
}

addPropertyControls(CageCodePage, {
    slug: {
        type: ControlType.Enum,
        title: "Page",
        options: [
            "cage-code",
            "cage-code-lookup",
            "what-is-a-cage-code",
            "how-to-get-cage-code",
            "cage-code-requirements",
            "cage-code-vs-duns-number"
        ],
        optionTitles: [
            "Main Hub",
            "Lookup Tool",
            "What is CAGE Code",
            "How to Get",
            "Requirements",
            "vs DUNS Number"
        ],
        defaultValue: "cage-code"
    }
})

