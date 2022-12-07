# Zego-token-generator



## Installing

```
yarn add @hailanglang/zego-token-generator"
```





## How it Use



##### using `import`

```javascript
import { getRoomkitToken } from "@hailanglang/zego-token-generator"

// Refer https://doc-zh.zego.im/article/12854 to get SecretID and SecretSign
const SecretID = 0; 
const SecretSign = '';
const deviceID = ZegoRoomKit.deviceID(); // https://doc-zh.zego.im/article/8111

getRoomkitToken({ deviceId, SecretSign, SecretID }).then(token => {
    console.log('token', token)
})

```



##### Using unpkg CDN:

```javascript
<script src="https://unpkg.com/@hailanglang/zego-token-generator@0.0.12/dist/main.iife.js"></script>
<script>

    // Refer https://doc-zh.zego.im/article/12854 to get SecretID and SecretSign
    const SecretID = 0;
    const SecretSign = '';
    const deviceID = ZegoRoomKit.deviceID(); // https://doc-zh.zego.im/article/8111
    
    zegoTokenGenerator.getRoomkitToken({ deviceID, secretSign: SecretSign, secretID: SecretID }).then(token => {
        console.log('token', token)
    })
</script>
```

