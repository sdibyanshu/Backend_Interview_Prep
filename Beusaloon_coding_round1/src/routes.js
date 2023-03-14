app.post('/api/products', async (req, res) => {
    try {
        const payload = req.body 

        for (const item of payload) {
            const product = await Inventry.findOne({ productId: item.productId });
            if (product) {
                if (item.op === "add") 
                {
                    product.quantity = product.quantity + item.quantity;
                }                
            
                else if (item.operation === "sub")
                {
                    product.quantity = product.quantity - item.quantity;
                }
                await product.save
            }
        }
        res.status(500).send("Products db updated and added")
    } catch (err) {
        console.log(err);
        res.status(700).send("error")
    }
})

