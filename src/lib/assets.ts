// Utility function to handle asset paths for custom domain deployment
export const getAssetPath = (path: string): string => {
  // For custom domain, we use the root path
  return path.startsWith('/') ? path : `/${path}`;
};
