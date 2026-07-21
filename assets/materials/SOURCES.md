# Runtime PBR Material Sources

Most material sets in this folder are sourced from ambientCG and licensed CC0.
The project-generated sandbag albedo is documented below. Retained raw sources
and per-asset source notes are documented in `assets/raw/SOURCES.md`.

Runtime policy:

- albedo/color: 1024 px, sRGB;
- normal, roughness, and metalness: 512 px, linear data;
- palm-frond maps: a shared 256x512 interior crop, matching the long blade
  aspect ratio and excluding the source photograph's black background;
- Grass001 roughness is clamped into the matte 0.82-1.0 range;
- Rock026 roughness is normalized into the dry-rock 0.78-0.98 range;
- textured materials use their roughness map at a neutral scalar of 1.0, so the
  authored linear data is not silently made glossier a second time;
- anisotropic filtering: capped at 8x on every platform;
- textures are cached by URL and channel configuration;
- repeated surfaces use world-scale projected UVs instead of stretching one
  texture independently over every object face;
- the helipad uses a unique 1024 px baked atlas derived from Concrete028, with
  the weathered H marking integrated into that single top-surface texture.

Runtime sets include Grass001, Concrete028, Planks039, ThatchedRoof002B,
Bark012, Leaf001, Fabric042, Rock026, Metal056B, Leather026, and Metal010.
Leaf001 is cropped identically across albedo, normal, and roughness, then
UV-fitted across the procedural palm-frond mesh. Its photographed veins and
surface response follow the blade without sampling the source image's black
cutout background.

`SandbagBurlap_1K_Color.jpg` is a project-generated seamless burlap albedo made
with OpenAI ImageGen from the user's sandbag material reference. The retained
raw generation is `assets/raw/generated/sandbag-burlap-source.png`; the runtime
material combines it with the CC0 Fabric042 normal and roughness maps.
