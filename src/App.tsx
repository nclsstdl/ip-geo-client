import { IpLookUpForm } from "./components/IpLookUpForm/IpLookUpForm";
import { IpLookUpResult } from "./components/IpLookUpResult/IpLookUpResult";
import { ApplicationStateProvider } from "./providers/ContextProvider";

function App() {
  return (
    <ApplicationStateProvider>
      <header className="sticky top-0 flex items-center p-2 shadow-md font-bold text-lg tracking-tighter">
        Ip Geo Lookup
      </header>
      <main className="flex flex-col items-center justify-center">
        <IpLookUpForm />
        <IpLookUpResult className="mt-4" />
      </main>
    </ApplicationStateProvider>
  );
}

export default App;
