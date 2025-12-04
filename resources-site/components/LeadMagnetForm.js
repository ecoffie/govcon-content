'use client'

import { useState } from 'react'

export function LeadMagnetForm({ formId, downloadUrl, leadMagnetName }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Check if FormSpark is configured
    const isFormSparkConfigured = formId && 
                                   formId !== 'YOUR_FORMSPARK_FORM_ID' && 
                                   formId.trim().length > 0

    // Convert relative download URL to absolute URL
    const fullDownloadUrl = downloadUrl 
      ? downloadUrl.startsWith('http') 
        ? downloadUrl 
        : `${window.location.origin}${downloadUrl}`
      : null

    // Trigger download immediately (before FormSpark submission)
    if (fullDownloadUrl) {
      // Open PDF in new tab - browsers handle PDFs well this way
      // User can save from the browser's PDF viewer
      window.open(fullDownloadUrl, '_blank')
      
      // Also try programmatic download for browsers that support it
      // Some browsers will download, others will open in new tab (both work!)
      try {
        const link = document.createElement('a')
        link.href = fullDownloadUrl
        link.download = fullDownloadUrl.split('/').pop() || 'cage-code-checklist.pdf'
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        setTimeout(() => document.body.removeChild(link), 100)
      } catch (err) {
        // Fallback: just opening in new tab is fine
        console.log('Direct download not supported, using new tab')
      }
    }

    try {
      // Submit to FormSpark in the background (don't block download)
      if (isFormSparkConfigured) {
        // Fire and forget - don't wait for response
        fetch(`https://submit-form.com/${formId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            email,
            leadMagnet: leadMagnetName || 'CAGE Code Resource',
            downloadUrl: fullDownloadUrl,
            source: 'GovCon Resources Site',
            timestamp: new Date().toISOString(),
          }),
        }).catch(err => {
          // Silently fail - user already got the download
          console.error('FormSpark submission error:', err)
        })
      }

      // Mark as submitted
      setSubmitted(true)
      setEmail('')
    } catch (err) {
      console.error('Form error:', err)
      // Don't show error if download already happened
      if (!fullDownloadUrl) {
        setError('Something went wrong. Please try again.')
        setLoading(false)
        return
      }
      // If download happened, still show success
      setSubmitted(true)
      setEmail('')
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div style={{
        background: '#E8F5E9',
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '8px' }}>✅</div>
        <strong style={{ color: '#2E7D32' }}>Success!</strong>
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          {downloadUrl 
            ? 'Your download has started! Check your downloads folder if it didn\'t appear.'
            : 'Check your email for the resource.'}
        </p>
        {downloadUrl && (
          <a 
            href={downloadUrl} 
            download
            style={{
              display: 'inline-block',
              marginTop: '12px',
              padding: '8px 16px',
              background: 'white',
              color: 'var(--primary)',
              border: '2px solid var(--primary)',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Click here if download didn't start →
          </a>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          required 
          disabled={loading}
          style={{
            flex: '1',
            minWidth: '250px',
            padding: '12px 16px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            outline: 'none',
          }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{
            padding: '12px 32px',
            fontSize: '16px',
            fontWeight: '600',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            whiteSpace: 'nowrap',
          }}
        >
          {loading ? 'Sending...' : 'Download'}
        </button>
      </div>
      {error && (
        <p style={{ 
          color: '#d32f2f', 
          fontSize: '14px', 
          marginTop: '8px' 
        }}>
          {error}
        </p>
      )}
      <p style={{ 
        fontSize: '12px', 
        color: '#666', 
        marginTop: '8px' 
      }}>
        🔒 We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  )
}
