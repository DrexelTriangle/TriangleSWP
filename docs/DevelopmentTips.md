USEFUL COMMANDS TO KNOW
-----------------------

Clear cache to reflect twig template change:
`sudo -u www-data SYMFONY_ENV=prod php app/console cache:clear`

Compile sass/scss and js code into dist:
`gulp build` (note: run this command in theme root folder)

Install added image/logos assets:
`sudo -u www-data SYMFONY_ENV=prod php app/console sylius:theme:assets:install`

USEFUL SETTINGS
-----------------------
Autocompile Twig Template changes
- Prevents you from having to run `sudo -u www-data SYMFONY_ENV=prod php app/console cache:clear` every time you make a change
- Go to publisher/app/config/. Open config.yml, under `twig:` put the line `auto-reload: true`
- You may have to run `sudo -u www-data SYMFONY_ENV=prod php app/console cache:clear` once more

Edit Java Runtime Memory Size
- If you are running on a low-memory machine, set your java runtime to use less memory with `java -Xmx1024m -Xms128m`

TIPS
-----------------------
- If changes are not registering, clearing the cache and/or running gulp build usually fixes this.
  If changes are still not registering, make sure the browser is emptying its cache (in chrome, right click on page, click inspect,
  go to network tab, there should be check box for "disable cache". This will be similar for most browsers)