# Runtime PBR Material Sources

Most material sets in this folder are sourced from ambientCG and licensed CC0.
The project-generated sandbag albedo is documented below. Retained raw sources
and per-asset source notes are documented in `assets/raw/SOURCES.md`.

Runtime policy:

- albedo/color: 1024 px, sRGB;
- normal, roughness, and metalness: 512 px linear data by default; dedicated
  hero assets such as the Mi-17 paint set may retain 1024 px data maps;
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
Bark012, Leaf001, Fabric042, Rock026, Metal056B, Leather026, Metal010,
GreenhouseWood, GreenhouseSeat, and GreenhousePoster.
Leaf001 is cropped identically across albedo, normal, and roughness, then
UV-fitted across the procedural palm-frond mesh. Its photographed veins and
surface response follow the blade without sampling the source image's black
cutout background.

`SandbagBurlap_1K_Color.jpg` is a project-generated seamless burlap albedo made
with OpenAI ImageGen from the user's sandbag material reference. The retained
raw generation is `assets/raw/generated/sandbag-burlap-source.png`; the runtime
material combines it with the CC0 Fabric042 normal and roughness maps.

`helicopter-mi17/HelicopterMi17_1K_Color.jpg` is a project-generated seamless
olive-drab aircraft-paint albedo made with OpenAI ImageGen from project-owner
supplied Mil Mi-17 references. The retained source is
`assets/raw/generated/helicopter-mi17/HelicopterMi17_OlivePaint_Source.png`.
Its 1K normal, roughness, and metalness maps are runtime derivatives of the CC0
ambientCG Metal010 set. The material is reserved for the procedural
Mi-17-inspired reinforcement helicopter.

`greenhouse-wood/GreenhouseWood_1K_*.jpg` is a project-generated 1K PBR set
created specifically for the Greenhouse building from the project owner's
rural outhouse reference. Its albedo, OpenGL normal, and roughness maps are all
derived from `assets/raw/generated/greenhouse/GreenhouseWood_Source.png`; it
does not reuse Planks039 or another existing world material.

`greenhouse-seat/GreenhouseSeat_1K_*.jpg` is a separate project-generated 1K
PBR set created specifically for the Greenhouse toilet seat and raised lid.
Its albedo, OpenGL normal, and roughness maps are all derived from
`assets/raw/generated/greenhouse/GreenhouseSeat_Source.png`; it does not reuse
an existing plastic, fabric, or metal material.

`greenhouse-poster/GreenhousePoster_Color.jpg` is the project-owner-supplied
Som Tam poster retained at its original 500x708 resolution. It is rendered as
a matte, color-only paper material on the Greenhouse right wall; the retained
source is `assets/raw/user-provided/greenhouse/somtam-poster-source.jpg`.
