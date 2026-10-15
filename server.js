import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(!['/','/index.html','/src/app.js','/src/domain.js','/src/style.css'].includes(pathname)){res.writeHead(404).end('Not found');return}const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));const data=await readFile(file);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'})[path.extname(file)]||'application/octet-stream');res.end(data)}catch{res.writeHead(404).end('Not found')}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Onbalance running on port '+(process.env.PORT||3000)));
