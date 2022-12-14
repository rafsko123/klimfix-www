import {HeadFC}         from "gatsby";
import React            from "react";
import styled           from "styled-components";
import SubpageContainer from "../components/layout/SubpageContainer";
import {Wrapper}        from "../components/layout/Wrapper";
import {Description}    from "../components/typography/Description";
import {TitleMd}        from "../components/typography/TitleMd";


const StyledWrapper = styled(Wrapper)`
    max-width: 1200px;
    margin-bottom: 48px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        max-width: 1024px;
    }
`;

const StyledTitleMd = styled(TitleMd)`
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
    }
`;

const StyledDescription = styled(Description)`
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    margin: 18px 0 36px 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 18px;

    }
`;

const Box = styled.div`
    &:not(:last-child) {
        margin-bottom: 36px;
        @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
            margin-bottom: 18px;
        }
    }
`;

const BoxTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.secondary};
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 16px;
    }
`;

const BoxContent = styled.div`
    max-width: 1000px;

    ol, ul {
        padding-left: 18px;
        margin: 12px 0;
    }

    ul {
        list-style: disc;
    }

    li {

        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }

    li, p {
        font-size: 16px;
        font-weight: 300;
        color: ${({theme}) => theme.colors.secondary};
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        li, p {
            font-size: 14px;
        }
    }
`;


const RegulationsPge = () => {
  return (
    <SubpageContainer>
      <StyledWrapper>
        <StyledTitleMd as="h1">
          Polityka prywatno??ci
        </StyledTitleMd>
        <StyledDescription>
          Polityka prywatno??ci opisuje zasady przetwarzania przez nas informacji na
          Tw??j temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.
        </StyledDescription>
        <Box>
          <BoxTitle>
            1.&nbsp;Informacje og??lne
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>Niniejsza polityka dotyczy Serwisu www, funkcjonuj??cego pod adresem url: klimfix.pl</li>
              <li>Operatorem serwisu oraz Administratorem danych osobowych jest: KLIMFIX Damian W??jciak ul.Ignacego Paderewskiego 119C, 35-328 Rzesz??w</li>
              <li>Adres kontaktowy poczty elektronicznej operatora: kontakt@klimfix.pl</li>
              <li>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
              <li>Serwis wykorzystuje dane osobowe w nast??puj??cych celach:
                <ul>
                  <li>Realizacja zam??wionych us??ug</li>
                  <li>Prezentacja oferty lub informacji</li>
                </ul>
              </li>
              <li>Serwis realizuje funkcje pozyskiwania informacji o u??ytkownikach i ich zachowaniu w nast??puj??cy</li>
              <li>spos??b:
                <ul>
                  <li>Poprzez dobrowolnie wprowadzone w formularzach dane, kt??re zostaj?? wprowadzone do system??w Operatora.</li>
                  <li>Poprzez zapisywanie w urz??dzeniach ko??cowych plik??w cookie (tzw. ???ciasteczka???).</li>
                </ul>
              </li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            2.&nbsp;Wybrane metody ochrony danych stosowane przez Operatora
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>
                Miejsca logowania i wprowadzania danych osobowych s?? chronione w warstwie transmisji
                (certyfikat SSL). Dzi??ki temu dane osobowe i dane logowania, wprowadzone na stronie, zostaj??
                zaszyfrowane w komputerze u??ytkownika i mog?? by?? odczytane jedynie na docelowym serwerze
              </li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            3. Hosting
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>
                Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: az.pl
              </li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            4.&nbsp;Twoje prawa i dodatkowe informacje o sposobiewykorzystania danych
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>
                W niekt??rych sytuacjach Administrator ma prawo przekazywa?? Twoje dane osobowe innym
                odbiorcom, je??li b??dzie to niezb??dne do wykonania zawartej z Tob?? umowy lub do zrealizowania
                obowi??zk??w ci??????cych na Administratorze. Dotyczy to takich grup odbiorc??w:
                <ul>
                  <li>firma hostingowa na zasadzie powierzenia</li>
                  <li>upowa??nieni pracownicy i wsp????pracownicy, kt??rzy korzystaj?? z danych w celu
                    realizacji celu dzia??ania strony
                  </li>
                  <li>firmy, ??wiadcz??ce us??ugi marketingu na rzecz Administratora</li>
                </ul>
              </li>
              <li>
                Twoje dane osobowe przetwarzane przez Administratora nie d??u??ej, ni?? jest to konieczne do
                wykonania zwi??zanych z nimi czynno??ci okre??lonych osobnymi przepisami (np. o prowadzeniu
                rachunkowo??ci). W odniesieniu do danych marketingowych dane nie b??d?? przetwarzane d??u??ej
                ni?? przez 3 lata.
              </li>
              <li>
                Przys??uguje Ci prawo ????dania od Administratora:
                <ul>
                  <li>dost??pu do danych osobowych Ciebie dotycz??cych,</li>
                  <li>ich sprostowania,</li>
                  <li>usuni??cia,</li>
                  <li>ograniczenia przetwarzania,</li>
                  <li>oraz przenoszenia danych.</li>
                </ul>
              </li>
              <li>Przys??uguje Ci prawo do z??o??enia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c)
                wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interes??w
                realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie b??dzie
                mog??o by?? wykonane w przypadku istnienia wa??nych prawnie uzasadnionych podstaw do
                przetwarzania, nadrz??dnych wobec Ciebie interes??w, praw i wolno??ci, w szczeg??lno??ci ustalenia,
                dochodzenia lub obrony roszcze??
              </li>
              <li>Na dzia??ania Administratora przys??uguje skarga do Prezesa Urz??du Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa</li>
              <li>Podanie danych osobowych jest dobrowolne, lecz niezb??dne do obs??ugi Serwisu.</li>
              <li>W stosunku do Ciebie mog?? by?? podejmowane czynno??ci polegaj??ce na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu ??wiadczenia us??ug w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpo??redniego.</li>
              <li>Dane osobowe nie s?? przekazywane od kraj??w trzecich w rozumieniu przepis??w o ochronie danych osobowych. Oznacza to, ??e nie przesy??amy ich poza teren Unii Europejskiej.</li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            5.&nbsp;Informacje w formularzach
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>Serwis zbiera informacje podane dobrowolnie przez u??ytkownika, w tym dane osobowe, o ile zostan?? one podane.</li>
              <li>Serwis mo??e zapisa?? informacje o parametrach po????czenia (oznaczenie czasu, adres IP).</li>
              <li>Serwis, w niekt??rych wypadkach, mo??e zapisa?? informacj?? u??atwiaj??c?? powi??zanie danych w formularzu z adresem e-mail u??ytkownika wype??niaj??cego formularz. W takim wypadku adres e-mail u??ytkownika pojawia si?? wewn??trz adresu url strony zawieraj??cej formularz.</li>
              <li>Dane podane w formularzu s?? przetwarzane w celu wynikaj??cym z funkcji konkretnego formularza, np. w celu dokonania procesu obs??ugi zg??oszenia serwisowego lub kontaktu handlowego, rejestracji us??ug itp. Ka??dorazowo kontekst i opis formularza w czytelny spos??b informuje, do czego on s??u??y</li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            6.&nbsp;Logi Administratora
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>Informacje zachowaniu u??ytkownik??w w serwisie mog?? podlega?? logowaniu. Dane te s?? wykorzystywane w celu administrowania serwisem.</li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            7. Istotne techniki marketingowe
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>Operator stosuje analiz?? statystyczn?? ruchu na stronie, poprzez Google Analytics (Google Inc. z
                siedzib?? w USA). Operator nie przekazuje do operatora tej us??ugi danych osobowych, a jedynie
                zanonimizowane informacje. Us??uga bazuje na wykorzystaniu ciasteczek w urz??dzeniu ko??cowym
                u??ytkownika. W zakresie informacji o preferencjach u??ytkownika gromadzonych przez sie??
                reklamow?? Google u??ytkownik mo??e przegl??da?? i edytowa?? informacje wynikaj??ce z plik??w
                cookies przy pomocy narz??dzia: https://www.google.com/ads/preferences/
              </li>
              <li>
                Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, ??e serwis Facebook
                (Facebook Inc. z siedzib?? w USA) wie, ??e dana osoba w nim zarejestrowana korzysta z Serwisu.
                Bazuje w tym wypadku na danych, wobec kt??rych sam jest administratorem, Operator nie
                przekazuje od siebie ??adnych dodatkowych danych osobowych serwisowi Facebook. Us??uga
                bazuje na wykorzystaniu ciasteczek w urz??dzeniu ko??cowym u??ytkownika.
              </li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            8.&nbsp;Informacja o plikach cookies
          </BoxTitle>
          <BoxContent>
            <ol>
              <li> Serwis korzysta z plik??w cookies.</li>
              <li>Pliki cookies (tzw. ???ciasteczka???) stanowi?? dane informatyczne, w szczeg??lno??ci pliki tekstowe,
                kt??re przechowywane s?? w urz??dzeniu ko??cowym U??ytkownika Serwisu i przeznaczone s?? do
                korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawieraj?? nazw?? strony
                internetowej, z kt??rej pochodz??, czas przechowywania ich na urz??dzeniu ko??cowym oraz unikalny
                numer.
              </li>
              <li>Podmiotem zamieszczaj??cym na urz??dzeniu ko??cowym U??ytkownika Serwisu pliki cookies oraz
                uzyskuj??cym do nich dost??p jest operator Serwisu.
              </li>
              <li>Pliki cookies wykorzystywane s?? w nast??puj??cych celach:
                <ol>
                  <li>utrzymanie sesji u??ytkownika Serwisu (po zalogowaniu), dzi??ki kt??rej u??ytkownik nie
                    musi na ka??dej podstronie Serwisu ponownie wpisywa?? loginu i has??a;
                  </li>
                  <li> realizacji cel??w okre??lonych powy??ej w cz????ci "Istotne techniki marketingowe";</li>
                </ol>
              </li>
              <li>W ramach Serwisu stosowane s?? dwa zasadnicze rodzaje plik??w cookies: ???sesyjne??? (session
                cookies) oraz ???sta??e??? (persistent cookies). Cookies ???sesyjne??? s?? plikami tymczasowymi, kt??re
                przechowywane s?? w urz??dzeniu ko??cowym U??ytkownika do czasu wylogowania, opuszczenia
                strony internetowej lub wy????czenia oprogramowania (przegl??darki internetowej). ???Sta??e??? pliki
                cookies przechowywane s?? w urz??dzeniu ko??cowym U??ytkownika przez czas okre??lony w
                parametrach plik??w cookies lub do czasu ich usuni??cia przez U??ytkownika.
              </li>
              <li>Oprogramowanie do przegl??dania stron internetowych (przegl??darka internetowa) zazwyczaj
                domy??lnie dopuszcza przechowywanie plik??w cookies w urz??dzeniu ko??cowym U??ytkownika.
                U??ytkownicy Serwisu mog?? dokona?? zmiany ustawie?? w tym zakresie. Przegl??darka internetowa
                umo??liwia usuni??cie plik??w cookies. Mo??liwe jest tak??e automatyczne blokowanie plik??w cookies
                Szczeg????owe informacje na ten temat zawiera pomoc lub dokumentacja przegl??darki
                internetowej.
              </li>
              <li>Ograniczenia stosowania plik??w cookies mog?? wp??yn???? na niekt??re funkcjonalno??ci dost??pne na
                stronach internetowych Serwisu.
              </li>
              <li>Pliki cookies zamieszczane w urz??dzeniu ko??cowym U??ytkownika Serwisu wykorzystywane mog??
                by?? r??wnie?? przez wsp????pracuj??ce z operatorem Serwisu podmioty, w szczeg??lno??ci dotyczy to
                firm: Google (Google Inc. z siedzib?? w USA), Facebook (Facebook Inc. z siedzib?? w USA), Twitter
                (Twitter Inc. z siedzib?? w USA).
              </li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            9.&nbsp;Zarz??dzanie plikami cookies ??? jak w praktyce wyra??a?? i cofa?? zgod???
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>
                Je??li u??ytkownik nie chce otrzymywa?? plik??w cookies, mo??e zmieni?? ustawienia przegl??darki.
                Zastrzegamy, ??e wy????czenie obs??ugi plik??w cookies niezb??dnych dla proces??w uwierzytelniania,
                bezpiecze??stwa, utrzymania preferencji u??ytkownika mo??e utrudni??, a w skrajnych przypadkach
                mo??e uniemo??liwi?? korzystanie ze stron www
              </li>
              <li>
                W celu zarz??dzania ustawienia cookies wybierz z listy poni??ej przegl??dark?? internetow??, kt??rej
                u??ywasz i post??puj zgodnie z instrukcjami:
                <ul>
                  <li>Edge</li>
                  <li>Internet Explorer</li>
                  <li>Chrome</li>
                  <li>Safari</li>
                  <li>Firefox</li>
                  <li>Opera</li>
                </ul>
                Urz??dzenia mobilne:
                <ul>
                  <li>Android</li>
                  <li>Safari (iOS)</li>
                  <li>Windows Phone</li>
                </ul>
              </li>
            </ol>
          </BoxContent>
        </Box>
      </StyledWrapper>
    </SubpageContainer>
  );
};

export default RegulationsPge;

export const Head: HeadFC = () => <title>Klimfix | Polityka prywatno??ci</title>;
