import Link from 'next/link';

const Header = () => {
    return <nav>
        <ul className="flex mb-12">
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/characters">Characters</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/chat">Chat </Link>
            </li>
        </ul>
    </nav>
}

export default Header;