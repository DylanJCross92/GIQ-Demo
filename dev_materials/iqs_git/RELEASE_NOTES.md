v1.8.17
-Iqs Admin Configuration section is now dynamic form. Items can be added and removed from db.
-Property County is returned in validateAddress.

v1.8.16
-Update encryption
-Update import/export handling of block codes and zip codes in iqs admin
-Update updating of config data in iqs admin
-Update sql script for additional block code 214

v1.8.15
-FieldKeys and EZQuoteAddress updated for baths and fireplaces retrieved

v1.8.14
-PDF generation udpated replacement value to replacement cost

v1.8.13
-PDF generation bugfix (missing term names in array)

v1.8.12
-PDF generation bugfix (force value to int)

v1.8.11
-giq-84: updated the address objects to return the squarefootunderroof and constructionyear on address validation

v1.8.10
-update iqs_db.sql scripts for all known FE variants to include ezaddresses creds

v1.8.9
-add api method credentials override feature
-add api method credentials override manager to iqs-admin
-update iqs_db_update.sql scripts for all known FE variants to include ezaddresses creds

v1.8.8
-update to IQS validation code to accommodate FL
-update FEDNAT SQL scripts for new user
-update ezquoteapiaccessor with ezaddresses unique token (temp fix)

v1.8.7
-sql scripts now include default block codes for new db
-stormpath api keys updated; Curl for iqs-admin removed and replaced with IQS library calls
-Update prod environment to jessie from wheezy
-Fix for "/quotes/" folder in the URL (core update, effective for all IQS-FE projects)
-breakout of front end modules from IQS
-Support for EzQuote 2.1.1-100 (auth updates)
-IQS-Admin (config, zip code whitelist, block codes)
-Update QuotePdfGenerator.php to support 2% windhaildeductible