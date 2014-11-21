---
title: Inventaire
slug: inventaire
published: true
date: 2014-10-28 14:35
tags: [step]
layout: text-layout
---

# Inventaire


## 0.0 Header

#### Infos
- Le titre du projet
- Le nom du client

#### Navigation
- Timeline
- Timetrack 

## 0.0 Footer
Pas grand chose à raconter ici. Mettre simplement un crédit.

## 1.0 Timeline

C'est la page principale de la plateforme. C'est ici que l'on retrouvera, dans un ordre chronologique, tous les livrables qui auront été posté au cours de l'evolution du projet.

### timeline-release
On distingue trois types d'objets sur la timeline:

- #### timeline-release---event
Un moment important dans l'élaboration du projet, le franchissement d'une étape, sans qu'aucun document ne soit lié.

- #### timeline-release---deliverable
C'est le principal type de post qui permet de partager le resultat d'une étape de travail. Il s'agit d'un lien pointant soit vers un document extérieur, soit vers un document hébergé sur la plateforme (voir templates).

- #### timeline-release---next
Nous permets d'indiquer au client ce sur quoi nous sommes en train de travailler. Annonce le futur livrable.

## 2.0 Templates
Il s'agit de réaliser différents template de page propices au type de contenu à présenter au client.

### Texte
Utilisé pour présenter ses notes, le brief, l'inventaire, un travail d'analyse ou encore lister ses inspirations par ex.

#### Table des matières
Une table des matières dynamique permet de se déplacer dans le fichier pour accéder à la partie recherchée. Cette table sera fixe et l'on pourra scroller à l'intérieur si son contenu est dépasse la vue.

#### Main content
Le corps du texte, provenant le plus souvent d'un fichier markdown. Penser à créer des styles pour: 

- Niveaux de titrage
- Citations
- Listes (ordonnées et non-ordonnées)
- tableaux
- Encart ou apparté ?

### Présentation
Penser à un template pour présenter ses idées en direction artistique ou stratégique. Ce template ferait en quelque sorte office de powerpoint. Il permettrait d'articuler son discours point par point à l'aide de visuels.

- Réfléchir plus en détail à son inventaire.

### Mockup Design
Permet de soumettre à validation un design. L'avantage de ce template sera d'observer le design en contexte, directement dans le browser. Une navigation permettra de visionner les précédentes version d'un même objet-design. 

L'idée c'est de pouvoir montrer bout par bout l'évolution du travail.

#### Idée
Il y a quelque chose à travailler sur les éléments attendus. En effet, lors de l'inventaire nous pourrions être capable de déterminer quels écrans seront nécessaires à réaliser, et l'on pourrait réfléchir à une page intermédiaire sur laquelle on retrouverait tous les liens vers les dernières versions des éléments de design.

### Typographie*
Le choix d'une typographie est déterminant dans la conduite du projet. C'est une étape primordiale qui doit se faire très rapidement dans le browser.

Il serait utile d'avoir un template qui me permettrait rapidement de mettre en forme ma selection typo restreinte. Il s'agirait surement ici de développer un bootstrap spécifique à ce genre de réalisation.

### Style Guide*
Lorsque je reprend un projet j'ai tendance à oublier les valeurs de bases qui construisent mon design. Il serait bon de réaliser un document qui me permette de les lister afin de m'en rappeler rapidement sans avoir à aller chercher dans le code.

Peut être s'agit il simplement d'un document de type texte qui listerait les éléments suivants:

- Styles typo
- Echelle typo
- Layout (colonnes et goutière)
- Echelle des espacements
- Pallet de couleurs

*Evolutions futures, à réfléchir.


## 3.0 Timetracking

Je pense qu'il est bon d'aviser son client du temps passé sur son projet dans une visée pédagogique. Le client de perçoit pas forcément le volume du travail engagé. Cela permettrait à la fois d'être réglo envers lui mais aussi d'avoir des arguments pour contenir un afflux de nouvelles demandes.

#### Récapitulatif
- Le temps estimé lors du devis
- Le total du temps travaillé
- Une jauge de progression, exprimée en pourcentage

#### Détail
Lui permettre d'avoir accès au détail de mon temps de travail investi. Cela me permettrait de timetracker le temps dans la plateforme et non plus à l'extérieur. C'est aussi utile pour moi en tant qu'archive du projet et du temps passé.

- Date (jour, mois)
- Session de travail
  - Heure de début
  - Heure de fin
  - Tache réalisée
  - Temps total