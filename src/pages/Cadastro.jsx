

function Cadastro() {
    return (
        <main className="flex flex-col justify-center items-center bg-slate-200">
        <h1 className="font-bold">Criar Conta</h1>
            <form className="flex flex-col p-[30px] top-[208px] w-[750px] bottom-2 bg-white" action="">
                <h2 className="font-bold">Informações Pessoais</h2>
                <label className="font-bold" htmlFor="CompletName">Nome Completo *</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg  selected:border-pink-500 focus:ring-1" type="text" name="nomecompleto" id="CompletName" placeholder="    Insira seu nome completo"/>
                <label className="font-bold" htmlFor="Cpf">CPF *</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg" type="text" name="cpf" id="Cpf" placeholder="    Insira seu CPF"/>
                <label className="font-bold" htmlFor="Email">E-mail *</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg" type="text" name="email" id="Email" placeholder="    Insira seu email"/>
                <label className="font-bold" htmlFor="Celular">Celular *</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg" type="text" name="celular" id="Celular" placeholder="    Insira seu número de celular"/>
            </form>
            <form className="flex flex-col p-[30px] w-[750px] bg-white" action="">
                <h2>Informações de entrega</h2>
                <label className="font-bold" htmlFor="Endereco">Endereço *</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg" type="text" name="endereco" id="Endereco" placeholder="    Insira seu endereço"/>
                <label className="font-bold" htmlFor="Bairro">Bairro *</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg" type="text" name="bairro" id="Bairro" placeholder="    Insira seu bairro"/>
                <label className="font-bold" htmlFor="Cidade">Cidade *</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg" type="text" name="cidade" id="Cidade" placeholder="    Insira sua cidade"/>
                <label className="font-bold" htmlFor="Cep">CEP *</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg" type="text" name="cep" id="Cep" placeholder="    Insira seu CEP"/>
                <label className="font-bold" htmlFor="Complemento">Complemento</label>
                <input className="w-[690px] top-[121px] h-[50px] bg-slate-200 rounded-lg" type="text" name="complemento" id="Complemento" placeholder="    Coloque informações adicionais"/>
            </form>
            <div>
             <input type="checkbox" id="Confirm"/>
            <label className="font-bold" htmlFor="">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
            <button>Cadastrar</button>   
            </div>
            
        </main>
    )
}

export default Cadastro