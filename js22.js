const http = require('http');
const express = require('express');
// 생성자로 생성함
const app = express();
const server = http.createServer(app);
const PORT = 4000;
// var temp1 = `<!DOCTYPE>
// <html>
//     <head>
//         <title></title>
//     </head>

//     <body>
//         <nav id="gnb">
//             <a href = "/">메인</a>
//             <a href = "/sub1">서브</a>
//             <a href = "/detail">상세</a>
//         </nav>
//     </body>
// </html>
// `;

// var temp2 = `</body>
// </html>`;

// var home = `<h2>메인 페이지</h2>`
// var sub = `<h2> 서브 페이지</h2>`
// var detail = `<h2> 상세 페이지</h2>`

app.get('/', (req,res)=>{
    // res.send(temp1+home+temp2)
    res.sendFile(__dirname+"/index.html");
});

app.get('/sub1',(req,res) => {
    //res.send(temp1+sub+temp2);
    res.sendFile(__dirname+"/sub1.html");
});

app.get('/detail',(req,res) => {
    //res.send(temp1+detail+temp2);
    res.sendFile(__dirname+"/detail.html");
});

server.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
