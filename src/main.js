
  /* eslint-disable */
  import { createApp } from 'vue'
  import App from './App.vue'
  import router from "@/router";
  import vueHelmet from "vue-helmet/src/VueHelmet";
  import * as VueGoogleMaps from "vue3-google-map";
/*  import IdleVue from 'idle-vue'*/
  import IdleVue from "idle-vue";


  const app = createApp(App);

  app.use(VueGoogleMaps,{ load: {key: "AIzaSyAGPbYfcYqdbSBeXdIpH5iWrznfU886Qk8"}})
  app.use(router)
  app.use(vueHelmet)

/*  app.use(IdleVue, {
    eventEmitter: app,
    idleTime: 20000,
    startEventName: "load",
    resetEvents: ["click", "mousemove", "keydown", "touchstart"],
    idleTimeoutCallback: () => {
      app.$router.push("/");
    },
  });*/
  app.mount("#app");




