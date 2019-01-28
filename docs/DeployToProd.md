DEPLOYING TO PROD FOR NEW INSTALLATION
--------------------------------------

- Clone the theme from Azure DevOps into the root Publisher folder (https://thetriangle.visualstudio.com/TriangleSWP/_git/TriangleSWP)
- Install and activate the theme using `sudo -u www-data SYMFONY_ENV=prod php app/console swp:theme:install <tenant_code> TriangleSWP/ -f --activate -p`
- Install the theme assets using `sudo -u www-data SYMFONY_ENV=prod php app/console sylius:theme:assets:install`
- Delete the original repository clone that is in the Publisher root directory
- Navigate to `app/themes/<tenant_code>/TriangleSWP`
- Run the command `npm install --save-dev` to install dependencies for Gulp
- Run `gulp build` to check that Gulp and its dependencies are correctly installed
- Nagivate to your Publisher instance in your web browser to check that everything is working

UPDATING THEME IN PROD
----------------------

NOTE: this process will overwrite any changes, hotfixes, etc that were made in prod. Make sure to add all changes to the repository before updating the theme.

- Navigate to the directory where the theme is stored in `app/themes/<tenant_code>/`
- Fetch the master branch using `git fetch`
- Pull all changes from the repository and overwrite local changes using `git reset --hard origin/master`
- Rebuild the theme assets using `gulp build`
- Clear the template cache using `sudo -u www-data SYMFONY_ENV=prod php app/console cache:clear`
- Check that changes are reflected using your web browser