const Omegle = require("omegle-node")
const om1 = new Omegle()
const om2 = new Omegle()
om1.on("recaptchaRequired", function(challenge) {
    console.log(`Om 1 >> Captcha Required: ${challenge}`)
})

om2.on("recaptchaRequired", function(challenge) {
    console.log(`Om 1 >> Captcha Required: ${challenge}`)
})

om1.on("waiting", () => {
    console.log("Om 1 >> Waiting")
})

om2.on("waiting", () => {
    console.log("Om 2 >> Waiting")
})

om1.on("connected", () => {
    console.log("Om 1 >> Connected")
})

om2.on("connected", () => {
    console.log("Om 2 >> Connected")
})

om1.on("strangerDisconnected", () => {
    console.log("Om 1 >> Disconnected, Ending session.")
    om1.disconnect()
    om2.disconnect()
})

om2.on("strangerDisconnected", () => {
    console.log("Om 2 >> Disconnected, Ending session.")
    om1.disconnect()
    om2.disconnect()
})

om1.on("gotMessage", (msg1) => {
    console.log(`Stranger 1: ${msg1}`)
    om2.send(msg1)
})

om2.on("gotMessage", (msg2) => {
    console.log(`Stranger 2: ${msg2}`)
    om1.send(msg2)
})

om1.connect()
om2.connect()