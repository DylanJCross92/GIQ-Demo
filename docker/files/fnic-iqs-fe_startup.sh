#!/bin/bash -ex
/usr/local/bin/sempl -f -v -p ${SECRET} \
    -s /opt/apps/fnic-iqs-fe/vars/${ENVIRONMENT}_secrets.env.enc \
    /etc/iqs/iqsConf.ini.tmpl
ln -sf /etc/iqs/iqsConf.ini /opt/apps/fnic-iqs-fe/iqsConf.ini

/usr/local/bin/sempl -f -v -p ${SECRET} \
    -s /opt/apps/fnic-iqs-fe/vars/${ENVIRONMENT}_secrets.env.enc \
    /etc/apache2/sites-available/iqs.conf.tmpl
ln -sf /etc/apache2/sites-available/iqs.conf /etc/apache2/sites-enabled/iqs.conf

/usr/local/bin/sempl -f -v -p ${SECRET} \
    -s /opt/apps/fnic-iqs-fe/vars/${ENVIRONMENT}_secrets.env.enc \
    /var/www/iqs-admin/app/init.php.tmpl
ln -sf /var/www/iqs-admin/app/init.php /opt/apps/fnic-iqs-fe/init.php

/usr/local/bin/sempl -f -v -p ${SECRET} \
    -s /opt/apps/fnic-iqs-fe/vars/${ENVIRONMENT}_secrets.env.enc \
    /var/www/iqs-admin/app/vendor/stormpath/apiKey.properties.tmpl
ln -sf /var/www/iqs-admin/app/vendor/stormpath/apiKey.properties /opt/apps/fnic-iqs-fe/apiKey.properties

exec /usr/sbin/apache2ctl -D FOREGROUND 2>&1
