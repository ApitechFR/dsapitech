# 🇫🇷 Système de Design d'Apitech

Le Système de Design d'Apitech (ci-après, le **DSApitech**) est un ensemble de composants web HTML, CSS et Javascript pour faciliter le travail des équipes projets, et créer des interfaces numériques de qualité et accessibles.

## Licence et droit d'utilisation

Le contenu de ce projet est placé sous licence MIT License. Voir [LICENSE.md](https://github.com/ApitechFR/dsapitech/blob/main/LICENSE.md).

## Installation

L'installation du Système de Design d'Apitech (ci-après, le **DSApitech**) peut se faire de manières différentes. En téléchargeant l'ensemble des fichiers nécessaires à son utilisation, en utilisant le gestionnaire de paquets **NPM**, ou encore via **git**.

### Fichiers statiques

Il est possible de télécharger l'ensemble du **DSApitech** au format zip ci-dessous. Le zip contient un ensemble de fichiers CSS et Javascript, ainsi que les différentes polices web utilisées (Spectral), et un ensemble d'icônes et de pictogrammes.

### NPM

Le **DSApitech** est disponible sur NPM via un ensemble de packages qu'il est possible d'ajouter directement à votre projet. Il est de ce fait nécessaire d'installer [NodeJS](https://nodejs.org), et d'avoir un fichier **package.json** à la racine de votre projet. (Il est possible d'en créer un directement via la commande `npm init`).

Une fois en place, il suffit d'installer le package **@apitech/dsapitech** contenant l’ensemble des composants:

```
npm install @apitech/dsapitech
```
Il est également possible d'installer le package avec [Yarn](https://yarnpkg.com/) :
```
yarn add @apitech/dsapitech
```

Une fois terminé le dsapitech sera alors installé dans le dossier ```node_modules/@apitech/dsapitech/```.

Pour visualiser les exemples, il est nécessaire de lancer un serveur local. Pour cela, installer le package browser-sync, puis lancer le serveur dans le dossier du dsapitech :

```
npm install browser-sync
cd node_modules/@apitech/dsapitech/
npm run serve
```

Une fois le serveur lancé, les exemples sont disponibles à l'adresse : http://localhost:8080/example/

### Structure du DSApitech

La structure que nous mettons à disposition , sur le zip ou npm est la suivante:
- **dist** : contient les fichiers css et js à importer en fonction des packages utilisés.
- **src** : contient les sources sass et js des différents composants.
- **example** : contient des snippets html d’example des composants que vous pouvez consulter en local.

### Configuration de votre projet

Lors de la création de votre projet, il est nécessaire d’adopter l’arborescence prévue par celui-ci, à savoir les fichiers HTML à la racine du projets, et les différentes sources du **répertoire dist** dans des dossiers spécifiques :

Une structure minimale serait :

```
/ Racine du projet
└── index.html
└── dsapitech.min.css
└── dsapitech.module.min.js
└── dsapitech.nomodule.min.js
└── icons/
└── favicon/
└── fonts/
└── utility/
  └── utility.min.css
```

Les polices de caractères utilisées sur le DS, à savoir la Marianne et la Spectral, sont des fichiers .woff et .woff2, ils doivent se trouver dans le répertoire `fonts`. Les dossiers `fonts` et `favicon` doivent être placés au même niveau que le dossier contenant le CSS du core du dsapitech (ou au même niveau que le css `dsapitech.min.css` à la racine de dist, qui contient le core).

Le fichier `utility.min.css` doit être placé un niveau plus bas que le dossier `icons`, dans dossier utility par exemple, pour respecter les chemins d'accès vers les icônes.

### Le HTML

Le point de départ de l’utilisation du DSApitech  est la création de fichiers HTML, afin de pouvoir utiliser les différents composants. Ces fichiers sont à mettre à la racine de votre projet. L’exemple ci dessous est le code minimal afin de pouvoir utiliser le DSApitech.

L’ajout de l’attribut **data-fr-scheme** sur la balise html permet d’activer la gestion des thèmes clair et sombre. Les valeurs possibles sont `system`, `light`, `dark`. La valeur “system” permet d’utiliser la configuration définie sur le système d’exploitation de l’utilisateur.

Consulter la [documentation des paramètres d’affichage](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/parametre-d-affichage) afin d’en savoir plus.

```html
<!doctype html>
<html lang="fr" data-fr-scheme="system">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">

    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="favicon/favicon.svg" type="image/svg+xml">
    <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->

    <link rel="stylesheet" href="dsapitech.min.css">
    <link rel="stylesheet" href="utility/utility.min.css">

    <title>Titre de la page - Nom du site</title>
  </head>
  <body>

    <!--
      code de la page
     -->

    <!-- Script en version es6 module et nomodule pour les navigateurs le ne supportant pas -->
    <script type="module" src="dsapitech.module.min.js"></script>
    <script type="text/javascript" nomodule src="dsapitech.nomodule.min.js"></script>
  </body>
</html>
```

**Les CSS**

Afin d’inclure la totalité des composants et des styles du système de design, il est nécessaire d’inclure la feuille de style `dist/dsapitech.min.css`.

Les classes utilitaires, notamment les icônes, sont disponibles dans un fichier à part dans `dist/utility/utility.css`.
```html
<html>
  <head>
    <link rel="stylesheet" href="dsapitech.min.css">
    <link rel="stylesheet" href="utility/utility.min.css">
```
Il est aussi possible d’importer uniquement ce que l’on souhaite utiliser. En effet, pour ajouter un composant seul il suffit d’importer son CSS ainsi que celui de chacune des dépendances de ce composant. Ces dépendances sont listés dans le `README.md` de chaque package.

```html
<html>
  <head>
    <link rel="stylesheet" href="core.min.css">
    <link rel="stylesheet" href="link.min.css">
    <link rel="stylesheet" href="button.min.css">
```


**Le Javascript**

L’ensemble du code javascript nécessaire au bon fonctionnement du DS se trouve dans deux fichiers `dist/dsapitech.module.min.js` et `dist/dsapitech.nomodule.min.js`.


Le fichier dsapitech.module.min.js utilise les modules javascript natifs - sa balise script d’appel doit avoir l’attribut **type=”module”**.

Le fichier dsapitech.nomodule.min.js est utilisé par les anciens navigateurs ne supportant pas les modules javascript (es6) - sa balise script doit contenir l’attribut **nomodule**.
Il est **impératif** d’appeler les **deux fichiers** javascript afin que le code s’exécute correctement sur l’ensemble des navigateurs supportés :

```html
    <script type="module" src="dsapitech.module.min.js"></script>
    <script type="text/javascript" nomodule src="dsapitech.nomodule.min.js"></script>
  </body>
</html>
```

> NB : Le package analytics est géré indépendament et doit être ajouté après le js du dsapitech. Voir [documention analytics](https://github.com/GouvernementFR/dsapitech/blob/main/src/dsapitech/analytics/doc/analytics.md)

De la même façon que le CSS il est possible d’importer uniquement le JS des composants utilisés (et leurs dépendances).

### Icônes

Les icônes sont stockées dans `dist/icons` et classées par catégories.

Le design système utilise principalement des icônes de la librairie remixIcon. Il existe aussi des icônes personnalisées, celles-ci sont préfixée par “fr--”.

Afin d’utiliser ces icônes, des classes utilitaires CSS sont associés à chaque icône. Par ex. : `fr-icon-error-fill`

Ces classes sont disponibles dans `utility` qui importe `dist/utility/icons/icons.css`.

Il est aussi possible d’importer uniquement certaines catégories d’icônes afin d’optimiser le poids. Par ex. :  `dist/utility/icons/system/system.css` pour les icônes “system”.

Pour plus d’informations : [Voir la documentation des icônes](https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-techniques/icones).

### Favicon

[La documentation des favicons](https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-techniques/icone-de-favoris) détaille la façon de les implémenter dans vos pages.

## Fonctionnement

### BEM

Le **DSApitech** utilise la méthodologie [**BEM**]([https://css-tricks.com/bem-101/]([http://getbem.com/naming/](http://getbem.com/naming/))) (Block - Element - Modifier) comme convention de nommage des classes CSS. Elle permet aux développeurs une meilleure compréhension de la relation entre HTML et CSS dans un projet donné.

Selon cette méthodologie, un block représente le plus haut niveau d'abstraction d'un nouveau composant, par exemple `.parent`.

Des éléments (ou enfants), peuvent être placés à l'intérieur de ces blocks, et sont désignés par deux underscore précédés du nom du block : `.parent__element`.

Les modifiers quant à eux, servent à manipuler les blocs, de manière à les styliser de manière indépendante en s'assurant de ne pas induire de changement à des blocks sans aucun rapport avec celui-ci. Ils sont notés à l'aide de deux tirets précédés du nom du block comme suit : `.parent--modifier`.

### Utilisation

Le **DSApitech** est constitué de différents composants, que vous pouvez utiliser indépendamment au sein de votre projet.

Une documentation spécifique est prévue pour chaque composant, précisant ses principes d’utilisation, ainsi que les snippets de code HTML à utiliser pour votre projet.

🙌 Vous êtes maintenant prêt(e) à utiliser le **DSApitech**.

## Contribution

Le processus de contribution est détaillé sur la [page CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation

[Documentation développeurs](https://www.systeme-de-design.gouv.fr/utilisation-et-organisation/developpeurs/)
