var corpo = document.querySelector("tbody")

var ativis = JSON.parse(localStorage.getItem("atividades"));
if(ativis != null){
    table(ativis)
}

const listaAtividades=[]

class Atividade{
    constructor(id,descricao,data,status=false){
        this.id=id;
        this.descricao=descricao;
        this.data=data;
        this.status=status;
    }

}

function limparMemoria(){
    localStorage.clear();
}

function table(conteudo){
    var linha = document.createElement("tr");
    var data = document.createElement("td");
    var des=document.createElement("td");
    var acao=document.createElement("td");
    conteudo.map( 
        function(item)  
    {
        
            var linha = document.createElement("tr");
            var data = document.createElement("td");
            var des=document.createElement("td");
            var acao=document.createElement("td");
            var tacharData=document.createElement("s");
            var tacharDescricao=document.createElement("s");
            let btn_conclude = document.createElement("button");
            let btn_excluir = document.createElement("button");
            btn_conclude.title = "Concluir";
            btn_excluir.title = "Excluir";
            btn_conclude.classList.add("botao");
            btn_excluir.classList.add("btn_excluir");
            btn_excluir.setAttribute("onclick",`ExcluirAtividade(${item.id})`);
            btn_conclude.setAttribute("onclick",`ConcluirAtividade(${item.id})`);
            var dataAtive=document.createTextNode(item.data);
            var desAtive=document.createTextNode(item.descricao);
            acao.appendChild(btn_excluir);
            //var acaoAtive=document.createTextNode();
        if(item.status==false){ 
            data.appendChild(dataAtive);
            des.appendChild(desAtive);
            acao.appendChild(btn_conclude);
            linha.appendChild(data);
            linha.appendChild(des);
            linha.appendChild(acao);
            corpo.appendChild(linha);
        }else{
            tacharData.appendChild(dataAtive);
            data.appendChild(tacharData);
            tacharDescricao.appendChild(desAtive);
            des.appendChild(tacharDescricao);
            linha.appendChild(data);
            linha.appendChild(des);
            linha.appendChild(acao);
            corpo.appendChild(linha);
        }
    }
    
    )
    
}

function ExcluirAtividade(idE){
    var atividades = JSON.parse(localStorage.getItem("atividades"));
    for (i = 0; i < atividades.length; i++) {
        if(atividades[i].id == idE){
            atividades.splice(i, 1);
        }
        localStorage.setItem('atividades',JSON.stringify(atividades));
        window.location.reload()
    }
}


function LocalStorage(atividadeE){
    var atividades = JSON.parse(localStorage.getItem("atividades"));

    if(atividades == null){
        atividades=[];
    }
    atividades.push(atividadeE);
    localStorage.setItem('atividades',JSON.stringify(atividades));
}

function TratarInput1(texto){
    var atividades = JSON.parse(localStorage.getItem("atividades"));
    var id=0;
    
    if(atividades == null || atividades.length == 0){
        atividades=[];
        id=0;
    }
    else{
        id =atividades[atividades.length-1].id+1
       
    }

    var atividadeEntrada = String(texto).split(' em ');
    var ativi= new Atividade(id,atividadeEntrada[0],atividadeEntrada[1]);
    LocalStorage(ativi);
    
}

function ConcluirAtividade(idE){
    var atividades = JSON.parse(localStorage.getItem("atividades"));
    for (i = 0; i < atividades.length; i++) {
        if(atividades[i].id == idE){
            atividades[i].status=true;
        }
        localStorage.setItem('atividades',JSON.stringify(atividades));
        window.location.reload()
    }

}

