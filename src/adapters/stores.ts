const API_BASE = 'https://api.traigalo.org/v2';
const EXCLUDED_SLUGS = ['burger-crave', 'sushi-omakase'];

export interface EnrichedStore {
  id: string;
  owner_id?: string;
  name: string;
  slug: string;
  description: string;
  logo_url: string;
  cover_url: string;
  address_line: string;
  is_open: boolean;
  rubroKey: string;
  rubroBadge: string;
}

export function inferStoreRubro(name: string, description: string): { key: string; badge: string } {
  const combined = `${name || ''} ${description || ''}`.toLowerCase();
  if (combined.includes('farmacia') || combined.includes('salud') || combined.includes('medicamento')) {
    return { key: 'farmacias', badge: '💊 Farmacias y Salud' };
  }
  if (combined.includes('supermercado') || combined.includes('víveres') || combined.includes('viveres') || combined.includes('mercado')) {
    return { key: 'supermercados', badge: '🛒 Supermercados' };
  }
  if (combined.includes('restaurante') || combined.includes('comida') || combined.includes('pizza') || combined.includes('hamburguesa') || combined.includes('gastronom')) {
    return { key: 'restaurantes', badge: '🍔 Comida y Restaurantes' };
  }
  if (combined.includes('barber') || combined.includes('belleza') || combined.includes('estética') || combined.includes('estetica') || combined.includes('capilar')) {
    return { key: 'barberia', badge: '💈 Barbería y Belleza' };
  }
  if (combined.includes('mascota') || combined.includes('agro') || combined.includes('veterin')) {
    return { key: 'mascotas', badge: '🐾 Mascotas y Agro' };
  }
  return { key: 'tecnologia', badge: '🎮 Tiendas y Tecnología' };
}

export function enrichStore(raw: any): EnrichedStore {
  const name = String(raw?.name || 'Comercio Oficial');
  const description = String(raw?.description || 'Comercio Oficial Verificado en Traigalo');
  const rubro = inferStoreRubro(name, description);
  return {
    id: String(raw?.id || ''),
    owner_id: raw?.owner_id,
    name,
    slug: String(raw?.slug || ''),
    description,
    logo_url: String(raw?.logo_url || '/brand-icon.webp'),
    cover_url: String(raw?.cover_url || '/brand-icon.webp'),
    address_line: String(raw?.address_line || 'Higuerote, Miranda'),
    is_open: raw?.is_open !== false,
    rubroKey: rubro.key,
    rubroBadge: rubro.badge
  };
}

export async function fetchActiveStores(): Promise<EnrichedStore[]> {
  try {
    const res = await fetch(`${API_BASE}/stores`);
    if (!res.ok) return [];
    const list = await res.json();
    if (!Array.isArray(list)) return [];
    return list
      .filter((s: any) => s && s.is_open !== false && !EXCLUDED_SLUGS.includes(String(s.slug || '')))
      .map(enrichStore);
  } catch {
    return [];
  }
}

export async function fetchStoresMap(): Promise<Record<string, EnrichedStore>> {
  const list = await fetchActiveStores();
  const map: Record<string, EnrichedStore> = {};
  for (const s of list) {
    if (s.id) map[s.id] = s;
  }
  return map;
}
