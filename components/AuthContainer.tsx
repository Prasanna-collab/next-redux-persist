"use client";
import ReduxProvider from "@/store/redux-provider";
import AuthUpdater from "@/components/AuthUpdater";
import AuthViewer from "@/components/AuthViewer";

export default function AuthContainer() {
  return (
    <ReduxProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AuthUpdater />
        <AuthViewer />
      </main>
    </ReduxProvider>
  );
}
