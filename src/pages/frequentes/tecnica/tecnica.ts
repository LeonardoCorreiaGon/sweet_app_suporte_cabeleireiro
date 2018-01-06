import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuportePage } from '../../suporte/suporte';

@Component({
  selector: 'page-tecnica',
  templateUrl: 'tecnica.html'
})
export class TecnicaPage {

 diseases = [
     
    { title: "Qual o campo de atuação de um técnico Expert Sweet?", description: "A Área Técnica tem por objetivo fornecer todo suporte necessário para o êxito das vendas e garantia de uma performance 100% eficaz de todos os produtos Sweet, tanto profissionais quanto para o cliente final. Dessa forma, nossos Experts estão preparados para:  1. realizar cursos e wokshops voltados à área comercial (líderes e distribuidores independentes) no que se refere ao treinamento dos produtos e estratégias de vendas dos mesmos;  2. realizar cursos e workshops direcionados aos profissionais cabeleireiros desenvolvendo técnicas associadas à utilização dos produtos; 3. realizar visitas e apresentações em salões; 4. realizar suporte via e-mail, WhatsApp e telefone para esclarecer dúvidas e solucionar problemas; 5. fornecer material apostilado explicativo e técnico.Todos os cursos poderão ser realizados em nossas sedes em São Paulo, bem como nas cidades de atuação do líder ou distribuidor independente." },
     
    { title: "Como solicitar um técnico?", description: "Para fazer a solicitação de um técnico, seja para o desenvolvimento de um evento na sua cidade, em nossas sedes em São Paulo ou no Instituto Sweet, bem como para solicitar visita em salões o procedimento deverá ser realizado via email. Você deverá enviar uma solicitação para o email: mmn@sweethair.com.br descrevendo qual tipo de evento e qual data. O setor responsável responderá de maneira rápida e objetiva informando com relação à existência de disponibilidade e encaminhando demais protocolos para preenchimento. Devemos lembrar que a agenda será liberada de acordo com a disponibilidade dos técnicos Experts e caso seja de interesse do líder ou do distribuidor independente, a Sweet também forma técnicos através do Curso Expert." },
     
    { title: "Como se tornar um técnico Expert Sweet", description: "A Sweet Hair possui um curso voltado para o profissional cabeleireiro que deseja se tornar um Técnico Expert. Esse curso acontece normalmente uma vez por mês e as vagas são limitadas. Trata-se de um curso com no máximo 15 profissionais que aprenderam ao longo de 1 semana todos os conceitos da marca, composição química dos produtos, atuação na estrutura capilar, técnicas de aplicação, desenvolvimento de capacidade de resolver problemas e dar suporte para os profissionais cabeleireiros, de forma teórica e prática. As inscrições deverão ser feitas e confirmadas através do email: adriana.picolo@sweethair.com.br. Aviso importante: A SWEET HAIR NÃO SE RESPONSABILIZA PELA ATUAÇÃO TÉCNICA DE PROFISSIONAIS CABELEIREIROS QUE NÃO TENHAM REALIZADO NOSSO CURSO DE FORMAÇÃO EXPERT." },
     
    { title: "O que é o The First?", description: "O The First é um sistema de alisamento térmico desenvolvido sob a forma de shampoo com o objetivo de facilitar a aplicação e otimizar o tempo do profissional cabeleireiro. O processo de aplicação de uma progressiva normal leva em média 4 horas. Realizando o processo de alisamento com o The First, o profissional consegue realizar o mesmo procedimento em 2 horas. Ou seja, há muito mais agilidade e rapidez, possibilitando que o profissional realize mais trabalhos durante o dia."},
     
    { title: "O The First ou a escova Lovely desbotam ou alteram a cor dos cabelos?", description: "Não, nenhum dos dois produtos alteram a cor dos cabelos, porém, temos que considerar que qualquer alisamento térmico precisa da fonte de calor que vem da prancha e essa fonte de calor pode ocasionar oxidação da cor do cabelo. Essa oxidação pode ser notada se o cabelo for extremamente poroso, se o tipo de coloração utilizada for superficial, como tonalizantes ou máscaras ou se a cliente possuir muitos cabelos brancos, o que gera a revelação do fundo de clareamento. Por esse motivo indicamos sempre realizar o procedimento de coloração ou descoloração após a realização do alisamento, seja ele efetuado com The First ou Lovely." },
     
    { title: "Podemos usar The First em cabelos coloridos ou com descoloração?", description: "Sim. O The First pode ser usado em todos os tipos de cabelo. O que devemos sempre levar em conta é a saúde dos fios para determinar qual temperatura será utilizada. Em cabelos sensibilizados ou danificados a temperatura da prancha não deve ultrapassar 200ᵒC (ou 410ᵒF). Para cabelos saudáveis, a temperatura utilizada na prancha deve ser de 230ᵒC (ou 450ᵒF)." },
     
    { title: "O shampoo The First é compatível com todas as químicas?", description: "Sim. Tanto o The First quanto a Lovely são produtos à base de ácidos que agem nas pontes salinas do córtex do cabelo, não tendo nenhum tipo de incompatibilidade com nenhuma química. Sendo assim, cabelos com coloração, descoloração, relaxamentos alcalinos a base de hidróxidos ou tioglicolato, henê, etc. podem ser processados com os produtos Sweet. Lembrando que se o cabelo estiver sensibilizado, a temperatura usada na prancha não deverá ser superior à 200ᵒC." },
     
    { title: "Qual o pH do shampoo The First?", description: "O shampoo The First possui pH de 2,0, sendo que, na aplicação no cabelo, com a presença de água, esse pH mantem-se um pouco mais elevado." },
     
    { title: "O The First amarela cabelos loiros?", description: "Não. Se o processo for feito da forma correta, não ocasiona amarelamento. O máximo que pode acontecer é, num cabelo matizado com máscara ou tonalizado, pode ocorrer perda do pigmento acinzentado ou irisado e revelar o fundo de clareamento. Ou seja, se o cabelo loiro estiver na altura de tom 10 acinzentado, após o procedimento ele vai estar na altura do tom 10, porém, sem o acinzentado." },
     
    { title: "Qual a melhor forma de fazer o alisamento em um cabelo com luzes ou coloração?", description: "Em cabelos que já tenham luzes, o The First pode ser feito normalmente, respeitando a saúde dos fios. Caso a cliente queira fazer os dois procedimentos: alisar e descolorir, sugerimos que primeiro o profissional faça o alisamento com o The First ou com a Lovely. Assim que finalizar o processo de prancha, o cabelo deverá ser lavado (com um shampoo normal) e condicionado para haver normalização do pH do cabelo, seco e em seguida pode-se proceder a descoloração. O mesmo processo deve ser feito para coloração. Caso não seja feito no mesmo dia, deve haver obrigatoriamente uma lavagem completa do cabelo entre um processo e outro." },
     
    { title: "Qual a diferença entre o The First e a Lovely?", description: "Os dois produtos alisam do mesmo jeito, entretanto, a Lovely é um produto mais tradicional, com 3 passos que automaticamente requer um pouco mais de tempo na aplicação." },
     
     { title: "O The First e a Lovely possuem formol na sua composição?", description: "Não. Os dois produtos são compostos por ácidos que também são utilizados pela área de estética facial. Nenhum dos dois possui formol na sua composição." },
     
     { title: "O The First ou a Lovely podem causar reações alérgicas?", description: "Não. Temos laudos dermatológicos que comprovam que a utilização correta de ambos não ocasionam reações alérgicas, porém, se a cliente possuir feridas ou doenças no couro cabeludo, indicamos que não sejam realizados os procedimentos pois tratam-se de produtos ácidos que podem acentuar os sintomas ou gerar incômodos." },
     
     { title: "Qual a porcentagem de alisamento que conseguimos obter com o The First?", description: "Tanto o The First quanto a Lovely alisam 100% os cabelos ondulados, cacheados e crespos. Cabelos afro carapinhas ou crespos muito resistentes, utilizando um dos dois produtos obtemos de 70 a 90% de alisamento, entretanto, temos um protocolo de aplicação denominado “semidefinitiva para cabelos afros” que combina a utilização do kit Lovely com o The First para obtermos 100% de alisamento em uma única aplicação para esse tipo de cabelo, sem a necessidade de utilizar relaxamentos alcalinos." },
     
     { title: "Mulheres grávidas, lactantes e crianças podem utilizar os alisamentos Sweet (The First ou Lovely)?", description: "Temos laudos e estudos que comprovam que os componentes dos alisamentos Sweet não caem na corrente sanguínea. Da mesma forma, durante a aplicação não ocorre a produção de fumaça densa e abundante, não havendo risco de intoxicação. Entretanto, sugerimos que gestantes e lactantes peçam autorização médica antes do procedimento, uma vez que podem haver restrições ou outros problemas de saúde pré-existentes que o profissional cabeleireiro não terá condições de identificar. Para crianças, sugerimos após os 12 anos de idade, uma vez que antes dessa idade, dificilmente a criança conseguirá manter-se parada para a realização do procedimento." },
     
     { title: "Cabelos brancos podem sofrer alterações de cor durante os procedimentos de alisamento?", description: "Sim. Os cabelos brancos não possuem melanina, ou seja, nenhum tipo de pigmento. Durante o processo de alisamento pode ocorrer oxidação do cabelo e revelar um tom amarelado. Isso pode ser evitado com a utilização de uma temperatura mais baixa na prancha ou utilização de matizadores associados aos alisamentos." },
     
     { title: "Qual a durabilidade dos alisamentos Sweet?", description: "Tanto para The First quanto para a Lovely, a durabilidade média é de 2 a 4 meses, podendo ser estendido com o uso de produtos adequados de manutenção e utilização de fonte de calor (secador com ar quente)." },
     
     { title: "O alisamento sai do cabelo com o tempo?", description: "Sim. Caso a cliente resolva não alisar mais os cabelos, a mesma deverá aguardar um período de 9 meses a 1 ano para que o cabelo volte completamente à forma original (considerando que o cabelo não possuía outros produtos de alisamento)." },
     
     { title: "Qual a melhor forma de realizar um procedimento de alisamento com The First?", description: "A melhor forma de realizar um procedimento de alisamento com o The First é sempre de acordo com o diagnóstico dos cabelos. Sendo assim, devemos sempre avaliar as reais necessidade do cabelo e realizar o protocolo que mais se enquadra às mesmas. Para isso, consulte as diferentes formas de aplicação do The First. 01 – Para cabelos loiros – retirar frizz Misture 35 ml do shampoo The First com 15 ml do Shampoo Matizador. Deixe agir de 10 a 20 minutos, enxágue 100%, seque os cabelos e finalize com a prancha. 02 – Reconstrução e nutrição Após os 20 minutos de pausa com The First, enxágue 100% e aplique a Máscara de Tratamento Cronology. Deixe agir por 7 minutos, enxágue 100%, seque e finalize com a prancha. 03 – Reparação de pontas danificadas Após os 20 minutos de pausa com The First, enxágue 100% e aplique nas pontas danificadas o S.O.S 1º Passo, Seque 100% e finalize com a prancha. 04 – Semi definitiva Aplique 50ml de The First por todo o cabelo, deixe agir por 20 minutos e enxágue 100%. Seque os fios 80% e aplique sob os cabelos o Hair Treatment 2º Passo, da linha Lovely. Deixe agir por 15 minutos, enxágue 100%, seque os cabelos e pranche 7 vezes cada mecha. 05 – Espelhamento Capilar Após os 20 minutos de pausa com The First, enxágue 100% e aplique a Máscara Touch of Silk 3º Passo, da linha Lovely. Deixe agir por 10 minutos, enxágue 100%, seque os cabelos e pranche 7 vezes cada mecha. 06 – Coloração Após realizar o procedimento completo do The First, ou seja, após pranchar, molhe abundantemente o cabelo, seque com o auxílio do secador e aplique a coloração conforme orientação do fabricante. Após o tempo de pausa da coloração, enxague novamente. Para melhor sensorial e durabilidade da cor, sugerimos finalizar com o Touch of Silk ou com a Máscara Hair Cream da linha Cronology. 07 – Descoloração Após realizar o procedimento completo do The First, ou seja, após pranchar, lave os cabelos com Shampoo e Condicionador de sua preferência (sugerimos a Linha Mousse), seque com o auxílio do secador e realize o procedimento de descoloração. Em seguida realize a matização ou tonalização, conforme desejar e, para melhor sensorial e durabilidade da cor, sugerimos finalizar com o Touch of Silk ou com a Máscara Hair Cream da linha Cronology. 08 – The First para loiras – Alisamento Após os 20 minutos de pausa com The First, enxágue 100% e aplique a Máscara Platinum e deixe agir por 10 a 15 minutos até obter o efeito chumbado, enxágue 100%, seque os cabelos e pranche de 5 a 7 vezes cada mecha com a temperatura de acordo com a saúde do cabelo." },
     
     { title: "Por que devemos usar a manutenção pós progressiva do The First?", description: "O uso da família The First garante maior durabilidade do alisamento exatamente por possuir na sua composição uma matéria prima chamada N-duhance, a qual age no córtex do cabelo, promovendo alinhamento, efeito anti-frizz e anti umidade e mantendo as cutículas seladas." },
     
     { title: "Qual é o pigmento base presente na coloração Royal Colour da Sweet (Qual o fundo da coloração)?", description: "A coloração Royal Colour não possui um único tom no fundo das suas bases, mas para cada altura de tom temos um fundo que neutraliza o fundo de clareamento indesejado, a saber: 1.0 ao 4.0 – fundo mate (responsável por neutralizar o fundo de clareamento vermelho) 5.0 – fundo mate azulado (responsável por neutralizar o fundo de clareamento vermelho alaranjado) 6.0 – fundo azul (responsável por neutralizar o fundo de clareamento laranja) 7.0 – fundo azul violeta (responsável por neutralizar o fundo de clareamento amarelo alaranjado) 8.0 ao 10.0 – fundo violeta (responsável por neutralizar o fundo de clareamento amarelo)." },
     
     { title: "Posso tonalizar um cabelo usando a coloração Royal Colour?", description: "Sim, porém, trata-se de coloração permanente. Para obter um efeito de tonalização com a linha Royal devemos utilizar oxidante de 10 volumes, na proporção de 1 parte de coloração para 2 partes de OX e o tempo de pausa não pode exceder 10 minutos no cabelo para não haver alteração da cor do cabelo natural da cliente." },
     
     { title: "Consigo cobrir brancos com a coloração da Sweet?", description: "Sim. A coloração Royal Colour cobre 100% cabelos brancos desde que seja utilizada a regra abaixo: até 50% de brancos espalhados por toda a cabeça, podemos utilizar apenas as nuances escolhidas, de 50% a 70% de brancos devemos usar metade da nuance e metade da base, de 70% a 100% de cabelos brancos devemos usar ¾ de base e ¼ de nuance escolhida. O oxidante escolhido deve ser de acordo com quantos tons queremos oxidar do cabelo escuro e o tempo de pausa para cabelos brancos deve ser de 45 a 50 minutos." },
     
     { title: "Quantos tons consigo clarear com o pó descolorante da Sweet?", description: "O pó descolorante Sweet clareia de 7 a 8 tons, lembrando que ele possui partículas anti-amarelo que auxiliam na obtenção do clareamento desejado." },
     
     { title: "Por que o pó descolorante da Sweet é branco?", description: "Desenvolvemos um pó descolorante branco porque os pós azuis ou violetas que existem no mercado possuem somente corante azul e/ou violeta, matéria prima que não tem poder de neutralizar o fundo de clareamento do cabelo, mas simplesmente mascarar a real cor obtida com a descoloração. Sendo assim, com esse tipo de corante, muitas vezes o profissional pode ter a impressão que já está na altura de tom desejada e enxaguar o cabelo antes de realmente chegar, o que acaba por atrapalhar o procedimento. Com o pó descolorante branco, a visualização do fundo de clareamento é mais fácil e o profissional pode realizar o procedimento com mais segurança." },
     
     { title: "Qual a proporção correta para misturar o pó descolorante com OX?", description: "Nosso pó descolorante foi desenvolvido para melhor atender às necessidades dos profissionais cabeleireiros e melhor se adaptar às técnicas de clareamento. Sendo assim, o profissional poderá fazer a mistura nas seguintes proporções: – 1 medida de pó descolorante para 1 e meia medida de peróxido (Ox); – 1 medida de pó descolorante para 2 medidas de peróxido (Ox); – 1 medida de pó descolorante para 2 e meia medidas de peróxido (Ox); – 1 medida de pó descolorante para 3 medidas de peróxido (Ox). Essas medidas deverão ser adequadas à técnica pretendida e cabe lembrar que independente da proporção escolhida, a medida deverá ser realizada com auxílio de balança de precisão, pois, além de fazê-las de forma correta o profissional terá noção da quantidade de produto utilizada para cada procedimento." },
     
     { title: "Qual é a diferença do peróxido (oxigenada) da Sweet para as demais?", description: "A Ox da Sweet (peróxido) não possui carga iônica, portanto pode ser utilizada com toda e qualquer outra marca de coloração ou pó descolorante, sem afetar a performance do produto e sem desestabilizar as misturas realizadas." },
     
     { title: "Para que serve o S.O.S Powder?", description: "É um sistema de proteção em pó para ser utilizado junto com o pó descolorante ou coloração, que não compromete o desempenho do clareamento e descoloração dos cabelos, mas os protege dos efeitos nocivos do excesso de alcalinidade dos procedimentos químicos." },
     
     { title: "Para que serve o passo 1 do S.O.S Impact Shock?", description: "O S.O.S 1 Impact Shock serve para várias funções:– neutralizar e parar a ação dos produtos alcalinos (descoloreção e relaxamentos) durante o procedimento, como forma de SOCORRO; – para proteger os cabelos antes de um processo químico, aplicando-o diretamente na parte sensibilizada do cabelo (antes da química) ou misturando-o diretamente no produto (descoloração ou coloração); – para realizar um tratamento de reconstrução de alto impacto (ou cauterização) junto com o S.O.S passo 2 – Regeneration." },
     
     { title: "O passo 1 do S.O.S pode ser utilizado com a descoloração?", description: "Sim porque promove a reestruturação do fio do cabelo devolvendo resistência e massa (reposição de proteínas que normalmente são perdidas por conta dos procedimentos químicos alcalinos. Possui pH de 2,5, ácido cítrico, aminoácidos, fluído de silicone e alta carga de queratina vegetal hidrolisada." },
     
     { title: "O passo 1 do S.O.S pode ser utilizado com outra máscara para finalização da cauterização ou de um tratamento profundo?", description: "Sim, pode. Indicamos para cabelos intensamente sensibilizados realizar o procedimento de cauterização e finalizar com a Hair Cream Cronology para obtenção de um sensorial mais macio, emoliente e com muito brilho." },
     
     { title: "Qual a indicação do kit Renovação Molecular Cronology?", description: "O kit Cronology é indicado para todos os tipos de cabelo e promove hidratação, nutrição e reconstrução de ma  neira inteligente. Ou seja, ao aplicar o produto, o mesmo irá realizar um mapeamento das necessidades dos fios e depositar somente o que for necessário com o objetivo de manter a saúde e a beleza dos mesmos." }
     
  ];

  shownGroup = null;

  constructor(public navCtrl: NavController) {
  }
  
  back(){
       this.navCtrl.setRoot(SuportePage);
  }
  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  }
  isGroupShown(group) {
      return this.shownGroup === group;
  }
}