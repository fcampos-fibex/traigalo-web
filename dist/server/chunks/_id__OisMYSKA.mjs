import { r as __exportAll } from "./rolldown-runtime_C1I3wEg2.mjs";
import { c as renderTemplate, h as addAttribute, u as renderHead } from "./server_BeMTfuwJ.mjs";
import "./compiler_B3fB_zd1.mjs";
import { t as createAstro } from "./astro-global_BP7EFX6f.mjs";
import { t as createComponent } from "./global_DrCMk30D.mjs";
// src/pages/stores/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { id } = Astro.params;
	const store = {
		id: id || "s1",
		name: "Black Iron Burger Lab",
		category: "Hamburguesas • Americana • Grill",
		rating: "4.9",
		reviews: "850+ reseñas",
		time: "15-25 min",
		fee: "$1.50",
		cover: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
		address: "Av. Libertador, Edif. Gourmet Plaza, Local 3"
	};
	return renderTemplate`<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><title>${store.name} | Traigalo ⚡</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead($$result)}</head><body class="bg-[#FAFAFC] text-[#1A1D20] min-h-screen flex flex-col pb-28 antialiased selection:bg-orange-500 selection:text-white"><!-- TOP COVER & HEADER --><div class="relative h-64 sm:h-72 w-full bg-gray-900 overflow-hidden"><img${addAttribute(store.cover, "src")}${addAttribute(store.name, "alt")} class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50"></div><!-- FLOATING BACK & FAVORITE BUTTONS --><div class="absolute top-4 left-4 right-4 flex items-center justify-between z-10"><a href="/" class="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-900 shadow-md hover:bg-white transition-all active:scale-95"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg></a><div class="flex items-center gap-2"><button class="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 shadow-md hover:text-red-500 transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button></div></div><!-- STORE HEADER INFO OVERLAY --><div class="absolute bottom-4 left-4 right-4 text-white"><div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-600 text-[10px] font-black uppercase tracking-wider mb-1.5 shadow-xs">★ Top Seleccionado</div><h1 class="text-2xl sm:text-3xl font-black tracking-tight leading-tight">${store.name}</h1><p class="text-xs text-gray-200 mt-0.5">${store.category}</p></div></div><!-- STORE META INFO BAR --><div class="bg-white border-b border-gray-100 px-4 py-3 shadow-2xs"><div class="max-w-4xl mx-auto flex items-center justify-between text-xs font-bold text-gray-700"><div class="flex items-center gap-1"><span class="text-amber-500 text-sm">★</span><span>${store.rating}</span><span class="text-gray-400 font-normal">(${store.reviews})</span></div><div class="w-1 h-1 rounded-full bg-gray-300"></div><div class="flex items-center gap-1"><span>⚡</span><span>${store.time}</span></div><div class="w-1 h-1 rounded-full bg-gray-300"></div><div class="flex items-center gap-1 text-orange-600"><span>🛵</span><span>Envío ${store.fee}</span></div></div></div><!-- MENU CONTAINER --><main class="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-6 w-full"><!-- MENU CATEGORIES TABS --><div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-4">${[
		"Más Populares",
		"Smash Burgers",
		"Sides & Fries",
		"Bebidas"
	].map((cat, idx) => renderTemplate`<button${addAttribute(`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${idx === 0 ? "bg-orange-600 text-white shadow-md shadow-orange-600/20" : "bg-white border border-gray-100 text-gray-600 hover:border-gray-200"}`, "class")}>${cat}</button>`)}</div><!-- MENU ITEMS LIST --><div class="space-y-4">${[
		{
			id: "m1",
			name: "Truffle Smash Double",
			desc: "Doble carne angus smash, queso cheddar madurado, mayonesa de trufa negra y pan brioche tostado con mantequilla.",
			price: 9.8,
			image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
		},
		{
			id: "m2",
			name: "Bacon Jam & Crispy Onion",
			desc: "Carne jugosa 180g, mermelada de tocino artesanal, cebolla crujiente y salsa BBQ ahumada.",
			price: 8.9,
			image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80"
		},
		{
			id: "m3",
			name: "Papas Rústicas Parmesano & Trufa",
			desc: "Papas cortadas a mano dos veces fritas, cubiertas con queso parmesano rallado y aceite de trufa.",
			price: 4.5,
			image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80"
		},
		{
			id: "m4",
			name: "Milkshake de Caramelo Salado",
			desc: "Helado cremoso de vainilla, sirope de caramelo salado casero, crema batida y galleta lotus triturada.",
			price: 5,
			image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
		}
	].map((item) => renderTemplate`<div class="bg-white rounded-3xl p-3.5 border border-gray-100/90 shadow-xs hover:shadow-md transition-all flex gap-3.5 group cursor-pointer"><div class="flex-1 flex flex-col justify-between"><div><h3 class="text-sm font-extrabold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug">${item.name}</h3><p class="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">${item.desc}</p></div><div class="mt-3 flex items-center justify-between"><span class="text-sm font-black text-gray-950">$${item.price.toFixed(2)}</span></div></div><!-- ITEM IMAGE & ADD BUTTON --><div class="relative w-28 h-28 rounded-2xl overflow-hidden bg-gray-100 shrink-0"><img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform"><button class="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-orange-600 hover:bg-orange-700 active:scale-90 text-white flex items-center justify-center shadow-md shadow-orange-600/30 transition-all"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg></button></div></div>`)}</div></main><!-- FLOATING CART BAR --><div class="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"><div class="max-w-4xl mx-auto pointer-events-auto"><a href="/checkout" class="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-sm px-6 flex items-center justify-between shadow-xl shadow-orange-600/30 active:scale-98 transition-all"><div class="flex items-center gap-2.5"><span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">2</span><span>Ver Carrito</span></div><div class="flex items-center gap-2"><span>$14.30</span><span>→</span></div></a></div></div></body></html>`;
}, "/Users/freddycamops/Downloads/DoniaWeB-emart-68/eMart_V6.8_Source_Code/traigalo-web/src/pages/stores/[id].astro", void 0);
var $$file = "/Users/freddycamops/Downloads/DoniaWeB-emart-68/eMart_V6.8_Source_Code/traigalo-web/src/pages/stores/[id].astro";
var $$url = "/stores/[id]";
// \0virtual:astro:page:src/pages/stores/[id]@_@astro
var page = () => _id__exports;
export { page };
