# Task

Realizzare una piccola applicazione che mostri una lista di Post e il dettaglio del post selezionato.

## Specifiche

- nel file [`mock-data/posts.mock.ts`](mock-data/posts.mock.ts) è presente un esempio di lista di post (`Post[]`)
- l'interfaccia [`Post`](interfaces/post.interface.ts) è presente in [`interfaces/post.interface.ts`](interfaces/post.interface.ts)
- nel file [`mock-data/users.mock.ts`](mock-data/users.mock.ts) è presente un esempio di lista di user (`User[]`)
- l'interfaccia [`User`](interfaces/user.interface.ts) è presente in [`interfaces/user.interface.ts`](interfaces/user.interface.ts)
- a ogni `user` possono corrispondere più `post`.
- per associare un post a un utente fare riferimento alla chiave `userId` di `Post` (che corrisponde alla chiave `id` di `User`).

## Design

Basarsi sulle immagini fornite nel file [anteprime.pdf](anteprime.pdf): in generale l'esercizio vuole dare al candidato la possibilità di mettere in risalto le sue conoscenze di stile e anche le sue capacità creative. La grafica si può sicuramente migliorare, ma le anteprime grafiche rappresentano il minimo indispensabile.

### Esercizio Base:

- mostrare la lista di post e con titolo e dettaglio
  - la lista può essere recuperata dal file [`mock-data/posts.mock.ts`](mock-data/posts.mock.ts) o mediante una chiamata all'endpoint fornito da jsonplaceholder: https://jsonplaceholder.typicode.com/posts
- ogni elemento della lista è separato da una linea (di colore `#eeeeee`);
- a sinistra c'è un quadrato colorato con bordi arrotondati (dimensione 50x50 px) allineato al centro verticalmente;
- il titolo in grassetto (2rem) colorato `post.title`;
- il paragrafo (1rem) `post.body`;

### Esercizio Moderato:

- mostrare la lista di post e con titolo e dettaglio e alcune informazioni dell'utente
    - la lista dei post deve essere recuperata mediante una chiamata all'endpoint fornito da jsonplaceholder: https://jsonplaceholder.typicode.com/posts;
    - anche la lista degli users deve essere recuperata mediante una chiamata all'endpoint fornito da jsonplaceholder: https://jsonplaceholder.typicode.com/users;
- all'interno del quadrato colorato, inserire le iniziali (Nome e Cognome) dello `user` che ha pubblicato il `post`;
- un paragrafo che specifica lo `user.username` che ha pubblicato il post (size: 0.75rem);
- **SOLO SE** si clicca sul quadrato colorato, viene mostrata una card in cima alla lista, con i dettagli del `post` cliccato.
- la card mostra `user.name` e `user.username` dell'autore del post
- la card mostra anche `post.title` e `post.body` del post.
- infine aggiungere un bottone nella card, che elimina la card stessa.
- si può vedere solo una card dettaglio per volta.

## Librerie?

E' possibile usare qualsiasi libreria di terze parti per risolvere l'attività, l'importante sarà sicuramente motivare le scelte intaprese.

- Il candidato può creare il progetto sul suo personal e risolverlo in locale;
  - In questo caso, potrebbe tornare utile fornire un repository.
- Altra alternativa, il candidato può risolvere l'attività su piattaforme come
[Stackblitz](https://stackblitz.com/?starters=frontend) (**in questo caso quindi è necessario salvarsi la url del progetto, per poterlo condividere in sede di colloquio** ).
  - Ad esempio, in Stackblitz selezionare il framework / libreria (Angular, React, Vue, Svelte...) oggetto di colloquio. 
 

## Pro tips

Saranno apprezzate (ma non necessarie) le seguenti funzionalità:

- filtri di ricerca nella lista (lato client);
- gestione routing;
- dettaglio dell'utente in una rotta specifica;
- dettaglio del post in una rotta specifica oppure mostrata in sovrapposizione alla lista (ad esempio, come una modale);
- funzionalità responsive (adattamento della view a diversi breakpoints);
- funzionalità di cambio tema (ad esempio rendere variabile il colore "primario" di quadrato/testo/link etc...);
- animazioni o transizioni;
- gestione della lista in doppia visualizzazione (semplice lista e card affiancate);
- organizzazione pulita e chiara della struttura del progetto (modules, services, directives...).

##### Buon lavoro!
