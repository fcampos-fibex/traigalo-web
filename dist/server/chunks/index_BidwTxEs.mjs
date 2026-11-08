import { r as __exportAll } from "./rolldown-runtime_C1I3wEg2.mjs";
import { c as renderTemplate, h as addAttribute, l as maybeRenderHead, r as renderComponent, u as renderHead } from "./server_BeMTfuwJ.mjs";
import "./compiler_B3fB_zd1.mjs";
import { t as $$BottomNav } from "./BottomNav_k7EsWuXe.mjs";
import { t as createComponent } from "./global_DrCMk30D.mjs";
// src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40"><div class="max-w-4xl mx-auto px-4 sm:px-6 py-3.5"><!-- TOP ROW: LOCATION + USER PROFILE --><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-2.5"><div class="w-9 h-9 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-base shadow-xs shrink-0">📍</div><div class="flex flex-col"><span class="text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-tight">Entregar en</span><div class="flex items-center gap-1 cursor-pointer group"><span class="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Av. Libertador 102, Caracas</span><svg class="w-3.5 h-3.5 text-orange-600 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg></div></div></div><div class="flex items-center gap-2.5"><a${addAttribute("http://directus.44.217.190.140.sslip.io", "href")} target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-600 text-xs font-bold transition-colors"><span>CMS</span><span class="text-[10px]">↗</span></a><!-- NOTIFICATION BELL --><button class="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-100 flex items-center justify-center text-gray-700 transition-colors relative"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg><span class="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full ring-2 ring-white"></span></button><!-- USER AVATAR --><div class="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 shadow-sm"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="User profile" class="w-full h-full object-cover rounded-full"></div></div></div><!-- SEARCH BAR ROW --><div class="mt-3.5 flex items-center gap-2.5"><div class="relative flex-1"><input type="text" placeholder="Buscar platos, restaurantes o supermercados..." class="w-full h-11 pl-10 pr-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"><svg class="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><!-- FILTER BUTTON --><button class="w-11 h-11 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center shadow-md shadow-orange-600/20 transition-all shrink-0 active:scale-95"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></button></div></div></header>`;
}, "/Users/freddycamops/Downloads/DoniaWeB-emart-68/eMart_V6.8_Source_Code/traigalo-web/src/components/Header.astro", void 0);
// src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-gray-950 text-gray-400 py-12 border-t border-gray-900 mt-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8"><div class="space-y-4"><span class="text-2xl font-black bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Traigalo ⚡</span><p class="text-xs text-gray-500 leading-relaxed">Plataforma Multi-Vendor de Delivery y Comercio Local Enterprise Tier-1. Arquitectura de alto rendimiento sobre Go, Astro, KMP y PostgreSQL.</p></div><div><h4 class="text-white text-sm font-semibold mb-3">Plataforma</h4><ul class="space-y-2 text-xs"><li><a href="/" class="hover:text-white transition-colors">Tiendas y Restaurantes</a></li><li><a href="/orders/track" class="hover:text-white transition-colors">Estado de Pedido</a></li></ul></div><div><h4 class="text-white text-sm font-semibold mb-3">Arquitectura</h4><ul class="space-y-2 text-xs"><li><span class="text-gray-500">Go Core API (VSA)</span></li><li><span class="text-gray-500">Astro SSR + Islands</span></li><li><span class="text-gray-500">Kotlin Multiplatform (KMP)</span></li><li><span class="text-gray-500">PostgreSQL 16 + PostGIS</span></li></ul></div><div><h4 class="text-white text-sm font-semibold mb-3">Operaciones</h4><p class="text-xs text-gray-500 mb-2">Desplegado en Dokploy (AWS EC2)</p><span class="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">● Dokploy Swarm Active</span></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-900 text-center text-xs text-gray-600">© ${currentYear} Traigalo Technologies Inc. Todos los derechos reservados.</div></footer>`;
}, "/Users/freddycamops/Downloads/DoniaWeB-emart-68/eMart_V6.8_Source_Code/traigalo-web/src/components/Footer.astro", void 0);
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><title>Traigalo ⚡ | Comida y Delivery</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead($$result)}</head><body class="bg-[#FAFAFC] text-[#1A1D20] min-h-screen flex flex-col pb-24 md:pb-12 antialiased selection:bg-orange-500 selection:text-white">${renderComponent($$result, "Header", $$Header, {})}<main class="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-4 w-full"><!-- MINIMAL PROMOTIONAL CARD (FIGMA STYLE) --><section class="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FF7A00] to-[#FF9432] p-5 sm:p-7 shadow-lg shadow-orange-500/15 mb-6 text-white"><div class="relative z-10 max-w-[65%]"><span class="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider mb-2">Oferta Especial</span><h2 class="text-xl sm:text-2xl font-black leading-tight tracking-tight mb-1">30% de Descuento</h2><p class="text-xs text-orange-50 leading-relaxed mb-4">En tu primer pedido con el código <strong class="underline">TRAIGALO</strong></p><a href="#popular" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-orange-600 text-xs font-bold shadow-md shadow-black/5 hover:bg-orange-50 transition-all active:scale-95">Pedir Ahora</a></div><div class="absolute -right-4 -bottom-6 w-44 h-44 pointer-events-none select-none"><img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" alt="Delicious burger" class="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white/30 transform rotate-12 scale-110" loading="eager"></div></section><!-- CATEGORIES HORIZONTAL PILLS --><section class="mb-6"><div class="flex items-center justify-between mb-3 px-0.5"><h3 class="text-sm font-extrabold text-gray-900 tracking-tight">Categorías</h3><span class="text-xs font-bold text-orange-600 hover:underline cursor-pointer">Ver todas</span></div><div class="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">${[
		{
			id: "1",
			name: "Todo",
			icon: "🍽️",
			active: true
		},
		{
			id: "2",
			name: "Burgers",
			icon: "🍔",
			active: false
		},
		{
			id: "3",
			name: "Pizza",
			icon: "🍕",
			active: false
		},
		{
			id: "4",
			name: "Sushi",
			icon: "🍣",
			active: false
		},
		{
			id: "5",
			name: "Postres",
			icon: "🧁",
			active: false
		},
		{
			id: "6",
			name: "Bebidas",
			icon: "🧋",
			active: false
		}
	].map((cat) => renderTemplate`<button${addAttribute(`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all ${cat.active ? "bg-orange-600 text-white shadow-md shadow-orange-600/25 ring-2 ring-orange-600/20" : "bg-white border border-gray-100 text-gray-700 hover:border-gray-200 shadow-2xs"}`, "class")}><span class="text-sm">${cat.icon}</span><span>${cat.name}</span></button>`)}</div></section><!-- POPULAR ITEMS (2-COLUMN CLEAN GRID - FIGMA CORE ELEMENT) --><section id="popular" class="mb-8"><div class="flex items-center justify-between mb-3 px-0.5"><h3 class="text-sm font-extrabold text-gray-900 tracking-tight">Más Populares</h3><span class="text-xs font-bold text-orange-600 hover:underline cursor-pointer">Ver todo</span></div><div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5">${[
		{
			id: "f1",
			name: "Classic Smash Cheeseburger",
			restaurant: "Black Iron Burger",
			price: 8.5,
			rating: "4.9",
			time: "15-20 min",
			image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
			popular: true
		},
		{
			id: "f2",
			name: "Special Salmon Dragon Roll",
			restaurant: "Sakura Omakase",
			price: 12,
			rating: "4.9",
			time: "20-25 min",
			image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=500&q=80",
			popular: true
		},
		{
			id: "f3",
			name: "Pizza Margherita di Bufala",
			restaurant: "Napoli Antica",
			price: 10.5,
			rating: "4.8",
			time: "25-30 min",
			image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
			popular: false
		},
		{
			id: "f4",
			name: "Tacos al Pastor con Piña",
			restaurant: "Taquería La Original",
			price: 7.2,
			rating: "4.9",
			time: "15-20 min",
			image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=500&q=80",
			popular: true
		}
	].map((item) => renderTemplate`<div class="bg-white rounded-3xl p-2.5 border border-gray-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"><div><!-- ITEM IMAGE WITH FAVORITE BUTTON --><div class="relative h-32 w-full rounded-2xl overflow-hidden bg-gray-50 mb-2.5"><img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"><!-- RATING BADGE --><div class="absolute bottom-2 left-2 px-2 py-0.5 rounded-lg bg-white/90 backdrop-blur-md text-[10px] font-bold text-gray-900 flex items-center gap-1 shadow-xs"><span class="text-amber-500">★</span><span>${item.rating}</span></div><!-- FAVORITE HEART --><button class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-red-500 shadow-xs transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button></div><!-- INFO --><h4 class="text-xs font-bold text-gray-900 leading-snug line-clamp-1 group-hover:text-orange-600 transition-colors">${item.name}</h4><p class="text-[10px] text-gray-400 mt-0.5 line-clamp-1">${item.restaurant} • ${item.time}</p></div><!-- PRICE + QUICK ADD BUTTON --><div class="mt-3 flex items-center justify-between pt-1"><span class="text-sm font-black text-gray-900">$${item.price.toFixed(2)}</span><button class="w-8 h-8 rounded-full bg-orange-600 hover:bg-orange-700 active:scale-90 text-white flex items-center justify-center shadow-md shadow-orange-600/20 transition-all"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg></button></div></div>`)}</div></section><!-- NEARBY RESTAURANTS --><section class="mb-6"><div class="flex items-center justify-between mb-3 px-0.5"><div><h3 class="text-sm font-extrabold text-gray-900 tracking-tight">Restaurantes Destacados</h3><p class="text-[10px] text-gray-400">Entrega rápida y sin contacto</p></div></div><div class="space-y-3.5">${[{
		id: "s1",
		name: "Black Iron Burger Lab",
		cuisine: "Americana • Burgers gourmet",
		rating: "4.9",
		reviews: "850",
		time: "15-25 min",
		fee: "$1.50",
		cover: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
		promo: "2x1 en Smash Burgers"
	}, {
		id: "s2",
		name: "Sakura Omakase Bar",
		cuisine: "Japonesa • Sushi tradicional",
		rating: "4.9",
		reviews: "1.2k",
		time: "20-30 min",
		fee: "Gratis",
		cover: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=700&q=80",
		promo: "15% OFF en Rolls"
	}].map((store) => renderTemplate`<div class="bg-white rounded-3xl p-3 border border-gray-100 shadow-xs hover:shadow-md transition-all flex items-center gap-3.5 group cursor-pointer"><div class="w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 shrink-0 relative"><img${addAttribute(store.cover, "src")}${addAttribute(store.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform"><span class="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded-md bg-black/70 text-[9px] font-bold text-white">${store.time}</span></div><div class="flex-1 min-w-0"><div class="flex items-center justify-between gap-2"><h4 class="text-sm font-extrabold text-gray-900 truncate group-hover:text-orange-600 transition-colors">${store.name}</h4><div class="flex items-center gap-1 text-[11px] font-bold text-gray-900 shrink-0"><span class="text-amber-500">★</span><span>${store.rating}</span></div></div><p class="text-[11px] text-gray-400 mt-0.5 truncate">${store.cuisine}</p><div class="mt-2 flex items-center gap-2"><span class="px-2 py-0.5 rounded-md bg-orange-50 text-orange-600 text-[10px] font-bold">${store.promo}</span><span class="text-[10px] text-gray-400">Envío ${store.fee}</span></div></div></div>`)}</div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "BottomNav", $$BottomNav, {})}</body></html>`;
}, "/Users/freddycamops/Downloads/DoniaWeB-emart-68/eMart_V6.8_Source_Code/traigalo-web/src/pages/index.astro", void 0);
var $$file = "/Users/freddycamops/Downloads/DoniaWeB-emart-68/eMart_V6.8_Source_Code/traigalo-web/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
