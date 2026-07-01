'use server'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendToTelegram(formData: ContactFormData) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error('Telegram credentials not configured')
    return {
      success: false,
      error: 'Telegram bot not configured. Please contact site administrator.',
    }
  }

  try {
    const message = `
🔔 New Contact Form Submission from Quantara Security Website

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📝 Subject: ${formData.subject}

💬 Message:
${formData.message}

---
Submitted at: ${new Date().toLocaleString('en-GB')}
    `.trim()

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Telegram API error:', error)
      return {
        success: false,
        error: 'Failed to send message. Please try again.',
      }
    }

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return {
      success: false,
      error: 'An error occurred while sending your message.',
    }
  }
}
