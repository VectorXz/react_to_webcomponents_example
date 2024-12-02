import r2wc from "@r2wc/react-to-web-component"

import Header from "./Header"

const HeaderWC = r2wc(Header, {
  props: {
    text: "string",
  },
})

customElements.define("header-wc", HeaderWC)
