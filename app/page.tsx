import ReduxProvider from "@/store/redux-provider";
import AuthUpdater from "@/components/AuthUpdater";
import AuthViewer from "@/components/AuthViewer";
import AuthContainer from "@/components/AuthContainer";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <AuthContainer/>
      <Link href="/about">About</Link>
    </div>
  );
}
