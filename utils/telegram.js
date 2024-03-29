// Not used, reply is being sent as a response to webhook

export function createReply(chatId, messageId) {
  const reply = async (message) => {
    let { body } = await got.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        json: {
          chat_id: chatId,
          text: message,
          reply_to_message_id: messageId || null,
          disable_web_page_preview: true,
          disable_notification: true,
        },
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return body
  }
  return reply
}
