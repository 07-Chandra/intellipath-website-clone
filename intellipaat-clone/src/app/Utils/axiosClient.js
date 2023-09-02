import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        common: {
            Authorization: `Bearer 33491850ff44a9d82757100b5a0b8e1bd9f3419416b0567c5bc0b0d8adb6f0331765499dfb8628e541a718f9abef70da05e02d4859d2dfe85011c9478daf0857b7bea0c49f13df3b8afda311192b74e22ab71307ff1072fa4e12adbce63243455cbf0dddd6bd4c2ef83f7e1fdb05f988a01f8b2d15afc36ddf733782df61ff03`,
        },
    },
});
