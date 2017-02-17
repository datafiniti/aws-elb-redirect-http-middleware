## aws-elb-redirect-http-middleware

Redirects all HTTP traffic from an AWS Elastic Load Balancer to HTTPS without resorting to nginx or apache

---

### Purpose:
- If you're using node/express servers in production that sit behind an AWS ELB, Redirecting all HTTP traffic to HTTPS can be a little tricky because of the following:
  
  ```
  User request (https://<your-domain>) -> AWS ELB (http://<one-of-your-servers>) -> One of your servers
  ```

- This problem occurs because your SSL cert is attached to your load balancer, but your load balancer forwards requests to your servers using http.


### Example Usage:

```javascript
const express = require("express");
const server = express();
const redirectHTTPMiddleware = require("aws-elb-redirect-http-middleware");
const environment = process.ENV.SERVER_ENV || "development";

if (environment === "production") server.use(redirectHTTPMiddleware);
```