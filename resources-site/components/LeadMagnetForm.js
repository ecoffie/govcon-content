'use client'

export function LeadMagnetForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    console.log('Email submitted:', email)
    alert('Thanks! Check your email for the download link.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email"
        placeholder="Enter your email" 
        required 
      />
      <button type="submit">Download</button>
    </form>
  )
}

