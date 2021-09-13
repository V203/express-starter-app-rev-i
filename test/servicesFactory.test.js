const assert  = require("assert");
const ServicesFactory = require("../servicesFactory")
const pg = require("pg");
const servicesFactory = require("../servicesFactory");
const Pool = pg.Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/db_test';
const pool = new Pool({
    connectionString,
});

describe("Pizza perfect factory functions Test",()=>{

    it("The price of a small pizza should equal 31.99",()=>{
        let servicesFactory = ServicesFactory(pool)
        let actual = servicesFactory.getPizzaPriceSmall()
        let expected = 31.99
        assert.equal(actual,expected)

    })

    it("The price of a medium pizza should equal 58.99",()=>{
        let servicesFactory = ServicesFactory(pool)
        let actual = servicesFactory.getPizzaPriceMedium()
        let expected = 58.99
        assert.equal(actual,expected)

    })

    it("The price of a large pizza should equal 87.99",()=>{
        let servicesFactory = ServicesFactory(pool)
        let actual = servicesFactory.getPizzaPriceLarge()
        let expected = 87.99
        assert.equal(actual,expected)

    })
    
    it("A small pizza added twice should equal 63.98",()=>{
        let servicesFactory = ServicesFactory(pool)
        servicesFactory.addSmallPizza()
        servicesFactory.addSmallPizza()
        let actual = servicesFactory.getSmallPizza()
        let expected = 63.98;
        assert.equal(expected,actual)

    })
    it("A medium pizza added twice should equal 117.98",()=>{
        let servicesFactory = ServicesFactory(pool)
        servicesFactory.addMediumPizza()
        servicesFactory.addMediumPizza()
        let actual = servicesFactory.getMediumPizza()
        let expected = 117.98;
        assert.equal(expected,actual)

    })

    it("A large pizza added twice should equal 175.98",()=>{
        let servicesFactory = ServicesFactory(pool)
        servicesFactory.addLargePizza()
        servicesFactory.addLargePizza()
        let actual = servicesFactory.getLargePizza()
        let expected = 175.98;
        assert.equal(expected,actual)

    })

    it("The subLargePizza function should not subtract further if Large pizza total is equal to zero or less.",()=>{
        let servicesFactory = ServicesFactory(pool)
        servicesFactory.subLargePizza();
        let actual = servicesFactory.getLargePizza()
        let expected = 0.00;
        assert.equal(expected,actual);
    })

    it("The subMediumPizza function should not subtract further if medium pizza total is equal to zero or less.",()=>{
        let servicesFactory = ServicesFactory(pool)
        servicesFactory.subMediumPizza();
        let actual = servicesFactory.getMediumPizza()
        let expected = 0.00;
        assert.equal(expected,actual);
    })

    it("The subSmallPizza function should not subtract further if medium pizza total is equal to zero or less.",()=>{
        let servicesFactory = ServicesFactory(pool)
        servicesFactory.subMediumPizza();
        let actual = servicesFactory.getMediumPizza()
        let expected = 0.00;
        assert.equal(expected,actual);
    })

    it("The grand total of one small pizza ,medium pizza and large should equal 178.97",()=>{
        let servicesFactory = ServicesFactory(pool);
        servicesFactory.addSmallPizza();
        servicesFactory.addMediumPizza();
        servicesFactory.addLargePizza();
        let expected = 178.97;
        let actual = servicesFactory.getTotal();

        assert.equal(expected,actual)
    })
})