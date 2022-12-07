
import { SecretID, SecretSign, DeviceID } from "./config"
import { getRoomkitToken } from "../src/main"

getRoomkitToken({ deviceID: DeviceID, secretID: SecretID, secretSign: SecretSign }).then(token => {
    console.log('mytag token in test', token)
})