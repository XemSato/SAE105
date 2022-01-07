let tableau=location.href.split("="); 
if(tableau.length>1){
document.querySelector(".preset1").innerText="SAE n°"+tableau[1];
}
else{
document.querySelector(".preset1").innerText="???";
}

let TAB = {
   "AC" : {
        "AC1101" : ` Appréhender un contexte économique, sociologique, culturel, juridique, technologique, communicationnel et médiatique`,
        "AC1102" :  `Évaluer un site web, un produit multimédia ou un dispositif interactif existant en s’appuyant sur des guides de bonnes pratiques`,
        "AC1103" : `Extraire et interpréter des indicateurs quantitatifs (métriques) et statistiques pour évaluer l’efficacité d’un service ou d’un site Web`,
        "AC1104" : `Interpréter les éléments sémiotiques (langage, ton de voix, logotype, typographies, couleurs, visuels…)`,
        "AC1105" :  `Identifier les cibles (critères socio-économiques, démographiques, géographiques, culturels...)`,
        "AC1106" : `Réaliser des entretiens utilisateurs (sélection de la cible, écriture du guide d’entretien, organisation)`,
        "AC1107" : `Bâtir le modèle des attentes utilisateurs`,
        "AC2101" : `Concevoir un produit ou un service en termes d’usage et de fonctionnalité`,
        "AC2102" : `Construire la proposition de valeur* d’un produit ou d’un service`,
        "AC2103" : `Proposer une recommandation marketing (cibles, objectifs, points de contact)`,
        "AC2104" : `Mettre au point une stratégie de communication en adaptant le message aux objectifs`,
        "AC2105" : `Rédiger une charte éditoriale pour un site web, un blog, un réseau social (préconisation rédactionnelle, référencement naturel)`,
        "AC2106" : `Communiquer sur les réseaux sociaux (ligne éditoriale et calendrier de publication)`,
        "AC3101" : `Produire un écrit communicationnel dans un style juste et pertinent, en phase avec la stratégie`,
        "AC3102" : `Produire des pistes graphiques et des planches d’inspiration`,
        "AC3103" : `Créer, composer et retoucher des visuels`,
        "AC3104" : `Tourner et monter une vidéo (scénario, captation image et son...) `,
        "AC3105" : `Designer une interface web (wireframes, UI)`,
        "AC3106" : `Optimiser les médias en fonction de leurs usages et supports de diffusion `,
        "AC4101" : `Exploiter de manière autonome un environnement de développement efficace et productif `,
        "AC4102" : `Produire des pages Web statiques et fluides utilisant un balisage sémantique efficace `,
        "AC4103" : `Générer des pages Web ou vues à partir de données structurées incluant des interactions simples`,
        "AC4104" : `Mettre en ligne une application Web en utilisant une solution d’hébergement standard `,
        "AC4105" : `Modéliser les données et les traitements d’une application Web`,
        "AC4106" : `Utiliser et adapter un modèle d’accès aux données`,
        "AC4107" : `Déployer et personnaliser une application Web en utilisant un CMS ou un framework MVC`,
        "AC5101" : `Gérer un projet avec une méthode classique`,
        "AC5102" : `Budgétiser un projet et suivre sa rentabilité`,
        "AC5103" : `Faire un appel d’offre (cahier des charges, brief, analyse des réponses, choix du prestataire, contractualisation)`,
        "AC5104" : `Découvrir les écosystèmes d’innovation numérique (fab labs, living labs, tiers-lieux, incubateurs…)`,
        "AC5105" : `Analyser un produit ou un service innovant en identifiant les propositions de valeurs et en évaluant les solutions proposées`,
        "AC5106" : `Construire une présence en ligne professionnelle (personal branding)`
    },
    "CC":{
        "CC1" : `Comprendre`,
        "CC2" : `Concevoir`,
        "CC3" : `Exprimer`,
        "CC4" : `Développé`,
        "CC5" : `Entreprendre`,
    },
  
    "DM" : {
        "DMSAE101" : `Analyser un site web, un produit multimédia ou la présence en ligne d’une
        marque ou d’une organisation et établir différents rapports d’audit.
        Cette SAE peut être l’occasion d’explorer des outils d’analyse de trafic, de
        sondages d’opinion pour obtenir des données à analyser ou des référentiels
        de qualité concernant l’ergonomie et l’accessibilité Web.`,

        "DMSAE102" : `
        Construire une recommandation de communication pour la sortie ou
        le repositionnement d'un produit ou d’un service.
        
        `,
        "DMSAE103" : `
        Créer les éléments graphiques et visuels pour une campagne de
        communication (un événement, la sortie d’un produit, le positionnement
        d’une marque…) et justifier ses choix esthétiques.
        Cette SAÉ est à lier avec la SAE106.
        `,
        "DMSAE104" : `
        Concevoir et produire un contenu audiovisuel dans une perspective
        de vulgarisation ou d’argumentation.
        `,
        "DMSAE105" : `
        <div> Produire un site Web contenant à la fois des pages statiques et des pages générées à
        partir de jeux de données structurées, respectant les normes du W3C et les
        recommandations du WCAG. </div>
        <div> Cette activité correspond au travail de conception, d’intégration et de développement
        des vues d’une application Web, en agence. Elle permet de combiner les ressources
        liées au développement et à l’intégration.</div>
        <div> Elle sensibilise les étudiants à la nécessité
        de respecter les normes et les bonnes pratiques du développement. Elle doit
        permettre de rendre les étudiants autonomes sur leur poste de travail en les invitant
        par exemple à héberger le site produit sur un serveur local.</div>
        `,
        "DMSAE106" : `
        Mettre en place la gestion de projet pour proposer une
        recommandation de communication numérique.
        Cette SAÉ est à lier avec la SAE103.
        `
    },
    "SAE101": {
        "Titre" : "SAE 101 - Audit comunication numérique",
        "Description" : [
            "DMSAE101"
        ],
        "SD" : "Le livrable attendu",
        "DAC" : "Les aprentissages critiques",
        "AC" : [
            "AC1101",
            "AC1102",
            "AC1103",
            "AC1104",
            "AC1105"
        ],
        "compétence" : "Comprendre",
        //Mise en Oeuvre
        "Name" : "<div class='titre'>Mes étapes pour y arrivé</div>",
        "stape" : [
            "<div>1 - Faire l'étude de cas de Sémiologique</div>",
            `<div>2 - trouvé un site pour un audit -> <a style="color: #277588;" href="https://www.vuxe.fr/">Le site</a></div>`,
            `<div>3 - Analyse le site , les couleur ,la dispostion ,les caractère/police etc..</div>`,
            `<div>4 - Construire une reunion sur un site web decrivant les defauts et comment les réglé en Anglais</div>`,
            `<div>5 -  Faire l'audit de l’expérience utilisateur du site.</div>`
        ],
        "Name2" : `Ma mise en oeuvre`,
        "MOE" : [
            `<div>étape 1 : consite a faire chaque question de l'étude de cas doné vous pourver aussi <a href="Galerie.html">Voir le résultat ?</a></div>`,
            "<div>étape 2 : cette étape était juste de trouvé le site via le lien donné, rien de bien compliqué</div>",
            `<div>étape 3 : J'ai du annalyse donc les différente couleur, ainsi que les differente typographie pour se faire j'ai utilise l'extension que chrome propose nommé "visual inspector" <a href"Outils.html">(l'extension en focntionnement)</a></div>`,
            `<div>étape 4 : C'était la plus dur même si nous somme en groupe pour faire le travail il fallais trouvé lers déffaut et trouvé des solution pour les aranger tout sa en anglais a fin de crée un jeu de rôles a l'oral</div>`,
            `<div>Etape 5 : Repose éssentiellement sur un document donné en cour pour faire un audit, après avoir utiliser tout les outil <a href="Outiles.html">(voir l'outil ?)</a>, j'ai du mêtre en forme et rédiger au mieux. afin de crée le meilleur Audit</div>`
        ],
        "ImageOne" : `<img src="img/preservation.png" alt="Une image d'audit">`,
        "Resultat1" : [
            
            `<div>Vous souhaitez voir le site web ? <a href="https://www.vuxe.fr/">le voici !</a></div>`
        ],
        "Resultat2" : [
            `<div>Et pourquoi pas voir aussi l'analyse de couleur et l'étude de cas ! </div>`,
            `<a href="https://drive.google.com/drive/folders/1zNiiJFKpo8_XSgQ3pJuP3JvBS9Lq5QWK?usp=sharing">L'analyse du site avec les couleurs etc</a>`,
            `<a href="https://drive.google.com/drive/folders/1zNiiJFKpo8_XSgQ3pJuP3JvBS9Lq5QWK?usp=sharing">L'étude de cas et ces réponse</a>`
        ],
        "Galerie": [
            `<img src="img/SAE101_2.jpg" alt="ImageUne">`
        ]

    },
    /************** PARTIE SAE 102 EN DESSOUS **************/
    "SAE102": {
        "Titre" : "SAE 102 - Recomandation de comunication numérique ",
        "Description" : [
            "DMSAE102"
        ],
        "SD" : "Le livrable attendu",
        "DAC" : "Les aprentissages critiques",
        "AC" : [
           
            "AC2103",
            "AC2104",
            "AC2105",
            "AC2106"
        ],
        "compétence" : "Comprendre",
        //Mise en Oeuvre
        "Name" : "<div class='titre'>Mes étapes pour y arrivé</div>",
        "stape" : [
            "<div>1 - Atudié le marché actuelle</div>",
            `<div>2 - Comprendre les enjeux et définir sa marque</div> `,
            `<div>3 - création et conception du produit</div>`,
            `<div>4 - Finaliser les rendus et finir les anexes</div>`,
            `<div>5 - Présentation Oral Anglais/allemand.</div>`
        ],
        "Name2" : `Ma mise en oeuvre`,
        "MOE" : [
            `<div>etape 1 :Divisé a 2 dans notre groupe chaqu'un a pris une partie des question de la documentation et y a répondu avant de faire une mise en commun pour cela on a du définir aussi un chef de groupe ainsi que un chef de comunication, de plus la mise en comun se faisais a chaque fois que quelqu'un avancais pour être sur que rien ne soit loupé,Pour étudier le marché a du définir la concurence pour avoir une meilleur Segmentation</div>`,
            "<div>étape 2 : Une fois compris ou on se place dans le marché, on a du défini les enjeux ainsi que le nom la marque et son atout principale</div>",
            `<div>étape 3 : Après avoir effectué les deux première étape crutiale et avoir défini un Persona on apu se panché sur le designe du produit, le design du nom etc..</div>`,
            `<div>étape 4 : On a pu donc fini la création du prodit, et ainsi finir les anexe demandé</div>`,
            `<div>Etape 5 : </div>`
        ],
        "ImageOne" : `<img src="img/" alt="Une image de notre marque">`,
        "Resultat1" : [
            `<div>Et pourquoi pas voir le résultat de notre marque ? <a href="https://drive.google.com/drive/folders/1zNiiJFKpo8_XSgQ3pJuP3JvBS9Lq5QWK?usp=sharing">Elle se trouve la</a> </div>`,
           
        ],
        "Resultat2" : [
            `<div>Voir les fichier ressource et le drive ?</div>`,
            `<a href="https://drive.google.com/drive/folders/1zNiiJFKpo8_XSgQ3pJuP3JvBS9Lq5QWK?usp=sharing">Les fichier ressource/drive </a>`
        ],
        "Galerie": [
            `<img src="" alt="ImageRealisation3D">`
        ]

        
    },
    /************** PARTIE SAE 103 EN DESSOUS **************/

    "SAE103" : {
        "Titre" : "SAE 103 - Design Graphique",
        "Description" : [
            "DMSAE103"
        ],
        "SD" : "Le livrable attendu",
        "DAC" : "Les aprentissages critiques",
        "AC" : [
           
            "AC3102",
            "AC3103",
            "AC3106",
        ],
        "compétence" : "Comprendre",
        //Mise en Oeuvre
        "Name" : "<div class='titre'>Mes étapes pour y arrivé</div>",
        "stape" : [
            "<div>1 - Analyse d'un objet</div>",
            `<div>2 - Réalisation 2D de l'objet mais transformer différement</div> `,
            `<div>3 - Crée Une maquette</div>`,
            `<div>4 - Reprendre la maquette pour la crée en 3D</div>`,
            `<div>5 - Utilise toute les réalisation précédent afin de Crée une banière et une affiche</div>`
        ],
        "Name2" : `Ma mise en oeuvre`,
        "MOE" : [
            `<div>étape 1 : J'ai commencé part chercher un objet qui m'inspirais, pour se faire j'ai utilisé les site de référence pour au final prend un qui venais d'un site marchant</div>`,
            "<div>étape 2 : Après avoir trouver mon objet et l'avoir analysé j'ai pu me concentré sur sa transformation pour ma part c'était de partir d'une chaise vers un canapé</div>",
            `<div>étape 3 : Pour la maquette j'ai du en faire 2 test différent, malgré ma faiblesse en travaux manuelle j'ai réussi a sortir quelque chose potable jai pu donc lui définir des valeur pour une taille reel </div>`,
            `<div>étape 4 : Une foix mes valeurs trouvé et après m'être entrainé un peu a faire de la 3D j'ai pu concevoir mon objet en 3D </div>`,
            `<div>Etape 5 : Enfin l'une des étape la plus créatif était ce crée une maquette et une affiche, j'ai donc repris mon canapé et l'est mis en scène dans mes 2 présentation</div>`
        ],
        "ImageOne" : `<img src="img/téléchargement.jpg" alt="Art, (recuperer du cour moodle deja découpé ainsi)">`,
        "Resultat1" : [
            `<div>Toute se travail demandais pas mal de technique </div>`,
            `<div>Pour cela j'ai du prendre de nombreuse photo / screen de mes travaux</div>`
        ],
        "Resultat2" : [
            `<div>Mais voulant pas surchargé la page vous les trouvé tous ici</div>`,
            `<a href="https://drive.google.com/drive/folders/1zNiiJFKpo8_XSgQ3pJuP3JvBS9Lq5QWK?usp=sharing">Mes Rendu </a>`
        ],
        "Galerie": [
            `<img src="img/Rendu vue 2.jpg" alt="ImageMaChaise">`,
           
        ]

    },
     /************** PARTIE SAE 104 EN DESSOUS **************/
    "SAE104" : {
        "Titre" : "SAE 104 : Production Audio et Vidéo ",
        "Description" : [
            "DMSAE104"
        ],
        "SD" : "Le livrable attendu",
        "DAC" : "Les aprentissages critiques",
        "AC" : [
            "AC3101",
            "AC3103",
            "AC3104",
            "AC3106"
        ],
        "compétence" : "Comprendre",
        //Mise en Oeuvre
        "Name" : "<div class='titre'>Mes étapes pour y arrivé</div>",
        "stape" : [
            "<div>1 - Trouvé une thématique pour la vidéo qui seras en partie en anglais </div>",
            `<div>2 - Trouvé un nom chaine , nom serie et le type de la vidéo</div>`,
            `<div>3 - Concevoir un scènariao et un séquencier (dossier de production en bref)</div>`,
            `<div>4 - Concevoir une banière youtube ,qinsi que  une image de logo</div>`,
            `<div>5 - Concevoir la production video </div>`,
            `<div>6 - Monter et envoyé la vidéo final avec les média optimiser</div>`
        ],
        "Name2" : `Ma mise en oeuvre`,
        "MOE" : [
            `<div>étaoe 1 : Nous etions donc en groupe pour se travail on pu donc brainstomer sur les thématique avant de trouvé le sujet de la représentation de l'espace, pour se faire on du bien sur définir des films et les visualisé afin de crée au mieux les élément qui allais suivre dans la vidéo</div>`,
            "<div>étape 2 : Encore uen fois le brainstorming a été la base de se travail, on donc cherchercher plusieur nom avant de se définir sur un qui nous parraissais convenable</div>",
            `<div>étape 3 : Le scènario était ma partie principale j'ai du donc crée le script, le pitch , la note d'intention bien évidement, afin de pouvoir crée au mieux le scénario,j'ai du revoir mes ancien scènario pour être sur de la structure a prendre, étant donné que un scénario dispose toujours de la même typographie et d'élément prédéfini comme les prénom en Majuscule, ou les différent discussion qui sont place en centré et pas a gauche.  </div>`,
            `<div>étape 4 : La banière youtube et le logo a été fais part mon colègue thibaut cependant afin de détenir la perfection nous avons debriefer enssemble sur le quel pouvais le mieux nous ressembler.</div>`,
            `<div>Etape 5 :Pour la production vidéo nous avons utiliser le studio d'une personne du groupe, au quel se dernier disposais un fond vert via le quel nous avont pu être libre de crée ce que on veut tout en utilisant des appareil preter part l'iut comme la camera BlackMagik, pour concevoir la vidéo nous nous somme basé sur le scénario et le séquencier.  </div>`,
            `<div>Etape 6 : Enfin l'étape la plus longue reste le Montage. En effet, il a fallut enregistrer des voix off. Voix Off en anglais qui a du être utilisé pour les mêtre sur la vidéo, le traitage du son et de la colorimetrie a pu être fais comme le montage via le logiciel que nous avons apris en cour ( Première Pro et Adobe Audition).</div>`
        ],
        "ImageOne" : `<img src="img/tournage.png" alt="Une image de notre cour métrage">`,
        "Resultat1" : [
            `<div>Malgré un contre temp, la video a pu être réalise</div>`,
            
        ],
        "Resultat2" : [
            `<div>Pour voir la video c'est ici : </div>`,
            `<a href="">La vidéo</a>`,
            
        ],
        "Galerie": [
            `<img src="img/pocket-cine4K-top-650-400.png" alt="Image_de_BlackMagic">`
        ]

    },
    /************* PARTIE SAE 105 EN DESSOUS **************/
    "SAE105" : {
        "Titre" : "SAE 105 ",
        "Description" : [
            "DMSAE105"
        ],
        "SD" : "Le livrable attendu",
        "DAC" : "Les aprentissages critiques",
        "AC" : [
           
            "AC4101",
            "AC4102",
            "AC4103",
            "AC4104"
        ],
        "compétence" : "Comprendre",
        //Mise en Oeuvre
        "Name" : "<div class='titre'>Mes étapes pour y arrivé</div>",
        "stape" : [
            "<div>1 - comprendre le travail demandé</div>",
            `<div>2 - Créer un support afin de donné une idée de la création futur</div>`,
            `<div>3 - Crée et utilisé les bonne pratique vu en cour dans les différent lanagage HTML5/CSS3/JS</div>`,
            `<div>4 - Savoir utilisé du JSON</div>`,
            `<div>5 - Présenation oral et amilioration de la page</div>`
        ],
        "Name2" : `Ma mise en oeuvre`,
        "MOE" : [
            `<div>etape 1 : Pour pouvoir bien commencé cette SAE j'ai du bien comprendre ce qui m'était demandé et donc adapter mon contenu a la demande, pour ne pas être perdu j'ai décidé de faire une maquette du site web</div>`,
            "<div>étape 2 : Après fais ma maquette j'ai commencé part définir toute mes balise HTML et puis j'ai construit le CSS petit a petit après, en prenant en compte bien sur la bonne aboréscence dans mes fichiers.</div>",
            `<div>étape 3 :Une fois mes page vierge fais il a fallu leurs donné du contenu pour se faire j'ai créee un tableau de donné sous le format JSON (java script objet name) au quel j'ai du définir tout les parcourts des sae que j'ai du faire, comme ce que vous lisez actuellement du coup :) </div>`,
            `<div>étape 4 : Une fois mes donné écrite dans mon fichier JavaScript j'ai pu les tuiliser pour les acrémenté dans mon HTML suite a cela j'ai fais en sorte qui saffiche en fonction du boouton que on a cliqué</div>`,
            `<div>Etape 5 : Enfin j'ai crée mes pages anexe qui me servent de support pour ne pas encombré ma page type et j'ai fais mes animation un peut partout avant de faire un oral qui présente rapidement les Aprentissage critique qui était demandé</div>`
        ],
        "ImageOne" : `<img src="img/undraw_web_devices_re_m8sc.svg" alt="Une image web">`,
        "Resultat1" : [
            `<div>Et du coup niveau résultat je pense qui a pas grand chose a dire</div>`,
            `<div>Etant donné que vous le voyer actuellement</div>`
        ],
        "Resultat2" : [
            `<div>Mais voici quand même des liens pour voir mes maquettes que j'ai réaliser pour la SAE</div>`,
            `<a href="https://drive.google.com/drive/folders/1zNiiJFKpo8_XSgQ3pJuP3JvBS9Lq5QWK?usp=sharing">La Maquette</a>`
        ],
        "Galerie": [
            `<img src="img/Web.png" alt="ma page web1">`
            
        ]

    },
  /************** PARTIE SAE 106 EN DESSOUS **************/
    "SAE106" : {
        "Titre" : "SAE 106 - Gestion de projet & Burautique ",
        "Description" : [
            "DMSAE106"
        ],
        "SD" : "Le livrable attendu",
        "DAC" : "Les aprentissages critiques",
        "AC" : [
           
            "AC5101",
            "AC5102",
            "AC5103"
        ],
        "compétence" : "Comprendre",
        //Mise en Oeuvre
        "Name" : "<div class='titre'>Mes étapes pour y arrivé</div>",
        "stape" : [
            "<div>1 - Definir le projet </div>",
            `<div>2 - Comprendre et utilisé les outils</div> `,
            `<div>3 - Crée une facture</div>`,
        ],
        "Name2" : `Ma mise en oeuvre`,
        "MOE" : [
            `<div>étape 1 : Il fallais comprendre ce qu'es un projet et comment le mêtre en oeuvre pour se faire il fallait donc utilisé les bon outils</div>`,
            "<div>étape 2 : Une foix que les outils sont aquis il faut le smêtre en oeuvre , ainsi on peut mieux comprendre comment ce crée, meme si pour le moment nous avons vu que les outils de base c'est seux qui pose tout le projet au claire</div>",
            `<div>étape 3 : Pour la facture il fallait alors utilisé un fichier excel et strucutre tout ce qui nous a demandé en se basant sur le projet de la sae 103</div>`
        ],
        "ImageOne" : `<img src="img/Projet.jpg" alt="Une image d'audit">`,
        "Resultat1" : [
            `<div> Crée un projet demande beaucoup d'information et un certain temp </div>`,
            `<div> Pour ne pas emcombrer ma page de réalisation j'ai décidé de vous faire un lien direct vers un drive pour la partie Gestion de projet</div>`
        ],
        "Resultat2" : [
            `<div>Cependant si vous voulez voir la facture elle se trouve dans la galerie de réalisation :</div>`,
            `<a href="https://drive.google.com/drive/folders/1zNiiJFKpo8_XSgQ3pJuP3JvBS9Lq5QWK?usp=sharing">La facture</a>`,
            `/`,
            `<a href="https://drive.google.com/drive/folders/1zNiiJFKpo8_XSgQ3pJuP3JvBS9Lq5QWK?usp=sharing">La gestion de projet</a>`
        ],
        "Galerie": [
            `<img src="img/logo discord.png" alt="ImageUne">`
        ]

    }
} 
let chien = TAB["SAE"+tableau[1]].AC


let chat = TAB["SAE"+tableau[1]].Description[0];


document.querySelector('main').innerHTML = `
<main>
<div id="p1" class="Conteneur">
    
    <div  class="P1 flexOne">
        <div class="cadre1">
            <h2>
                La  demande
            </h2>
            <div class="preset1">
               ${TAB["SAE"+tableau[1]].ImageOne}
            </div>
        </div>
        <div class="cadre2">
            <div class="preset2">
                <p class="H2">
                    ${TAB["SAE"+tableau[1]].Titre}
                </p>
                <p class="titre"> 
                    ${TAB["SAE"+tableau[1]].SD}
                </p>
                <p>
                    ${TAB.DM[chat]}
                </p>
            </div>
            <div class="preset3">
                
                 <p class="titre">${TAB["SAE"+tableau[1]].DAC}</p>
                
                
            </div>
        </div>
    </div>
</div>

<div id="p2"class="P2">
    <div class="flexDeux">
        <div class="cadre3">
            <h2>Mise en oeuvre</h2>
            <div class="preset4">
                ${TAB["SAE"+tableau[1]].Name}
                ${TAB["SAE"+tableau[1]].stape.join(" ")}
            </div>
        </div>
        <div class="preset5">
            <div class="titre">
                ${TAB["SAE"+tableau[1]].Name2}
            </div>
            <p>
                ${TAB["SAE"+tableau[1]].MOE.join(" ")}
            </p>
        </div>
    </div>
  
</div>

<div id="p3" class="P3">
    <div class="flexTrois">
        <div class="cadre4">
            <h2>
                Réalisation
            </h2>
            <div class="preset7">
                ${TAB["SAE"+tableau[1]].Galerie.join(" ")}
            </div>
        </div>
        <div class="cadre5">
            <article class="preset8">
                <div>
                    ${TAB["SAE"+tableau[1]].Resultat1.join(" ")}
                </div>
                    </article>
            <article class="preset9">
                <div>
                    ${TAB["SAE"+tableau[1]].Resultat2.join(" ")}
                </div>
            </article>
        </div>
    </div>
</div>
</main>
`;
chien.forEach(e=> {
    document.querySelector('.cadre2>.preset3').innerHTML+=`<p>${TAB.AC[e]}</p>`;
});
