/*********************************************************************************************************************************/
// Switch/Case Statements
let x = undefined
switch (x) {
    case 1 : console.log(x + " : value"); break;
    case 2 : console.log(x + " == " + 2 ); break;
    case undefined :console.log("Blank... ") // No break, so there is contiution of Switch
    default: console.log("Choose value")
}