export function createSlug(string) {
     if (string.length == 0) {
          return "";
     }
     var diactricMap = {
          "á": "a",
          "à": "a",
          "ä": "a",
          "â": "a",
          "Á": "A",
          "À": "A",
          "Â": "A",
          "Ä": "A",
          "é": "e",
          "è": "e",
          "ë": "e",
          "ê": "e",
          "É": "E",
          "È": "E",
          "Ê": "E",
          "Ë": "E",
          "í": "i",
          "ì": "i",
          "ï": "i",
          "î": "i",
          "Í": "I",
          "Ì": "I",
          "Ï": "I",
          "Î": "I",
          "ö": "o",
          "ó": "o",
          "ò": "o",
          "ő": "o",
          "ô": "o",
          "Ö": "O",
          "Ó": "O",
          "Ő": "O",
          "Ô": "O",
          "ü": "u",
          "ú": "u",
          "ù": "u",
          "ű": "u",
          "û": "u",
          "Ü": "U",
          "Ú": "U",
          "Ù": "U",
          "Ű": "U",
          "Û": "U",
          "ç": "c",
          "Ç": "C",
          " ": "-",
          ".": "-",
          "'": "",
          "’": "",
     };

     var diactrics = Object.keys(diactricMap);
     for (var diactricIndex = 0; diactricIndex < diactrics.length; diactricIndex++) {
          var from = diactrics[diactricIndex];
          var to = diactricMap[from];
          string = string.replace(from, to);
     }
     return string.toLowerCase().replace(/[^a-z0-9_-]/gi, '-');
}