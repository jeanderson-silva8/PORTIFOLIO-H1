import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import Home from './pages/Home';

// Code-split: ProjectDetail só baixa quando o usuário navega pra /projeto/:slug
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

/* Scroll-to-top a cada mudança de rota (respeitando Lenis) */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useLenis();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto/:slug" element={<ProjectDetail />} />
        </Routes>
      </Suspense>

      {/* Overlay de ruído global */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}
