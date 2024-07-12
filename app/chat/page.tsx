"use client"
import ChatComponent from "@/components/ChatComponent";
import Layout from "@/components/layout";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import { Character } from "../types/characters.types";


export default function ChatPage() {
    const searchParams = useSearchParams()

    const id = searchParams.get('id')
    const [selectedCharacter, setSelectedCharacter] = useState<Character | undefined>()
    const getCharacter = async () => {
        const res = await fetch(`http://localhost:3000/api/characters?id=${id}`);
        const character = await res.json();
        setSelectedCharacter(character);
    }

    useEffect(() => {
        if (id) {
            getCharacter()
        }
    }, [])


    return <Layout> <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl"> chatbot UWU</h2>
        <ChatComponent character={selectedCharacter} />
    </div></Layout>

}