"use client"
import { useChat } from 'ai/react';




const ChatComponent = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: 'api/chat',
    });

    return <div>
        <div>
            {messages.map((message, index) => (
                <div key={index} className={`my-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                        {message.content}
                    </span>
                </div>
            ))}

        </div>
        <form className='mt-12' onSubmit={handleSubmit}>
            <p>User Message</p>
            <textarea
                className="mt-2 w-full bg-slate-600 p-2"
                placeholder="what are data structures and algorithms?"
                value={input}
                onChange={handleInputChange}
            />
            <button type="submit" className="rounded-md bg-blue-400 p-2 mt-2">Send Message</button>
        </form>
    </div>
}

export default ChatComponent;