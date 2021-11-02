const houses = require('./db.json')
let globalID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: globalID,
            address,
            price: Number(price),
            imageURL,
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalID++
    },
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(elem => +elem.id === +id)
        if (houses[index].price > 500000 && type === 'plus') {
            res.status(400).send('Cannot go above $500k')
            console.log("cannot go above")
        } else if (houses[index].price < 100000 && type === 'minus') {
            res.status(400).send('Cannot go below $100k')
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
}

