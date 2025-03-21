
Introduktion
I denna inlämningsuppgift ska du omvandla din sida som du byggt i HTML & CSS kursen till att vara en sida som bygger på Javascript med React och Vite. Instruktioner om detta kommer under v.43. Att göra om en sida till att vara Javascriptbaserad handlar om att dela upp dina olika sektioner i komponenter.

Du kommer fortfarande använda dig av samma design som du använt dig av i tidigare kurs, men nu tillkommer det en sida, en kontaktsida som du ska designa upp. Så min rekommendation är att du se till att designa och strukturera upp den sidan denna vecka. Det spelar ingen roll om du har CSS eller SCSS båda två lösningarna fungerar att använda.

Web Api (tillgänglig mellan 2024-10-16 till 2025-01-26)

Du kommer även behöva byta ut lite information från att vara statiskt inlagt till att det hämtas från ett web api. Saker som ska hämtas från apiet är Testimonials och FAQ

https://win24-assignment.azurewebsites.net

För godkänt krävs följande:

Du ska bygga upp en sida med hjälp av React.

Alla sektioner ska vara indelade i komponenter.

Alla formulär på sidan ska ha en enklare form av validering (innehåller det någon information).

Du ska kunna hämta Testimonials och FAQ från webapiet.

Din FAQ (accordion) ska fungera att växla mellan de olika boxarna.

Det ska gå att växla mellan mörkt och ljust tema genom att använda switchen i headern.

För väl godkänt krävs även följande:

Du måste ha två olika sidor som går att navigera mellan (Home + Contact).

Sidorna måste vara responsiva.

En mobilanpassad meny måste finnas som fungerar. Design väljer du själv.

Du ska använda dig av useState, useEffect och useContext på lämpliga ställen.

Alla formulär på sidan måste valideras med hjälp av regular expressions.

Alla formulär ska kunna skicka iväg data till web apiet och sedan visa ett bekräftelsemeddelande på att formuläret skickats iväg eller att man registrerat sig för nyhetsbrev.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
