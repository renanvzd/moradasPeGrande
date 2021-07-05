import React from "react";
import "../../components/moradas.css";
import "../../components/home.css";
import YoutubeEmbed from "../../components/Youtube/youtube"
import PageTemplate from "../../components/pageTemplate";
import SobradosAmareloCarousel from "../../components/Carousel/CarouselMoradas/SobradosAmareloCarousel";



const SobradosAmarelo = () => {
  return (
    <PageTemplate>
      <div className="main">
        <div className="sectionMoradas">
          <p className="titleTop">Sobrados Amarelo</p>
            <p className="firstSectionTop">Sobrados privativos em frente à praia com vista para o mar! Localizados a 3 km  do centro da cidade ou plataforma e a 1 km do centrinho zona sul. Quase esquina com a Praça das Corujas, recanto ideal para crianças e para rodas de chimarrão. Nesta praça você conta com brinquedos e laguinho com tartarugas para apreciação, além dos ninhos protegidos das Corujas que vivem por lá. Possui mercadinhos e restaurantes bem próximo.</p>

            <p className="firstSectionTop">Localização bairro nobre. Em frente ao calçadão beira mar zona sul. </p>
          
            <p className="firstSectionTop">Alugamos findis, diárias e temporada. Solicite maiores esclarecimentos sobre realização de festas, eventos e vídeos do local via whatsapp (51) 98439-5416. </p>

            <p className="secondSectionTop">Endereço: Av. Beira Mar 122. Bairro Tramandai Sul. Tramandaí/RS.</p>

        </div>

        <SobradosAmareloCarousel />
        
        <p className="fourthSectionTop">Confira o vídeo dessa Morada no final da página!</p>

        <div className="sectionInfos">
          <div className="containerMoradasPage">
        
      <p className="moradasInfo">Informações</p>

      <p class="moradasTextTwo">○ Sala com tv canal aberto, cozinha com fogão e geladeira e churrasqueira privativa;</p>
      <p class="moradasTextTwo">○ Três quartos, sendo cama para até 06 pessoas no total (alguns com cama de casal outros com beliches, verifique opções);</p>
      <p class="moradasTextTwo">○ Dois banheiros (um no primeiro piso outro no segundo piso);</p>
      <p class="moradasTextTwo">○ Vaga para vários carros;</p>
      <p class="moradasTextTwo">○ Amplo pátio em frente privativo gramado e cercado;</p>
      <p class="moradasTextTwo">○ Alguns sobrados contam com todos quartos no segundo piso e apenas um deles possui opção de quarto térreo consulte;</p>
      <p class="moradasTextTwo">○ Gás, água e luz inclusos no valor da locação.</p>
      <p class="moradasTextTwoObs"> * Este local não possui incluso: ventiladores ou micro-ondas, mas temos locação destes itens. Consulte-nos;</p>
      <p class="moradasTextTwoObs"> * Sobrados Amarelos não possuem wi-fi;</p>
    </div>

  </div>

        <div className="sectionPrices">
      <i className="fas fa-donate"></i>
      
      <div className="containerMoradasPage">
          <p className="moradasInfo">Valores</p>

          <p className="moradasText">💰 Valor diária padrão (Mínimo 5 dias) </p>
          <br></br>

          <p class="moradasTextTwo">👍 Até 6 pessoas (sem visitantes): <b>R$ 380,00</b> por dia.</p>
          <p class="moradasTextTwo">👍 Até 10 pessoas (sendo 4 pessoas com colchonetes no chão): <b>R$ 450,00</b> por dia.</p>

        <p class="moradasTextTwo"> * Reserva mínima de 4 diárias para obter tarifas com valores acima.</p>
        <br></br>
      <p class="moradasText">Tarifa Promocional </p>
      <p class="moradasTextTwo">👍 7 dias - (Seg à Dom): <b>R$ 2.100,00</b></p>
      
  
          
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
            titleYoutube="Sobrados Amarelo" 
            embedId="t6Ob-hyNKEY" 
          />
      </div>
    </PageTemplate>
);
}

export default SobradosAmarelo;

