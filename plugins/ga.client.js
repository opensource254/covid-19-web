export default defineNuxtPlugin(() => {
  if (import.meta.env.MODE !== 'production') return;

  // Inject GA script
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  // Initialise GA tracker
  ga('create', 'UA-145492028-1', 'auto');

  const router = useRouter();

  router.afterEach((to) => {
    ga('set', 'page', to.fullPath);
    ga('send', 'pageview');
  });
});
