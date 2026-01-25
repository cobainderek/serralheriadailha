// Função helper para construir URLs com base path
export function getAssetUrl(path: string): string {
    const base = import.meta.env.BASE_URL || '/';
    // Remove barra inicial do path se existir
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Remove barra final do base se existir
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    return `${cleanBase}/${cleanPath}`;
}
