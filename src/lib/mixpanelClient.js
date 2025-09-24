import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN) {
    console.warn("Mixpanel token is missing! Check your .env file.");
    return;
  }
  mixpanel.init(MIXPANEL_TOKEN, {
    autocapture: true,
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
    record_sessions_percent: 1, //records 1% of all sessions
    record_heatmap_data: true,
    ignore_dnt: true,
  });
};
