#SageSure IQS-FE Project

#DEV ENV BUILD NOTES:

The IQS Front End projects like this one require a specific development
environment so that they may be tested locally while being in the same configuration
as a production environment. Follow the steps below to properly setup your IQS Front 
End project.

Development Computer Requirements:
PHPStorm IDE
Docker
Git
PHP, possibly WAMP

1.) Install PHP Storm

2.) Install the latest Docker for your platform:
https://www.docker.com/products/overview

3.) Install Git
https://git-scm.com/downloads

4.) Clone the desired IQS-FE project from GitHub
You can do this directly using git command line or git GUI. You can also
use the PHP Storm integrated Git feature to pull the project. See here:
https://www.jetbrains.com/help/phpstorm/2016.3/using-git-integration.html

#Getting Phing & VersionControl_Git working in your Dev Environment. 
In order to properly build IQS and IQS FE projects you'll need to use Phing. 
Phing is a build tool similar to Ant. It uses PHP to run. 

1.) Install PHP (if not already installed)

On a Windows PC 

We typically install WAMP. This will install PHP for you and place the PHP.exe in where the WAMP installation is located. You'll point PHPStorm to this PHP.exe as your PHP CLI Interpreter at:
File -> Settings -> Language & Frameworks -> PHP (CLI Interpreter)

On a Mac
http://php.net/manual/en/install.macosx.bundled.php

1.) Install the latest version of Phing:
https://www.phing.info/

2.) Point PHPStorm to the latest Phing.phar as installed in step 4. You can find the setting to point PHPStorm to Phing at:
File -> Settings -> Language & Frameworks -> PHP -> Phing
Note: PHPStorm can actually install Phing from this interface, but sometimes it fails, especially on Mac.

#Launching the Project with Docker
All required software and modules should be installed at this point. Docker should be installed
 and running. To launch the IQS FE for testing, execute the following commands:
 
 1.) Browse via command line (terminal on Mac, Powershell on Windows) to the 
 dev_materials/docker_scripts/ohs_docker folder
 
 2.) Run the command "docker-compose up" to launch the docker container and make the IQS FE application
 available for testing. In some cases a special docker yml configuraiton file may be required. If a
 special file is necessary you will use the command "docker-compose -f <special yml file> up".
 
 3.) Right click on the docker service and launch Kitematic. Kitematic will give you the ability to launch a 
 browser which will open to the index of the IQS FE project.


#Committing to Git
-Because we use Phing to build the final files, always do an "add" in case new files
were generated. Steps should be:

1.) Git Add
2.) Git Commit
3.) Git Push


#Sample URL's
AL:
444 rabbit road
Alexander City, AL 35010
http://localhost:8080/propertyquote.html?zipcode=35010
https://fnic-iqs-fe.dev-int.icg360.net/quotes/propertyquote.html?zipcode=35010

LA:
1512 Lakeshore Blvd
Slidell, LA 70461
http://localhost:8080/propertyquote.html?zipcode=70461
https://fnic-iqs-fe.dev-int.icg360.net/quotes/propertyquote.html?zipcode=70461


#Configuring the Phing build script
#Production setup, files and structure

#TODOs
DC: TODO:
-Pixel tracking is not drawing it's values from config.js
-Google is complaining about the API key


#Running New React Version in Dev
-Do the Phing build before starting docker container
-Always run docker-compose build after Phing build
-Run docker-compose up
-Run command: docker exec FNIC npm run --prefix /usr/src/react build-dev

-Webpack will now be watching for changes to react components and rebuilding bundle.js into products/<state> folder
    -Webpack's watch ability to notice changes from the docker container seems to be very hit or miss. If you want to develop locally, you can do an 
    npm install in the dev_materials/fe_react folder on your local machine which will install the node_modules and allow you
    to run the npm scripts locally rather than in the docker container.