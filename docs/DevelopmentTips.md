USEFUL COMMANDS TO KNOW
-----------------------

Clear cache to reflect twig template change:
`sudo -u www-data SYMFONY_ENV=prod php app/console cache:clear`

Compile sass/scss and js code into dist:
`gulp build` (note: run this command in theme root folder)

Install added image assets:
`sudo -u www-data SYMFONY_ENV=prod php app/console sylius:theme:assets:install`