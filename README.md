## TESTS WITH CYPRESS

### Notes
- https://docs.cypress.io/guides/getting-started/installing-cypress#Switching-browsers
- https://docs.cypress.io/guides/getting-started/writing-your-first-test#Add-a-test-file

### Historyjki
1. Użytkownik ma możliwość zalogować się do aplikacji
- logowanie się za pomocą emaila i hasła
- wykorzystanie oAuth jako sposobu autoryzacji
- pole pozwalające wpisać email walidowane jest pod względem poprawności  (czy jest to prawdziwy email)
- błąd logowania sygnalizowany jest okienkiem pod formularzem logowania

2. Użytkownik będzie mógł zarejestrować się do serwisu.
- Należy podać email, hasło x2, imię i nazwisko
- Hasło będzie walidowane pod względem walorów bezpieczeństwa
    - min 8 znaków
    - doze, małe litery
    - cyfry
    - znaki specjalne
- Imia i nazwisko będzie walidowane pod względem czy wpisane wartości są stringami
- Jeśli konto z danym emailem istnieje pojawi się okienko z informacją pod formularzem rejestracji
- pole pozwalające wpisać email walidowane jest pod względem poprawności (czy jest to prawdziwy email)

3. Jako sprzedawca chce mieć możliwość na dodanie nowego produktu na sprzedaż
- Formularz pozwala na podanie podstawowych informacji o produkcie 
    - nazwa
    - cena
    - kategoria
    - zdjęcia produktu
    - dokładny opis, wielkość, waga itp (elementy opcjonalne)

4. Jako użytkownik chcę mieć możliwość wyszukiwania produktów po nazwie
- search działa dopiero po wpisaniu min 3 znaków
- wyniki wyświetlane są na głównej stronie z produktami
- jeśli liczba wyników przekracza 10 aby zobaczyć resztę należy przejść na następną stronę poprzez skorzystanie z paginacji na dole strony (przycisku do paginacji -> zmiany strony xd)

5. Jako użytkownik chcę mieć możliwość podglądu historii zakupów i dodania oceny i komentarza pod zakupionym produktem
- ocenę można dokonać poprzez
    - historię zakupów (to nas interesuje)
    - na stronie produktu, (jeśli kupiliśmy produkt istnieje możliwość dodania komentarza)