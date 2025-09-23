import Header from '../Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="h-screen bg-background">
        <Header />
        <div className="pt-16 p-8">
          <h1 className="text-2xl font-bold">Header Example</h1>
          <p className="text-muted-foreground">This demonstrates the header component with navigation and theme toggle.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}