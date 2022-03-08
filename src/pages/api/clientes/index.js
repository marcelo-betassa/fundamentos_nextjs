
function handle(req, res) {

    if (req.method === 'GET') {
        handleGetCliente(req, res);        
    } else {
        res.status(405).send('error:405 , Método não suportado!');
    }
}

function handleGetCliente(req, res) {
    res.status(200).json({
        id: 154,
        nome: 'Fulano da Silva',
        idade: 28,
        email: 'testexpot@testeemail.com'
    });
}

export default handle