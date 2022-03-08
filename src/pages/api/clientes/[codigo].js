

function hendler(req, res) {
    const codigo = req.query.codigo;
    res.status(200).json({
        id: `${codigo}`,
        nome: `Fulano da Silva Sauro - ${codigo}`,
        email: 'testexpot@testeemail.com'
    })
}


export default hendler;