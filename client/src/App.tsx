import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";

function App() {
  return (
    <TooltipProvider>
      <ThemeProvider defaultTheme="dark">
        <Toaster />
        <Home />
      </ThemeProvider>
    </TooltipProvider>
  );
}

export default App;
