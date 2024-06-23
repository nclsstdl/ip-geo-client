import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IpLookUpForm } from "./components/IpLookUpForm/IpLookUpForm";
import { IpLookUpResult } from "./components/IpLookUpResult/IpLookUpResult";
import { ApplicationStateProvider } from "./providers/ContextProvider";
import { Hero } from "./components/Hero/Hero";

const queryClient = new QueryClient();

function App() {
  return (
    <ApplicationStateProvider>
      <QueryClientProvider client={queryClient}>
        <header className="sticky top-0 flex items-center p-2 shadow-md font-bold text-lg tracking-tighter">
          Ip Geo Lookup
        </header>
        <main className="flex flex-col items-center justify-center gap-12">
          <Hero />
          <div className="w-full flex flex-col items-center gap-4">
            <IpLookUpForm />
            <IpLookUpResult />
          </div>
        </main>
      </QueryClientProvider>
    </ApplicationStateProvider>
  );
}

export default App;
