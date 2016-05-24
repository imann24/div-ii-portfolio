/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function toggleDropdown () {
    var className = null;
    if ($('#dropdown').attr('class') === 'active') {
        className = "inactive";
    } else {
        className = "active";
    }
    
    setClass('#dropdown', className);
    setClass('#game-dev-title', className);
    
}

function setClass (elementName, className) {
    $(elementName).removeClass();
    $(elementName).addClass(className);
}