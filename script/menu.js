var root = window.location.protocol + '//' + window.location.hostname;
if (root.includes('localhost') || root.includes('127.0.0.1')){
  root += ':' + window.location.port;
}

const navMenu = document.getElementById('navMenu');
const titlePage = document.title;

const menuHome = document.createElement('a');
menuHome.text = 'Tela Inicial'

const menuMod1 = document.createElement('a');
menuMod1.text = 'Módulo 1'

const menuMod2 = document.createElement('a');
menuMod2.text = 'Módulo 2'

const menuMod4 = document.createElement('a');
menuMod4.text = 'Módulo 4'

const modules = [menuMod1, menuMod2, menuMod4]

var numberMod = 0;
menuHome.href = root;

modules.forEach(page => {
  numberMod !== 2 ? numberMod += 1 : numberMod += 2

  page.href = `${root}/Desafios/modulo${numberMod}.html`;

  if(titlePage.includes(numberMod)){
    page.classList.add('active');
  }
});

navMenu.appendChild(menuHome);
modules.forEach(page => navMenu.appendChild(page));
