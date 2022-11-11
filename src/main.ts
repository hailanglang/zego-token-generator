
import axios from 'axios';
import md5 from 'md5';

const getTokenUrl = `https://roomkit-api.zego.im/auth/get_sdk_token`

interface RoomkitTokenInter { deviceID: string, secretSign: string, secretID: number }

const getRoomkitToken = async ({ deviceID, secretSign, secretID }: RoomkitTokenInter): Promise<string | Error> => {
  const timestamp = Math.floor(new Date().getTime() / 1000) + 3600 * 24
  const verifyType = 3
  const version = 1
  const signStr = `${secretSign.substring(0, 32)}${deviceID}${verifyType}${version}${timestamp}`
  const sign = md5(signStr)

  const res = await axios({
    method: "post",
    url: getTokenUrl,
    data: {
      common_data: {
        platform: 32
      },
      sign: sign,
      secret_id: secretID,
      device_id: deviceID,
      timestamp: timestamp
    }
  })
  if (res.data.ret.code !== 0) throw new Error(`get token error:{code:${res.data.ret.code},message:${res.data.ret.message}}`)
  return res.data.data.sdk_token
}


export { getRoomkitToken };
