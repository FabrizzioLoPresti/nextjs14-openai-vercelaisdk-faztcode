import { Configuration, OpenAIApi } from 'openai-edge'
import  { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextRequest, NextResponse } from 'next/server'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

export const POST = async (req: NextRequest) => {
  const { messages } = await req.json()
  console.log( messages )

  // Process messages with OpenAI
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })

  // Return the response
  const stream = OpenAIStream(response, {
    onStart: () => console.log('Started streaming'),
    onToken: (token) => console.log(token),
    onCompletion: (completion) => console.log('Completed streaming', completion),
  })

  return new StreamingTextResponse(stream)
}