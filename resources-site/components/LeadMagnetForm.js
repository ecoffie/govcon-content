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

    try {
      // Submit to FormSpark
      const response = await fetch(`https://submit-form.com/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          leadMagnet: leadMagnetName || 'CAGE Code Resource',
          source: 'GovCon Resources Site',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        
        // If download URL provided, trigger download
        if (downloadUrl) {
          setTimeout(() => {
            window.open(downloadUrl, '_blank')
          }, 1000)
        }
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
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
        <strong style={{ color: '#2E7D32' }}>Success! Check your email.</strong>
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          {downloadUrl 
            ? 'Your download should start automatically. Check your email for the link.'
            : 'We\'ve sent you the resource. Check your inbox (and spam folder).'}
        </p>
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
