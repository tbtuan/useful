# Main
* [Readme](./readme.md)
* [Command](./command.md)
* [Setup](#Index)
* [Shortcut](./shortcut.md)

Apache

Documentation
https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html

TLS 1.2/1.3 only (.conf inside "/sites-available")

```text 
LoadModule ssl_module modules/mod_ssl.so

<VirtualHost *:443>
    ServerName www.example.com
    DocumentRoot /var/www/html

    SSLEngine on
    SSLProtocol -all +TLSv1.2 +TLSv1.3
    SSLCertificateFile /etc/letsencrypt/live/example.com/cert.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem
</VirtualHost>
```
