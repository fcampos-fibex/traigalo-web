interface RateCache {
  rate: number;
  updatedAt: number;
}

let cachedRate: RateCache | null = null;
const CACHE_TTL_MS = 10 * 60 * 1000;
const FALLBACK_RATE = 896.12;

export async function getOfficialExchangeRate(): Promise<number> {
  const now = Date.now();
  if (cachedRate && now - cachedRate.updatedAt < CACHE_TTL_MS) {
    return cachedRate.rate;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch('https://ve.dolarapi.com/v1/dolares/oficial', {
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      const val = Number(data.promedio || data.venta || data.compra);
      if (val > 0) {
        cachedRate = { rate: val, updatedAt: now };
        return val;
      }
    }
  } catch {}

  if (cachedRate) {
    return cachedRate.rate;
  }
  return FALLBACK_RATE;
}

export function formatBs(usdAmount: number, rate: number): string {
  const bs = usdAmount * rate;
  const formatted = new Intl.NumberFormat('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(bs);
  return `~ Bs. ${formatted} @ BCV`;
}
