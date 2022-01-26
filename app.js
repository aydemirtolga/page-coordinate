const app = Vue.createApp({
    data() {
        return {
            coords: {
                x: 0,
                y: 0
            }
        };
    },
    methods: {
        updateCoords(message, event) {
            //console.log(message, event.x, event.y);
            this.coords = {
                x: event.x,
                y: event.y
            }
        },
    }
}).mount("#app");