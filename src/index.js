import Vue from "vue"
import vuetify from "./plugins/vuetify"
import App from "./App"

const render = () => {
    let el = document.createElement("div")
    el.id = "app"
    document.body.appendChild(el)
    let vm = new Vue({
                     vuetify,
                     render: h => h(App)
    }).$mount("#app")
    return vm
}

render()
