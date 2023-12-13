let d = document;

function log(message) {
    console.log(message);
    return message;
}

function select(selecteur , lequel = "all") {
            // Cette fonction doit pouvoir renvoyer un seul ou plusieurs éléments, selon ce qui est disponible sur la page.

            // On peut commencer par vérifier combien d'éléments répondent au critère demandé :
            let elements_correspondant = document.querySelectorAll(selecteur);
            let nombre_elements = elements_correspondant.length;

            if (nombre_elements == 1) {
                return elements_correspondant[0]; // On renvoie le premier (et unique) élément
            } else if (nombre_elements > 1) {
                /*if (lequel == "all") {
                    return elements_correspondant; // On renvoie toute la liste
                } else */if (lequel == "first") {
                    return elements_correspondant[0]; // On renvoie le premier élément
                } else if (lequel == "last") {
                    return elements_correspondant[nombre_elements - 1]; // On renvoie le dernier élément
                } else if (Number.isInteger(lequel)) { // lequel = indice de l'élément à renvoyer
                    if (lequel <= nombre_elements - 1) { // Si lequel est un indice cohérent
                        return elements_correspondant[lequel];
                    } else {
                        return false;
                    }
                } else { // Couvre les mauvaises utilisations (chaines non reconnues, autres valeurs non numériques)
                    return elements_correspondant; // On ignore le second paramètre
                    // Note : peut également couvrir le cas "all", on peut donc finalement se dispenser du test concernant cette valeur.
                }
            } else { // Aucun élément
                return false; // Permet de répondre proprement à des tests comme if (select(...)) ou if(!select(...))
            }
        }