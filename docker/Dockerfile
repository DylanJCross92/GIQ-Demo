FROM registry.icg360.net/iqs:1.8.17-163-release-9ba9edb-164
MAINTAINER Tom Gornick <thomas.gornick@icg360.com>

CMD ["/usr/local/bin/fnic-iqs-fe_startup.sh"]

RUN apt-get -y update && \
    apt-get -y install

RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* \
    /tmp/* \
    /var/tmp/*

# Copy -iqs-fe webroot files to apache dir and reapply perms
RUN mkdir -p /opt/apps/fnic-iqs-fe
ADD deploy/fnic-iqs-fe_current.tar.gz /opt/apps/fnic-iqs-fe/
RUN cp -R /opt/apps/fnic-iqs-fe/. /var/www/
COPY files/fnic-iqs-fe_startup.sh /usr/local/bin/fnic-iqs-fe_startup.sh
COPY vars /opt/apps/fnic-iqs-fe/vars
RUN chown -R www-data: /var/www
RUN chmod -R +rx /var/www /usr/local/bin/fnic-iqs-fe_startup.sh
