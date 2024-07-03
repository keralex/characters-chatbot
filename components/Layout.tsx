import Header from "./Hearder"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <main className="flex min-h-screen flex-col items-center pt-12">
        <Header />
        {children}
    </main>
}

export default Layout;