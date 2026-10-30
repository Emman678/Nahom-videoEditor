/* ==========================================================================
   NAHOM — site configuration
   Edit this file to switch on contact methods, the showreel and the form.
   Anything left as "" is hidden on the live site. Nothing is guessed.
   ========================================================================== */
window.NAHOM_SITE = {
  name: "Nahom",
  role: "Video Editor & Creative Strategist",

  contact: {
    /* Plain address, e.g. "name@example.com". Enables "Send by email" + footer link. */
    email: "",
    /* Full https:// profile URLs (Upwork, Instagram, TikTok, LinkedIn). */
    upwork: "https://www.upwork.com/freelancers/~01b3fd83762683f617?mp_source=share",
    instagram: "https://www.instagram.com/nadielcreative/?__pwa=1#",
    tiktok: "",
    linkedin: "",
    /* Telegram: a full https://t.me/... link. */
    telegram: "https://t.me/Nahom_Dani",
    /* WhatsApp: digits with country code (e.g. "251911000000") or a full https://wa.me/... link. */
    whatsapp: "https://wa.me/qr/VOUT7SXVLRHHJ1",
    /* Optional: a form service URL (Formspree, Getform, Basin, your own API).
       The form POSTs JSON here and only says "sent" when the server replies OK. */
    formEndpoint: ""
  },

  /* Subject line used for mailto and for the form message. */
  mailSubject: "Video editing project inquiry",

  /* Optional hero footage: a short, muted, looping clip that plays inside the portrait frame.
     Leave empty to keep the still portrait. The portrait stays as the poster and as the
     fallback for people who prefer reduced motion. Never plays sound. */
  hero: {
    videoUrl: ""    /* e.g. "hero-loop.mp4" */
  },

  /* Showreel: leave videoUrl empty to show the quiet "coming soon" panel.
     videoUrl can be a local file (showreel.mp4), a YouTube link or a Vimeo link. */
  showreel: {
    videoUrl: "",
    poster: "",     /* e.g. "showreel-poster.jpg" */
    captions: ""    /* optional .vtt file for local videos */
  }
};
