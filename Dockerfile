FROM node:20-alpine
WORKDIR /app
RUN echo '{"name":"test","scripts":{"start":"node server.js"}}' > package.json
RUN echo 'const http = require("http"); http.createServer((q,s) => { s.end("ok"); }).listen(3000);' > server.js
EXPOSE 3000
CMD ["node", "server.js"]
