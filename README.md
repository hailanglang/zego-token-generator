# Zego-token-generator



### Get Roomkit Token

```javascript
import { getRoomkitToken } from "@hailanglang/zego-token-generator"

// Refer https://doc-zh.zego.im/article/12854 to get SecretID and SecretSign
const SecretID = 0; 
const SecretSign = '';
const deviceID = ZegoRoomKit.deviceID(); // https://doc-zh.zego.im/article/8111

getRoomkitToken({ deviceId, SecretSign, SecretID }).then(token => {
    console.log('mytag token', token)
})

```



