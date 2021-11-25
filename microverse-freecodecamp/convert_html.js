
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

    // &colon;&rpar;
    str = str.replace(/&/g, "&amp;");
    // <&#39;&gt;
    str = str.replace(/</g, "&lt;");
    // &apos;&quot;&#x22;
    str = str.replace(/>/g, "&gt;");
    // &quot;
    str = str.replace(/"/g, "&quot;");
    // &apos;
    str = str.replace(/'/g, "&apos;");
    
    return str;

}

convertHTML("Dolce & Gabbana");