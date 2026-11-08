import { r as __exportAll } from "./rolldown-runtime_C1I3wEg2.mjs";
import { c as renderTemplate, h as addAttribute, r as renderComponent, u as renderHead } from "./server_BeMTfuwJ.mjs";
import "./compiler_B3fB_zd1.mjs";
import { t as createAstro } from "./astro-global_BP7EFX6f.mjs";
import { t as $$BottomNav } from "./BottomNav_k7EsWuXe.mjs";
import { t as createComponent } from "./global_DrCMk30D.mjs";
// src/pages/orders/track.astro
var track_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Track,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Track = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Track;
	const mockOrder = {
		id: Astro.url.searchParams.get("id") || "773954c2-9a3d-4c3e-8c3e-traigalo2026",
		orderNumber: 1042,
		storeName: "Black Iron Burger Lab",
		driverName: "Carlos Mendoza",
		driverVehicle: "Yamaha FZ • Placa: ABC-123",
		driverRating: "4.9 ★",
		status: "in_transit",
		eta: "12-15 min",
		address: "Av. Libertador 102, Residencias El Roble, Apto 5B",
		items: [{
			name: "Truffle Smash Double",
			qty: 1,
			price: 9.8
		}, {
			name: "Papas Rústicas Parmesano & Trufa",
			qty: 1,
			price: 4.5
		}],
		subtotal: 14.3,
		deliveryFee: 1.5,
		serviceFee: .5,
		total: 16.3
	};
	return renderTemplate`<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><title>Rastreo de Pedido #${mockOrder.orderNumber} | Traigalo ⚡</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead($$result)}</head><body class="bg-[#FAFAFC] text-[#1A1D20] min-h-screen flex flex-col pb-24 md:pb-12 antialiased selection:bg-orange-500 selection:text-white"><!-- TOP APP BAR --><header class="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 px-4 py-3.5"><div class="max-w-2xl mx-auto flex items-center justify-between"><a href="/" class="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-800 transition-colors active:scale-95"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg></a><div class="text-center"><span class="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">En Camino</span><h1 class="text-sm font-extrabold text-gray-900 leading-tight">Orden #${mockOrder.orderNumber}</h1></div><div class="w-10"></div></div></header><main class="flex-1 max-w-2xl mx-auto px-4 py-5 w-full space-y-4"><!-- ETA HERO CARD --><section class="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs relative overflow-hidden"><div class="flex items-center justify-between"><div><span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tiempo Estimado</span><h2 class="text-2xl font-black text-gray-950 mt-0.5">${mockOrder.eta}</h2><p class="text-xs text-emerald-600 font-bold mt-1">● El repartidor está a 800m de tu destino</p></div><div class="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl shadow-xs">🛵</div></div><!-- RADAR GPS SIMULATION CARD --><div class="h-44 w-full rounded-2xl bg-[#F0F2F5] border border-gray-100 relative overflow-hidden flex items-center justify-center my-4"><div class="absolute inset-0 bg-[radial-gradient(#0000000d_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="absolute w-28 h-28 rounded-full border border-orange-500/30 animate-ping"></div><div class="absolute w-44 h-44 rounded-full border border-orange-500/15"></div><div class="relative z-10 flex flex-col items-center"><div class="w-11 h-11 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-600/30 text-xl">🛵</div><span class="mt-1.5 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-bold text-gray-800 shadow-xs border border-gray-100">${mockOrder.driverName} • A 800m</span></div><div class="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-lg bg-white/90 backdrop-blur-md text-[9px] font-bold text-gray-600 shadow-2xs">📡 GPS Live Telemetry (Go + Redis GEO)</div></div><!-- PROGRESS STEPS --><div class="grid grid-cols-4 gap-2 pt-2 border-t border-gray-100">${[
		{
			label: "Confirmado",
			done: true,
			time: "14:05"
		},
		{
			label: "En Cocina",
			done: true,
			time: "14:12"
		},
		{
			label: "En Camino",
			done: true,
			current: true,
			time: "14:20"
		},
		{
			label: "Entregado",
			done: false,
			time: "14:32 est."
		}
	].map((step) => renderTemplate`<div class="flex flex-col items-center text-center"><div${addAttribute(`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black mb-1 ${step.current ? "bg-orange-600 text-white ring-3 ring-orange-600/20" : step.done ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-gray-100 text-gray-400"}`, "class")}>${step.done && !step.current ? "✓" : step.current ? "●" : "○"}</div><span${addAttribute(`text-[10px] font-bold leading-tight ${step.current ? "text-orange-600" : step.done ? "text-gray-900" : "text-gray-400"}`, "class")}>${step.label}</span><span class="text-[9px] text-gray-400">${step.time}</span></div>`)}</div></section><!-- DRIVER CARD --><section class="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs flex items-center justify-between gap-3"><div class="flex items-center gap-3"><div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-xs">👨🏻‍🦱</div><div><h4 class="text-xs font-bold text-gray-900">${mockOrder.driverName}</h4><p class="text-[10px] text-gray-400">${mockOrder.driverVehicle}</p><span class="text-[10px] font-bold text-amber-500">${mockOrder.driverRating}</span></div></div><div class="flex items-center gap-2"><button class="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 flex items-center justify-center text-sm transition-colors">📞</button><button class="w-9 h-9 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center text-sm shadow-sm transition-colors">💬</button></div></section><!-- ORDER SUMMARY CARD --><section class="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs space-y-2.5"><h3 class="text-xs font-extrabold uppercase tracking-wider text-gray-400">Detalles de la Orden</h3><p class="text-xs font-bold text-gray-900">${mockOrder.storeName}</p><div class="space-y-1.5 pt-2 border-t border-gray-50 text-xs">${mockOrder.items.map((it) => renderTemplate`<div class="flex justify-between text-gray-700"><span>${it.qty}x ${it.name}</span><span class="font-bold text-gray-900">$${it.price.toFixed(2)}</span></div>`)}</div><div class="pt-2 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-gray-900"><span>Total Pagado</span><span class="text-sm font-black text-orange-600">$${mockOrder.total.toFixed(2)}</span></div></section></main>${renderComponent($$result, "BottomNav", $$BottomNav, {})}</body></html>`;
}, "/Users/freddycamops/Downloads/DoniaWeB-emart-68/eMart_V6.8_Source_Code/traigalo-web/src/pages/orders/track.astro", void 0);
var $$file = "/Users/freddycamops/Downloads/DoniaWeB-emart-68/eMart_V6.8_Source_Code/traigalo-web/src/pages/orders/track.astro";
var $$url = "/orders/track";
// \0virtual:astro:page:src/pages/orders/track@_@astro
var page = () => track_exports;
export { page };
