'use client';

import { useChat } from 'ai/react';

type Props = {};

const ChatForm = (props: Props) => {
  const { handleInputChange, input, handleSubmit, messages, isLoading } =
    useChat({
      api: '/api/chat',
    });

  return (
    <form className="max-w-xl w-full" onSubmit={handleSubmit}>
      <div className="max-h-96 h-full overflow-y-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col mb-2 p-2 rounded-md text-white ${
              message.role === 'assistant'
                ? 'self-end bg-slate-800'
                : 'self-start bg-gray-600'
            }`}
          >
            <span
              className={`text-xs ${
                message.role === 'assistant' ? 'text-right' : 'text-left'
              }`}
            >
              {message.role}
            </span>
            <p>{message.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center my-4">
        <label htmlFor="message" className="text-white font-bold block">
          Say Something...
        </label>
        <button
          type="submit"
          className="bg-slate-600 text-white px-4 py-2 rounded-md focus:outline-none disabled:opacity-50"
          disabled={isLoading || !input}
        >
          Send
        </button>
      </div>

      <textarea
        name="message"
        id="message"
        rows={4}
        value={input}
        placeholder="Type your message here..."
        className="w-full bg-slate-600 text-white px-4 py-2 rounded-md focus:outline-none"
        onChange={handleInputChange}
      ></textarea>
    </form>
  );
};

export default ChatForm;
