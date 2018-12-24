'use strict';

import JsonWebToken from 'jsonwebtoken';


export default class JWT {
    static AUTHORIZATION_KEY = 'x-access-token';

    static getToken(req) {
        let authorization = null;
        let token = null;
        try {
            if (req.query && req.query.token) {
                token = req.query.token;
            } else if (req.headers && req.headers[this.AUTHORIZATION_KEY]) {
                authorization = req.headers[this.AUTHORIZATION_KEY];
            } else if (req.socket && req.socket.handshake.headers[this.AUTHORIZATION_KEY]) {
                authorization = req.socket.handshake.headers[this.AUTHORIZATION_KEY];
            }
            if (authorization) {
                const parts = authorization.split(' ');
                if (parts.length === 2) {
                    const scheme = parts[0];
                    if (/^Bearer$/i.test(scheme)) {
                        token = parts[1];
                    }
                }
            }
        } catch (e) {
            return null;
        }

        return token;
    }

    static async sign(payload, privateKey, option) {
        return new Promise((fulfill, reject) => {
            JsonWebToken.sign(
                payload,
                privateKey,
                option,
                (error, token) => {
                    if (error) {
                        reject(error);
                    } else {
                        fulfill(token);
                    }
                }
            )
        });
    }

    static async verify(token, publicKey, option) {
        return new Promise((fulfill, reject) => {
            JsonWebToken.verify(
                token,
                publicKey,
                option,
                (error, decoded) => {
                    if (error) {
                        reject(error);
                    } else {
                        fulfill(decoded);
                    }
                }
            )
        });
    }

}