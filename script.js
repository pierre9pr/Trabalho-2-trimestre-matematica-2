const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre que a sua cidade está implementando novas políticas de sustentabilidade, como a redução do uso de plásticos e incentivo ao transporte público. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Acho isso ótimo! É essencial cuidar do nosso planeta.",
                afirmacao: "Ficou entusiasmado com as políticas de sustentabilidade e começou a adotar práticas mais ecológicas em seu dia a dia."
            },
            {
                texto: "Fico um pouco cético(a). Será que isso vai funcionar?",
                afirmacao: "Teve dúvidas sobre a eficácia das políticas, mas decidiu pesquisar mais sobre o impacto das práticas sustentáveis."
            }
        ]
    },
    {
        enunciado: "Ao se aprofundar no tema, você descobre que a indústria está investindo em tecnologias verdes, como energia solar e reciclagem de materiais. Qual é sua atitude diante disso?",
        alternativas: [
            {
                texto: "Apoio totalmente! É importante que as empresas adotem práticas sustentáveis.",
                afirmacao: "Passou a valorizar empresas que investem em tecnologias verdes e procurou consumir produtos de empresas comprometidas com o meio ambiente."
            },
            {
                texto: "Acho bom, mas acredito que ainda há muito a ser feito.",
                afirmacao: "Reconheceu os esforços das empresas, mas sente que é necessário pressionar por mais inovações sustentáveis para enfrentar os desafios ambientais."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão sobre sustentabilidade, surge o tema da agricultura urbana como uma solução para reduzir a pegada de carbono e promover a segurança alimentar. Qual é sua opinião?",
        alternativas: [
            {
                texto: "Apoio totalmente! A agricultura urbana pode revolucionar a forma como produzimos e consumimos alimentos.",
                afirmacao: "Defendeu a ideia de agricultura urbana como uma solução sustentável e buscou formas de participar ou apoiar iniciativas locais."
            },
            {
                texto: "Acho interessante, mas tenho dúvidas sobre sua viabilidade em grandes cidades.",
                afirmacao: "Mostrou interesse na agricultura urbana, mas decidiu investigar mais sobre como ela poderia ser implementada efetivamente em áreas urbanas densas."
            }
        ]
    },
    {
        enunciado: "Após participar de um projeto de reflorestamento na sua comunidade, você é convidado a criar um projeto visual que represente sua experiência com sustentabilidade. Como você decide proceder?",
        alternativas: [
            {
                texto: "Usar materiais reciclados e técnicas sustentáveis para criar uma arte que transmita a importância da preservação ambiental.",
                afirmacao: "Optou por utilizar materiais reciclados e técnicas sustentáveis em seu projeto, promovendo a conscientização sobre a preservação ambiental."
            },
            {
                texto: "Utilizar um software de design para criar uma representação digital do projeto de reflorestamento.",
                afirmacao: "Utilizou um software de design para criar uma representação digital do projeto, destacando a importância da tecnologia na promoção de iniciativas sustentáveis."
            }
        ]
    },
    {
        enunciado: "Você participa de um grupo de estudos sobre sustentabilidade na sua escola. Durante a preparação de um trabalho em grupo, um colega sugere utilizar um texto gerado por IA para agilizar o processo. Qual é sua reação?",
        alternativas: [
            {
                texto: "Apoiar a ideia, desde que o texto gerado pela IA seja usado como base e não como trabalho final.",
                afirmacao: "Aceitou a sugestão de utilizar IA como ferramenta auxiliar, mas enfatizou a importância de contribuições pessoais e revisão crítica no trabalho."
            },
            {
                texto: "Preferir escrever o texto com base em pesquisas e discussões em grupo, para garantir a originalidade e qualidade do trabalho.",
                afirmacao: "Optou por não utilizar IA diretamente para a criação do texto, preferindo contribuir com sua própria pesquisa e conhecimento no projeto."
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
