DESCRIPTION
-----------

**The Triangle SWP** theme is fresh, fully responsive, highly adaptible Superdesk Publisher theme built to serve the needs of The Triangle's news production. It offers editors flexibility in ways they can present sets of news (category or tag based; manually curated, fully- or semi-automated content lists; and more). This theme is a fork of The Modern Times (https://github.com/SuperdeskWebPublisher/theme-dailyNews/).

**The Triangle SWP** also features several customizable menus, html and content list widgets which enable live-site editing from the frontend.

This theme also incorporates several 3rd-party services (Open weather data integration for any weather station in the world, Disqus article comments, OpenX advertisements, Google Custom Search Engine).

SETTING UP DEVELOPMENT ENVIRONMENT
----------------------------------

For information and explanation of the theme structure, please see http://superdesk-web-publisher.readthedocs.io/en/latest/themes.html 

This Superdesk Publisher theme uses Gulp workflow automation (http://gulpjs.com/). 

**To set-up the working environment for theme development, you can follow these steps:**
- Follow the Superdesk Publisher installation instructions found at https://superdesk-publisher.readthedocs.io/en/latest/manual/getting_started/superdesk-superdesk-publisher-setup.html#how-to-install-superdesk-publisher
- Be sure to write down and save your organization and tenant codes
- Install npm using the method here: 
- Clone the theme from Azure DevOps into the publisher directory `git clone https://thetriangle.visualstudio.com/TriangleSWP/_git/TriangleSWP`
- Install and activate the theme using `sudo -u www-data SYMFONY_ENV=prod php app/console swp:theme:install <tenant_code> TriangleSWP/ -f --activate`
- Install the theme assets using `sudo -u www-data SYMFONY_ENV=prod php app/console sylius:theme:assets:install`
- Delete the original repository clone that is in the publisher directory
- Navigate to `app/themes/<tenant_code>/TriangleSWP`
- Run the command `npm install --save-dev` to install dependencies for Gulp
- Run `npm install --global gulp-cli`
- Run `gulp build` to check that Gulp and its dependencies are correctly installed
- Nagivate to your Publisher instance in your web browser to check that everything is working

**To modify and build the theme source code:**
- Navigate to your Publisher instance in a file explorer and go to `app/themes/<tenant_code>/TriangleSWP`. Edit the source code files here. Opening the folder in Visual Studio Code is recommended
- Start the Gulp task 'watch' and it will automatically
a) compile and add all css/scss/sass changes from `public/css/` to `public/dist/style.css`
b) add all js changes from `public/js/` to `public/dist/all.js` file
- If you're running 'gulp watch' but not seeing changes reflected in your browser window, make sure you have browser caching turned off
- If modifying Twig template files, you may need to run `sudo -u www-data SYMFONY_ENV=prod php app/console cache:clear` in the Publisher root directory to see changes
- For applying changes for production, there is the task 'build' which will also minify css and js and add specific version to these files (to prevent browser caching issues)
- You can also manually run tasks `sass`, `js`, `cssmin`, `jsmin`, `version`, as well as `sw` (service worker steps that ensure propper pre-caching on browser side)

BRANCHING AND MERGING STRATEGY
------------------------------
- When modifying the theme's source code you must follow The Triangle's branching and merging strategy
- Create a new branch for every feature you work on using `git branch <feature name>`
- Checkout your new branching using `git checkout <feature name>`
- Write code and commit regularly using `git add . && git commit`
- When finished making changes, fetch from remote using `git fetch`
- Rebase all your changes into one commit using `git rebase -i orgin/master`
- Checkout and pullfrom master branch using `git checkout master && git pull`
- Merge your changes and push using `git merge <feature name> && git push`
- Delete your merged feature branch using `git branch -d <feature name>`
- For more information, see https://jameschambers.co/writing/git-team-workflow-cheatsheet/

ADJUSTING AND CUSTOMIZING THEME
-------------------------------
**The Triangle SWP** theme comes with predefined functionality which includes:
- front page with manually created content list on top of the page and per-category listings under it (these per-category listings and built in several different ways to offer wider base for customization)
- category pages with pagination. Initial category page features one top article.
- article page with featured image on top, article content and article gallery under it (image thumbs that open full version in a fancybox)
- theme also comes with RSS template, static page, search results page and listing of trending articles based on custom criteria (setable in template)
- Theme has built-in support for Google AMP (accelerated mobile pages). These templates are in subfolder `/amp`. More information on Google AMP project is here: https://www.ampproject.org/

For theme templates customization please refer to Superdesk Publisher documentation, starting here: http://superdesk-web-publisher.readthedocs.io/en/latest/templates_system/index.html
