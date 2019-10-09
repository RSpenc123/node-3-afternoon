module.exports={
    create: (req,res,next)=>{
    const dbInstance = req.app.get('db');
    const {name,descritpion,price,image_url} = req.body;

    dbInstance.create_product([name,descritpion,price,image_url])
        .then( ()=> res.status(200)).send(product)
        .catch(err => {
            res.status(500).send({errorMessage: 'error'})
        })
    },
    getOne: (req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.readProduct(id)
        .then( product => res.sendStatus(200).send(product) )
        .catch(err => {
            res.status(500).send({errorMessage: 'error'})
        })
    },
    getAll: (req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.readProducts()
        .then( products => res.sendStatus(200).send(products) )
        .catch(err => {
            res.status(500).send({errorMessage: 'error'})
        })
    },
    update: (req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.update_products([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: 'error'})
        })
    },
    delete: (req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.delete_products(id)
        .then( () => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: 'error'})
        })
    }







}