// Utility function to handle asset paths for GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Always use the base path for production builds
  return `/portfolio-website/${cleanPath}`;
};
