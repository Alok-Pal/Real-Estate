import jwt from 'jsonwebtoken'


export const generateAccessToken = (payload: any) => {
  const { password, ...restPayload } = payload
  // expiresIn works in seconds if given in number
  const token = jwt.sign(restPayload, (process.env.accessTokenSecretKey as string));
  return token;
};

// Verify Access Token
export const verifyAccessToken = (accessToken: string) => {
  let verified;
  try {
    verified = jwt.verify(accessToken, (process.env.accessTokenSecretKey as string));

  }
  catch (err) {
    
    console.log(err)
    verified = false
  }
  return verified;
};