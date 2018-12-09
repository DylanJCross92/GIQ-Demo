FROM debian:jessie
MAINTAINER Scott Rackliff <scottr@owlsheadsolutions.com>

CMD ["/docker_tools/startup.sh"]

RUN apt-get -y update && \
    apt-get -y install \
    locales-all \
    build-essential \
    apache2 \
    php5-dev \
    libssl-dev \
    libapache2-mod-php5 \
    php-pear \
    php5-common \
    php5-odbc \
    php5-xsl \
    php5-json \
    php5-curl \
    php5-mcrypt \
    php5-gd \
    php5-gd \
    swftools \
    vim \
    curl \
    php5-xdebug \
    phpunit \
    nodejs \
    npm

RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* \
    /tmp/* \
    /var/tmp/*

# update node to LTS 4.5.0 (node is needed for TAPE unit testing)
RUN npm cache clean -f && \
    npm install -g n && \
    n lts

RUN npm install tape --save-dev
RUN npm install request --save-dev
RUN npm install -g browserify
RUN npm install -g webpack

# Configure PHP
RUN pear install XML_Serializer-0.20.2
RUN php5enmod xsl json curl mcrypt gd odbc

# Configure Apache
ADD files/000-default.conf /etc/apache2/sites-available
RUN a2ensite 000-default
RUN a2enmod php5 speling status rewrite headers

# Install UnixODBC
ADD files/unixODBC-2.3.2.tar.gz /tmp/
RUN cd /tmp/unixODBC-2.3.2 && \
    /tmp/unixODBC-2.3.2/configure \
      --enable-gui=no --enable-drivers=no --enable-iconv \
      --with-iconv-char-enc=UTF8 --with-iconv-ucode-enc=UTF16LE \
      --libdir=/usr/lib/x86_64-linux-gnu --prefix=/usr \
      --sysconfdir=/etc --enable-stats=no && \
    make && \
    make install

# Install MSODBC driver
ADD files/msodbcsql-11.0.2270.0.tar.gz /tmp/
RUN cd /tmp/msodbcsql-11.0.2270.0 && \
    /bin/bash /tmp/msodbcsql-11.0.2270.0/install.sh install --accept-license --force

# Symlink libraries
RUN ln -sf /usr/lib/x86_64-linux-gnu/libcrypto.so.1.0.0 \
      /usr/lib/x86_64-linux-gnu/libcrypto.so.10
RUN ln -sf /usr/lib/x86_64-linux-gnu/libssl.so.1.0.0 \
      /usr/lib/x86_64-linux-gnu/libssl.so.10
RUN ln -sf /usr/lib/x86_64-linux-gnu/libodbcinst.so.2.0.0 \
      /usr/lib/x86_64-linux-gnu/libodbcinst.so.1

# Install Sempl
RUN curl -o /usr/local/bin/sempl \
    https://raw.githubusercontent.com/nextrevision/sempl/master/sempl
RUN chmod +x /usr/local/bin/sempl

# xdebug settings
RUN echo "xdebug.enable=1"  >> /etc/php5/apache2/conf.d/20-xdebug.ini
RUN echo "xdebug.remote_enable=1"  >> /etc/php5/apache2/conf.d/20-xdebug.ini
RUN echo "xdebug.remote_port=9000"  >> /etc/php5/apache2/conf.d/20-xdebug.ini
#NOTE: HostIP below is set in the docker-compose.yml file. It seems to differ for mac and pc, hence the variable below.
#docker-compose.yml is for PC, mac.yaml is for mac. Use the appropriate yml when bringing up Docker.
RUN echo 'xdebug.remote_host=${HOSTIP}'  >> /etc/php5/apache2/conf.d/20-xdebug.ini

RUN mkdir /docker_tools
RUN chown -R www-data: /var/www
RUN mkdir -p /docker_tools
COPY files/startup.sh /docker_tools/startup.sh
COPY files/apache2.conf /etc/apache2/apache2.conf
COPY docker_etc/resolv.conf /etc/resolv.conf.tmp
RUN chmod -R +rx /var/www /docker_tools/startup.sh

WORKDIR /tmp
COPY ./package/package.json /tmp
COPY ./package/npm-shrinkwrap.json /tmp
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/react
RUN cp -a /tmp/node_modules /usr/src/react

WORKDIR /
