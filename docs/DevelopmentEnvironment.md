SET UP A DEVELOPMENT ENVIRONMENT
--------------------------------

This guide was written for setting up a development environment using Publisher version 2.0 and Ubuntu 16.04.

INSTALL REQUIREMENTS
--------------------

INSTALL PUBLISHER
-----------------

CONFIGURE APACHE
----------------

Based on this answer: https://stackoverflow.com/questions/47740492/not-found-404-in-apache2-using-the-symfony-framework

Apache is not automatically configured during the Publisher installation. First, enable mod_write using the terminal:

`sudo a2enmod rewrite`

Then, configure Apache sites-enabled:

<VirtualHost *:80>
        ServerName <your server IP address or domain>

        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/publisher/public

        <Directory /var/www/publisher/public>
                AllowOverride None
                Order Allow,Deny
                Allow from All

                <IfModule mod_rewrite.c>
                    Options -MultiViews
                    RewriteEngine On
                    RewriteCond %{REQUEST_FILENAME} !-f
                    RewriteRule ^(.*)$ index.php [QSA,L]
                </IfModule>
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

Finally, restart the Apache service to reflect the changes:

`sudo /etc/init.d/apache2 restart`

CONFIGURE ORGANIZATION, TENANT, AND THEME
-----------------------------------------

Publisher parameters can be configured by editing `.env` in the `publisher` directory, or by overwriting the default values in `.env.local`

