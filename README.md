# DSApitech - Documentation technique

## 1. Introduction

Cette documentation concerne l'édition et la publication d'un composant d'une des bibliothèques DSApitech. Dans notre exemple, nous utiliserons la bibliothèque ```react-dsapitech```, et ```projet-test``` sera le projet qui consommera la librairie.

## 2. Prérequis

Pour commencer, assurez-vus d'avoir les deux projets ```react-dsapitech``` et ```projet-test``` sur votre poste.

## 3. Fonctionnement

La librairie `react-dsapitech` a deux dépendances : 

* `dsapitech`, qui contient des éléments communs consommés par toutes les librairies de composants (React, Angular, etc.). C'est là qu'on trouve notamment les éléments SCSS.

* `dsapitech-chart`, qui contient des éléments spécifiques pour l'affichage de graphiques. Pour l'instant, pas besoin d'effectuer de modifications dedans.

## 4. Publication sur npm

### `dsapitech`

Pour publier une modification de la librairie `dsapitech` sur `npm`, il faut :

* **Build :** Aller à la racine du projet, ouvrir un **shell POSIX-compliant** et entrer :
  
  ```bash
  yarn build --minify
  ```
  
  Le build est long, c'est normal.

* **Mettre la version à jour :** Aller dans le fichier `package.json` et incrémenter la valeur de `version`.

* **Publier :** Toujours dans la racine du projet, entrer 
  
  ```bash
  npm publish 
  ```

### `react-dsapitech`

Pour `react-dsapitech`, voici les étapes pour publier sur `npm` :

* **Build :** Aller à la racine du projet, ouvrir un **shell POSIX-compliant** et entrer :
  
  ```bash
  yarn build
  ```
  
  Le build crée un dossier `dist`.

* **Mettre la version à jour :** Aller dans le fichier `dist/package.json` et incrémenter la valeur de `version`.
- **Publier :** Se déplacer dans le dossier `dist` créé lors du build :
  
  ```bash
  cd build
  ```
  
  Depuis le dossier `dist`, entrer :
  
  ```bash
  npm publish
  ```
  
  La publication se fait bien depuis le dossier créé par le build, et non depuis la racine du projet.

## 5. Effectuer une modification

### 5.1. Lier les repos

Pour tester nos modifications au fur et à mesure du code, nous n'allons pas re-publier sur `npm` puis mettre à jour la dépendance dans `projet-test`, parce que cela serait trop lourd. À la place, nous préfererons lier en local les deux projets.
On peut faire cela en 2 lignes de commandes :

Dans le projet librairie (ici ```react-dsapitech```), on se rend dans le dossier `/dist` (celui utilisé pour la publication sur `npm`) et on entre : 

```bash
npm link
```

Puis, dans le projet qui consomme la librairie (`projet-test` ici), à la racine du projet, on entre :

```bash
npm link nom-de-ma-dependance 
```

Dans notre exemple, la dépendance s'appelle `@apitechfr/react-dsapitech`.

Pour vérifier que les repos sont bien liés, entrez cette commande depuis la racine de `projet-test` : 

**Attention :** *Cette commande ne fonctionnera correctement que sur un shell POSIX-compliant, c'est à dire une invite de commande qui supporte les commandes linux. `Powershell` et `cmd.exe` n'en font pas partie, mais `Git Bash` fonctionne.*

```bash
ls -l node_modules/@apitechfr
```

Si les repos sont bien liés, vous devez voir apparaître quelque-chose comme : 

```bash
react-dsapitech -> /chemin/vers/votre/librairie
```

### 5.2. Éditer un composant

Maintenant, les repos sont liés, et un build depuis le projet contenant la librairie se répercutera automatiquement dans les dépendances de `projet-test`.

Donc, pour travailler, vous pouvez éditer directement les composants dans le projet de la librairie (dans notre exemple `react-dsapitech`). Et pour les tester, il suffit de faire un build. Le dossier `dist` se mettra alors à jour et le projet `projet-test` détectera le changemet et fera automatiquement la mise à jour de la dépendance.

#### Édition de style

Le style est géré dans le projet `dsapitech`, puis les classes sont appelées dans le projet `react-dsapitech`.
Prenons un exemple : modification de la couleur du border dans le composant `footer`.

Voici le composant `footer` aujourd'hui :

![](https://github.com/ApitechFR/dsapitech/blob/main/readme%20Images/footer_old.png?raw=true "Composant Footer Aujourd'hui")

Voici le composant `footer` de la maquette :

![](https://github.com/ApitechFR/dsapitech/blob/main/readme%20Images/footer_model.png?raw=true "Maquete Composant Footer")

Pour cet exemple, on se concentre sur l'ajout de la ligne bleue au dessus du footer.

##### A. Identifier la classe CSS concernée et les modifications à apporter

En inspectant via un navigateur, on fait une modification en live des éléments, et on trouve le nom de la classe à modifier. Ici, on identifie les modifiactions suivantes à apporter : dans la classe `fr-footer`, ajouter :

```css
border-top: 3px solid var(--background-action-high-blue-france);
```

##### B. Faire la modification dans le repo `dsapitech`

Dans le repo `dsapitech`, le `css` est généré depuis du `scss`. On peut trouver le `css` dans le fichier `dsapitech\dist\dsfr.css`. Cependant, modifier ce fichier ne sert à rien, puisqu'il sera écrasé au prochain build.

Pour que la modification soit effective, il faut modifier le `scss`, que l'on trouve dans ce dossier : `dsapitech\src\dsfr\component`. En fonction du composant que l'on veut modifier, on trouve que, dans notre cas, la classe `scss` à modifier est dans `dsapitech\src\dsfr\component\footer\style\module\_default.scss`.

Dans ces fichiers, le nom des classes est construit dynamiquement, donc la classe `css` `fr-footer` est déclarée en `scss` avec le nom `#{ns(footer)}` (footer préfixé par `fr-`).



Une fois la classe `scss` identifiée, on peut y ajouter notre border :

```scss
@include color.border(action-high blue-france, (legacy: false, side: 'top'), 3px solid #{color.$blue-france});
```

Maintenant, on peut build avec la commande suivante pour bien générer le `css` :

```bash
yarn build --minify
```

Le `--minify` est indispensable pour la bonne lecture par les projets qui appellent`dsapitech`.



Une fois buildé, on retrouve bien le `css` suivant dans `dsapitech\dist\dsfr.css` : 

```css
border-top: 3px solid #000091;
```

##### C. Tester

Après le build, si les projets ont bien été liés, le résultat est directement visible sur le projet test, et notre footer ressemble maintenant à ça : ![](https://github.com/ApitechFR/dsapitech/blob/main/readme%20Images/footer_new.png?raw=true "Composant Footer Modifié")

Donc on constate que le border a bien été ajouté en haut, et on peut maintenant publier sur `npm`.

### 5.3. Dé-lier les repos

Après avoir fait les modifications que l'on souhaitait, et pour pouvoir tester la bonne publication par la suite, on peut dé-lier les repos pour retrouver un fonctionnement normal.

Pour retirer la lien entre les projets, saisissez les commandes suivantes :

```bash
# dans le projet-test
npm unlink nom-de-ma-dependance

# dans la librairie
npm unlink
```

Dans notre exemple, la dépendance s'appelle `@apitechfr/react-dsapitech`.

Pour vérifier que les repos sont bien dé-liés, entrez cette commande depuis la racine de `projet-test` :

**Attention :** *Cette commande ne fonctionnera correctement que sur un shell POSIX-compliant, c'est à dire une invite de commande qui supporte les commandes linux. `Powershell` et `cmd.exe` n'en font pas partie, mais `Git Bash` fonctionne.*

```bash
ls -l node_modules/@apitechfr
```

Si les repos sont bien dé-liés, vous devez voir apparaître quelque-chose comme :

```bash
drwxr-xr-x 1 VotreNom 1049089 0 Jul 16 16:45 react-dsapitech/
```
