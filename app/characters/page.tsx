import Layout from "@/components/layout";
import { Character } from "@/app/types/characters.types";
import Image from "next/image";
import Link from "next/link";

export default async function CharactersPage() {
    const getCharacters = async () => {
        const res = await fetch('http://localhost:3000/api/characters');
        return res.json();
    }

    const charactersList = await getCharacters()
    return <Layout>
        <h2 className='mb-8 text-center text-xl text-blue-900'>Choose your perfect boyfriend</h2>

        <div className='grid grid-cols-3 gap-4 w-10/12' >
            {charactersList.map((character: Character) => (
                <Link href={{
                    pathname: '/chat',
                    query: {
                        id: character.id
                    }
                }}
                    key={character.id}
                >
                    <div className='cursor-pointer flex flex-col p-3 border border-blue-200 rounded-md text-center drop-shadow-md bg-white' style={{ height: '460px' }}>
                        <p className='mb-4'>
                            {character.name}
                        </p>
                        <div className='w-full relative self-end' style={{ height: '90%' }}>
                            <Image src={character.image} alt={character.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </Layout>
}