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
if (titlePage.includes('Módulo')){
  menuHome.href = '../';
  
  modules.forEach(page => {
    numberMod !== 2 ? numberMod += 1 : numberMod += 2

    page.href = `./modulo${numberMod}.html`;

    if(titlePage.includes(numberMod)){
      page.classList.add('active');
    }
  });
} else {
  menuHome.href = '/';
  menuHome.classList.add('active');

  modules.forEach(page => {
    numberMod !== 2 ? numberMod += 1 : numberMod += 2

    page.href = `./Desafios/modulo${numberMod}.html`;
  });
}

navMenu.appendChild(menuHome);
modules.forEach(page => navMenu.appendChild(page));
