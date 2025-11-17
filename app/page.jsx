'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';
import Sidebar from './components/sidebar';
import PromptBox from './components/prompt';
import Message from './components/Message';

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [message, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              className="rotate-180"
              src={assets.menu_icon}
              alt="Menu icon"
              width={32}
              height={32}
            />
            <Image
              className="opacity-70"
              src={assets.chat_icon}
              alt="Chat icon"
              width={32}
              height={32}
              loading="eager"
              priority
            />
          </div>
          {message.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="" className="h-16 w-16" />
                <p className="text-2xl font-medium">hii, i am Deepseek.</p>
              </div>
              <p className="text-sm mt-2 text-gray-300">how can i help you</p>
            </>
          ) : (
            <div>
              <Message role="ai" content="what is next js?" />
            </div>
          )}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          <p className="text-xs absolute bottom-1 text-gray-500">
            AI-generated,for reference only
          </p>
        </div>
      </div>
    </div>
  );
}
