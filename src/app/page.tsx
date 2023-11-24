import ChatForm from '@/components/chat-form';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold text-center">ChatGPT Clone</h1>
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <ChatForm />
      </div>
    </main>
  );
}
