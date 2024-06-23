import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IpLookUpForm } from "./components/IpLookUpForm/IpLookUpForm";
import { IpLookUpResult } from "./components/IpLookUpResult/IpLookUpResult";
import { ApplicationStateProvider } from "./providers/ContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <ApplicationStateProvider>
      <QueryClientProvider client={queryClient}>
        <header className="sticky top-0 flex items-center p-2 shadow-md font-bold text-lg tracking-tighter">
          Ip Geo Lookup
        </header>
        <main className="flex flex-col items-center justify-center">
          <IpLookUpForm />
          <IpLookUpResult className="mt-4" />
        </main>
      </QueryClientProvider>
    </ApplicationStateProvider>
  );
}

export default App;
