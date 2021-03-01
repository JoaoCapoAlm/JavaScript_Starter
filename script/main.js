var root = window.location.protocol + '//' + window.location.hostname;
if (root.includes('localhost') || root.includes('127.0.0.1')) {
  root += ':' + window.location.port;
}

let themeDark = false;

const changeTheme = () => {
  themeDark = !themeDark;

  if(themeDark) {
    document.body.classList.add('darkTheme');
  } else {
    document.body.classList.remove('darkTheme');
  }
}

const menu = () => {
  const menu = document.getElementById('menuArea');
  const titlePage = document.title;

  const menuHome = document.createElement('a');
  menuHome.text = 'Tela Inicial'

  const menuMod1 = document.createElement('a');
  const menuMod2 = document.createElement('a');
  const menuMod4 = document.createElement('a');

  const modules = [menuMod1, menuMod2, menuMod4]

  let numberMod = 0;
  menuHome.href = root;

  if (titlePage === 'Starter'){
    menuHome.classList.add('active');
  }

  modules.forEach(page => {
    numberMod !== 2 ? numberMod += 1 : numberMod += 2

    page.text = `Módulo ${numberMod}`
    page.href = `${root}/Desafios/modulo${numberMod}.html`;

    if(titlePage.includes(numberMod)){
      page.classList.add('active');
    }
  });

  const btnChangeTheme = document.createElement('button');
  btnChangeTheme.id = 'btnTheme';
  btnChangeTheme.innerText = 'Trocar tema';
  btnChangeTheme.onclick = () => changeTheme();

  menu.appendChild(menuHome);
  modules.forEach(page => menu.appendChild(page));
  menu.appendChild(btnChangeTheme);
}

menu();
changeTheme();
