/* ==========================================================================
   NAHOM — selected work (data-driven)
   Add, remove or reorder objects below. The grid, filters and modal update
   automatically. Leave optional fields empty ("" or []) and they are hidden.

   Fields
     id            unique, url-safe string
     title         shown on the card and in the modal
     category      must be one of CATEGORIES below (filters use the same values)
     aspectRatio   "9:16", "16:9", "1:1", "4:5" …
     thumbnail     poster image path (optional; a neutral designed card is used if empty)
     videoUrl      local file (x.mp4), YouTube or Vimeo link (optional)
     captions      .vtt file for local videos (optional)
     summary       one line of context (optional)
     role          what Nahom did (optional)
     client        only with permission (optional)
     deliverables  array of strings (optional)
     featured      true = sorts first inside "All"

   The "UGC Ad 01 … Creative 03" entries below are TEMPORARY labels that mirror
   the source PDF layout. They are not real client projects. Replace each one
   with a real piece of work, or delete it.
   ========================================================================== */
window.NAHOM_CATEGORIES = ["UGC Ads", "AI UGC Ads", "VSLs", "Other Creatives"];

window.NAHOM_PROJECTS = [
  { id: "ugc-01", title: "UGC Ad 01", category: "UGC Ads", aspectRatio: "9:16", thumbnail: "", videoUrl: "UGC AD.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },
  { id: "ugc-02", title: "UGC Ad 02", category: "UGC Ads", aspectRatio: "9:16", thumbnail: "", videoUrl: "UGC 1.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },
  { id: "ugc-03", title: "UGC Ad 03", category: "UGC Ads", aspectRatio: "9:16", thumbnail: "", videoUrl: "UGC 3.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },

  { id: "ai-ugc-podcast", title: "Podcast AI UGC", category: "AI UGC Ads", aspectRatio: "9:16", thumbnail: "", videoUrl: "Podcast_AI_UGC.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },
  { id: "ai-ugc-podcast-style", title: "Podcast-Style UGC Ad", category: "AI UGC Ads", aspectRatio: "9:16", thumbnail: "", videoUrl: "Podcast-Style UGC Ad.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },
  { id: "ai-ugc", title: "AI UGC", category: "AI UGC Ads", aspectRatio: "9:16", thumbnail: "", videoUrl: "UGC.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },

  { id: "vsl-01", title: "VSL 01", category: "VSLs", aspectRatio: "16:9", thumbnail: "", videoUrl: "VSL 1.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },
  { id: "vsl-02", title: "VSL 02", category: "VSLs", aspectRatio: "16:9", thumbnail: "", videoUrl: "Pizza.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },
  { id: "vsl-03", title: "VSL 03", category: "VSLs", aspectRatio: "16:9", thumbnail: "", videoUrl: "VSL.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },

  { id: "creative-01", title: "Creative 01", category: "Other Creatives", aspectRatio: "9:16", thumbnail: "", videoUrl: "creative ugc.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },
  { id: "creative-02", title: "Creative 02", category: "Other Creatives", aspectRatio: "9:16", thumbnail: "", videoUrl: "VSL_AI_Generated.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false },
  { id: "creative-03", title: "Creative 03", category: "Other Creatives", aspectRatio: "9:16", thumbnail: "", videoUrl: "assets\videos\VSL _Genius_mind.mp4", captions: "", summary: "", role: "", client: "", deliverables: [], featured: false }
];
s