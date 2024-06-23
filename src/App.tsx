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
        <main className="flex flex-col items-center justify-center gap-8">
          <Hero />
          <IpLookUpForm />
          <IpLookUpResult />
        </main>
      </QueryClientProvider>
    </ApplicationStateProvider>
  );
}

export default App;
