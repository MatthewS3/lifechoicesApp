import { connection as db } from "../config/index.js"
class Products {
    fetchProducts(req, res) {
        const qry = `
        SELECT proID, prodName, prodQuantity,
        prodAmount, userID
        FROM Products;
        `
        db.query(qry, (err, results) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProducts(req, res) {
        const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodAmount, userID
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err, result) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    addProducts(req, res) {
        const qry = `
        INSERT INTO Products
        `
        db.query(qry, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "New product was added"
            })
        })
    }
}
export {
    Products
}