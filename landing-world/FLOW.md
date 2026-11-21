# Landing Traigalo · producción en Flow

Un vuelo continuo de cámara por un Higuerote en miniatura: zona → comida → mercado y farmacia → repartidor → tu puerta. El scroll de la web controla el tiempo del video.

Formato de todo: **16:9, 1080p**. Guarda cada archivo con el nombre exacto en `landing-world/drops/`.

## Ronda 1 · 5 imágenes y 5 videos de entrada

### Paso A · Imágenes (Flow → crear imagen, o Gemini)

Pega SIEMPRE este bloque idéntico al inicio de cada imagen. Que sea idéntico es lo que hace que las 5 escenas parezcan un solo mundo.

```
Isometric low-poly 3D diorama floating as a small rounded island on a plain solid #FAF6EF background with a soft contact shadow beneath it. Soft matte clay 3D render, rounded toy-model shapes, gentle warm studio lighting, soft long shadows, tilt-shift miniature look. Cohesive color palette of cream #FAF6EF, warm orange #F2801F, terracotta #C2452D, leaf green #2F7D4F, sea blue #2A6F97, deep navy #1F2535. Highly detailed, centered composition, absolutely no text, no letters, no numbers, no logos.
```

Y después la línea `Subject:` de cada escena:

| Archivo | Subject |
|---|---|
| `scene1.png` | Subject: a tiny Caribbean coastal town on a bay, colorful low houses, palm trees, a small pier with fishing boats, turquoise water, little scooters on the streets and glowing map pins over a few shops. |
| `scene2.png` | Subject: a cozy small restaurant with an open terracotta awning, a cook at a grill with steam rising, pizzas and arepas on the counter, a few tables with tiny diners, string lights. |
| `scene3.png` | Subject: a friendly corner market and pharmacy side by side, fruit and vegetable crates outside, shelves of groceries, a green pharmacy cross lamp, a shopkeeper packing a paper bag. |
| `scene4.png` | Subject: a delivery rider on an orange motorcycle with a large insulated delivery box, riding along a winding coastal road between palm trees and houses, a small route line of glowing dots ahead. |
| `scene5.png` | Subject: the front porch of a cheerful small house, the rider handing a paper bag to a smiling family at the open door, a phone in the customer's hand, warm evening light from the windows. |

Revisa que ninguna imagen tenga letras ni logos. Si sale texto, regenérala.

### Paso B · Videos de entrada (Flow → Frames to Video, solo primer fotograma = la imagen de la escena, 8 s)

| Archivo | Primer fotograma | Prompt |
|---|---|---|
| `dive1.mp4` | scene1.png | Single continuous cinematic camera move, no cuts. Begin high and far, looking down at the whole tiny coastal town from outside like a tiny model. The camera slowly glides forward and descends, flying low across the town toward the glowing map pins over the shops. Soft matte clay diorama, tilt-shift miniature, warm light, cream, orange, terracotta, green and sea blue palette. Smooth, graceful, slow motion, subtle parallax. No text, no captions. |
| `dive2.mp4` | scene2.png | Single continuous cinematic camera move, no cuts. Begin high and far, looking down at the whole small restaurant from outside like a tiny model. The camera slowly glides forward and descends toward the cook at the grill, as if flying inside. As the camera pushes in, the roof gently lifts and opens away to reveal the warm interior. Soft matte clay diorama, tilt-shift miniature, warm light, cream, orange, terracotta, green and sea blue palette. Smooth, graceful, slow motion, subtle parallax. No text, no captions. |
| `dive3.mp4` | scene3.png | Single continuous cinematic camera move, no cuts. Begin high and far, looking down at the market and pharmacy from outside like a tiny model. The camera slowly glides forward and descends toward the shopkeeper packing the paper bag, as if flying inside. As the camera pushes in, the roof gently lifts and opens away to reveal the warm interior. Soft matte clay diorama, tilt-shift miniature, warm light, cream, orange, terracotta, green and sea blue palette. Smooth, graceful, slow motion, subtle parallax. No text, no captions. |
| `dive4.mp4` | scene4.png | Single continuous cinematic camera move, no cuts. Begin high and far, looking down at the coastal road from outside like a tiny model. The camera slowly glides forward and descends, flying low alongside the rider on the orange motorcycle, palm trees sliding past in parallax. Soft matte clay diorama, tilt-shift miniature, warm light, cream, orange, terracotta, green and sea blue palette. Smooth, graceful, slow motion, subtle parallax. No text, no captions. |
| `dive5.mp4` | scene5.png | Single continuous cinematic camera move, no cuts. Begin high and far, looking down at the small house from outside like a tiny model. The camera slowly glides forward and descends toward the open door where the rider hands the bag to the family. Soft matte clay diorama, tilt-shift miniature, warm light, cream, orange, terracotta, green and sea blue palette. Smooth, graceful, slow motion, subtle parallax. No text, no captions. |

Cuando los 5 videos estén en `drops/`, avísame. Extraigo el último cuadro de cada uno y el primero del siguiente para la ronda 2.

## Ronda 2 · 4 transiciones (las preparo yo después de la ronda 1)

Flow → Frames to Video con primer y último fotograma, 5 s. Te entregaré `c1_start.png`, `c1_end.png` … `c4_end.png` y este prompt para cada una:

```
Single continuous cinematic camera move, no cuts. The camera smoothly pulls up and back out of the scene, rising into the sky, then glides forward across the connected miniature coastal world and arrives above the next scene, beginning to descend toward it. One connected miniature clay world, seamless flowing aerial transition. Soft matte clay diorama, tilt-shift miniature, warm light, cream, orange, terracotta, green and sea blue palette. Smooth graceful slow motion. No text, no captions.
```

Archivos: `conn1.mp4` (escena 1 → 2), `conn2.mp4` (2 → 3), `conn3.mp4` (3 → 4), `conn4.mp4` (4 → 5).

## Textos de cada escena (van en la web, no en el video)

| Escena | Título | Frase |
|---|---|---|
| 1 | Todo Higuerote, a tu puerta | Comida, mercado, farmacia y tiendas de tu zona en una sola app. |
| 2 | Tu comida favorita, caliente | Pide a los restaurantes de tu zona y síguelo en tiempo real. |
| 3 | Mercado y farmacia sin salir | Varias tiendas en un mismo carrito, precios en dólares y bolívares. |
| 4 | Repartidores de aquí | Gente de la zona que conoce cada calle. |
| 5 | Listo en tu puerta | Elige tu ubicación y empieza a pedir. Botón a /bienvenida. |
