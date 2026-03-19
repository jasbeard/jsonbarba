const PICTORIAL_BASE =
  "https://for0bdxigfuzkgzs.public.blob.vercel-storage.com/pictorial";

export type PictorialImage = { src: string; alt: string };

export const landscapeImages: PictorialImage[] = [
  {
    src: `${PICTORIAL_BASE}/landscapes/osaka_castle.jpg`,
    alt: "Osaka Castle, Japan",
  },
  {
    src: `${PICTORIAL_BASE}/landscapes/tsutenkaku.jpg`,
    alt: "Tsutenkaku View Deck, Japan",
  },
  {
    src: `${PICTORIAL_BASE}/landscapes/katsuoji.jpg`,
    alt: "Katsuo-ji Temple, Japan",
  },
  { src: `${PICTORIAL_BASE}/landscapes/umeda.jpg`, alt: "Umeda Sky, Japan" },
  {
    src: `${PICTORIAL_BASE}/landscapes/an_area_where_I_go_to_the_gym.jpg`,
    alt: "Somewhere in BGC, Philippines",
  },
  {
    src: `${PICTORIAL_BASE}/landscapes/sapa.jpg`,
    alt: "Hotel view at Sapa, Vietnam",
  },
  {
    src: `${PICTORIAL_BASE}/landscapes/usj.jpg`,
    alt: "Universal Studios, Japan",
  },
];

export const portraits: PictorialImage[] = [
  {
    src: `${PICTORIAL_BASE}/portraits/sapa_streets.jpg`,
    alt: "Sapa Random Streets",
  },
  { src: `${PICTORIAL_BASE}/portraits/congcaphe.jpg`, alt: "At Cộng Cà Phê" },
  { src: `${PICTORIAL_BASE}/portraits/corner_cat.jpg`, alt: "A Corner Cat" },
  { src: `${PICTORIAL_BASE}/portraits/sapa_station.jpg`, alt: "Sapa Station" },
  { src: `${PICTORIAL_BASE}/portraits/namba.jpg`, alt: "Hey" },
  { src: `${PICTORIAL_BASE}/portraits/kyoto.jpg`, alt: "Kyoto" },
  { src: `${PICTORIAL_BASE}/portraits/osaka_castle.jpg`, alt: "Osaka Castle" },
  {
    src: `${PICTORIAL_BASE}/portraits/namba_subway.jpg`,
    alt: "Namba Subway Entrance",
  },
  {
    src: `${PICTORIAL_BASE}/portraits/sapa-house.jpg`,
    alt: "Sapa Station Midway",
  },
  {
    src: `${PICTORIAL_BASE}/portraits/fansipan_statues.jpg`,
    alt: "At Fansipan",
  },
  { src: `${PICTORIAL_BASE}/portraits/incense.jpg`, alt: "Incense Village" },
  {
    src: `${PICTORIAL_BASE}/portraits/tower.jpg`,
    alt: "Some Construction at BGC",
  },
  { src: `${PICTORIAL_BASE}/portraits/tree_2.jpg`, alt: "Cental Square" },
  {
    src: `${PICTORIAL_BASE}/portraits/sapa_leading.jpg`,
    alt: "Along Sapa Station",
  },
  { src: `${PICTORIAL_BASE}/portraits/sapa_town.jpg`, alt: "Sapa Town Center" },
  {
    src: `${PICTORIAL_BASE}/portraits/hoalo.jpg`,
    alt: "Outside Hoalo Prison Museum",
  },
];
