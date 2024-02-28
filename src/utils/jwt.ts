const JWT = require('jsonwebtoken');

const createTokenPair = async (payload, publicKey: string, privateKey: any) => {
  try {
    const accessToken: string = await JWT.sign(payload, privateKey, {
      algorithm: 'RS256', // Use 'RS256' for RSA
      expiresIn: '2 days',
    });
    const refreshToken: string = await JWT.sign(payload, privateKey, {
      algorithm: 'RS256', // Use 'RS256' for RSA
      expiresIn: '7 days',
    });

    // Verifired
    await JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) console.log('Error decode: ', err);
      else console.log('Decode here: ', decode);
    });
    return {
      accessToken,
      refreshToken,
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default {
  createTokenPair,
};
