import mysql from 'mysql2'


export const db = mysql.createConnection({
    host: "siss9898.cafe24app.com",
    user: "siss9898",
    password:"sunyoung9898*",
    database:"siss9898",
    port:3306
})