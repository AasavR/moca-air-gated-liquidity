// Client-side Moca helper (placeholder)
// Replace with actual imports and usage from Moca JS SDK per their docs.
export function initMoca(siteKey: string) {
  if (!siteKey) {
    console.warn('NO MOCA SITE KEY provided. Moca flows will be mocked.');
    return null;
  }
  // Example placeholder object; replace with SDK init code
  return {
    siteKey,
    startFlow: async (flowName: string, opts?: any) => {
      console.log('startFlow', flowName, opts);
      return { status: 'mocked', flowName };
    }
  };
}