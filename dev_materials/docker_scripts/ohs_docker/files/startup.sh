#!/bin/bash -ex
cp /etc/resolv.conf.tmp /etc/resolv.conf
# Apache gets grumpy about PID files pre-existing
rm -f /var/run/apache2/apache2.pid
exec /usr/sbin/apache2ctl -D FOREGROUND 2>&1