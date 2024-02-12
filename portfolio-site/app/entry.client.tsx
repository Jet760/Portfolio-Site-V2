import { RemixBrowser } from "@remix-run/react";
import React, { startTransition, StrictMode, useState } from "react";
import { hydrateRoot } from "react-dom/client";
import { CacheProvider } from '@emotion/react'
import { ClientStyleContext } from './context'
import createEmotionCache, { defaultCache } from './createEmotionCache'

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(defaultCache)

  function reset() {
    setCache(createEmotionCache())
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

startTransition(() => {
  hydrateRoot(
    document,
    <ClientCacheProvider>
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
    </ClientCacheProvider>,
  );
});