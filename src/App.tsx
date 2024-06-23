import { IpLookUp } from "./components/IpLookUp/IpLookUp";
import { IpLookUpResult } from "./components/IpLookUpResult/IpLookUpResult";
import { ApplicationStateProvider } from "./providers/ContextProvider";

function App() {
  return (
    <ApplicationStateProvider>
      <header className="bg-green-500 shadow-md grid place-items-center font-bold text-3xl text-green-50 tracking-tighter">
        Ip Geo Lookup
      </header>
      <main className="flex flex-col items-center">
        <IpLookUp />
        <IpLookUpResult className="mt-4" />
      </main>

      <footer className="bg-green-100"></footer>
    </ApplicationStateProvider>
  );
}

export default App;
