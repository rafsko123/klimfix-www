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
          Polityka prywatności
        </StyledTitleMd>
        <StyledDescription>
          Polityka prywatności opisuje zasady przetwarzania przez nas informacji na
          Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.
        </StyledDescription>
        <Box>
          <BoxTitle>
            1.&nbsp;Informacje ogólne
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: klimfix.pl</li>
              <li>Operatorem serwisu oraz Administratorem danych osobowych jest: KLIMFIX Damian Wójciak ul.Ignacego Paderewskiego 119C, 35-328 Rzeszów</li>
              <li>Adres kontaktowy poczty elektronicznej operatora: kontakt@klimfix.pl</li>
              <li>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
              <li>Serwis wykorzystuje dane osobowe w następujących celach:
                <ul>
                  <li>Realizacja zamówionych usług</li>
                  <li>Prezentacja oferty lub informacji</li>
                </ul>
              </li>
              <li>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący</li>
              <li>sposób:
                <ul>
                  <li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                  <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
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
                Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji
                (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają
                zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze
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
                W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym
                odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania
                obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:
                <ul>
                  <li>firma hostingowa na zasadzie powierzenia</li>
                  <li>upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu
                    realizacji celu działania strony
                  </li>
                  <li>firmy, świadczące usługi marketingu na rzecz Administratora</li>
                </ul>
              </li>
              <li>
                Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do
                wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu
                rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej
                niż przez 3 lata.
              </li>
              <li>
                Przysługuje Ci prawo żądania od Administratora:
                <ul>
                  <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                  <li>ich sprostowania,</li>
                  <li>usunięcia,</li>
                  <li>ograniczenia przetwarzania,</li>
                  <li>oraz przenoszenia danych.</li>
                </ul>
              </li>
              <li>Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c)
                wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów
                realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie
                mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do
                przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia,
                dochodzenia lub obrony roszczeń
              </li>
              <li>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa</li>
              <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
              <li>W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
              <li>Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            5.&nbsp;Informacje w formularzach
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
              <li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
              <li>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
              <li>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy</li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            6.&nbsp;Logi Administratora
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            7. Istotne techniki marketingowe
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z
                siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie
                zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym
                użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć
                reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików
                cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/
              </li>
              <li>
                Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook
                (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu.
                Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie
                przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa
                bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
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
              <li> Serwis korzysta z plików cookies.</li>
              <li>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe,
                które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do
                korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony
                internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny
                numer.
              </li>
              <li>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz
                uzyskującym do nich dostęp jest operator Serwisu.
              </li>
              <li>Pliki cookies wykorzystywane są w następujących celach:
                <ol>
                  <li>utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie
                    musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;
                  </li>
                  <li> realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</li>
                </ol>
              </li>
              <li>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session
                cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które
                przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia
                strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki
                cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w
                parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
              </li>
              <li>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj
                domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
                Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa
                umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies
                Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki
                internetowej.
              </li>
              <li>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na
                stronach internetowych Serwisu.
              </li>
              <li>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą
                być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to
                firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter
                (Twitter Inc. z siedzibą w USA).
              </li>
            </ol>
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>
            9.&nbsp;Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
          </BoxTitle>
          <BoxContent>
            <ol>
              <li>
                Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki.
                Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania,
                bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach
                może uniemożliwić korzystanie ze stron www
              </li>
              <li>
                W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której
                używasz i postępuj zgodnie z instrukcjami:
                <ul>
                  <li>Edge</li>
                  <li>Internet Explorer</li>
                  <li>Chrome</li>
                  <li>Safari</li>
                  <li>Firefox</li>
                  <li>Opera</li>
                </ul>
                Urządzenia mobilne:
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

export const Head: HeadFC = () => <title>Klimfix | Polityka prywatności</title>;
