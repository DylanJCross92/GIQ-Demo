v.1.8.14-1
-refactor form to React

v.1.8.13
- add noindex and no cache headers

v.1.8.12
- auto fill baths
- fix diving board /slide recall
- step 3.3 recall quote enhancements


v1.8.11
-giq-98 DP3 block bypass fix
-autofill sq ft

v1.8.10
-updated to IQS v1.8.11

v1.8.9
-updated Google Analytic code
-removed GA Duplication
-Resolves initial quote looping on bad premium value
-Bundles with IQS v1.9.0 for EZQ 2.3.1 compat
-mixpanel cleaned up and configured for prod vs non-prod

v1.8.8
-removes earthquake from customizable quote page

v1.8.7
-update stormpath keys for dev
-update to IQS 1.8.4
-Update prod environment to jessie from wheezy
-Fix for "/quotes/" folder in the URL (core update, effective for all IQS-FE projects)
-breakout of FNIC from old GIQ project (see GIQ release notes for earlier changes)
-Support for EzQuote 2.1.1-100 (auth updates)
-Alabama
-Louisiana
-IQS-Admin (config, zip code whitelist, block codes)
-Updates branding for FNIC
-Removes HurricaneDeductible for FNIC Products
-Adds WindHailDeductible for FNIC Products
-Modifies WindHailDeductible Dropdown options for FNIC Products
-Updates PDF to remove HurricaneDeductible and add WindHailDeductible
-removed windhaildeductible from quotetemplate
-removed hurricanedeductible from quotetemplate 
-changed quote loss assessment dropdown to max $25k for AL & LA
-modify AL optioncoverageB to 200 (2%)