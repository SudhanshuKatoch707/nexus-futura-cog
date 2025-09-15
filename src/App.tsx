import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    let vantaEffect: any = null;
    
    const initVanta = async () => {
      try {
        const VANTA = await import('vanta/dist/vanta.net.min.js');
        const THREE = await import('three');
        
        if (vantaRef.current && !vantaEffect) {
          vantaEffect = VANTA.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scaleMobile: 1.00,
            color: 0x00ccff,
            backgroundColor: 0x0a0a0f,
            points: 10.00,
            maxDistance: 25.00,
            spacing: 20.00
          });
        }
      } catch (error) {
        console.error('Failed to load Vanta effect:', error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div ref={vantaRef} id="vanta-bg" />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
