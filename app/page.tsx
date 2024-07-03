import ChatComponent from "@/components/ChatComponent";
import Layout from "@/components/layout";


export default function Home() {
  return (
    <Layout>
      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl"> chatbot UWU</h2>
        <ChatComponent />
      </div>
    </Layout>
  );
}
