import React from "react";
import "../../components/moradas.css";
import "../../components/home.css";
import YoutubeEmbed from "../../components/Youtube/youtube"
import PageTemplate from "../../components/pageTemplate";
import CasaDosFundosCarousel from "../../components/Carousel/CarouselMoradas/casaDosFundosCarousel";



const CasaDosFundos = () => {
  return (
    <PageTemplate>
      <div className="main">
        <div className="sectionMoradas">
          <p className="titleTop">Casa dos Fundos</p>
            <p className="firstSectionTop">Localizada a 3km do centro, essa hospedagem fica nos fundos de uma casa onde os anfitriões residem na frente. Você dispõe de toda privacidade e poderá realizar seus eventos e festas com amigos ou família. Alugamos o ano inteiro e no verão é possível apenas aluguel de final de semana "FINDIS". Em frente ao calçadão zona sul. Quase esquina com praça das corujas (local ótimo para crianças com brinquedos e laguinho com tartarugas). Mercadinho e restaurante próximo. Zona nobre. Cerca de 1 km do centrinho zona sul.</p>

            <p className="firstSectionTop">Solicite maiores esclarecimentos sobre realização de festas, eventos e vídeos do local via whatsapp (51) 98439-5416.</p>

            <p className="secondSectionTop">Endereço: Av. Beira Mar 110. Bairro Tramandaí Sul. Tramandaí/RS.</p>

        </div>

        <CasaDosFundosCarousel />
        
        <p className="fourthSectionTop">Confira o vídeo dessa Morada no final da página!</p>

        <div className="sectionInfos">
          <div className="containerMoradasPage">
        
      <p className="moradasInfo">Informações</p>

        <p className="moradasText">🏠 Casa dos fundos com piscina, mesa de sinuca e à beira-mar. </p>
        <p class="moradasTextTwo">○ Três quartos (Acomoda até 16 pessoas);</p>
      <p class="moradasTextTwo">○ Três camas de casal;</p>
      <p class="moradasTextTwo">○ Cinco beliches;</p>
      <p class="moradasTextTwo">○ Dois banheiros;</p>
      <p class="moradasTextTwo">○ Cozinha (panelas e utensílios básicos, microondas, fogão e geladeira);</p>
      <p class="moradasTextTwo">○ Churrasqueira;</p>
      <p class="moradasTextTwo">○ Vagas para até 4 carros (tamanho padrão pequeno), podendo chegar a 5 carros;</p>
      <p class="moradasTextTwo">○ Gás água e luz inclusos na locação;</p>
    </div>

  </div>

        <div className="sectionPrices">
      <i className="fas fa-donate"></i>
      
      <div className="containerMoradasPage">
      <p className="moradasInfo">Valores</p>

<p className="moradasText">💰 Valor diária padrão (Mínimo 5 dias) </p>
          
          <p class="moradasTextTwo">👍 Até 10 pessoas: R$ 500,00 por dia.</p>
        <p class="moradasTextTwo">👍 Até 16 pessoas: R$ 600,00 por dia.</p>
        <p class="moradasTextTwoObs">* Solicite pelo zap tarifas promocionais</p>
        <br></br>
        <p class="moradasText">⛱️ Finais de semana (Sex à Seg): </p>
        <p class="moradasTextTwo">👍 Até 10 pessoas: R$ 2.250,00</p>
        <p class="moradasTextTwo">👍 Até 16 pessoas: R$ 2.500,00</p>
        <br></br>
        <p class="moradasText">⛱️ Semana cheia (Seg à Dom): </p>
        <p class="moradasTextTwo">👍 Até 10 pessoas: R$ 2.500,00</p>
        <p class="moradasTextTwo">👍 Até 16 pessoas: R$ 3.000,00</p>
          
          <br></br>
          <br></br>
          <p className="moradasTextTwoObs"> * Valores não são válidos em períodos de Reveillon ou Carnaval.</p>
          <p className="moradasTextTwoObs"> Para obtenção dos valores de diárias acima e para fazer uma reserva antecipada é necessário pacote mínimo de 4 diárias.</p>
          <p className="moradasTextTwoObs"> Pacotes final de semana ou bate-volta, chame no zap 51 984395416 informe total de pessoas e datas para disponibilidade e valores do “findi”. Não fazemos reservas antecipadas de final de semana. As reservas de findis começam 5 dias antes da data escolhida. </p>
          <p className="moradasTextTwoObs"> * Consulte pelo whatsapp tarifas especiais promocionais que dependem da época e total de dias do pacote.</p>
          <p className="moradasTextTwoObs"> * Acima de 07 dias sempre temos promoções! Trabalhamos com pagamentos mensais na reserva antecipada promocional.</p>
          <p className="moradasTextTwoObs"> * Em todos os locais é necessário trazer seus produtos de higiene e produtos de limpeza/pano. Necessário trazer  roupas e forro de cama, travesseiros, cobertas. Temos opções de locação destes itens caso não possa trazer.</p>
          <p className="moradasTextTwoObs"> * Em todos os locais é cobrado a caução limpeza antecipado. Caso o hóspede entregue o local limpo a taxa de limpeza  não será cobrada e devolvida na saída. Solicite mais detalhes via whatsapp.</p>
          <p className="moradasTextTwoObs"> * Solicite também mais informações e novidades que não estão no site pelo whatsapp. Temos apartamentos e casas a 400 metros do mar com tarifas promocionais.</p>
          <p className="moradasTextTwoObs"> * EM FRENTE À PRAIA É PÉ NA AREIA! Não precisa usar o carro para ir à praia. E a comodidade e higiene de ter sua cozinha e banheiro só atravessando a rua! Menores gastos fazendo sua refeição em casa e sem gastar combustível. Ficar em frente ao mar sempre mais vantajoso e econômico e confortável. Qualidade de vida ao veranear! </p>
          <p className="moradasTextTwoObs"> * Temos nossa equipe de segurança privativa nas ruas com monitoramento o que garante sua férias tranquilas.</p>
          <p className="moradasTextTwoObs"> * Somos Petfriendly - Aceitamos pets (Informar antecipadamente e solicitar regrinhas e taxas).</p>


      </div>
  </div>


        <YoutubeEmbed 
            titleYoutube="Casa dos Fundos" 
            embedId="eAf8atrbigU" 
          />
      </div>
    </PageTemplate>
);
}

export default CasaDosFundos;

