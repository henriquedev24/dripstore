

function Cadastro() {
    return (
        <main className="flex flex-col justify-center items-center">
        <h1>Criar Conta</h1>
            <form className="flex flex-col p-[30px]" action="">
                <h2>Informações Pessoais</h2>
                <label htmlFor="CompletName">Nome Completo *</label>
                <input type="text" name="nomecompleto" id="CompletName" placeholder="Insira seu nome completo"/>
                <label htmlFor="Cpf">CPF *</label>
                <input type="text" name="cpf" id="Cpf" placeholder="Insira seu CPF"/>
                <label htmlFor="Email">E-mail *</label>
                <input type="text" name="email" id="Email" placeholder="Insira seu email"/>
                <label htmlFor="Celular">Celular *</label>
                <input type="text" name="celular" id="Celular" placeholder="Insira seu número de celular"/>
            </form>
            <form className="flex flex-col" action="">
                <h2>Informações de entrega</h2>
                <label htmlFor="Endereco">Endereço *</label>
                <input type="text" name="endereco" id="Endereco" placeholder="Insira seu endereço"/>
                <label htmlFor="Bairro">Bairro *</label>
                <input type="text" name="bairro" id="Bairro" placeholder="Insira seu bairro"/>
                <label htmlFor="Cidade">Cidade *</label>
                <input type="text" name="cidade" id="Cidade" placeholder="Insira sua cidade"/>
                <label htmlFor="Cep">CEP *</label>
                <input type="text" name="cep" id="Cep" placeholder="Insira seu CEP"/>
                <label htmlFor="Complemento">Complemento</label>
                <input type="text" name="complemento" id="Complemento" placeholder="Coloque informações adicionais"/>
            </form>
            <input type="checkbox" id="Confirm" value=""/>
            <label htmlFor="">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
            <button>Cadastrar</button>
        </main>
    )
}

export default Cadastro