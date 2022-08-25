# webpack-5
сборка webpack_5 c препроцессором SCSS
# script

  // ...

	"scripts": {

      "start": "webpack serve", // Запускает webpack-dev-server

      "build": "webpack", // Собирает проект в режиме разработки

      "build-prod": "webpack --mode=production", // собирает проект для продакшена

      "clean": "rd /s /q dist" // удаляет директорию dist

  }
  
  // ...

  # start
  npm run start

  # build 
  npm run build