import { Response, Request, NextFunction } from 'express'
import { NODE_ENV } from '../config'
// Define My Manual and Customized MiddleWare For identifying Http Requests

const myCustomizedLogger = (req: Request, res: Response, next: NextFunction): void => {
  next()

  // store Raw HTTP Header in string Array

  const rawHeaders: Array<string> = req.rawHeaders

  // Define Public IP and Country alpha 2 code  as String and assign default value to it

  let publicIP: string
  publicIP = 'Not Found'
  let countryCode: string
  countryCode='Unknown'
  //for loop to check  regex every Element in Http Header Array if it match regex for IPv4 and two Capital letters for

  for (let i: number = 0; i < rawHeaders.length; i++) {
    // i used regex expressions for ipv4 and counrty code from regexlib.com

    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        rawHeaders[i]
      ) &&
      rawHeaders[i] != '127.0.0.1'
    ) {
      publicIP = rawHeaders[i]
    }
    if (
      /^(A(D|E|F|G|I|L|M|N|O|R|S|T|Q|U|W|X|Z)|B(A|B|D|E|F|G|H|I|J|L|M|N|O|R|S|T|V|W|Y|Z)|C(A|C|D|F|G|H|I|K|L|M|N|O|R|U|V|X|Y|Z)|D(E|J|K|M|O|Z)|E(C|E|G|H|R|S|T)|F(I|J|K|M|O|R)|G(A|B|D|E|F|G|H|I|L|M|N|P|Q|R|S|T|U|W|Y)|H(K|M|N|R|T|U)|I(D|E|Q|L|M|N|O|R|S|T)|J(E|M|O|P)|K(E|G|H|I|M|N|P|R|W|Y|Z)|L(A|B|C|I|K|R|S|T|U|V|Y)|M(A|C|D|E|F|G|H|K|L|M|N|O|Q|P|R|S|T|U|V|W|X|Y|Z)|N(A|C|E|F|G|I|L|O|P|R|U|Z)|OM|P(A|E|F|G|H|K|L|M|N|R|S|T|W|Y)|QA|R(E|O|S|U|W)|S(A|B|C|D|E|G|H|I|J|K|L|M|N|O|R|T|V|Y|Z)|T(C|D|F|G|H|J|K|L|M|N|O|R|T|V|W|Z)|U(A|G|M|S|Y|Z)|V(A|C|E|G|I|N|U)|W(F|S)|Y(E|T)|Z(A|M|W))$/.test(
        rawHeaders[i]
      )
    ) {
      countryCode = rawHeaders[i]
    }
  }

  // Logging Request Every Incoming  HTTP Request
if((NODE_ENV as string)==='dev'){
  console.log(
    `\nSome One Join Server ! -> {Method: ${req.method}},{Url: ${req.originalUrl}},{StatusCode: ${
      res.statusCode
    }},{HttpVersion:${req.httpVersion}},{Date: ${Date()
      .toString()
      .slice(4, 24)}},{Country-Code: ${countryCode}},{IP: ${
      req.ip
    }},{Public-IP: ${publicIP}},{Device: ${req.headers['user-agent']}}\n`
  )
}

else{

		console.log(`${req.method} ${req.originalUrl} ${res.statusCode}  ${Date().toString().slice(4,24)}  ${publicIP} ${req.headers['user-agent']}`);



}

}

export { myCustomizedLogger }

