/**
 * Composant de fallback pour le lazy loading des sections
 */
export function SectionLoader() {
  return (
    <div className="w-full py-16 px-4 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animation: `pulse 1.5s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Chargement...</p>
      </div>
    </div>
  );
}
